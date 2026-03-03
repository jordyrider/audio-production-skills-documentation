---
type: skill
status: stub
---

# Effects

## Purpose
Reference index of audio effects used in music production prompting. Use this to understand what each effect does and when to apply it. Effects can be applied globally (to the whole track) or to specific instruments. Cross-referenced by genre docs and model docs (for stability ratings).

## Status: draft

---

## Global Effects

Applied to the overall track or mix character.

| Effect | What it does | Common use |
|--------|-------------|------------|
| **Room / Reverb** | Adds spatial depth and ambience to the whole mix | Lo-fi, cinematic, ambient, live-sounding tracks |
| **Tape saturation** | Warm harmonic distortion, slight compression — analog character | Vintage, warm, retro, lo-fi |
| **Lo-fi treatment** | Bitcrushing, vinyl crackle, tape hiss, frequency reduction | Lo-fi hip hop, nostalgic, vintage |
| **Sidechain compression** | Rhythmic pumping effect tied to kick drum | Electronic, dance, house, EDM |
| **Dynamic compression** | Controls overall loudness and transient punch | Most genres — affects perceived energy |
| **Vinyl noise** | Surface noise, crackle, warmth | Lo-fi, vintage, nostalgic |

---

## Instrumental Effects

Applied to specific instruments or elements.

| Effect | What it does | Common instruments |
|--------|-------------|-------------------|
| **Reverb** | Adds space, depth, and room around the sound | Keys, vocals, guitars, pads, drums |
| **Delay** | Echo/repeat — rhythmic or ambient | Guitar, vocals, synths, keys |
| **Distortion** | Aggressive harmonic saturation, grit | Electric guitar, bass, synths |
| **Overdrive** | Softer distortion — warmth and edge without harshness | Electric guitar, bass, keys |
| **Saturation** | Subtle analog warmth, harmonics | Keys, bass, drums, master bus |
| **Chorus** | Thickens sound by layering slightly detuned copies | Keys, guitar, synths, bass |
| **Flanger** | Sweeping jet-like modulation | Guitar, synths |
| **Phaser** | Swirling phase modulation | Guitar, keys, synths |
| **Tremolo** | Rhythmic volume oscillation | Guitar, keys, organ |
| **Vibrato** | Rhythmic pitch oscillation | Guitar, vocals, keys |
| **Wah** | Expressive filter sweep | Electric guitar, bass |
| **Compression** | Controls dynamics, adds punch and sustain | Drums, bass, vocals, guitars |
| **Gating** | Cuts signal below a threshold — tight or choppy sound | Drums (gated reverb), synths |
| **EQ** | Frequency shaping — boost or cut specific ranges | All instruments |
| **Auto-tune / Pitch correction** | Corrects or stylises pitch | Vocals |
| **Vocoder** | Robotic or harmonised vocal texture | Vocals, synths |
| **Bitcrusher** | Digital degradation — lo-fi grit | Synths, drums, samples |

---

## Notes

- Effects in prompts work best as descriptors, not technical specs — `heavy reverb` works, `reverb time 2.4s` does not
- Global effects are best communicated as aesthetic language: `warm analog feel`, `lo-fi tape sound`, `crisp and dry`
- Instrument-level effects can be specified alongside instrumentation: `reverb-drenched piano`, `distorted bass`, `chorus guitar`
- Model support for specific effects varies — consult the relevant model file for stability ratings
