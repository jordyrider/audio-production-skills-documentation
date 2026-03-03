# Roadmap: Audio Production Skills Documentation

## Overview

Two phases deliver the complete `skills/` knowledge base. Phase 1 creates the directory and file structure. Phase 2 applies correct schemas to every file, populates the three specified content files, and confirms the knowledge base is ready for Claude to consume.

## Phases

**Phase Numbering:**
- Integer phases (1, 2, 3): Planned milestone work
- Decimal phases (2.1, 2.2): Urgent insertions (marked with INSERTED)

Decimal phases appear between their surrounding integers in numeric order.

- [x] **Phase 1: Scaffold** - Create all directories and empty files in the `skills/` tree
- [x] **Phase 2: Schema and Content** - Apply schemas, populate specified content, print file tree (completed 2026-03-03)
- [ ] **Phase 3: YAML index files, JSON schema, and markdown frontmatter validation system**

## Phase Details

### Phase 1: Scaffold
**Goal**: The complete `skills/` directory tree exists with every required file present
**Depends on**: Nothing (first phase)
**Requirements**: SCAF-01, SCAF-02, SCAF-03, SCAF-04, SCAF-05, SCAF-06, SCAF-07, SCAF-08, FILE-01
**Success Criteria** (what must be TRUE):
  1. `skills/` directory exists at project root with all specified subdirectories
  2. Every required `.md` file exists in its correct location (templates, music, voice, sfx, tools, system-prompt)
  3. Every file opens with `# Title`, `## Purpose`, and `## Status: stub` — no filled content beyond headers
**Plans**: 3 plans

Plans:
- [x] 01-01-PLAN.md — Create root skills/, templates/, music domain skills, sfx/taxonomy.md, tools/, system-prompt.md
- [x] 01-02-PLAN.md — Create all ten genre stub files across skills/music/genre/
- [x] 01-03-PLAN.md — Create all six voice stub files across skills/voice/

### Phase 2: Schema and Content
**Goal**: Every file conforms to its correct schema and specified files are pre-populated with full draft content
**Depends on**: Phase 1
**Requirements**: FILE-02, FILE-03, FILE-04, FILE-05, CONT-01, CONT-02, CONT-03, TMPL-01, TMPL-02, TMPL-03, TMPL-04, SYS-01, OUT-01
**Success Criteria** (what must be TRUE):
  1. Genre files contain all schema sections: Parent Genre, Canva Use Cases, Sonic DNA, Prompting Patterns, MiniMax, Validated Patterns, Known Limitations, Still Testing
  2. Voice category files contain all schema sections: Purpose, Delivery Style, Example Lines, ElevenLabs sections
  3. `tools/minimax.md` is pre-populated with Prompt Formula, Parameters, Stable Keywords, Gotchas, Output Format, and stub Validated/Limitations sections
  4. `voice/hook-openers/hook-openers.md` contains all 13 specified example lines under `## Example Lines`
  5. `skills/system-prompt.md` is a complete, written master system prompt (not a stub) and a full file tree with status is printed to confirm completion
**Plans**: TBD

### Phase 3: YAML index files, JSON schema, and markdown frontmatter validation system

**Goal:** Every markdown file has machine-readable YAML frontmatter, every folder has an index.yaml registry, and a CLI validator + VS Code integration validates both against JSON schemas
**Requirements**: YAML-01, YAML-02, YAML-03, YAML-04, YAML-05, YAML-06, YAML-07, YAML-08, YAML-09, YAML-10
**Depends on:** Phase 2
**Plans:** 5/7 plans executed

Plans:
- [x] 03-01-PLAN.md — Create all 6 JSON schemas (genre, supergenre, tool, skill, voice-category, index)
- [ ] 03-02-PLAN.md — Create genre YAML indexes (authoritative genre/index.yaml + 7 subfolder indexes)
- [ ] 03-03-PLAN.md — Add frontmatter to 10 genre sub-genre markdown files
- [ ] 03-04-PLAN.md — Add frontmatter to supergenre files, skill files, and template files (16 files)
- [ ] 03-05-PLAN.md — Add frontmatter to tool files, voice category files, and system-prompt.md (13 files)
- [ ] 03-06-PLAN.md — Create remaining YAML index files: skills/, music/, voice/, tools/ domains (10 files)
- [ ] 03-07-PLAN.md — CLI validator script + VS Code settings and tasks integration

## Progress

**Execution Order:**
Phases execute in numeric order: 1 → 2 → 3

| Phase | Plans Complete | Status | Completed |
|-------|----------------|--------|-----------|
| 1. Scaffold | 3/3 | Complete | 2026-03-03 |
| 2. Schema and Content | 5/5 | Complete | 2026-03-03 |
| 3. YAML + Schema + Validation | 5/7 | In Progress|  |
