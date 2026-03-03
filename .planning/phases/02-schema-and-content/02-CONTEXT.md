# Phase 2: Schema and Content - Context

**Gathered:** 2026-03-03
**Status:** Ready for planning

<domain>
## Phase Boundary

Apply correct schemas to every file in the `skills/` tree and pre-populate the specified files with real content. Phase 2 also restructures `tools/` from flat files into a provider/model subdirectory layout. All other files remain stubs after schema is applied.

</domain>

<decisions>
## Implementation Decisions

### tools/ restructure
- Current flat files (`tools/minimax.md`, `tools/elevenlabs.md`) are DELETED and replaced with provider subdirectories
- Structure: `tools/{provider}/{model}.md`
- `tools/minimax/music-2.5.md` — full draft content (pre-populated)
- `tools/elevenlabs/speech-2.8-hd.md`, `speech-2.6-hd.md`, `speech-2.8-turbo.md`, `speech-2.6-turbo.md`, `speech-02-hd.md`, `speech-02-turbo.md` — all stubbed
- ElevenLabs music and sfx model files — full list to be provided before/during planning; stub all of them
- All tool files follow `tool.md` template schema

### File relationship principle (DRY)
- Genre files = pure sonic description only (Canva use cases, Sonic DNA, Prompting Patterns, Validated Patterns, Known Limitations, Still Testing)
- Model files = formula + parameters + stability/compatibility notes (what genres/styles it plays well with)
- Model-specific information lives ONLY in model files — never duplicated in genre files
- Same pattern applies to ElevenLabs
- Validated Patterns and Known Limitations in genre files = genre-level observations (cross-model), stays in genre files

### Genre file schema change
- Remove `## MiniMax` section from ALL genre stubs — this info lives in the model file
- Genre files have no model-specific sections at all

### MiniMax music-2.5.md — full draft content
- **Prompt Formula:** Style Description + Emotional Atmosphere + Instrumental Arrangement + Dynamic Characteristics
- **Output Format:** Labelled breakdown first (Style: / Mood: / Arrangement: / Dynamic:) then combined prompt ready to paste
- **Stable Styles section:** BPM (can define value), Duet, A Cappella, Shepard Scale, Blues Scale, Hip-hop, R&B, Funk, Lofi, Jazz, 80s Minneapolis Sound, C-Pop, C-Rap, J-Pop, Anime, City Pop — each with a one-line note on what it typically outputs
- **Instrumental mode:** Structure labels only in lyrics field: `[Intro]`, `[Inst]`, `[Transition]`, `[Build Up]`, `[Interlude]`, `[Outro]` etc.
- **Gotchas:** BPM is approximate (±10 BPM), instrumental tracks run ~1 min, may have occasional vocal humming
- **Status:** `## Status: draft` (pre-populated with real content)

### hook-openers/hook-openers.md — 13 example lines
Insert these exact lines under `## Example Lines`:
1. "This is my favorite... ohh wait this, oh no wait this, ohh... oh now THIS is my favorite."
2. "You're telling me it can do this? This? And THIS?!"
3. "Everyone says to do this, buuuut... we didn't!"
4. "Nobody talks about how hard it is to go from this to this"
5. "We just finished this and... I'm kind of obsessed!"
6. "I wish someone told me this sooner"
7. "If you're doing this, stop! Do this instead"
8. "don't do it, don't do it, don't do it, ughhh"
9. "What's the one piece of advice that changed your life?"
10. "Okay but why is this actually working??"
11. "Not me realizing this just now"
12. "This wasn't the plan, but here we are"
13. "Tell me why this makes sense?"

### system-prompt.md
- Standalone LLM context document — not tied to any app workflow
- Purpose: Claude reads this first to understand what files exist, what they contain, and when to use them
- Descriptive routing — describes file categories and when to reach for them, does NOT list explicit file paths
- Covers: music (genres + models), voice (categories + models), sfx, domain skills (keys-and-mood, tempo, arrangement, structure)
- Status: written master document (not a stub)

### Templates
- `templates/tool.md` should be a complete reference schema for tool files (Prompt Formula, Parameters, Stable Keywords, Gotchas, Output Format, Validated Patterns, Known Limitations)
- All four templates (genre.md, tool.md, voice-category.md, skill.md) should contain the schema as a usable reference with section headers

### Claude's Discretion
- Validated Patterns and Known Limitations in genre files left empty (stubs) — content added through real usage testing
- ElevenLabs stub file content beyond headers
- Exact wording of system-prompt.md sections
- Order and grouping within model stability sections

</decisions>

<specifics>
## Specific Ideas

- MiniMax sample prompt: "Alternative rock with funky bassline, 134 BPM, anxious and desperate energy, dynamic shifts from quiet spoken-word verses to explosive powerful choruses, distorted guitar riffs, punchy drums, raw male vocals"
- tools/ hierarchy mirrors how models are actually versioned and selected in practice — easy to add new models without touching genre files

</specifics>

<deferred>
## Deferred Ideas

None — discussion stayed within phase scope

</deferred>

---

*Phase: 02-schema-and-content*
*Context gathered: 2026-03-03*
