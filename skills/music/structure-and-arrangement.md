---
type: skill
status: stub
---

# Structure & Arrangement

## Purpose
Domain skill covering song structure and arrangement for audio production prompting. Use this file to understand section types, energy arcs, and how to fill each section with the right instrumentation and density — and how to communicate all of it in prompts.

## Status: draft

---

## Core Concepts

Structure and arrangement are two sides of the same decision:

- **Structure** — the shape of the track: which sections exist, in what order, and how energy moves through them.
- **Arrangement** — what fills each section: which instruments are playing, how dense the layers are, what's foregrounded, what drops out.

In prompting, you almost never describe one without the other. A verse isn't just a section — it's a sparse section with just piano and a lead melody. A chorus isn't just a peak — it's a full section with drums, bass, layered synths, and a prominent hook. Structure gives the shape; arrangement gives it texture and weight.

Most AI music models respond better to **dynamic language** (describing energy arc and contrast) than to explicit section labels or per-section specs. Use structural and arrangement vocabulary to plan what you want, then translate it into dynamic descriptors — unless the model supports structural input directly (see Translation Layer).

---

## Section Reference

What each section type means musically. Use this to understand the role of a section when planning track shape.

| Section | Function | Energy |
|---------|----------|--------|
| **Intro** | Establishes mood, tempo, and sonic character before the main theme enters | Low → building |
| **Verse** | Narrative/storytelling section. Repeats with varying content, builds toward chorus | Low–Medium |
| **Pre-Chorus** | Builds tension and anticipation between verse and chorus | Medium → rising |
| **Chorus** | Emotional peak and hook — the most memorable, repeated moment | High |
| **Post-Chorus** | Follows the chorus — can cool down or sustain hook energy | Medium–High |
| **Bridge** | Contrast section, usually appears once. Breaks the verse/chorus cycle with new harmonic or melodic territory | Varies |
| **Breakdown** | Energy drops dramatically — minimal instrumentation, creates space and contrast before a peak | Low |
| **Build Up** | Rising intensity toward a peak section — layers accumulate, tension increases | Low → peak |
| **Drop** | Peak moment after a buildup — maximum energy, common in electronic and dance contexts | High |
| **Interlude** | Transitional passage between larger sections — ambient, instrumental, or spoken | Varies |
| **Outro** | Closing section — resolves the track, mirrors the intro, or fades to silence | Low → fading |
| **Inst** | Purely instrumental passage — replaces vocal content with melodic or rhythmic focus | Varies |

---

## Energy Shapes

Start from the energy arc, then assign sections and arrangement. Common shapes:

### Steady Climb
Builds continuously from intro to final chorus. Good for motivational, anthemic, and hype content.

Sections: Intro → Verse → Pre-Chorus → Chorus → Verse → Pre-Chorus → Chorus (fuller) → Outro

### Drop Structure
Quiet opening, dramatic peak, resolution. Common in electronic, cinematic, and trailer contexts.

Sections: Intro → Build Up → Drop → Breakdown → Build Up → Drop → Outro

### Verse-Chorus Cycle
Balanced tension and release. Standard pop and song-form structure.

Sections: Intro → Verse → Chorus → Verse → Chorus → Bridge → Chorus → Outro

### Ambient / Linear
No clear sectional contrast — continuous evolution of mood and texture. Lo-fi, background, focus music.

Describe as: gradual evolution, slowly shifting layers, no hard transitions.

---

## Arrangement Concepts

### Instrumentation
The specific instruments and sounds present in the track. In prompting, instrumentation language anchors genre and mood.

- Be specific where it matters: `acoustic guitar` not just `guitar`, `upright bass` not just `bass`
- Lead instruments carry the melody or hook; rhythm instruments hold the groove; pads and textures fill the space
- Fewer specified instruments gives the model more interpretive freedom — useful when you want stylistic variety

### Density & Layering
How many elements are active at once. One of the most reliable levers in prompting.

- **Sparse** — few elements, lots of space. Signals intimacy, tension, early sections.
- **Full** — many layered elements, dense texture. Signals peak energy, chorus, drop.
- **Gradual build** — layers add incrementally. Use for build-up sections and transitions.

Common descriptors: `sparse`, `stripped back`, `minimal`, `full`, `dense`, `layered`, `wall of sound`, `open`, `spacious`

### Section Contrast
What changes between sections is as important as what stays the same. Contrast creates movement and prevents a track from feeling flat.

- Verse → Chorus: drop instruments in the verse so the chorus feels like an arrival
- Breakdown → Drop: reduce to almost nothing before the peak so the drop hits harder
- Contrast doesn't require specifying every section — describe the extremes and let the model interpolate

### Foreground vs Background
What's featured and what's supporting.

- **Foreground** — the lead element: a vocal, a melody, a synth riff
- **Midground** — rhythmic and harmonic support: drums, bass, chords
- **Background** — texture and ambience: pads, reverb tails, atmospheric layers

Naming what's foregrounded helps the model prioritize: `piano-led`, `vocal-forward`, `synth lead over a driving rhythm section`

### Texture
The overall character of the sonic space.

Common descriptors: `lush`, `airy`, `tight`, `punchy`, `warm`, `cold`, `gritty`, `polished`, `ethereal`, `raw`

Texture language works best alongside instrumentation: `warm acoustic guitar over lush string pads` communicates more than either word alone.

---

## Best Practices

### General
- Build contrast between sections — the more different the low points are from the high points, the more impactful the peaks
- Reserve your fullest arrangement for the final chorus or drop — don't peak too early
- Use density as a structural tool: stripping back the verse is often more effective than adding more to the chorus

### AI-Specific Limitations
- **Per-section arrangement control is limited.** Most models process the full prompt and generate a track that averages the description. Precise per-section specs (e.g. "only piano in the verse") are rarely respected.
- **Dynamic language outperforms section-by-section specs.** Describing the arc ("starts sparse, builds to a full explosive climax") produces more reliable results than listing what's in each section.
- **Fewer specifics = more model latitude.** Over-specifying instrumentation can produce unnatural outputs. Describe the feel and energy; let the model fill in details.
- **MiniMax is the exception.** Structural labels in the lyrics field give more direct section control. See Translation Layer.

---

## Translation Layer

### Dynamic language (universal)
Describe the energy arc and arrangement contrast — works across all models:

- `builds from a sparse quiet intro to a full explosive chorus`
- `stripped-back verse with just piano, opens up into a dense full-band chorus`
- `starts minimal, layers accumulate throughout, drops back at the end`
- `dynamic contrast between intimate verses and powerful chorus hits`
- `wall of sound at the peak, spacious and open in the breakdown`

### Instrumentation in prompts
Lead with what's most important to the sound. Stack specifics only where they matter:

- `acoustic guitar, warm bass, light brushed drums` — enough to anchor a folk/singer-songwriter feel
- `heavy synth bass, layered pads, punchy kick` — enough to anchor electronic/dance
- `piano-led, with strings entering at the chorus` — describes arrangement arc in one line

### Structural labels in the lyrics field (MiniMax)
MiniMax Music-2.5 supports explicit section labels in the **lyrics field** when generating instrumentals:

```
[Intro]
[Inst]
[Build Up]
[Chorus]
[Interlude]
[Outro]
```

See the MiniMax Music-2.5 model file for the full label set and correct usage.

### Combining both
Use dynamic language in the main prompt alongside labels in the lyrics field where supported:

Main prompt: `cinematic orchestral, builds from quiet strings to a full dramatic peak, sparse open intro`
Lyrics field: `[Intro][Build Up][Drop][Outro]`

---

## Model Notes

Structure and arrangement handling varies by model — consult the relevant model file for label syntax and per-section control support.

---

## Still Testing
- Whether dynamic language reliably produces intended section contrast in MiniMax output
- Whether section order in the MiniMax lyrics field is respected or treated as loose guidance
- Whether bridge sections are reliably distinct from verses in AI-generated output
- How much instrumentation specificity helps vs hurts model output quality
- Whether foreground/background language affects mix balance in generated tracks
