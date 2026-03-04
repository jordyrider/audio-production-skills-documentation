---
type: tool
status: draft
provider: MiniMax
model: Speech-2.6-HD
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
  - "adds Filipino, Tamil, Persian language support — otherwise identical to speech-02 generation"
---

# MiniMax Speech-2.6-HD

## Purpose

MiniMax Speech-2.6-HD is the high-quality variant of the Speech-2.6 generation. Same parameters and expression method as speech-02-hd.md. Generation 2.6 adds language support: Filipino, Tamil, Persian. No other differences from the 02 generation.

## Status: draft

## Provider: MiniMax

## Model: Speech-2.6-HD

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

Speech-2.6 adds expanded language support over the 02 generation:

**Added languages:** Filipino, Tamil, Persian

No parameter changes. No expression method changes. If your content uses Filipino, Tamil, or Persian, prefer 2.6 over 02. For all other languages, 02 and 2.6 are equivalent — use 02 unless you have a specific reason to prefer 2.6.

## Gotchas

**emotion is model-wide.** Cannot apply per-phrase. Split generations if emotional range is needed within a clip.

**pitch shifts baseline, not character.** Large shifts (beyond ±6 semitones) may sound artificial.

**vol extremes.** Avoid 0.0 (silence) or 1.0 (potential clip) unless intentional.

**Language additions only.** Beyond Filipino, Tamil, and Persian support, Speech-2.6 is identical to Speech-02. Do not expect other behavioural differences.

## Output Format

Audio file. Submit text with inline pause markers as the text field, parameters as separate API fields.

## Validated Patterns

*Populate through real usage testing.*

## Known Limitations

*Populate through real usage testing.*
