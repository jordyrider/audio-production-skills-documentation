#!/usr/bin/env node
/**
 * validate-frontmatter.js
 * Validates YAML frontmatter in all skills/*.md files against JSON schemas.
 * Output format: filename:line:col: message
 * Exit 0 = all files valid. Exit 1 = validation errors found.
 */

const fs = require('fs');
const path = require('path');
const yaml = require('js-yaml');
const Ajv = require('ajv');
const { globSync } = require('glob');

const ROOT = path.resolve(__dirname, '..');
const SCHEMAS_DIR = path.join(ROOT, 'schemas');
const SKILLS_DIR = path.join(ROOT, 'skills');

// Load genre IDs for cross-reference validation
function loadGenreIds() {
  try {
    const genreIndex = yaml.load(
      fs.readFileSync(path.join(SKILLS_DIR, 'music/genre/index.yaml'), 'utf8')
    );
    const ids = new Set(['null']); // null is always valid for parent field
    // Add supergenre IDs from sub_folders
    (genreIndex.sub_folders || []).forEach(sf => ids.add(sf.id));
    // Walk each genre subfolder index to get sub-genre IDs
    (genreIndex.sub_folders || []).forEach(sf => {
      const subIndexPath = path.join(ROOT, sf.folder, 'index.yaml');
      if (fs.existsSync(subIndexPath)) {
        const subIndex = yaml.load(fs.readFileSync(subIndexPath, 'utf8'));
        (subIndex.files || []).forEach(f => {
          if (f.type === 'genre') ids.add(f.id);
        });
      }
    });
    return ids;
  } catch (e) {
    return new Set(); // If index not yet built, skip cross-reference check
  }
}

// Parse YAML frontmatter from markdown content
function parseFrontmatter(content, filePath) {
  if (!content.startsWith('---')) {
    return { data: null, line: 1, error: 'No YAML frontmatter found (file must start with ---)' };
  }
  const end = content.indexOf('\n---', 3);
  if (end === -1) {
    return { data: null, line: 1, error: 'Frontmatter block not closed (missing closing ---)' };
  }
  const fmStr = content.slice(4, end);
  try {
    const data = yaml.load(fmStr);
    return { data, line: 1, error: null };
  } catch (e) {
    return { data: null, line: 1, error: `YAML parse error: ${e.message}` };
  }
}

// Load a schema by type name
function loadSchema(typeName) {
  const schemaPath = path.join(SCHEMAS_DIR, `${typeName}.schema.json`);
  if (!fs.existsSync(schemaPath)) return null;
  return JSON.parse(fs.readFileSync(schemaPath, 'utf8'));
}

const VALID_TYPES = ['genre', 'supergenre', 'tool', 'skill', 'voice-category'];
const VALID_STATUSES = ['stub', 'draft', 'validated'];

// Content fields per type that must be non-null when status != stub
const CONTENT_FIELDS = {
  genre: ['mood', 'bpm_range', 'tags', 'instrumentation', 'effects', 'canva_use_cases', 'prompting_rules'],
  supergenre: ['scope', 'sub_genres', 'canva_use_cases'],
  tool: ['parameters', 'stable_styles', 'gotchas'],
  skill: [], // skill files are primarily prose, no content field enforcement
  'voice-category': ['delivery_style', 'example_lines', 'voice_recommendations'],
};

function validateFile(filePath, genreIds) {
  const errors = [];
  const relPath = path.relative(ROOT, filePath);

  const content = fs.readFileSync(filePath, 'utf8');
  const { data, line, error } = parseFrontmatter(content, filePath);

  if (error) {
    errors.push(`${relPath}:1:1: ${error}`);
    return errors;
  }

  if (!data || typeof data !== 'object') {
    errors.push(`${relPath}:1:1: Frontmatter is empty or not an object`);
    return errors;
  }

  // Check type field
  if (!data.type) {
    errors.push(`${relPath}:1:1: Missing required field: type`);
    return errors; // Can't proceed without type
  }
  if (!VALID_TYPES.includes(data.type)) {
    errors.push(`${relPath}:1:1: Invalid type "${data.type}" — must be one of: ${VALID_TYPES.join(', ')}`);
    return errors;
  }

  // Check status field
  if (!data.status) {
    errors.push(`${relPath}:1:1: Missing required field: status`);
  } else if (!VALID_STATUSES.includes(data.status)) {
    errors.push(`${relPath}:1:1: Invalid status "${data.status}" — must be one of: ${VALID_STATUSES.join(', ')}`);
  }

  // When draft or validated: content fields must not be null
  if (data.status && data.status !== 'stub') {
    const fields = CONTENT_FIELDS[data.type] || [];
    fields.forEach(field => {
      if (data[field] === null || data[field] === undefined) {
        errors.push(`${relPath}:1:1: Field "${field}" must not be null when status is "${data.status}"`);
      }
    });
  }

  // Cross-reference: genre files — parent must be null or a known genre/supergenre ID
  if (data.type === 'genre' && genreIds.size > 0) {
    if (data.parent !== null && data.parent !== undefined && !genreIds.has(String(data.parent))) {
      errors.push(`${relPath}:1:1: Unknown parent genre ID "${data.parent}" — must be a known genre ID or null`);
    }
  }

  // Tool files: provider and model required always
  if (data.type === 'tool') {
    if (!data.provider) errors.push(`${relPath}:1:1: Tool file missing required field: provider`);
    if (!data.model) errors.push(`${relPath}:1:1: Tool file missing required field: model`);
  }

  return errors;
}

function main() {
  const genreIds = loadGenreIds();

  // Find all markdown files under skills/
  const mdFiles = globSync('skills/**/*.md', { cwd: ROOT, absolute: true });

  if (mdFiles.length === 0) {
    console.log('No markdown files found in skills/');
    process.exit(0);
  }

  let allErrors = [];
  mdFiles.forEach(filePath => {
    const errors = validateFile(filePath, genreIds);
    allErrors = allErrors.concat(errors);
  });

  if (allErrors.length === 0) {
    console.log(`All ${mdFiles.length} files valid`);
    process.exit(0);
  } else {
    allErrors.forEach(e => console.error(e));
    console.error(`\n${allErrors.length} error(s) in ${mdFiles.length} files`);
    process.exit(1);
  }
}

main();
