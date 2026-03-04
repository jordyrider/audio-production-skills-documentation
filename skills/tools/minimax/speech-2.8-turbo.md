---
type: tool
status: draft
provider: MiniMax
model: Speech-2.8-Turbo
parameters:
  speed: "0.5–2.0. Default 1.0. Below 1 = slower, above 1 = faster."
  vol: "Normalised (0.0–1.0). Controls output volume level."
  pitch: "−12 to +12 semitones. Shifts voice register above/below baseline. MiniMax only — no ElevenLabs equivalent."
  emotion: "Enum: happy | sad | angry | fearful | disgusted | surprised | calm. Model-wide — applies to entire generation, not per-phrase."
stable_styles: []
gotchas:
  - "emotion is model-wide — cannot apply different emotions per phrase"
  - "tone tags are inline in text (not model-wide) — unlike emotion param"
  - "tone tags and emotion can be used together — emotion sets the baseline, tags add phrase-level texture"
  - "lower latency than HD at slight quality cost — use Turbo for rapid iteration or real-time, use HD for final output"
---

# MiniMax Speech-2.8-Turbo

## Purpose

MiniMax Speech-2.8-Turbo is the lower-latency variant of the Speech-2.8 generation. Identical tone tags, parameters, and expression method to speech-2.8-hd.md. Use Turbo for rapid iteration, real-time applications, or when latency matters. Use HD for final production output.

## Status: draft

## Provider: MiniMax

## Model: Speech-2.8-Turbo

## Prompt Formula

Identical to speech-2.8-hd.md. See that file for the full prompt construction guide including tone tag usage.

1. Write the script using natural spoken language
2. Insert tone tags inline where phrase-level texture is needed: `(laughs)`, `(sighs)`, etc.
3. Insert pause markers inline: `<#0.5#>` for 0.5s pause, `<#1#>` for 1s pause
4. Set `emotion` if a global mood applies to the entire clip (optional — works alongside tone tags)
5. Adjust `speed` and `pitch` to match the target register and pacing
6. Set `vol` if output level needs normalisation

## Parameters

Same as Speech-02-HD and Speech-2.8-HD. See speech-02-hd.md for full parameter documentation.

**speed** — 0.5–2.0. Default 1.0.
**vol** — Normalised 0.0–1.0.
**pitch** — −12 to +12 semitones.
**emotion** — Enum: happy | sad | angry | fearful | disgusted | surprised | calm. Model-wide.

## Pause Syntax

Same as all MiniMax models. Use `<#x#>` syntax inline in text. Works alongside tone tags:

```
(laughs) I can't believe it. <#0.5#> Neither can you.
```

## Tone Tags (2.8 only)

Same tone tags as speech-2.8-hd.md. Available tags: `(laughs)`, `(chuckle)`, `(sighs)`, `(gasps)`, `(clears throat)`, `(coughs)`, `(sneezes)`

Tone tags are inline in text (not model-wide). `emotion` sets the delivery baseline; tone tags add phrase-level texture. Both can be used together:

```
emotion: calm
text: "I told you this wouldn't work. (sighs) <#0.5#> And here we are."
```

See speech-2.8-hd.md for the full tone tag reference table and examples.

## HD vs Turbo Trade-off

Same pattern as other MiniMax model pairs:

- **Turbo**: lower latency, slightly lower quality ceiling. Use for rapid iteration or real-time pipelines.
- **HD**: higher quality ceiling, slightly higher latency. Use for final production output.

Both variants support identical parameters and tone tags.

## Gotchas

**emotion is model-wide.** Sets the delivery baseline for the entire generation. Use tone tags for phrase-level variation.

**Tone tags are inline, not model-wide.** Affect only the moment they appear in the text.

**Tone tags and emotion can co-exist.** No conflict — emotion sets mood floor, tone tags add texture above it.

**pitch shifts baseline, not character.** Large shifts (beyond ±6 semitones) may sound artificial.

**vol extremes.** Avoid 0.0 (silence) or 1.0 (potential clip) unless intentional.

**Quality ceiling.** Turbo trades some quality ceiling for speed. Use HD for final production where quality is the priority.

## Output Format

Audio file. Submit text with inline tone tags and pause markers as the text field, parameters as separate API fields.

## Validated Patterns

*Populate through real usage testing.*

## Known Limitations

*Populate through real usage testing.*
