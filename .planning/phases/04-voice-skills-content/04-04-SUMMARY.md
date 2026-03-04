---
phase: 04-voice-skills-content
plan: "04"
subsystem: voice-tools
tags: [minimax, speech, tts, voice, parameters]

# Dependency graph
requires: []
provides:
  - "speech-02-hd.md: complete reference file for all MiniMax speech parameters"
  - "speech-02-turbo.md: HD vs Turbo trade-off documented"
  - "speech-2.6-hd.md: Filipino, Tamil, Persian language additions"
  - "speech-2.6-turbo.md: 2.6 language additions + Turbo latency notes"
  - "speech-2.8-hd.md: full tone tag section with all 7 tags and combination examples"
  - "speech-2.8-turbo.md: identical to 2.8-hd, adds HD vs Turbo trade-off"
affects: [system-prompt, voice-category-content, minimax-index]

# Tech tracking
tech-stack:
  added: []
  patterns:
    - "Reference file pattern: speech-02-hd.md is the base; generation files note only their differences"
    - "stable_styles: [] for speech models (empty array, not null, to pass schema validation)"
    - "Tone tag syntax: (tag) inline in text — distinct from model-wide emotion param"

key-files:
  created: []
  modified:
    - skills/tools/minimax/speech-02-hd.md
    - skills/tools/minimax/speech-02-turbo.md
    - skills/tools/minimax/speech-2.6-hd.md
    - skills/tools/minimax/speech-2.6-turbo.md
    - skills/tools/minimax/speech-2.8-hd.md
    - skills/tools/minimax/speech-2.8-turbo.md

key-decisions:
  - "stable_styles set to [] (not null) for speech models — validator enforces non-null for draft status; empty array correctly signals no music style concept applies"
  - "speech-02-hd.md is the canonical reference — generation files reference it and state only their differences"
  - "Tone tags (2.8) documented as phrase-level (inline in text), explicitly contrasted with emotion param (model-wide)"

patterns-established:
  - "Reference-plus-delta pattern: full param set in one file, all others reference it and note only what changed"
  - "Pause syntax documented in the reference file; generation files note it works the same"

requirements-completed: [D3]

# Metrics
duration: 3min
completed: 2026-03-04
---

# Phase 4 Plan 04: MiniMax Speech Model Files Summary

**6 MiniMax speech stub files promoted to draft — full parameter set in speech-02-hd.md (reference), generation-specific differences in each of the 5 remaining files, with tone tag syntax documented in both 2.8 files**

## Performance

- **Duration:** ~3 min
- **Started:** 2026-03-04T02:00:38Z
- **Completed:** 2026-03-04T02:03:28Z
- **Tasks:** 2
- **Files modified:** 6

## Accomplishments

- speech-02-hd.md filled as complete reference file: all 4 parameters (speed, vol, pitch, emotion) with ranges, defaults, and prose guidance; pause syntax section with inline examples; expanded gotchas
- speech-2.6 files document Filipino, Tamil, Persian language additions; all other behaviour identical to 02 generation
- speech-2.8 files document inline tone tag syntax: 7 available tags, distinction from model-wide emotion param, combination examples with pause markers and emotion
- All 6 files pass schema validation (42 total files valid)

## Task Commits

Each task was committed atomically:

1. **Task 1: Fill speech-02-hd.md as the reference file** - `5192f66` (feat)
2. **Task 2: Fill remaining 5 speech model files** - `138f0a0` (feat)

## Files Created/Modified

- `skills/tools/minimax/speech-02-hd.md` - Reference file: full parameter set, pause syntax, prompt formula, gotchas
- `skills/tools/minimax/speech-02-turbo.md` - HD vs Turbo trade-off; references speech-02-hd.md for base params
- `skills/tools/minimax/speech-2.6-hd.md` - Adds Filipino, Tamil, Persian; otherwise identical to 02
- `skills/tools/minimax/speech-2.6-turbo.md` - Combines 2.6 language additions and Turbo latency notes
- `skills/tools/minimax/speech-2.8-hd.md` - Tone tag section with all 7 tags, combination examples
- `skills/tools/minimax/speech-2.8-turbo.md` - Identical to 2.8-hd; adds HD vs Turbo trade-off

## Decisions Made

**stable_styles: [] for speech models.** The plan comment said `stable_styles can be null for speech models` but the validator enforces non-null for draft status (tool content fields: `['parameters', 'stable_styles', 'gotchas']`). Setting `stable_styles: []` correctly signals "no music style concept applies" and passes validation. This is correct — empty array is semantically accurate.

**Reference-plus-delta structure.** speech-02-hd.md carries the complete parameter documentation. All other 5 files open with a pointer to that file and state only what differs for their generation or variant. This keeps information DRY and ensures Claude reads the canonical source first.

**Tone tags vs emotion clearly contrasted.** speech-2.8 files explicitly document that `emotion` is model-wide while tone tags are inline/phrase-level. This is the key thing Claude needs to understand to use the 2.8 model correctly.

## Deviations from Plan

### Auto-fixed Issues

**1. [Rule 1 - Bug] Set stable_styles to [] instead of null for draft status**
- **Found during:** Task 1 (speech-02-hd.md)
- **Issue:** Plan specified `stable_styles: null` but schema validator enforces non-null for all tool content fields when status is draft. Validation failed with `Field "stable_styles" must not be null when status is "draft"`.
- **Fix:** Changed `stable_styles: null` to `stable_styles: []` in all 6 files. Empty array correctly signals "no stable styles" for speech models.
- **Files modified:** All 6 speech model files
- **Verification:** `node scripts/validate-frontmatter.js skills/tools/minimax/` — all 42 files valid
- **Committed in:** 5192f66 (Task 1), 138f0a0 (Task 2)

---

**Total deviations:** 1 auto-fixed (Rule 1 - schema conformance)
**Impact on plan:** Fix required for schema validation to pass. Semantically correct — empty array is the right representation for "no music styles applicable". No scope creep.

## Issues Encountered

None beyond the stable_styles fix documented above.

## User Setup Required

None - no external service configuration required.

## Next Phase Readiness

- All 6 MiniMax speech model files at draft status, schema-validated
- speech-02-hd.md is the complete parameter reference; generation files are ready to be read as deltas
- 2.8 tone tag syntax documented with examples — Claude can generate tone-tagged scripts for speech-2.8-hd and speech-2.8-turbo
- Ready for system-prompt.md update to route to MiniMax speech models

---
*Phase: 04-voice-skills-content*
*Completed: 2026-03-04*

## Self-Check: PASSED

- FOUND: skills/tools/minimax/speech-02-hd.md
- FOUND: skills/tools/minimax/speech-02-turbo.md
- FOUND: skills/tools/minimax/speech-2.6-hd.md
- FOUND: skills/tools/minimax/speech-2.6-turbo.md
- FOUND: skills/tools/minimax/speech-2.8-hd.md
- FOUND: skills/tools/minimax/speech-2.8-turbo.md
- FOUND: .planning/phases/04-voice-skills-content/04-04-SUMMARY.md
- FOUND commit: 5192f66 (Task 1)
- FOUND commit: 138f0a0 (Task 2)
