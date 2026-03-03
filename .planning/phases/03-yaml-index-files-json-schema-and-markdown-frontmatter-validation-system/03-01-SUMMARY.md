---
phase: 03-yaml-index-files-json-schema-and-markdown-frontmatter-validation-system
plan: "01"
subsystem: schema
tags: [json-schema, draft-07, validation, frontmatter, yaml]

# Dependency graph
requires:
  - phase: 02-schema-and-content
    provides: "File type categories, status system (stub/draft/validated), genre/tool/voice content structure"
provides:
  - "schemas/genre.schema.json — 13-field genre frontmatter schema with stub exception"
  - "schemas/supergenre.schema.json — supergenre descriptor schema"
  - "schemas/tool.schema.json — tool model schema with provider, model, parameters, stable_styles, gotchas"
  - "schemas/skill.schema.json — minimal skill schema (type+status only, additionalProperties: true)"
  - "schemas/voice-category.schema.json — voice category schema with ElevenLabs settings"
  - "schemas/index.schema.json — per-folder YAML registry schema with stable id cross-reference field"
affects:
  - "03-02 (frontmatter authoring) — depends on these schemas to know field shapes"
  - "03-03 (YAML index files) — depends on index.schema.json for validation"
  - "03-04 (VS Code integration) — wires schemas to .vscode/settings.json"
  - "03-05 (CLI validator) — loads these schemas to validate all markdown frontmatter"

# Tech tracking
tech-stack:
  added: ["JSON Schema draft-07"]
  patterns:
    - "if/then/else stub exception: null/[] allowed when status:stub, non-null required when draft/validated"
    - "type const per schema (genre, supergenre, tool, skill, voice-category) for discriminated union"
    - "additionalProperties: false on content schemas; true on skill (prose-first files)"
    - "id field in index file entries as stable cross-reference key"

key-files:
  created:
    - schemas/genre.schema.json
    - schemas/supergenre.schema.json
    - schemas/tool.schema.json
    - schemas/skill.schema.json
    - schemas/voice-category.schema.json
    - schemas/index.schema.json
  modified: []

key-decisions:
  - "skill.schema.json uses additionalProperties: true — skill files are prose-first and may have ad-hoc fields"
  - "tool.schema.json requires provider and model always (not stub-excepted) — these are identity fields, never null"
  - "genre.schema.json requires parent always (even stub) — a missing parent is always a cross-reference error"
  - "index type enum is explicit (genre-index, music-index, etc.) — each folder type has distinct purpose"
  - "validated_patterns uses oneOf [array, null] pattern — array items enforce {prompt, output} object shape"

patterns-established:
  - "Stub exception pattern: if/then/else at schema root — else branch enforces minItems:1 and non-null on content fields"
  - "Type discriminator: each content schema uses const for its type value — enables fast type routing in validator"
  - "Cross-reference via id: index file entries carry a stable id string — CLI validator will resolve these against other indexes"

requirements-completed: [YAML-01, YAML-02]

# Metrics
duration: 2min
completed: 2026-03-03
---

# Phase 3 Plan 01: JSON Schema Definitions Summary

**Six JSON Schema draft-07 files defining frontmatter structure for all knowledge base file types, with stub exception (null/[] allowed when status:stub) and cross-reference id field in index entries.**

## Performance

- **Duration:** 2 min
- **Started:** 2026-03-03T04:54:37Z
- **Completed:** 2026-03-03T04:56:02Z
- **Tasks:** 2
- **Files modified:** 6

## Accomplishments

- Five content schemas created (genre, supergenre, tool, skill, voice-category) covering all file types in the knowledge base
- Stub exception encoded in four schemas via JSON Schema if/then/else — stub files can have null/[] content fields, draft/validated files must have populated values
- Index schema created with stable `id` field in file entries, enabling cross-reference validation between genre and tool indexes

## Task Commits

Each task was committed atomically:

1. **Task 1: Create schemas/ directory and content file schemas** - `ec47fec` (feat)
2. **Task 2: Create index.schema.json for YAML index files** - `81896d3` (feat)

**Plan metadata:** (docs commit — see below)

## Files Created/Modified

- `schemas/genre.schema.json` — Genre sub-genre schema: type, status, parent + 10 content fields; stub exception via if/then/else
- `schemas/supergenre.schema.json` — Super-genre descriptor schema: scope, sub_genres, canva_use_cases; stub exception
- `schemas/tool.schema.json` — Tool model schema: provider, model (always required), parameters, stable_styles, gotchas; stub exception on content fields
- `schemas/skill.schema.json` — Minimal skill schema: type + status only; additionalProperties: true (prose-first files)
- `schemas/voice-category.schema.json` — Voice category schema: delivery_style, example_lines, voice_recommendations, settings (ElevenLabs params); stub exception
- `schemas/index.schema.json` — Per-folder YAML registry schema: folder, type, files array with id/file/type/status per entry; optional sub_folders

## Decisions Made

- **skill.schema.json is additionalProperties: true** — skill files are primarily prose documents; the schema only validates that type and status are present, not all possible fields
- **tool.schema.json requires provider and model always** — these are identity fields (not content), making them null is never correct even for a stub
- **genre.schema.json requires parent always** — a missing parent is a structural error regardless of stub status, since cross-reference validation always runs
- **index type enum is explicit** — six distinct index types (genre-index, music-index, voice-index, tools-index, skills-index, subgenre-index) each serve a distinct purpose in the registry hierarchy
- **validated_patterns uses oneOf [array, null]** — this was needed because the items constraint only applies within an array type; oneOf cleanly handles the null-or-shaped-array case

## Deviations from Plan

None - plan executed exactly as written.

## Issues Encountered

None.

## User Setup Required

None - no external service configuration required.

## Next Phase Readiness

- All six schemas are in place and validated as parseable JSON
- 03-02 (frontmatter authoring) can use these schemas as reference for field names and types
- 03-03 (YAML index files) can associate index.schema.json via Red Hat YAML extension
- 03-05 (CLI validator) can load these schemas with Node's require() for frontmatter validation

## Self-Check: PASSED

All created files verified present on disk:
- schemas/genre.schema.json: FOUND
- schemas/supergenre.schema.json: FOUND
- schemas/tool.schema.json: FOUND
- schemas/skill.schema.json: FOUND
- schemas/voice-category.schema.json: FOUND
- schemas/index.schema.json: FOUND

All task commits verified in git log:
- ec47fec: FOUND (Task 1 — content schemas)
- 81896d3: FOUND (Task 2 — index schema)

---
*Phase: 03-yaml-index-files-json-schema-and-markdown-frontmatter-validation-system*
*Completed: 2026-03-03*
