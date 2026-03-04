---
type: tool
status: draft
provider: ElevenLabs
model: eleven_turbo_v2_5
parameters:
  stability: "0.0–1.0. Low = expressive/variable. High = consistent/monotone. Start: 0.5."
  similarity_boost: "0.0–1.0. Sweet spot ~0.75."
  style: "0.0–1.0. Default 0.0. Adds compute cost."
  use_speaker_boost: "boolean. Recommended: true."
  speed: "0.7–1.2."
stable_styles: []
gotchas:
  - "pitch does not exist — register goals via voice selection only"
  - "slightly lower expressive ceiling than eleven_multilingual_v2 — use v2 when maximum expressiveness is needed"
  - "SSML break tags supported — same syntax as eleven_multilingual_v2"
---

# ElevenLabs eleven_turbo_v2_5

## Purpose

ElevenLabs turbo v2.5 model — parameters, expression method, and key differences from eleven_multilingual_v2. Use this model for latency-sensitive workflows, multilingual content, and rapid iteration.

## Status: draft

## Provider: ElevenLabs

## Model: eleven_turbo_v2_5

## Expression Method

Identical to `eleven_multilingual_v2` — text cues and SSML only. No audio tags.

See `skills/tools/elevenlabs/eleven_multilingual_v2.md` for the full expression method reference (text cues, SSML `<break>` syntax, and prompt guidance). All techniques documented there apply to Turbo v2.5.

## Key Differences from eleven_multilingual_v2

| Dimension | eleven_multilingual_v2 | eleven_turbo_v2_5 |
|-----------|----------------------|-------------------|
| Generation speed | Standard | Faster (lower latency) |
| Expressive ceiling | Higher | Slightly lower |
| Languages | Standard multilingual | 32 languages |
| Expression method | Text cues + SSML | Text cues + SSML (identical) |
| Audio tags | Not supported | Not supported |

## When to Use Turbo v2.5

- **Latency-sensitive workflows** — faster generation means quicker iteration and better fit for near-real-time use cases.
- **Multilingual content** — 32 language support makes this model the practical choice for non-English content.
- **Rapid iteration** — lower generation cost per run makes it suitable for high-volume testing and A/B comparison.

## When to Use eleven_multilingual_v2 Instead

- **Maximum expressiveness required** — Turbo's slightly lower expressive ceiling is noticeable when pushing the model hard. If a script demands peak emotional range, use v2.
- **Subtle vocal nuance matters** — v2 handles micro-level textural variation better in emotionally complex passages.

## Parameters

Same parameter set as `eleven_multilingual_v2`:

**stability** — 0.0–1.0. Low = expressive/variable. High = consistent/monotone. Start: 0.5.

**similarity_boost** — 0.0–1.0. Sweet spot ~0.75.

**style** — 0.0–1.0. Default 0.0. Amplifies natural style. Adds compute cost — use sparingly.

**use_speaker_boost** — boolean. Adds clarity and presence. Recommended: true.

**speed** — 0.7–1.2. Default 1.0.

## Gotchas

- **pitch does not exist** — Register goals must be achieved via voice selection only. There is no pitch parameter on ElevenLabs.
- **Slightly lower expressive ceiling than v2** — When maximum expressiveness is the primary goal, prefer eleven_multilingual_v2.
- **SSML break tags supported** — Same `<speak>` wrapper and `<break time="x.xs"/>` syntax as eleven_multilingual_v2. Test per voice — some voices ignore short breaks.

## Validated Patterns

*Populate through real usage testing*

## Known Limitations

*Populate through real usage testing*
