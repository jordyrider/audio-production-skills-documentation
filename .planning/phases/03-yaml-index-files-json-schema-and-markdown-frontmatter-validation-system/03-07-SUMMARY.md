---
phase: 03-yaml-index-files-json-schema-and-markdown-frontmatter-validation-system
plan: "07"
subsystem: validation
tags: [node, js-yaml, ajv, glob, vscode, yaml-schema]

# Dependency graph
requires:
  - phase: 03-01
    provides: JSON schemas for genre, supergenre, tool, skill, voice-category types
  - phase: 03-03
    provides: genre index.yaml with authoritative genre ID registry
  - phase: 03-04
    provides: markdown frontmatter added to all template files
  - phase: 03-05
    provides: markdown frontmatter added to all content files
  - phase: 03-06
    provides: all YAML index files created across skills hierarchy
provides:
  - Node CLI (scripts/validate-frontmatter.js) that validates all skills/*.md frontmatter and exits 0 on success
  - VS Code YAML schema associations for index.yaml inline squiggles via Red Hat YAML extension
  - VS Code task (Validate Frontmatter) with problemMatcher routing errors to Problems panel
affects:
  - future-content-additions
  - skills-maintenance

# Tech tracking
tech-stack:
  added: [ajv, glob, vscode-tasks]
  patterns: [cli-validator-with-problem-matcher, yaml-schema-association]

key-files:
  created:
    - scripts/validate-frontmatter.js
    - .vscode/settings.json
    - .vscode/tasks.json
  modified:
    - package.json
    - skills/templates/tool.md

key-decisions:
  - "templates/tool.md provider/model set to placeholder strings (not null) — tool schema requires these as identity fields, never null, even in templates"

patterns-established:
  - "Validator pattern: Node CLI using globSync + js-yaml + custom rule checks, exits 0/1 with filename:line:col format"
  - "VS Code problemMatcher pattern: regexp ^(.+):(\\d+):(\\d+):\\s+(.+)$ maps to file/line/col/message"
  - "Stub exception pattern: content fields may be null when status=stub, must be non-null for draft/validated"

requirements-completed: [YAML-09, YAML-10]

# Metrics
duration: 14min
completed: 2026-03-04
---

# Phase 3 Plan 07: CLI Validator and VS Code Integration Summary

**Node CLI validator (scripts/validate-frontmatter.js) validates all 39 skills/*.md frontmatter files with VS Code task integration routing errors to Problems panel**

## Performance

- **Duration:** 14 min
- **Started:** 2026-03-03T23:10:26Z
- **Completed:** 2026-03-03T23:24:27Z
- **Tasks:** 2
- **Files modified:** 5

## Accomplishments

- CLI validator validates type, status, enum values, stub exception rule, cross-references, and tool identity fields across all 39 markdown files
- VS Code YAML extension gets inline squiggles on index.yaml files via schema associations in settings.json
- VS Code Tasks panel has Validate Frontmatter task with problemMatcher — errors from CLI script appear in Problems panel
- All 39 files pass validation (exit 0) confirming frontmatter from Plans 03-04/03-05 is schema-compliant

## Task Commits

Each task was committed atomically:

1. **Task 1: Create scripts/validate-frontmatter.js** - `17cb402` (feat)
2. **Task 2: Create .vscode/settings.json and .vscode/tasks.json** - `f53f146` (feat)

**Plan metadata:** `[docs commit]` (docs: complete plan)

## Files Created/Modified

- `scripts/validate-frontmatter.js` - Node CLI validator: parses frontmatter, enforces validation rules, outputs filename:line:col errors, exits 0/1
- `.vscode/settings.json` - YAML schema associations: index.yaml files → index.schema.json for Red Hat YAML extension squiggles
- `.vscode/tasks.json` - VS Code task: Validate Frontmatter with problemMatcher extracting filename:line:col from CLI output
- `package.json` - Added ajv and glob as devDependencies
- `skills/templates/tool.md` - Fixed: provider/model set to placeholder strings per tool identity-field rule

## Decisions Made

- templates/tool.md provider and model set to placeholder strings ("{provider-name}", "{model-name}") rather than null — the plan decision states tool files require provider and model always as identity fields; null values would fail validation and the template must demonstrate valid structure

## Deviations from Plan

### Auto-fixed Issues

**1. [Rule 2 - Missing Critical] templates/tool.md provider/model null values fail validation**
- **Found during:** Task 1 (running validator after script creation)
- **Issue:** templates/tool.md had `provider: null` and `model: null` — tool schema requires these fields always (not stub-excepted per Phase 03-01 decision); validator correctly flagged 2 errors
- **Fix:** Set provider and model to placeholder strings "{provider-name}" and "{model-name}" — template still communicates required fields while passing validation
- **Files modified:** skills/templates/tool.md
- **Verification:** node scripts/validate-frontmatter.js exits 0 with "All 39 files valid"
- **Committed in:** 17cb402 (Task 1 commit)

---

**Total deviations:** 1 auto-fixed (1 missing critical — template correctness)
**Impact on plan:** Auto-fix ensures the success criterion "exit 0 on all files valid" is met. No scope creep.

## Issues Encountered

None — validation system wired up cleanly. The only issue was the template file needing placeholder values instead of null for required identity fields.

## User Setup Required

None — no external service configuration required.

## Next Phase Readiness

- Complete validation system operational: CLI validator + VS Code integration
- All Phase 3 plans complete — the full YAML index, JSON schema, and frontmatter validation system is in place
- Future content additions: run `node scripts/validate-frontmatter.js` after editing any skills/*.md file to confirm frontmatter compliance
- VS Code users: install Red Hat YAML extension for inline index.yaml squiggles; run Validate Frontmatter task from Command Palette for Problems panel integration

---
*Phase: 03-yaml-index-files-json-schema-and-markdown-frontmatter-validation-system*
*Completed: 2026-03-04*
