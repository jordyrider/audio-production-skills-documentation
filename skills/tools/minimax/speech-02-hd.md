---
type: tool
status: draft
provider: MiniMax
model: Speech-02-HD
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
---

# MiniMax Speech-02-HD

## Purpose

MiniMax Speech-02-HD is the baseline high-quality TTS model from MiniMax. Use this file as the reference for all MiniMax speech parameters. Generation-specific files (2.6, 2.8) reference this file and note only their differences.

## Status: draft

## Provider: MiniMax

## Model: Speech-02-HD

## Prompt Formula

MiniMax speech generation takes a text input and optional parameters. The text is the script. Parameters control delivery character.

Compose your script first, then layer parameters:

1. Write the script using natural spoken language
2. Insert pause markers inline: `<#0.5#>` for 0.5s pause, `<#1#>` for 1s pause
3. Set `emotion` if a global mood applies to the entire clip (optional)
4. Adjust `speed` and `pitch` to match the target register and pacing
5. Set `vol` if output level needs normalisation (default is sufficient in most cases)

No structured prompt format required — the text string is the prompt. Parameters are passed separately as API fields.

## Parameters

**speed** — Range: 0.5–2.0. Default: 1.0.

Controls playback rate of the generated speech. Values below 1.0 produce slower, more deliberate delivery; values above 1.0 produce faster, more compressed speech. Useful range for natural human speech: 0.8–1.3. Beyond 1.5 can introduce artefacts. Below 0.7 can sound unnaturally stretched.

**vol** — Range: 0.0–1.0 (normalised).

Controls output volume level. Default output is normalised to a standard level. Adjust only if downstream mixing requires a specific level offset. Extreme values risk clipping (1.0) or inaudibility (0.0).

**pitch** — Range: −12 to +12 semitones.

Shifts the voice's pitch above or below its baseline register. This is a MiniMax-specific parameter — ElevenLabs has no equivalent (register goals on ElevenLabs require voice selection instead). Pitch shifts the baseline without overriding the voice's fundamental character. Useful for: raising register to sound younger or more energetic, lowering register for authority or gravitas. Avoid extreme values unless deliberately seeking stylised effect.

**emotion** — Enum: `happy` | `sad` | `angry` | `fearful` | `disgusted` | `surprised` | `calm`

Applies a global emotional colouring to the entire generation. Model-wide — cannot be changed per-phrase within a single API call. If you need a neutral delivery, omit the parameter (default) or use `calm`. If your script has emotional variation across phrases, consider splitting into multiple generations and stitching in post.

## Pause Syntax

MiniMax uses an inline pause syntax: `<#x#>` where `x` is the pause duration in seconds. Decimals are allowed.

Examples:
- `<#0.3#>` — short beat, natural conversational gap
- `<#0.5#>` — half-second pause, emphasis beat
- `<#1#>` — full second pause, dramatic hold or scene transition

Insert directly into the text string at the point where the pause should occur:

```
I can't believe it. <#0.5#> That actually worked.
```

```
Here's what you need to know. <#0.3#> First, <#0.2#> stay calm.
```

Pause syntax is supported on all MiniMax speech model generations (02, 2.6, 2.8).

## Gotchas

**emotion is model-wide.** A single `emotion` value applies to the entire generation. You cannot apply `happy` to the first sentence and `calm` to the second in one API call. Plan your script accordingly — if emotional range is needed, split generations.

**pitch shifts baseline, not character.** A large pitch shift makes the voice sound higher or lower but does not change its fundamental timbre or style. Shifts beyond ±6 semitones may start sounding artificial. Use pitch for register adjustment, not voice transformation.

**vol extremes.** Setting `vol` to 1.0 may clip in some contexts. Setting `vol` to 0.0 produces silence. Leave at default unless mixing requires adjustment.

## Output Format

Audio file (typically MP3 or WAV depending on API configuration). Submit text with inline pause markers as the text field, and parameter values as separate API fields. The text field is the script — no special prompt wrapper needed.

## Validated Patterns

*Populate through real usage testing.*

## Known Limitations

*Populate through real usage testing.*
