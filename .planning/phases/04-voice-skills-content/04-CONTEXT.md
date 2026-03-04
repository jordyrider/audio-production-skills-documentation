# Phase 4: Voice Skills Content - Context

**Gathered:** 2026-03-04
**Status:** Ready for planning
**Source:** PRD Express Path (.planning/voice-skills-phase.md)

<domain>
## Phase Boundary

Phase 4 delivers a complete, filled voice skills layer: the `characteristics.md` vocabulary reference, all ElevenLabs model tool files, all MiniMax speech model files (6 stubs filled), all 5 voice category files (migrated to flat structure), updated index files, and a `system-prompt.md` routing update. After this phase, Claude can generate precise, tool-ready voice prompts using structured skill files.

</domain>

<decisions>
## Implementation Decisions

### Architecture
- Two-layer voice architecture: Layer 1 = `characteristics.md` (provider-agnostic, delivery vocabulary); Layer 2 = model tool files (provider-specific parameters)
- Category files use Layer 1 vocabulary only — no provider-specific content in category files
- Replace `## ElevenLabs Settings` in voice category template with a single `## Settings Guidance` section in Layer 1 terms only

### File Structure — Flatten Voice Categories
- Collapse `skills/voice/` from nested subfolders to flat structure
- Remove: `hook-openers/`, `cta-promo/`, `meme-quotes/`, `pov-relatable/`, `instructional/` subfolders and their `index.yaml` files
- Target flat: `skills/voice/characteristics.md`, `hook-openers.md`, `cta-promo.md`, `meme-quotes.md`, `pov-relatable.md`, `instructional.md`, `index.yaml`
- Migration must happen before filling any category content
- Update `skills/voice/index.yaml` to remove `sub_folders` block and add 5 category files to `files` list
- Update path references in `skills/system-prompt.md`

### ElevenLabs Parameters (locked — do not deviate)
- `stability`: 0.0–1.0. Low = expressive/variable. High = consistent/monotone.
- `similarity_boost`: 0.0–1.0. Sweet spot ~0.75.
- `style`: 0.0–1.0. Amplifies natural style. Default 0.0. Adds compute cost.
- `use_speaker_boost`: boolean. Adds clarity.
- `speed`: 0.7–1.2. All models, all voices.
- `pitch`: **Does not exist on ElevenLabs.** Register goals via voice selection only.

### ElevenLabs Expression by Model (locked)
- `eleven_multilingual_v2`: text cues only (punctuation, phrasing, exclamation marks). SSML `<break time="x.xs"/>` supported. No audio tags.
- `eleven_turbo_v2_5`: same as multilingual_v2. Faster, slightly less expressive ceiling, 32 languages.
- `eleven_v3`: audio tags `[like this]` inline in text. No SSML break tags (use `[pause]` instead). Stability modes: Creative / Natural / Robust. Non-deterministic — generate multiple, select best.

### MiniMax Speech Parameters (locked — do not deviate)
- `speed`: 0.5–2.0
- `vol`: normalised
- `pitch`: −12 to +12 semitones (MiniMax only — no ElevenLabs equivalent)
- `emotion`: enum: happy, sad, angry, fearful, disgusted, surprised, calm. Model-wide, not per-phrase.
- pause: `<#x#>` syntax (e.g. `<#0.5#>` = 0.5s). Inline in text. All models.

### MiniMax Model Generations (locked)
- `speech-02-hd` / `speech-02-turbo`: baseline stable. `emotion` param supported.
- `speech-2.6-hd` / `speech-2.6-turbo`: adds Filipino, Tamil, Persian. Otherwise identical to 02.
- `speech-2.8-hd` / `speech-2.8-turbo`: adds inline tone tags: `(laughs)`, `(chuckle)`, `(sighs)`, `(gasps)`, `(clears throat)`, `(coughs)`, `(sneezes)`. `emotion` param still works alongside tags.
- HD vs Turbo: same params. HD = quality, Turbo = lower latency.

### Deliverable 1 — characteristics.md Content
- Fill completely. Cover: Register, Pacing, Energy, Expressiveness, Pause & breath, Warmth vs authority, Anti-AI patterns
- Register: on ElevenLabs = voice selection only; on MiniMax = `pitch` ±12 semitones on top of baseline
- Energy ≠ volume — distinguish explicitly
- Anti-AI patterns section: even pacing, monotone pitch, no breath, robotic rhythm. Script-level fixes.
- No provider-specific content

### Deliverable 2 — ElevenLabs Model Files
- Create: `skills/tools/elevenlabs/eleven_multilingual_v2.md`, `eleven_turbo_v2_5.md`, `eleven_v3.md`, `index.yaml`
- eleven_v3 audio tag reference: Emotions (`[excited]`, `[nervous]`, `[frustrated]`, `[sorrowful]`, `[calm]`, `[curious]`, `[crying]`, `[mischievously]`), Reactions (`[sigh]`, `[laughs]`, `[gulps]`, `[gasps]`, `[whispers]`, `[laughs harder]`, `[big laugh]`, `[laughs softly]`), Cognitive beats (`[pauses]`, `[hesitates]`, `[stammers]`, `[resigned tone]`), Delivery (`[rushed]`, `[drawn out]`, `[deadpan]`, `[flatly]`, `[playfully]`, `[cheerfully]`), Pause (`[pause]`, `[short pause]`, `[long pause]`), Character (`[sarcastically]`, `[French accent]`, `[Australian accent]`, `[pirate voice]`)
- eleven_v3: PVC not fully optimised — use IVC or library voices
- eleven_v3 stability modes: Creative / Natural / Robust. Use Creative or Natural for content production.
- Follow `skills/tools/minimax/index.yaml` pattern for elevenlabs index.yaml

### Deliverable 3 — MiniMax Speech Model Files (fill 6 stubs)
- Document full param set in `speech-02-hd.md`. Reference it in others and note per-generation differences.
- speech-2.8 files must document tone tag syntax inline in text alongside `emotion` param
- Verify `skills/tools/minimax/index.yaml` lists all 6 model files; add 2.6 and 2.8 entries if missing

### Deliverable 4 — Voice Category Content
- After migration to flat structure, fill 5 category files
- Remove `## ElevenLabs Voice Recommendations`, `## ElevenLabs Settings`, `## ElevenLabs Notes` sections
- Replace with single `## Settings Guidance` in Layer 1 vocabulary only
- hook-openers: high energy, curious/excited, non-uniform pacing, mid-to-high register, high expressiveness
- cta-promo: confident, warm, direct, slightly slower, clear enunciation, urgency without desperation, mid register
- meme-quotes: highly variable, flat for irony, exaggerated for comedy, pacing/timing as primary lever, deadpan valid target
- pov-relatable: conversational, intimate, first-person, low-to-mid energy, warmth over authority, breath and micro-pauses
- instructional: clear, measured, warm authority, deliberate pacing, consistent register, lower expressiveness variance

### Deliverable 5 — Index Files
- `skills/tools/elevenlabs/index.yaml`: covered in Deliverable 2
- `skills/voice/index.yaml`: remove `sub_folders` block, add all 5 category files to `files` list

### Deliverable 6 — system-prompt.md Routing Update
- Update voice category paths to flat structure (no subfolders)
- Add `eleven_v3` as a voice model option
- Confirm ElevenLabs model file paths are correct
- Add note on two-layer voice pattern: `characteristics.md` defines intent vocabulary → model file maps intent to parameters

### Execution Order (locked)
1. Migrate category files to flat structure + update `skills/voice/index.yaml`
2. `characteristics.md`
3. ElevenLabs model files
4. MiniMax speech model files
5. Voice category file content
6. Remaining index files
7. `skills/system-prompt.md`

### Claude's Discretion
- Exact frontmatter field values (status, tags) within schema constraints
- How to structure per-section prose within each file beyond what's specified
- Whether to split any deliverable across multiple plans or combine small ones

</decisions>

<specifics>
## Specific Ideas

- ElevenLabs eleven_v3 audio tags are voice and context dependent — layer tags for richer direction: `[hesitant][nervous] I... I didn't mean to say that.`
- Text structure matters for eleven_v3: natural speech patterns, proper punctuation, capitals for emphasis, ellipses for pauses
- Voice selection is more critical on eleven_v3 than v2. Tags work best when voice baseline matches intended delivery.
- MiniMax speech-2.8 tone tags are inline in text (not model-wide): `(laughs)`, `(chuckle)`, `(sighs)`, `(gasps)`, `(clears throat)`, `(coughs)`, `(sneezes)`
- Validate all files against schemas in `skills/schemas/` after creation

</specifics>

<deferred>
## Deferred Ideas

- ElevenLabs music and sfx model files — full model list not yet available (deferred from Phase 2)
- Additional MiniMax model generations beyond 2.8
- Voice category files beyond the 5 specified

</deferred>

---

*Phase: 04-voice-skills-content*
*Context gathered: 2026-03-04 via PRD Express Path*
