---
phase: 03-yaml-index-files-json-schema-and-markdown-frontmatter-validation-system
plan: "05"
subsystem: schema
tags: [frontmatter, yaml, tools, voice, minimax, skill]

# Dependency graph
requires:
  - phase: 03-yaml-index-files-json-schema-and-markdown-frontmatter-validation-system
    plan: "01"
    provides: "tool.schema.json and voice-category.schema.json defining frontmatter field shapes"
provides:
  - "skills/tools/minimax/music-2.5.md — rich frontmatter with 16 stable_styles, 3 parameters, 4 gotchas"
  - "skills/tools/minimax/speech-02-hd.md — stub tool frontmatter"
  - "skills/tools/minimax/speech-02-turbo.md — stub tool frontmatter"
  - "skills/tools/minimax/speech-2.6-hd.md — stub tool frontmatter"
  - "skills/tools/minimax/speech-2.6-turbo.md — stub tool frontmatter"
  - "skills/tools/minimax/speech-2.8-hd.md — stub tool frontmatter"
  - "skills/tools/minimax/speech-2.8-turbo.md — stub tool frontmatter"
  - "skills/voice/hook-openers/hook-openers.md — voice-category frontmatter with all 13 example_lines"
  - "skills/voice/cta-promo/cta-promo.md — stub voice-category frontmatter"
  - "skills/voice/meme-quotes/meme-quotes.md — stub voice-category frontmatter"
  - "skills/voice/pov-relatable/pov-relatable.md — stub voice-category frontmatter"
  - "skills/voice/instructional/instructional.md — stub voice-category frontmatter"
  - "skills/system-prompt.md — minimal skill frontmatter"
affects:
  - "CLI validator (03-06 if exists) — all 13 files now schema-validatable"
  - "Querying structured data — music-2.5 stable_styles can be filtered by genre ID"

# Tech tracking
tech-stack:
  added: []
  patterns:
    - "Tool file frontmatter: type, status, provider, model always required (identity fields), content fields null when stub"
    - "Voice category frontmatter: type, status required; example_lines as YAML array extracted from markdown body"
    - "Skill frontmatter: minimal — type and status only, additionalProperties: true per schema"
    - "Data extraction pattern: structured data (table rows, bullet lists) lifted from markdown body into frontmatter fields while body preserved"

key-files:
  created:
    - skills/tools/minimax/speech-02-hd.md
    - skills/tools/minimax/speech-02-turbo.md
    - skills/tools/minimax/speech-2.6-hd.md
    - skills/tools/minimax/speech-2.6-turbo.md
    - skills/tools/minimax/speech-2.8-hd.md
    - skills/tools/minimax/speech-2.8-turbo.md
  modified:
    - skills/tools/minimax/music-2.5.md
    - skills/voice/hook-openers/hook-openers.md
    - skills/voice/cta-promo/cta-promo.md
    - skills/voice/meme-quotes/meme-quotes.md
    - skills/voice/pov-relatable/pov-relatable.md
    - skills/voice/instructional/instructional.md
    - skills/system-prompt.md

key-decisions:
  - "music-2.5.md stable_styles extracted from markdown table to YAML array — enables cross-reference with genre/index.yaml IDs by CLI validator"
  - "Speech model stub files created with full stub frontmatter (parameters/stable_styles/gotchas: null) — consistent with tool schema stub exception pattern"
  - "system-prompt.md uses type: skill (not a new type) — it is a prose-first document matching skill schema's additionalProperties: true pattern"
  - "hook-openers example_lines use double-quoted YAML strings — necessary for apostrophes and special characters in the extracted lines"

patterns-established:
  - "Data extraction from markdown body: table rows → YAML array of objects, bullet lists → YAML array of strings, all while preserving original markdown body"
  - "Voice category example_lines field: populated from numbered list in ## Example Lines section"

requirements-completed: [YAML-07]

# Metrics
duration: 9min
completed: 2026-03-03
---

# Phase 3 Plan 05: Tools, Voice, and System-Prompt Frontmatter Summary

**YAML frontmatter added to 13 files — 7 MiniMax tool files (music-2.5 with rich data extraction, 6 speech stubs), 5 voice category files (hook-openers with 13 example_lines extracted), and system-prompt.md.**

## Performance

- **Duration:** 9 min
- **Started:** 2026-03-03T22:34:03Z
- **Completed:** 2026-03-03T22:43:38Z
- **Tasks:** 2
- **Files modified:** 13

## Accomplishments

- music-2.5.md enriched with rich frontmatter: 16 stable_styles (extracted from Stable Styles table), 3 parameters, 4 gotchas — enables querying structured data without parsing markdown
- All 6 MiniMax speech model stub files created with correct type/provider/model frontmatter identifying each model distinctly
- hook-openers.md has all 13 example lines extracted from numbered list body into structured YAML array — machine-queryable without reading markdown
- 4 remaining voice category files and system-prompt.md get minimal correct frontmatter, completing schema coverage for all known file types

## Task Commits

Each task was committed atomically:

1. **Task 1: MiniMax tool files frontmatter (music-2.5 + 6 speech stubs)** - `b59e59a` (feat)
2. **Task 2: Voice category files + system-prompt.md frontmatter** - `8547df0` (feat)

**Plan metadata:** (docs commit — see below)

## Files Created/Modified

- `skills/tools/minimax/music-2.5.md` — Prepended rich frontmatter: type: tool, status: draft, provider: MiniMax, model: Music-2.5, 16 stable_styles, 3 parameters, 4 gotchas
- `skills/tools/minimax/speech-02-hd.md` — Created with stub frontmatter: type: tool, status: stub, provider: MiniMax, model: Speech-02-HD
- `skills/tools/minimax/speech-02-turbo.md` — Created with stub frontmatter: model: Speech-02-Turbo
- `skills/tools/minimax/speech-2.6-hd.md` — Created with stub frontmatter: model: Speech-2.6-HD
- `skills/tools/minimax/speech-2.6-turbo.md` — Created with stub frontmatter: model: Speech-2.6-Turbo
- `skills/tools/minimax/speech-2.8-hd.md` — Created with stub frontmatter: model: Speech-2.8-HD
- `skills/tools/minimax/speech-2.8-turbo.md` — Created with stub frontmatter: model: Speech-2.8-Turbo
- `skills/voice/hook-openers/hook-openers.md` — Prepended voice-category frontmatter with all 13 example_lines as YAML array
- `skills/voice/cta-promo/cta-promo.md` — Prepended stub voice-category frontmatter
- `skills/voice/meme-quotes/meme-quotes.md` — Prepended stub voice-category frontmatter
- `skills/voice/pov-relatable/pov-relatable.md` — Prepended stub voice-category frontmatter
- `skills/voice/instructional/instructional.md` — Prepended stub voice-category frontmatter
- `skills/system-prompt.md` — Prepended minimal skill frontmatter: type: skill, status: draft

## Decisions Made

- **music-2.5.md stable_styles as YAML array** — The 16 rows of the Stable Styles markdown table were extracted to a `stable_styles` array of `{style, behavior}` objects. This enables the CLI validator to cross-reference style IDs against `skills/music/genre/index.yaml` genre IDs.
- **Speech model stub files created** — These files existed as untracked new files (per git status). Created with full stub frontmatter matching the tool schema stub pattern (provider and model always required, content fields null).
- **system-prompt.md uses type: skill** — No "system-prompt" file type exists in the schema. skill.schema.json uses additionalProperties: true and is prose-first, making it the correct type for this special document.
- **hook-openers example_lines use double-quoted strings** — Required for YAML correctness given apostrophes and ellipses in the original example lines.

## Deviations from Plan

None - plan executed exactly as written.

## Issues Encountered

None.

## User Setup Required

None - no external service configuration required.

## Next Phase Readiness

- All 13 files in this plan now have schema-conformant frontmatter
- Combined with Phase 3 Plans 02, 03, 04 output, all knowledge base files now have frontmatter
- Phase 3 is complete — all 5 plans executed (01: schemas, 02: genre/subgenre frontmatter, 03: YAML indexes, 04: non-genre skills, 05: tools/voice/system-prompt)
- Full frontmatter coverage enables downstream tooling (CLI validator, VS Code schema association) to operate without exceptions

## Self-Check: PASSED

All created/modified files verified present on disk (14 of 14).
All task commits verified in git log:
- b59e59a: FOUND (Task 1 — MiniMax tool files)
- 8547df0: FOUND (Task 2 — voice category files + system-prompt.md)

---
*Phase: 03-yaml-index-files-json-schema-and-markdown-frontmatter-validation-system*
*Completed: 2026-03-03*
