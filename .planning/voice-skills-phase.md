# Voice Skills Phase — Audio Production KB

**Repo:** `/Users/jordymcintyre/audio-production-skills-documentation/skills/`

---

You are working on the audio-production-skills-documentation knowledge base. This is a structured set of skill files used by Claude to generate precise, tool-ready prompts for AI audio production — specifically MiniMax (music + voice) and ElevenLabs (voice) generation.

Read the following files before doing anything:
- `skills/system-prompt.md`
- `skills/voice/index.yaml`
- `skills/voice/characteristics.md`
- `skills/templates/voice-category.md`
- `skills/templates/tool.md`
- `skills/tools/minimax/index.yaml`
- `skills/tools/minimax/speech-02-hd.md`

Confirm you have read all of them before writing anything.

---

## Architecture

Voice is different from music. The script is the creative output — the prompt is about delivery. The skill layer has two jobs:

**Layer 1 — `characteristics.md` (universal, provider-agnostic)**
Defines creative intent vocabulary: register, pacing, energy, warmth, urgency, breath, pause, expressiveness. Category files reference this vocabulary to describe delivery goals. Model files reference it to explain how their parameters map to it.

**Layer 2 — model tool files (provider-specific)**
Documents actual technical levers per model — parameters, ranges, expression mechanisms, gotchas.

Category files use Layer 1 vocabulary only. The current template has `## ElevenLabs Settings` baked in — this coupling is wrong. Replace with a model-agnostic `## Settings Guidance` section describing delivery intent in Layer 1 terms only.

---

## File structure change — flatten voice categories

The current structure nests each category in its own subfolder with a single file. This adds no value. Collapse to flat before filling content.

**Current (remove):**
```
skills/voice/
  hook-openers/
    index.yaml
    hook-openers.md
  cta-promo/
    index.yaml
    cta-promo.md
  meme-quotes/
    index.yaml
    meme-quotes.md
  pov-relatable/
    index.yaml
    pov-relatable.md
  instructional/
    index.yaml
    instructional.md
```

**Target:**
```
skills/voice/
  characteristics.md
  hook-openers.md
  cta-promo.md
  meme-quotes.md
  pov-relatable.md
  instructional.md
  index.yaml
```

Migration steps:
1. Move content from each `category/category.md` into `skills/voice/category.md`
2. Delete the subfolders and their index.yaml files
3. Update `skills/voice/index.yaml` — remove `sub_folders` block, add the 5 category files to the `files` list
4. Update any path references in `skills/system-prompt.md`

Do this migration before filling any category content.

---

## Parameter facts — do not deviate from these

### ElevenLabs

| Parameter | Range | Notes |
|-----------|-------|-------|
| `stability` | 0.0–1.0 | Low = expressive/variable. High = consistent/monotone. Most important lever. |
| `similarity_boost` | 0.0–1.0 | Adherence to reference voice. Sweet spot ~0.75. |
| `style` | 0.0–1.0 | Amplifies natural style. Default 0.0. Adds compute cost. |
| `use_speaker_boost` | boolean | Adds clarity. |
| `speed` | 0.7–1.2 | All models, all voices. |
| `pitch` | — | **Does not exist.** Register goals must be achieved through voice selection. |

Expression by model:
- `eleven_multilingual_v2` — text cues only (punctuation, phrasing, exclamation marks). SSML `<break time="x.xs"/>` supported. No audio tags.
- `eleven_turbo_v2_5` — same as multilingual_v2. Faster, slightly less expressive ceiling, 32 languages.
- `eleven_v3` — audio tags `[like this]` inline in text. No SSML break tags (use `[pause]` instead). Stability modes: Creative / Natural / Robust. Voice selection is the most critical parameter. Non-deterministic — generate multiple, select best.

### MiniMax

| Parameter | Range | Notes |
|-----------|-------|-------|
| `speed` | 0.5–2.0 | Wider range than ElevenLabs. |
| `vol` | normalised | Volume. |
| `pitch` | −12 to +12 semitones | MiniMax only — ElevenLabs has no equivalent. |
| `emotion` | enum | happy, sad, angry, fearful, disgusted, surprised, calm. Model-wide, not inline. |
| pause | `<#x#>` | e.g. `<#0.5#>` = 0.5s pause. Inline in text. All models. |

Model generations:
- `speech-02-hd` / `speech-02-turbo` — current stable. `emotion` param supported.
- `speech-2.6-hd` / `speech-2.6-turbo` — adds Filipino, Tamil, Persian. Otherwise identical to 02.
- `speech-2.8-hd` / `speech-2.8-turbo` — adds inline tone tags: `(laughs)`, `(chuckle)`, `(sighs)`, `(gasps)`, `(clears throat)`, `(coughs)`, `(sneezes)`. `emotion` param still works alongside tags.
- HD vs Turbo — same params. HD = quality, Turbo = lower latency.

---

## Deliverable 1 — `skills/voice/characteristics.md`

Fill completely. No provider-specific content. Cover:

**Register** — what it means, vocabulary (low / mid / high; warm / bright / neutral), why it matters per content type. On ElevenLabs, register is controlled through voice selection only — no pitch param exists. On MiniMax, `pitch` provides ±12 semitones on top of voice baseline.

**Pacing** — vocabulary (deliberate / conversational / brisk / rushed / staccato / drawn-out), how punctuation affects pacing regardless of model, relationship to content type.

**Energy** — low / medium / high, what each sounds like, how energy relates to `stability` (ElevenLabs) and `emotion` param (MiniMax). Energy ≠ volume — distinguish.

**Expressiveness** — range from flat/neutral to highly performative, what flatness is and why it signals AI-generated voice, what makes delivery sound human (pitch variance, micro-pauses, non-uniform pacing, breath).

**Pause & breath** — strategic pause use for rhythm and emphasis, breath as a naturalness signal, structural pause vs. dramatic pause.

**Warmth vs authority** — how these axes interact with voice selection and delivery choices, content type examples.

**Anti-AI patterns** — what AI flatness sounds like: even pacing, monotone pitch, no breath, robotic rhythm. Script-level techniques that break it regardless of model: varied sentence lengths, natural incomplete phrases, ellipses, em-dashes, exclamation points used sparingly. Write how people speak, not how they write.

---

## Deliverable 2 — ElevenLabs model tool files

`skills/tools/elevenlabs/` is currently empty. Create all files below.

**`skills/tools/elevenlabs/index.yaml`** — follow the pattern of `skills/tools/minimax/index.yaml`. Register all 3 model files.

**`skills/tools/elevenlabs/eleven_multilingual_v2.md`**
- Purpose: highest quality, content production, not real-time
- Full params: stability, similarity_boost, style, use_speaker_boost, speed — ranges, defaults, what each does, when to adjust
- Expression: text cues only. SSML `<break>` supported. No audio tags.
- Recommended starting settings for expressive content production
- Voice selection guidance — most important decision
- Gotchas: non-deterministic, higher latency, stability too low = unstable, too high = monotone

**`skills/tools/elevenlabs/eleven_turbo_v2_5.md`**
- Purpose: quality + speed balance, 32 languages
- Same param set and expression mechanism as multilingual_v2
- Where it differs: faster, slightly lower expressiveness ceiling, additional languages
- When to choose over multilingual_v2

**`skills/tools/elevenlabs/eleven_v3.md`**
- Purpose: highest expressiveness, alpha, not real-time
- Stability modes: Creative (expressive, prone to hallucination), Natural (balanced), Robust (stable, less tag-responsive). Use Creative or Natural for content production.
- Full audio tag reference:
  - Emotions: `[excited]`, `[nervous]`, `[frustrated]`, `[sorrowful]`, `[calm]`, `[curious]`, `[crying]`, `[mischievously]`
  - Reactions: `[sigh]`, `[laughs]`, `[gulps]`, `[gasps]`, `[whispers]`, `[laughs harder]`, `[big laugh]`, `[laughs softly]`
  - Cognitive beats: `[pauses]`, `[hesitates]`, `[stammers]`, `[resigned tone]`
  - Delivery: `[rushed]`, `[drawn out]`, `[deadpan]`, `[flatly]`, `[playfully]`, `[cheerfully]`
  - Pause: `[pause]`, `[short pause]`, `[long pause]`
  - Character (context-dependent): `[sarcastically]`, `[French accent]`, `[Australian accent]`, `[pirate voice]`
- Tags are voice and context dependent — not all tags work with all voices. Layer tags for richer direction: `[hesitant][nervous] I... I didn't mean to say that.`
- Text structure matters: natural speech patterns, proper punctuation, capitals for emphasis, ellipses for pauses
- Voice selection is more critical than on v2. Tags work best when voice baseline matches intended delivery.
- PVC limitation: Professional Voice Clones not fully optimised for v3. Use IVC or library voices.
- Gotchas: no SSML break tags, higher prompt engineering requirement, higher latency, generate multiple and select

---

## Deliverable 3 — MiniMax speech model files

Fill all 6 stubs. Document the full param set in `speech-02-hd.md`. Reference it in the others and note per-generation differences.

For each file:
- Purpose (HD = quality, Turbo = lower latency, same params)
- Full params: speed, vol, pitch, emotion enum, pause syntax
- Generation differences: 02 = baseline; 2.6 = adds Filipino/Tamil/Persian; 2.8 = adds inline tone tags
- For 2.8 files: tone tag syntax `(laughs)`, `(chuckle)`, `(sighs)`, `(gasps)`, `(clears throat)`, `(coughs)`, `(sneezes)` — inline in text, works alongside `emotion` param
- Gotchas: `emotion` is model-wide not per-phrase (except 2.8 tone tags), `pitch` is additive on top of voice baseline

---

## Deliverable 4 — Voice category files

Migrate to flat structure first (see above). Then fill.

Remove `## ElevenLabs Voice Recommendations`, `## ElevenLabs Settings`, `## ElevenLabs Notes`. Replace with a single `## Settings Guidance` section in Layer 1 vocabulary only.

**hook-openers.md** — High energy, curious or excited delivery. Non-uniform pacing — speeds up for emphasis, drops before the hook lands. Mid-to-high register. High expressiveness essential — flatness kills hooks. Example lines in frontmatter, use them to inform delivery notes.

**cta-promo.md** — Confident, warm, direct. Slightly slower than hook-openers. Clear enunciation. Urgency without desperation. Mid register. Moderate expressiveness.

**meme-quotes.md** — Highly variable by format. Flat for irony, exaggerated for comedy. Pacing and timing are the primary lever — many formats rely on a specific rhythm. Deadpan is a valid target.

**pov-relatable.md** — Conversational, intimate, first-person. Low-to-mid energy. Warmth over authority. Natural incomplete sentences. Breath and micro-pauses signal authenticity. Talking to a friend, not presenting.

**instructional.md** — Clear, measured, warm authority. Deliberate pacing. Consistent register. Emphasis on key terms. Lower expressiveness variance than other categories — consistency over performance.

---

## Deliverable 5 — Index files

**`skills/tools/elevenlabs/index.yaml`** — covered in Deliverable 2.

**`skills/voice/index.yaml`** — update as part of migration. Remove `sub_folders` block. Add all 5 category files to the `files` list alongside `characteristics.md`.

Verify `skills/tools/minimax/index.yaml` lists all 6 speech model files. Add 2.6 and 2.8 entries if missing.

---

## Deliverable 6 — `skills/system-prompt.md` routing update

After all files are created:
- Update voice category paths to flat structure (no subfolders)
- Add `eleven_v3` as a voice model option
- Confirm ElevenLabs model file paths are correct
- Add a note on the two-layer voice pattern: `characteristics.md` defines intent vocabulary → model file maps intent to parameters

---

## Execution order

1. Migrate category files to flat structure + update `skills/voice/index.yaml`
2. `characteristics.md`
3. ElevenLabs model files
4. MiniMax speech model files
5. Voice category file content
6. Remaining index files
7. `skills/system-prompt.md`

After each file: confirm path, `status` frontmatter value, and validate against schema in `skills/schemas/` if available.
