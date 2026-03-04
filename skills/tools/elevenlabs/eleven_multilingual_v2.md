---
type: tool
status: draft
provider: ElevenLabs
model: eleven_multilingual_v2
parameters:
  stability: "0.0–1.0. Low = expressive/variable. High = consistent/monotone. Start: 0.5."
  similarity_boost: "0.0–1.0. Sweet spot ~0.75. Higher = truer to voice baseline."
  style: "0.0–1.0. Amplifies natural style. Default 0.0. Adds compute cost — use sparingly."
  use_speaker_boost: "boolean. Adds clarity and presence. Recommended: true."
  speed: "0.7–1.2. All models, all voices. Default 1.0."
stable_styles: []
gotchas:
  - "pitch does not exist — register goals must be achieved via voice selection"
  - "style parameter adds compute cost — keep at 0.0 unless expressiveness boost is needed"
  - "SSML break tags work but test per voice — some voices ignore short breaks"
---

# ElevenLabs eleven_multilingual_v2

## Purpose

ElevenLabs multilingual v2 model — parameters, text-cue expression method, SSML support, and known behaviours for AI voice generation.

## Status: draft

## Provider: ElevenLabs

## Model: eleven_multilingual_v2

## Expression Method

This model uses **text cues** to guide delivery. There are no audio tags. Delivery is shaped entirely through how the text is written — its structure, punctuation, and rhythm.

### Text Cue Techniques

- **Punctuation for pacing** — sentence rhythm guides how the model breathes and pauses. Short sentences create urgency. Long, flowing sentences create a measured, calm delivery.
- **Exclamation marks** — signal excited or emphatic delivery: `This is incredible!`
- **Ellipses (...)** — signal a pause, trailing off, or uncertainty: `I'm not sure... maybe.`
- **Em dashes (—)** — create an abrupt pause or shift in delivery: `I thought I understood — but I was wrong.`
- **CAPS for word-level emphasis** — single capitalised words receive stress: `This is EXACTLY what I meant.`
- **Question marks** — naturally lift the end of phrases, useful for uncertainty or conversational tone.

### SSML Break Tags

SSML `<break>` tags insert a timed pause at a precise point in the text.

**Syntax:**
```xml
<speak>
  Here is a pause. <break time="0.5s"/> And then we continue.
</speak>
```

- Wrap the entire text block in `<speak>` tags when using SSML.
- Break time accepts values in seconds (`0.5s`, `1.0s`, `2s`).
- Test per voice — some voices ignore short breaks (under ~0.3s).
- No audio tags are supported on this model — use text cues and SSML only.

## Parameters

**stability** — Controls delivery consistency. Low values (0.0–0.3) produce more expressive, variable delivery with natural variance between sentences. High values (0.7–1.0) produce consistent, monotone delivery. Starting point: 0.5.

**similarity_boost** — Controls how closely the output adheres to the voice baseline. Sweet spot around 0.75 — higher values are truer to the source voice but can introduce artefacts at the extreme end.

**style** — Amplifies the voice's natural style characteristics. Default is 0.0. Increase cautiously — this parameter adds compute cost and can exaggerate delivery unevenly. Use only when additional expressiveness is needed.

**use_speaker_boost** — Boolean. Adds clarity and presence to the output. Recommended: `true` for most use cases.

**speed** — Controls speech rate. Range: 0.7–1.2. Default: 1.0. Lower values slow delivery; higher values increase pace. Available on all models and all voices.

## Prompt Guidance

Write text as if it will be read aloud naturally. Avoid overly formal prose. Aim for:

- Natural speech patterns with varied sentence length
- Conversational punctuation — commas and dashes where a speaker would actually pause
- CAPS only for genuine emphasis, not decoration
- Ellipses for deliberate trailing off or uncertainty
- Exclamation marks sparingly — overuse flattens their impact

For precise pauses, prefer SSML `<break time="x.xs"/>` over ellipses when exact timing matters.

## Gotchas

- **pitch does not exist** — Register goals (e.g. warmer, higher, deeper) must be achieved through voice selection, not parameters.
- **style parameter adds compute cost** — Keep at 0.0 unless a specific expressiveness boost is needed. Increasing style does not reliably increase all dimensions of expressiveness.
- **SSML break tags work but test per voice** — Some voices ignore short breaks. Test your target voice at 0.3s before relying on short pauses.

## Validated Patterns

*Populate through real usage testing*

## Known Limitations

*Populate through real usage testing*
