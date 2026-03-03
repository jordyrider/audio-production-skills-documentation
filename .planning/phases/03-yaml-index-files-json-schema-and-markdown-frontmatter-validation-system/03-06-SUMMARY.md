---
phase: 03-yaml-index-files-json-schema-and-markdown-frontmatter-validation-system
plan: "06"
subsystem: schema
tags: [yaml, index, registry, cross-reference, tools, voice, minimax]

# Dependency graph
requires:
  - phase: 03-yaml-index-files-json-schema-and-markdown-frontmatter-validation-system
    plan: "02"
    provides: "skills/music/genre/index.yaml — authoritative genre ID registry with all 15 stable genre/supergenre IDs"
provides:
  - "skills/index.yaml — top-level skills registry with all 5 domain sub_folders"
  - "skills/music/index.yaml — music domain registry listing 5 skill files and genre subfolder"
  - "skills/voice/index.yaml — voice domain registry with characteristics.md and 5 voice category sub_folders"
  - "skills/tools/index.yaml — tools domain registry referencing minimax and elevenlabs sub_folders"
  - "skills/voice/hook-openers/index.yaml — voice category subfolder registry"
  - "skills/voice/cta-promo/index.yaml — voice category subfolder registry"
  - "skills/voice/meme-quotes/index.yaml — voice category subfolder registry"
  - "skills/voice/pov-relatable/index.yaml — voice category subfolder registry"
  - "skills/voice/instructional/index.yaml — voice category subfolder registry"
  - "skills/tools/minimax/index.yaml — MiniMax model registry with genre cross-references for music-2.5"
affects:
  - "03-04 (VS Code integration) — index.yaml files can now be wired to index.schema.json via yaml.schemas"
  - "03-05 (CLI validator) — can validate genre_ids in tools/minimax/index.yaml resolve against genre/index.yaml"

# Tech tracking
tech-stack:
  added: []
  patterns:
    - "Top-level domain index pattern: skills-index, music-index, voice-index, tools-index each list files and sub_folders"
    - "Voice subfolder index pattern: subgenre-index type, single file entry per voice category folder"
    - "Tool index cross-reference pattern: genre_ids array in tool file entries references authoritative IDs from genre/index.yaml"
    - "Comment block at top of tools/minimax/index.yaml documents genre_id source for traceability"

key-files:
  created:
    - skills/index.yaml
    - skills/music/index.yaml
    - skills/voice/index.yaml
    - skills/tools/index.yaml
    - skills/voice/hook-openers/index.yaml
    - skills/voice/cta-promo/index.yaml
    - skills/voice/meme-quotes/index.yaml
    - skills/voice/pov-relatable/index.yaml
    - skills/voice/instructional/index.yaml
    - skills/tools/minimax/index.yaml
  modified: []

key-decisions:
  - "Voice subfolder indexes use type subgenre-index — consistent with genre subfolder convention from 03-02, regardless of domain"
  - "tools/minimax/index.yaml has type tools-index (same as tools/index.yaml) — tool folders use the same type at all levels"
  - "Speech model entries in minimax/index.yaml omit genre_ids field — speech models are not music models, genre cross-reference is not applicable"

patterns-established:
  - "Domain index pattern: type follows {domain}-index naming (music-index, voice-index, tools-index, skills-index)"
  - "Leaf folder index pattern: subgenre-index type used for all leaf-level folder indexes regardless of domain (voice or genre)"
  - "Genre cross-reference pattern: genre_ids array in tool entries references IDs from authoritative genre/index.yaml"

requirements-completed: [YAML-08]

# Metrics
duration: 3min
completed: 2026-03-04
---

# Phase 3 Plan 06: Remaining YAML Index Files Summary

**Ten YAML index files completing the skills/ hierarchy registry — top-level entry point, domain indexes for music/voice/tools, five voice category subfolder indexes, and MiniMax tool index with genre cross-references linking all 10 stable music genre IDs.**

## Performance

- **Duration:** 3 min
- **Started:** 2026-03-03T22:53:02Z
- **Completed:** 2026-03-03T22:56:00Z
- **Tasks:** 2
- **Files modified:** 10

## Accomplishments

- Four domain-level indexes created (skills, music, voice, tools) completing the top-level and second-level registry hierarchy
- Five voice subfolder indexes created, each with a single voice-category file entry using the established subgenre-index type
- MiniMax tool index created with 7 model entries, music-2.5 entry cross-referencing all 10 stable genre IDs from genre/index.yaml

## Task Commits

Each task was committed atomically:

1. **Task 1: Create top-level and domain-level indexes (skills, music, voice, tools)** - `f085617` (feat)
2. **Task 2: Create voice subfolder indexes and MiniMax tool index** - `df4c0b3` (feat)

**Plan metadata:** (docs commit — see below)

## Files Created/Modified

- `skills/index.yaml` — Top-level skills registry: type skills-index, 1 file (system-prompt.md), 5 sub_folders (music, voice, tools, sfx, templates)
- `skills/music/index.yaml` — Music domain registry: type music-index, 5 skill files (effects, instruments, keys-and-mood, structure-and-arrangement, tempo), 1 sub_folder (genre)
- `skills/voice/index.yaml` — Voice domain registry: type voice-index, 1 file (characteristics.md), 5 voice category sub_folders
- `skills/tools/index.yaml` — Tools domain registry: type tools-index, 0 direct files, 2 sub_folders (minimax, elevenlabs)
- `skills/voice/hook-openers/index.yaml` — subgenre-index: single hook-openers.md voice-category entry
- `skills/voice/cta-promo/index.yaml` — subgenre-index: single cta-promo.md voice-category entry
- `skills/voice/meme-quotes/index.yaml` — subgenre-index: single meme-quotes.md voice-category entry
- `skills/voice/pov-relatable/index.yaml` — subgenre-index: single pov-relatable.md voice-category entry
- `skills/voice/instructional/index.yaml` — subgenre-index: single instructional.md voice-category entry
- `skills/tools/minimax/index.yaml` — MiniMax model registry: type tools-index, 7 model entries, music-2.5 has 10 genre_ids cross-referencing genre/index.yaml

## Decisions Made

- **Voice subfolder indexes use type subgenre-index** — consistent with genre subfolder convention from 03-02; the subgenre-index type signals a leaf-level folder registry regardless of domain
- **Speech model entries omit genre_ids field** — speech models are not music models; genre cross-reference is not applicable and omitting the field (rather than empty array) signals intentional non-applicability
- **tools/minimax/index.yaml has type tools-index** — consistent with tools/index.yaml; tool folders use the same type at all hierarchy levels

## Deviations from Plan

None - plan executed exactly as written.

## Issues Encountered

None.

## User Setup Required

None - no external service configuration required.

## Next Phase Readiness

- All 10 YAML index files created and validated with js-yaml
- skills/index.yaml is the complete entry point to the hierarchy — all 5 domain folders registered
- skills/tools/minimax/index.yaml cross-references genre IDs from genre/index.yaml in music-2.5 entry
- Combined with 03-02 genre indexes: the full skills/ index hierarchy is now complete across all folders
- 03-04 VS Code integration can wire index.schema.json to all index.yaml files via yaml.schemas
- 03-05 CLI validator can cross-validate genre_ids in tool indexes against authoritative genre registry

## Self-Check: PASSED

All 10 YAML index files verified present on disk and validated via js-yaml:
- skills/index.yaml: FOUND (type: skills-index, files: 1, sub_folders: 5)
- skills/music/index.yaml: FOUND (type: music-index, files: 5, sub_folders: 1)
- skills/voice/index.yaml: FOUND (type: voice-index, files: 1, sub_folders: 5)
- skills/tools/index.yaml: FOUND (type: tools-index, files: 0, sub_folders: 2)
- skills/voice/hook-openers/index.yaml: FOUND (type: subgenre-index, files: 1)
- skills/voice/cta-promo/index.yaml: FOUND (type: subgenre-index, files: 1)
- skills/voice/meme-quotes/index.yaml: FOUND (type: subgenre-index, files: 1)
- skills/voice/pov-relatable/index.yaml: FOUND (type: subgenre-index, files: 1)
- skills/voice/instructional/index.yaml: FOUND (type: subgenre-index, files: 1)
- skills/tools/minimax/index.yaml: FOUND (type: tools-index, files: 7, music-2.5 genre_ids: 10)

Task commits verified:
- f085617: FOUND (Task 1 — top-level and domain-level indexes)
- df4c0b3: FOUND (Task 2 — voice subfolder and MiniMax indexes)

---
*Phase: 03-yaml-index-files-json-schema-and-markdown-frontmatter-validation-system*
*Completed: 2026-03-04*
