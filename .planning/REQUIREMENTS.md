# Requirements: Audio Production Skills Documentation

**Defined:** 2026-03-03
**Core Value:** Claude has enough structured, validated knowledge to generate precise, tool-ready prompts from a creative brief without guessing.

## v1 Requirements

### Scaffolding

- [ ] **SCAF-01**: Create `skills/` directory at project root
- [ ] **SCAF-02**: Create `skills/templates/` with genre.md, tool.md, voice-category.md, skill.md
- [ ] **SCAF-03**: Create `skills/music/` with keys-and-mood.md, tempo.md, arrangement.md, structure.md
- [ ] **SCAF-04**: Create `skills/music/genre/` with subdirectories: lo-fi/, pop/, funk/, corporate/, indie/ (indie.md, retro.md, synthwave.md), cinematic/ (cinematic.md, piano.md), utility/
- [ ] **SCAF-05**: Create `skills/voice/` with characteristics.md and subdirectories: cta-promo/, meme-quotes/, pov-relatable/, instructional/, hook-openers/
- [ ] **SCAF-06**: Create `skills/sfx/` with taxonomy.md
- [ ] **SCAF-07**: Create `skills/tools/` with minimax.md and elevenlabs.md
- [ ] **SCAF-08**: Create `skills/system-prompt.md`

### File Standards

- [ ] **FILE-01**: Every file has `# Title`, `## Purpose`, `## Status: stub`, and relevant placeholder section headers — no filled content beyond headers
- [x] **FILE-02**: Genre files use genre.md template schema (Parent Genre, Canva Use Cases, Sonic DNA, Prompting Patterns, MiniMax, Validated Patterns, Known Limitations, Still Testing)
- [x] **FILE-03**: Voice category files use voice-category.md template schema (Purpose, Delivery Style, Example Lines, ElevenLabs sections)
- [x] **FILE-04**: Tool files use tool.md template schema (Prompt Formula, Parameters, Stable Keywords, Gotchas, Output Format, Validated Patterns, Known Limitations)
- [x] **FILE-05**: Domain skill files (keys-and-mood, tempo, arrangement, structure, sfx/taxonomy, voice/characteristics) use skill.md template schema (Purpose, Sub-skills, Core Concepts, Translation Layer)

### Pre-populated Content

- [x] **CONT-01**: `tools/minimax.md` pre-populated with full draft content: Prompt Formula, Parameters (BPM, Mode, Structure labels), Stable Keywords, Gotchas (BPM ±10, 1-min cap, humming caveat, project-specific rules), Output Format block, stub Validated/Limitations sections
- [x] **CONT-02**: `tools/elevenlabs.md` pre-populated with stub content: Purpose, Tonal Variants, stub Parameters/Keywords/Gotchas/Output Format sections
- [x] **CONT-03**: `voice/hook-openers/hook-openers.md` includes all 13 specified example lines under `## Example Lines`

### Templates

- [x] **TMPL-01**: `skills/templates/genre.md` contains the genre.md schema as a reference template
- [x] **TMPL-02**: `skills/templates/tool.md` contains the tool.md schema as a reference template
- [x] **TMPL-03**: `skills/templates/voice-category.md` contains the voice-category.md schema as a reference template
- [x] **TMPL-04**: `skills/templates/skill.md` contains the skill.md schema as a reference template

### System Prompt

- [x] **SYS-01**: `skills/system-prompt.md` is a written master Claude system prompt that provides full audio prompting workflow context for use in the Electron app

### Output

- [x] **OUT-01**: Print complete file tree of all created files with their status after scaffolding completes

## v2 Requirements

### Content Population

- **V2-01**: Populate genre files with real Sonic DNA and validated MiniMax prompting patterns
- **V2-02**: Populate ElevenLabs tool file with validated parameters and prompting patterns
- **V2-03**: Populate voice category files with ElevenLabs-specific guidance and additional example lines
- **V2-04**: Populate keys-and-mood, tempo, arrangement, structure skills with core concepts

## Phase 3 Requirements

### YAML Index Files, JSON Schema, and Markdown Frontmatter Validation System

- [x] **YAML-01**: Create `schemas/genre.schema.json` — JSON schema for genre sub-genre files with all 13 frontmatter fields and stub exception
- [x] **YAML-02**: Create `schemas/supergenre.schema.json`, `schemas/tool.schema.json`, `schemas/skill.schema.json`, `schemas/voice-category.schema.json`, `schemas/index.schema.json` — complete set of 6 JSON schemas
- [x] **YAML-03**: Create `skills/music/genre/index.yaml` — authoritative genre ID registry, listing all genre IDs referenced by tool files
- [x] **YAML-04**: Create per-subfolder `index.yaml` files for all 7 genre subfolders (alt-indie, cinematic, corporate, downtempo, pop, rnb, utility)
- [x] **YAML-05**: Add YAML frontmatter to all 10 genre sub-genre markdown files (type: genre with all 13 fields, correct parent IDs, null content for stubs)
- [x] **YAML-06**: Add YAML frontmatter to supergenre files (3), domain skill files (7), template files (5), and genre/taxonomy.md (1) — 16 files total
- [x] **YAML-07**: Add YAML frontmatter to tool files (7 MiniMax), voice category files (5), and system-prompt.md — 13 files total; extract music-2.5.md structured data to frontmatter
- [x] **YAML-08**: Create all remaining YAML index files: skills/, music/, voice/, tools/ domain indexes and voice/tool subfolder indexes — 10 files total
- [ ] **YAML-09**: Create `scripts/validate-frontmatter.js` — Node CLI that validates all skills/*.md frontmatter, outputs errors in `filename:line:col: message` format, exits 1 on any error
- [ ] **YAML-10**: Create `.vscode/settings.json` (YAML schema associations for index.yaml files) and `.vscode/tasks.json` (Validate Frontmatter task with problem matcher routing errors to Problems panel)

## Out of Scope

| Feature | Reason |
|---------|--------|
| Content population beyond specified pre-populated files | All other content is stubs until validated through real usage testing |
| Non-markdown formats | Markdown-only knowledge base |
| UI / app / interface work | Files consumed by existing Electron app |
| Audio generation | This is prompting documentation only |
| Pre-commit hook for validation | Run on demand only — per CONTEXT.md decision |
| sfx/ or templates/ index files | Single-file / template-only folders — not data domains needing registry |

## Traceability

| Requirement | Phase | Status |
|-------------|-------|--------|
| SCAF-01 | Phase 1 | Pending |
| SCAF-02 | Phase 1 | Pending |
| SCAF-03 | Phase 1 | Pending |
| SCAF-04 | Phase 1 | Pending |
| SCAF-05 | Phase 1 | Pending |
| SCAF-06 | Phase 1 | Pending |
| SCAF-07 | Phase 1 | Pending |
| SCAF-08 | Phase 1 | Pending |
| FILE-01 | Phase 1 | Pending |
| FILE-02 | Phase 2 | Complete |
| FILE-03 | Phase 2 | Complete |
| FILE-04 | Phase 2 | Complete |
| FILE-05 | Phase 2 | Complete |
| CONT-01 | Phase 2 | Complete |
| CONT-02 | Phase 2 | Complete |
| CONT-03 | Phase 2 | Complete |
| TMPL-01 | Phase 2 | Complete |
| TMPL-02 | Phase 2 | Complete |
| TMPL-03 | Phase 2 | Complete |
| TMPL-04 | Phase 2 | Complete |
| SYS-01 | Phase 2 | Complete |
| OUT-01 | Phase 2 | Complete |
| YAML-01 | Phase 3 | Complete |
| YAML-02 | Phase 3 | Complete |
| YAML-03 | Phase 3 | Complete |
| YAML-04 | Phase 3 | Complete |
| YAML-05 | Phase 3 | Complete |
| YAML-06 | Phase 3 | Complete |
| YAML-07 | Phase 3 | Complete |
| YAML-08 | Phase 3 | Complete |
| YAML-09 | Phase 3 | Pending |
| YAML-10 | Phase 3 | Pending |

**Coverage:**
- v1 requirements: 22 total — mapped to phases: 22 — unmapped: 0 ✓
- Phase 3 requirements: 10 total — mapped to plans: 10 — unmapped: 0 ✓

---
*Requirements defined: 2026-03-03*
*Last updated: 2026-03-03 — 03-01 complete: YAML-01, YAML-02 marked complete*
