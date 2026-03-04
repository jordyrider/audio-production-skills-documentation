---
type: tool
status: draft
provider: MiniMax
model: Speech-2.8-HD
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
---

# MiniMax Speech-2.8-HD

## Purpose

MiniMax Speech-2.8-HD is the highest-quality TTS model in the MiniMax speech lineup. Same base parameters as speech-02-hd.md, plus inline tone tags — the key addition in generation 2.8. Use this file for final production output requiring phrase-level expressive texture.

## Status: draft

## Provider: MiniMax

## Model: Speech-2.8-HD

## Prompt Formula

Same base approach as speech-02-hd.md. Generation 2.8 adds inline tone tags in the text string.

1. Write the script using natural spoken language
2. Insert tone tags inline where phrase-level texture is needed: `(laughs)`, `(sighs)`, etc.
3. Insert pause markers inline: `<#0.5#>` for 0.5s pause, `<#1#>` for 1s pause
4. Set `emotion` if a global mood applies to the entire clip (optional — works alongside tone tags)
5. Adjust `speed` and `pitch` to match the target register and pacing
6. Set `vol` if output level needs normalisation

Tone tags and pause syntax can be combined in the same text string:

```
emotion: calm
text: "I told you this wouldn't work. (sighs) <#0.5#> And here we are."
```

## Parameters

Same as Speech-02-HD. See speech-02-hd.md for full parameter documentation.

**speed** — 0.5–2.0. Default 1.0.
**vol** — Normalised 0.0–1.0.
**pitch** — −12 to +12 semitones.
**emotion** — Enum: happy | sad | angry | fearful | disgusted | surprised | calm. Model-wide.

## Pause Syntax

Same as Speech-02-HD. Use `<#x#>` syntax inline in text. Pause syntax works alongside tone tags:

```
(laughs) I can't believe it. <#0.5#> Neither can you.
```

## Tone Tags (2.8 only)

Generation 2.8 adds inline tone tags directly in the text. Syntax: `(tag)` placed at the point in the script where the expression should occur.

**Available tags:**

| Tag | Use |
|-----|-----|
| `(laughs)` | Laughter — longer, more prominent |
| `(chuckle)` | Short, lighter laugh |
| `(sighs)` | Audible sigh — resignation, relief, exhaustion |
| `(gasps)` | Sharp intake of breath — surprise, shock |
| `(clears throat)` | Throat clear — transition beat, slight formality |
| `(coughs)` | Short cough |
| `(sneezes)` | Sneeze |

**Key distinction from emotion param:**

Unlike `emotion` (which is model-wide and colours the entire generation), tone tags apply **only at the point they appear in the text**. You can use both in the same generation:

- `emotion` sets the overall delivery baseline
- Tone tags add specific physical/expressive moments at the phrase level

**Examples:**

Basic tone tag:
```
I didn't expect that. (gasps) Where did that come from?
```

Combining emotion and tone tags:
```
emotion: calm
text: "Everything is fine. (laughs) Well, almost everything."
```

Layering with pauses:
```
emotion: sad
text: "I tried. (sighs) <#0.5#> I really did."
```

## Gotchas

**emotion is model-wide.** Sets the delivery baseline for the entire generation. Cannot apply per-phrase. Use tone tags for phrase-level variation.

**Tone tags are inline, not model-wide.** They affect only the moment they appear. Place them precisely — immediately before or after the relevant word or phrase.

**Tone tags and emotion can co-exist.** `emotion` sets the mood floor; tone tags add texture above it. Both can appear in the same generation without conflict.

**pitch shifts baseline, not character.** Large shifts (beyond ±6 semitones) may sound artificial.

**vol extremes.** Avoid 0.0 (silence) or 1.0 (potential clip) unless intentional.

## Output Format

Audio file. Submit text with inline tone tags and pause markers as the text field, parameters (including emotion if used) as separate API fields.

## Validated Patterns

*Populate through real usage testing.*

## Known Limitations

*Populate through real usage testing.*
