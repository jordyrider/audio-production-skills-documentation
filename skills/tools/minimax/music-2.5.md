---
type: tool
status: draft
provider: MiniMax
model: Music-2.5
parameters:
  BPM: "Define a specific value (e.g. 134 BPM). Approximate — expect ±10 BPM variation."
  Mode: "Include a genre or style label as the first term. Sets the tonal character."
  Lyrics_field: "Use structure labels only for instrumentals: [Intro] [Inst] [Transition] [Build Up] [Interlude] [Outro]"
stable_styles:
  - style: "Duet"
    behavior: "Two-voice arrangement"
  - style: "A Cappella"
    behavior: "Voice-only, no backing track"
  - style: "Shepard Scale"
    behavior: "Continuously ascending/descending perceptual pitch illusion"
  - style: "Blues Scale"
    behavior: "Blues-characteristic scale and harmonic feel"
  - style: "Hip-hop"
    behavior: "Boom-bap or trap-adjacent production"
  - style: "R&B"
    behavior: "Smooth, chord-rich, soulful groove"
  - style: "Funk"
    behavior: "Groove-forward, syncopated rhythm, slap bass character"
  - style: "Lofi"
    behavior: "Dusty, warm, low-fidelity textured production"
  - style: "Jazz"
    behavior: "Swing feel, harmonic complexity"
  - style: "80s Minneapolis Sound"
    behavior: "Prince-influenced funk-pop, synth-forward"
  - style: "C-Pop"
    behavior: "Mainland Chinese pop production style"
  - style: "C-Rap"
    behavior: "Chinese hip-hop/rap style"
  - style: "J-Pop"
    behavior: "Japanese pop production and melodic style"
  - style: "Anime"
    behavior: "Anime OST energy — orchestral or J-pop adjacent"
  - style: "City Pop"
    behavior: "80s Japanese city pop — mellow, warm, bass-forward"
gotchas:
  - "BPM is approximate — rendered output typically varies ±10 BPM from specified value"
  - "Instrumental length — instrumental tracks cap at approximately 1 minute regardless of prompt"
  - "Humming — instrumental tracks may include occasional background vocal humming"
  - "Project-specific — add gotchas here as discovered through real usage"
---

# MiniMax Music-2.5

## Purpose
MiniMax Music-2.5 model — prompt formula, parameters, stable styles, and known behaviours for AI music generation.

## Status: draft

## Provider: MiniMax

## Model: Music-2.5

## Prompt Formula

Structure: **Style Description** + **Emotional Atmosphere** + **Instrumental Arrangement** + **Dynamic Characteristics**

Use the labelled breakdown to compose, then combine into a single prompt for submission:

```
Style: [genre/subgenre, BPM if needed]
Mood: [emotional atmosphere, energy level]
Arrangement: [instruments, textures, layers]
Dynamic: [structural shape, contrast, evolution]
Combined: [full prompt — paste this directly into MiniMax]
```

**Example:**
```
Style: Alternative rock, 134 BPM
Mood: anxious and desperate energy
Arrangement: distorted guitar riffs, punchy drums, raw male vocals, funky bassline
Dynamic: dynamic shifts from quiet spoken-word verses to explosive powerful choruses
Combined: Alternative rock with funky bassline, 134 BPM, anxious and desperate energy, dynamic shifts from quiet spoken-word verses to explosive powerful choruses, distorted guitar riffs, punchy drums, raw male vocals
```

## Parameters

**BPM** — Define a specific value (e.g. `134 BPM`). Approximate — expect ±10 BPM variation in output.

**Mode** — Include a genre or style label as the first term. Sets the tonal character of the output.

**Lyrics field (instrumental mode)** — Use structure labels only to generate instrumentals with no vocals:
```
[Intro]
[Inst]
[Transition]
[Build Up]
[Interlude]
[Outro]
```

## Stable Styles

Styles that consistently produce recognisable and reliable output:

| Style | Behaviour |
|-------|-----------|
| Duet | Two-voice arrangement |
| A Cappella | Voice-only, no backing track |
| Shepard Scale | Continuously ascending/descending perceptual pitch illusion |
| Blues Scale | Blues-characteristic scale and harmonic feel |
| Hip-hop | Boom-bap or trap-adjacent production |
| R&B | Smooth, chord-rich, soulful groove |
| Funk | Groove-forward, syncopated rhythm, slap bass character |
| Lofi | Dusty, warm, low-fidelity textured production |
| Jazz | Swing feel, harmonic complexity |
| 80s Minneapolis Sound | Prince-influenced funk-pop, synth-forward |
| C-Pop | Mainland Chinese pop production style |
| C-Rap | Chinese hip-hop/rap style |
| J-Pop | Japanese pop production and melodic style |
| Anime | Anime OST energy — orchestral or J-pop adjacent |
| City Pop | 80s Japanese city pop — mellow, warm, bass-forward |

## Gotchas

- **BPM is approximate** — rendered output typically varies ±10 BPM from specified value
- **Instrumental length** — instrumental tracks cap at approximately 1 minute regardless of prompt
- **Humming** — instrumental tracks may include occasional background vocal humming
- **Project-specific** — add gotchas here as discovered through real usage

## Output Format

Submit the **Combined** line from the Prompt Formula output.

The labelled breakdown (Style/Mood/Arrangement/Dynamic) is for internal composition use — it helps isolate and adjust individual dimensions before submitting. Do not submit the breakdown to MiniMax.

## Validated Patterns

*Populate through real usage testing — see genre files for genre-level observations*

## Known Limitations

*Populate through real usage testing — see genre files for genre-level observations*
