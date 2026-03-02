# Audio Production Skills Documentation

## What This Is

A structured markdown knowledge base that translates creative briefs into precise AI audio production prompts for MiniMax Music and ElevenLabs. Organized as a `skills/` framework covering genres, voice categories, sound effects, and tool-specific prompting patterns — consumed by Claude as context and pasted into an Electron app for Canva content creation.

## Core Value

Claude has enough structured, validated knowledge to generate precise, tool-ready prompts from a creative brief without guessing.

## Requirements

### Validated

(None yet — ship to validate)

### Active

- [ ] Scaffold complete `skills/` directory structure at project root matching the specified folder tree
- [ ] Every file has `# Title`, `## Purpose`, `## Status` (stub/draft/validated), and relevant placeholder sections
- [ ] Genre files follow `genre.md` template schema (Sonic DNA, Prompting Patterns, MiniMax, Validated Patterns, Known Limitations, Still Testing)
- [ ] Voice category files follow `voice-category.md` template schema (Delivery Style, Example Lines, ElevenLabs sections)
- [ ] Tool files follow `tool.md` template schema (Prompt Formula, Parameters, Stable Keywords, Gotchas, Output Format)
- [ ] Other domain files (keys-and-mood, tempo, arrangement, structure, sfx taxonomy, characteristics) follow `skill.md` template schema
- [ ] `tools/minimax.md` pre-populated with full draft content as specified
- [ ] `tools/elevenlabs.md` pre-populated with stub content as specified
- [ ] `voice/hook-openers/hook-openers.md` includes all 13 specified example lines
- [ ] `system-prompt.md` is a master Claude system prompt for the audio prompting workflow (not a stub)
- [ ] `templates/` contains four schema files: genre.md, tool.md, voice-category.md, skill.md
- [ ] Print a complete file tree with status after scaffolding

### Out of Scope

- Content population beyond specified pre-populated files — all other files are stubs until validated through real usage
- Non-markdown formats — this is a markdown-only knowledge base
- UI, app, or interface work — files are consumed by an existing Electron app
- Audio generation itself — this is documentation/prompting guidance only

## Context

- Target AI tools: **MiniMax Music** (instrumental tracks, ~2.5 min, loopable) and **ElevenLabs** (voice clips, 2–6 seconds, English only)
- All MiniMax output for this project: instrumental only, max 2.5 minutes, loopable structure
- BPM in MiniMax prompts is approximate (±10 BPM) — treated as ballpark, not exact
- Knowledge base has a status progression: `stub` → `draft` → `validated` — content only advances through real testing
- Files consumed by Claude as context within an Electron app workflow

## Constraints

- **Format**: Markdown only — all files `.md`
- **Content discipline**: No speculative content filled in — stubs have headers only until validated
- **Language**: Voice clips English only
- **Clip length**: ElevenLabs voice clips 2–6 seconds

## Key Decisions

| Decision | Rationale | Outcome |
|----------|-----------|---------|
| `skills/` as subfolder inside project root | Keeps knowledge base isolated from project meta files (.planning, .claude) | — Pending |
| `system-prompt.md` is a written master prompt, not a stub | It's the entry point for Claude's audio prompting context | — Pending |
| Status system: stub → draft → validated | Prevents unvalidated content from being treated as reliable | — Pending |

---
*Last updated: 2026-03-03 after initialization*
