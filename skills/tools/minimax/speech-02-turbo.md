---
type: tool
status: draft
provider: MiniMax
model: Speech-02-Turbo
parameters:
  speed: "0.5–2.0. Default 1.0. Below 1 = slower, above 1 = faster."
  vol: "Normalised (0.0–1.0). Controls output volume level."
  pitch: "−12 to +12 semitones. Shifts voice register above/below baseline. MiniMax only — no ElevenLabs equivalent."
  emotion: "Enum: happy | sad | angry | fearful | disgusted | surprised | calm. Model-wide — applies to entire generation, not per-phrase."
stable_styles: []
gotchas:
  - "emotion is model-wide — cannot apply different emotions to different phrases in one generation"
  - "pitch shifts baseline but does not override the voice's fundamental character"
  - "vol is normalised — extreme values (0.0 or 1.0) may clip or be inaudible"
  - "lower latency than HD at slight quality cost — use Turbo for rapid iteration or real-time, use HD for final output"
---

# MiniMax Speech-02-Turbo

## Purpose

MiniMax Speech-02-Turbo is the lower-latency variant of the Speech-02 generation. Identical parameters and expression method to speech-02-hd.md. Use Turbo for rapid iteration, real-time applications, or when latency matters more than peak quality. Use HD for final production output.

## Status: draft

## Provider: MiniMax

## Model: Speech-02-Turbo

## Prompt Formula

Identical to speech-02-hd.md. See that file for the full parameter reference and prompt construction guide.

1. Write the script using natural spoken language
2. Insert pause markers inline: `<#0.5#>` for 0.5s pause, `<#1#>` for 1s pause
3. Set `emotion` if a global mood applies to the entire clip (optional)
4. Adjust `speed` and `pitch` to match the target register and pacing
5. Set `vol` if output level needs normalisation

## Parameters

Identical to Speech-02-HD. See speech-02-hd.md for full parameter documentation.

**speed** — 0.5–2.0. Default 1.0.
**vol** — Normalised 0.0–1.0.
**pitch** — −12 to +12 semitones.
**emotion** — Enum: happy | sad | angry | fearful | disgusted | surprised | calm. Model-wide.

## Pause Syntax

Same as Speech-02-HD. Use `<#x#>` syntax inline in text. Example: `I can't believe it. <#0.5#> That actually worked.`

## HD vs Turbo Trade-off

Speech-02-Turbo and Speech-02-HD share identical parameters. The distinction is in quality ceiling and latency:

- **Turbo**: lower latency, slightly lower quality ceiling. Good for rapid iteration, real-time pipelines, or when turnaround speed is the priority.
- **HD**: higher quality ceiling, slightly higher latency. Use for final production output where audio quality is the priority.

Both models support all parameters: speed, vol, pitch, emotion, pause syntax.

## Gotchas

**emotion is model-wide.** Cannot apply per-phrase. Split generations if emotional range is needed within a clip.

**pitch shifts baseline, not character.** Large shifts (beyond ±6 semitones) may sound artificial.

**vol extremes.** Avoid 0.0 (silence) or 1.0 (potential clip) unless intentional.

**Quality ceiling.** Turbo trades some quality ceiling for speed. Differences are subtle for most content but can be apparent on demanding scripts.

## Output Format

Audio file. Submit text with inline pause markers as the text field, parameters as separate API fields.

## Validated Patterns

*Populate through real usage testing.*

## Known Limitations

*Populate through real usage testing.*
