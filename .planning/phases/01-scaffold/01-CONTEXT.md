# Phase 1: Scaffold - Context

**Gathered:** 2026-03-03
**Status:** Ready for planning

<domain>
## Phase Boundary

Create the complete `skills/` directory tree with every required subdirectory and stub `.md` file in place. No content is filled in beyond structural headers — all files are stubs. Schema application and content population are Phase 2.

</domain>

<decisions>
## Implementation Decisions

### Genre directory file structure
- Each unspecified genre dir gets one `.md` named after the directory: `lo-fi/lo-fi.md`, `pop/pop.md`, `funk/funk.md`, `corporate/corporate.md`, `utility/utility.md`
- Multi-file dirs (indie/, cinematic/) follow SCAF-04 explicitly: `indie/indie.md`, `indie/retro.md`, `indie/synthwave.md`; `cinematic/cinematic.md`, `cinematic/piano.md`

### Voice subdirectory file structure
- One `.md` per voice subdir named after the directory: `cta-promo/cta-promo.md`, `meme-quotes/meme-quotes.md`, `pov-relatable/pov-relatable.md`, `instructional/instructional.md`, `hook-openers/hook-openers.md`

### Stub header depth
- Every stub file includes ALL schema section headers as empty sections — structure is visible but no content is filled in
- Genre stubs show `## Sonic DNA`, `## Prompting Patterns`, `## MiniMax`, etc. (all empty)
- Voice stubs show `## Delivery Style`, `## Example Lines`, etc. (all empty)
- Tool stubs show `## Prompt Formula`, `## Parameters`, etc. (all empty)
- Skill stubs show `## Sub-skills`, `## Core Concepts`, `## Translation Layer`, etc. (all empty)
- All stubs open with `# Title`, `## Purpose`, `## Status: stub` before schema sections

### Title text format
- `# Title` heading uses human-readable title case
- Examples: `# Lo-Fi Hip Hop`, `# Corporate Background`, `# Hook Openers`, `# MiniMax`, `# Voice Characteristics`
- Not slug/filename style — descriptive and readable

### Claude's Discretion
- Exact wording of `## Purpose` placeholder text in each stub
- Order of schema sections within stubs (follow schema template order)

</decisions>

<code_context>
## Existing Code Insights

### Reusable Assets
- None — project directory is empty beyond `.planning/`, `.claude/`, `.git/` meta dirs

### Established Patterns
- None yet — this is the first phase

### Integration Points
- `skills/` created at project root — isolated from meta dirs
- Files consumed by Claude as context in an Electron app workflow (no code integration required for this phase)

</code_context>

<specifics>
## Specific Ideas

- No specific references beyond what's in REQUIREMENTS.md
- Open to standard markdown stub patterns

</specifics>

<deferred>
## Deferred Ideas

None — discussion stayed within phase scope

</deferred>

---

*Phase: 01-scaffold*
*Context gathered: 2026-03-03*
