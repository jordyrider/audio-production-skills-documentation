---
type: tool
status: draft
provider: ElevenLabs
model: eleven_v3
parameters:
  stability: "0.0–1.0. Three named modes: Creative (~0.3), Natural (~0.5), Robust (~0.75). Use Creative or Natural for content production."
  similarity_boost: "0.0–1.0. Sweet spot ~0.75."
  style: "0.0–1.0. Default 0.0. Amplifies natural style. Adds compute cost."
  use_speaker_boost: "boolean. Recommended: true."
  speed: "0.7–1.2."
stable_styles: []
gotchas:
  - "pitch does not exist — register goals via voice selection only"
  - "non-deterministic: same input produces different output on each run — generate multiple, select best"
  - "PVC not fully optimised — use IVC or library voices for best tag responsiveness"
  - "no SSML break tags — use [pause], [short pause], or [long pause] inline instead"
  - "tags are voice and context dependent — test tags against your chosen voice; results vary by baseline"
  - "voice selection is more critical on v3 than v2 — choose a voice whose baseline matches intended delivery"
  - "style parameter adds compute cost — use sparingly"
---

# ElevenLabs eleven_v3

## Purpose

ElevenLabs v3 model — audio tags, stability modes, expression method, and known behaviours. This is the most feature-rich ElevenLabs speech model: inline audio tags give precise directorial control over delivery, reactions, pacing, and character.

## Status: draft

## Provider: ElevenLabs

## Model: eleven_v3

## Expression Method

eleven_v3 uses **audio tags** — short inline directives written directly in the text that shape how the model delivers specific words or phrases.

**Syntax:** `[tag]` immediately before the word or phrase it modifies.

```
[excited] This is the moment we've been waiting for!
[hesitates] I... I'm not sure that's a good idea.
[whispers] Don't tell anyone I said this.
```

**Layering tags:** Combine multiple tags for richer direction. Tags are applied left to right.

```
[hesitant][nervous] I... I didn't mean to say that.
[calm][drawn out] Just... breathe. Everything is fine.
```

**No SSML break tags** — eleven_v3 does not support `<break time="x.xs"/>`. Use pause tags instead:

```
[pause]
[short pause]
[long pause]
```

**Text structure guidance** (text cues still apply alongside tags):

- Natural speech patterns over formal prose — write as a speaker would say it
- Proper punctuation for micro-pacing — commas and dashes where a speaker would pause
- CAPS for word-level emphasis: `This is EXACTLY the problem.`
- Ellipses for trailing off or uncertainty: `I just... can't do this anymore.`
- Tags and text cues together: `[exhausted] I just... can't do this anymore.`

### Link to characteristics.md

Audio tags implement the delivery vocabulary defined in `skills/voice/characteristics.md`. Examples:

- `[hesitates]` = pause + breath, uncertainty (cognitive beat)
- `[whispers]` = low energy, intimacy
- `[rushed]` = high pace, urgency
- `[calm]` = low expressiveness variance, steady pacing

## Audio Tags

Tags are voice and context dependent — results vary by voice baseline. Test against your chosen voice before relying on a tag in production.

### Emotions

| Tag | Effect |
|-----|--------|
| `[excited]` | Elevated energy, upbeat delivery |
| `[nervous]` | Tense, slightly rushed, uncertain tone |
| `[frustrated]` | Clipped, tense delivery |
| `[sorrowful]` | Slow, heavy, mournful tone |
| `[calm]` | Steady, measured, low-variance delivery |
| `[curious]` | Slightly lifted, questioning quality |
| `[crying]` | Broken, emotional delivery |
| `[mischievously]` | Playful, slightly conspiratorial tone |

### Reactions

| Tag | Effect |
|-----|--------|
| `[sigh]` | Audible exhale before delivery |
| `[laughs]` | Laugh before or during phrase |
| `[gulps]` | Audible swallow — nervous or caught off-guard |
| `[gasps]` | Sharp inhale — shock or surprise |
| `[whispers]` | Low-volume, breathy, intimate delivery |
| `[laughs harder]` | More intense laugh |
| `[big laugh]` | Full, sustained laugh |
| `[laughs softly]` | Quiet, suppressed laugh |

### Cognitive Beats

| Tag | Effect |
|-----|--------|
| `[pauses]` | Deliberate pause mid-phrase |
| `[hesitates]` | Slight stutter or hesitation before delivery |
| `[stammers]` | Broken, repeated syllables |
| `[resigned tone]` | Flat, accepting, slightly defeated delivery |

### Delivery

| Tag | Effect |
|-----|--------|
| `[rushed]` | Fast, urgent pacing |
| `[drawn out]` | Slow, stretched delivery |
| `[deadpan]` | Flat affect, no emotional colouring |
| `[flatly]` | Neutral, matter-of-fact tone |
| `[playfully]` | Light, bouncy, informal delivery |
| `[cheerfully]` | Warm, upbeat, positive energy |

### Pause

| Tag | Effect |
|-----|--------|
| `[pause]` | Standard pause |
| `[short pause]` | Brief pause |
| `[long pause]` | Extended pause |

### Character

| Tag | Effect |
|-----|--------|
| `[sarcastically]` | Dry, ironic delivery |
| `[French accent]` | French accent applied to delivery |
| `[Australian accent]` | Australian accent applied to delivery |
| `[pirate voice]` | Pirate character voice |

## Stability Modes

eleven_v3 has three named stability operating modes, mapped to `stability` parameter values:

| Mode | Stability Value | Character |
|------|----------------|-----------|
| Creative | ~0.3 | Most expressive, highest variability, least consistent run-to-run |
| Natural | ~0.5 | Balanced — expressive with reasonable consistency |
| Robust | ~0.75 | Most consistent, least expressive, lowest variability |

**Recommendation for content production:** Creative (~0.3) or Natural (~0.5). Robust is best suited for use cases where consistency across many outputs matters more than peak expressiveness (e.g. UI voice, long-form narration at uniform tone).

## Non-Determinism

eleven_v3 is non-deterministic — the same prompt and parameter settings will produce a different output on each generation.

**Strategy:** Generate 2–3 takes per line and select the best. Treat non-determinism as a feature: natural variation between takes provides organic diversity that deterministic models cannot produce. For hero lines (hooks, CTAs), generate 3+ and pick the strongest.

## Parameters

**stability** — See Stability Modes above. Use Creative (~0.3) or Natural (~0.5) for content production.

**similarity_boost** — 0.0–1.0. Controls adherence to voice baseline. Sweet spot ~0.75.

**style** — 0.0–1.0. Default 0.0. Amplifies natural style characteristics. Adds compute cost — increase cautiously and only when additional expressiveness is needed.

**use_speaker_boost** — boolean. Recommended: true.

**speed** — 0.7–1.2. Default 1.0. Available on all models and all voices.

## Gotchas

- **pitch does not exist** — Register goals (warmer, higher, deeper) must be achieved through voice selection, not parameters.
- **Non-deterministic** — Same input produces different output each run. Generate multiple takes; select best.
- **PVC not fully optimised** — Personal Voice Clones (PVC) do not respond to audio tags as reliably as Instant Voice Clones (IVC) or library voices. Use IVC or library voices for best tag responsiveness.
- **No SSML break tags** — `<break time="x.xs"/>` is not supported on eleven_v3. Use `[pause]`, `[short pause]`, or `[long pause]` inline.
- **Tags are voice and context dependent** — Tag effect varies by voice baseline and surrounding text. Test your chosen voice with target tags before committing to a production workflow.
- **Voice selection is more critical on v3 than v2** — Tags work best when the voice's natural baseline already trends toward the intended delivery character. A voice with a calm, flat baseline will respond differently to `[excited]` than one with a naturally energetic baseline.
- **style parameter adds compute cost** — Use sparingly.

## Validated Patterns

*Populate through real usage testing*

## Known Limitations

*Populate through real usage testing*
