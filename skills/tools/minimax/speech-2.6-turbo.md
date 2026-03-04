---
type: tool
status: draft
provider: MiniMax
model: Speech-2.6-Turbo
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
  - "adds Filipino, Tamil, Persian language support — otherwise identical to speech-02 generation"
---

# MiniMax Speech-2.6-Turbo

## Purpose

MiniMax Speech-2.6-Turbo combines the language additions of the 2.6 generation with the lower-latency characteristics of the Turbo variant. Identical parameters to speech-02-hd.md. Use when you need Filipino, Tamil, or Persian support with lower latency delivery. Use HD for final output.

## Status: draft

## Provider: MiniMax

## Model: Speech-2.6-Turbo

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

## Generation 2.6 Differences

Adds language support: Filipino, Tamil, Persian. No parameter or expression method changes over the 02 generation.

## HD vs Turbo Trade-off

Same as 02 generation. Turbo = lower latency, slightly lower quality ceiling. HD = higher quality ceiling, slightly higher latency. Use 2.6-Turbo for iteration or real-time pipelines; use speech-2.6-hd.md for final production output.

## Gotchas

**emotion is model-wide.** Cannot apply per-phrase. Split generations if emotional range is needed within a clip.

**pitch shifts baseline, not character.** Large shifts (beyond ±6 semitones) may sound artificial.

**vol extremes.** Avoid 0.0 (silence) or 1.0 (potential clip) unless intentional.

**Quality ceiling.** Turbo trades some quality ceiling for speed. Use HD for final production.

**Language additions only.** Beyond Filipino, Tamil, and Persian support, Speech-2.6 is identical to Speech-02.

## Output Format

Audio file. Submit text with inline pause markers as the text field, parameters as separate API fields.

## Validated Patterns

*Populate through real usage testing.*

## Known Limitations

*Populate through real usage testing.*
