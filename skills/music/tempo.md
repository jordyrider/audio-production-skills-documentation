---
type: skill
status: stub
---

# Tempo

## Purpose
Domain skill covering BPM ranges, tempo descriptors, and generic tempo language for audio production prompting. Use this file in two directions: look up a BPM range to understand its descriptor and feel, or look up a feel to find a suitable BPM target.

## Status: draft

---

## Core Concepts

Tempo is how fast or slow a piece moves, measured in BPM (beats per minute). There are three ways to specify it in a prompt, in descending order of precision:

1. **Specific BPM** — a number, e.g. `120 BPM`. Most precise. Reliability depends on the model — consult the Model Notes section.
2. **Tempo descriptor** — a classical or musical term, e.g. `Adagio`, `Allegro`. Expressive and widely understood, but imprecise by nature.
3. **Generic term** — `slow`, `medium`, `fast`. Broadly understood but the least reliable for predictable output. Use only when precision is not needed.

Prefer specific BPM when precision matters and the model supports it. Prefer tempo descriptors when you want expressive language without a hard number. Generic terms are a fallback.

---

## BPM → Descriptor

Use this when you know the BPM target and want to understand the feel, or to find the right descriptor for a prompt.

| BPM Range | Descriptor | Feel / Character |
|-----------|------------|-----------------|
| < 50 | Grave | Extremely slow, heavy, solemn — rarely used; reserved for deeply funerary or dramatic contexts |
| 50–65 | Largo | Very slow, broad, spacious — cinematic gravity, grief, weight |
| 65–75 | Adagio | Slow and stately — expressive, tender, lyrical |
| 75–92 | Andante | Walking pace — relaxed, flowing, lo-fi and ballad territory |
| 92–110 | Moderato | Moderate — steady, grounded, functional; comfortable mid-range |
| 110–125 | Allegretto | Lively but unhurried — upbeat without being driving |
| 125–145 | Allegro | Fast, energetic, driving — dance, pop, uptempo |
| 145–175 | Vivace | Very fast, lively, urgent — intense energy, excitement |
| 175+ | Presto / Prestissimo | Extremely fast — frantic, overwhelming; uncommon in most production contexts |

### Half-time note
Trap and hip-hop tracks are often notated at double the felt tempo — a track that feels like 70 BPM may be written as 140 BPM. When prompting, use the felt BPM for most models unless you know the model expects notated BPM. Specifying `140 BPM trap` and `70 BPM trap` may produce different results.

---

## Descriptor → BPM

Use this when you start from a feel or energy level and need to choose a BPM target or descriptor. Groups share a family resemblance, not an exact match.

### Very Slow / Solemn / Heavy
**Grave** (<50), **Largo** (50–65)

Best for: grief themes, cinematic weight, deeply emotional underscore, meditative or ceremonial content

### Slow / Expressive / Lyrical
**Adagio** (65–75), **Andante** (75–92)

Best for: ballads, romantic scenes, lo-fi, reflective content, tender cinematic moments

### Mid-tempo / Steady / Functional
**Moderato** (92–110)

Best for: corporate, lifestyle, background music, pop underscore, content that needs to move without demanding attention

### Upbeat / Lively / Forward-moving
**Allegretto** (110–125), **Allegro** (125–145)

Best for: upbeat pop, energetic indie, dance-adjacent, motivational content, bright commercial tracks

### Fast / Intense / Driving
**Vivace** (145–175)

Best for: EDM, drum and bass, chase sequences, high-energy action, euphoric builds

### Extremely Fast
**Presto / Prestissimo** (175+)

Best for: frantic action, extreme EDM subgenres, comedic effect — use deliberately and sparingly

---

## Generic Terms

`slow`, `medium`, `fast` are understood by most models but are the least reliable for consistent output. Use when approximate tempo is acceptable or when combining with genre cues that already imply a BPM range.

| Term | Approximate BPM | Equivalent descriptor range |
|------|----------------|----------------------------|
| slow | < 80 BPM | Largo → Andante |
| medium / mid-tempo | 90–120 BPM | Moderato → Allegretto |
| fast | > 130 BPM | Allegro → Vivace |

Generic terms work better when reinforced by genre context. `slow trap` or `fast drum and bass` is more useful than `slow` or `fast` alone, because the genre already anchors an expected BPM range.

---

## Translation Layer

How to choose which form of tempo specification to use.

### When to use specific BPM
Use a number when:
- You need precise tempo control
- The model is known to respond reliably to BPM values (see model notes)
- The output will be layered, looped, or synced to picture

**Prompt example:** `lo-fi hip hop, 85 BPM, melancholic, piano and vinyl crackle`

### When to use a tempo descriptor
Use a descriptor when:
- You want expressive or emotive language over a hard number
- The model does not respond well to BPM values
- The feel of tempo matters more than the exact value

**Prompt example:** `lo-fi hip hop, Andante, melancholic, piano and vinyl crackle`

### When to use generic terms
Use slow/medium/fast when:
- Approximate tempo is acceptable
- The genre context already implies a plausible BPM range
- You are writing a rough or exploratory prompt

**Prompt example:** `slow lo-fi hip hop, melancholic, piano and vinyl crackle`

### Combining approaches
Including both a BPM value and a descriptor reinforces the tempo target and is generally safer:

**Prompt example:** `lo-fi hip hop, 85 BPM, Andante, melancholic, piano and vinyl crackle`

---

## Model Notes

Tempo and BPM behaviour varies by model — consult the relevant model file for how to include tempo information in prompts.

- **MiniMax Music-2.5** — accepts explicit BPM values; output varies ±10 BPM from the specified value. See `skills/tools/minimax/music-2.5.md`.

---

## Still Testing
- Whether tempo descriptors (Adagio, Allegro) produce meaningfully different results from equivalent BPM values in MiniMax
- Half-time BPM behaviour — whether `140 BPM trap` vs `70 BPM trap` produces different felt tempos
- Whether generic terms produce consistent results when anchored by genre context
