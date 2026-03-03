---
type: skill
status: stub
---

# Keys and Mood

## Purpose
Domain skill covering musical keys and their emotional/tonal impact in audio production prompting. Use this file in two directions: look up a key to understand its mood, or look up a mood to find suitable keys.

## Status: draft

---

## Core Concepts

A musical key sets the tonal centre of a piece and has a strong bearing on emotional colour. Two dimensions matter:

- **Mode** — Major keys tend toward brightness, confidence, and positive emotion. Minor keys tend toward seriousness, melancholy, and introspection. This is a tendency, not a rule — tempo, instrumentation, and arrangement all modify it.
- **Pitch level** — Higher-pitched keys (E, B, F#) feel brighter and more piercing. Lower-pitched keys (F, Bb, Eb) feel warmer, fuller, or heavier depending on mode.

AI music models vary in how reliably they respond to explicit key specification. Some respond better to mood language than to key names. Use the **Translation Layer** section below to decide which approach to use per model.

---

## Key → Mood

All 24 keys. Use this when you know the key and want to understand what mood to expect, or to verify a key choice is right for the emotional target.

### Major Keys

| Key | Mood / Character |
|-----|-----------------|
| **C major** | Clean, neutral, pure, innocent — a blank-slate brightness with no strong emotional colour |
| **G major** | Warm, pastoral, gentle, tender — open and natural, slightly folk-adjacent |
| **D major** | Triumphant, brilliant, energetic, victorious — classic keys for anthems and uplift |
| **A major** | Confident, joyful, optimistic, forward-moving |
| **E major** | Bright, radiant, piercing — almost blinding in high-energy contexts |
| **B major** | Intense, wild, harsh brightness — edgy for a major key |
| **F# / Gb major** | Passionate, searching, unusual brightness with an undercurrent of tension |
| **Db / C# major** | Tender, searching, slightly melancholic despite being major — soft romantic quality |
| **Ab / G# major** | Dreamy, lush, romantic, plush — warm and enveloping |
| **Eb major** | Heroic, devotional, bold — often used for hymns, fanfares, epic moments |
| **Bb major** | Cheerful, elegant, smooth — bright without being sharp |
| **F major** | Calm, pastoral, friendly, serene — warmer and softer than C major |

### Minor Keys

| Key | Mood / Character |
|-----|-----------------|
| **A minor** | Melancholic, introspective, earthy, natural — the "default" minor, familiar and plaintive |
| **E minor** | Restless, sorrowful, deeply introspective — common in emotional and dark productions |
| **B minor** | Solitary, brooding, quietly dark — serious without being dramatic |
| **F# minor** | Gloomy, passionate, heavy — emotional weight with an edge |
| **C# / Db minor** | Sorrowful, tragic, deeply heavy — associated with grief and loss |
| **G# / Ab minor** | Anxious, resentful, dark tension — unsettling |
| **D# / Eb minor** | Profound sorrow, brooding, intense darkness |
| **Bb / A# minor** | Mournful, tragic, desolate |
| **F minor** | Passionate, melancholic, dramatic — deep feeling, emotionally charged |
| **C minor** | Dark, somber, dramatic, classical tragedy — powerful and serious |
| **G minor** | Serious, melancholic, noble — restrained darkness |
| **D minor** | Moody, melancholic, serious — slightly warmer than C minor |

---

## Mood → Key

Use this when you start from a feeling and need to choose a key. Groups are loose — keys within a group share a family resemblance, not an exact match.

### Bright / Joyful / Uplifting
**C major** (clean), **G major** (warm), **D major** (triumphant), **A major** (confident), **Bb major** (smooth), **F major** (calm)

Best for: corporate, pop, lifestyle, motivational content

### Radiant / Intense Brightness
**E major**, **B major**, **F# major**

Best for: energetic pop, high-energy dance, euphoric moments — use carefully, can feel piercing

### Romantic / Dreamy / Lush
**Ab major**, **Db major**, **F major**

Best for: romantic scenes, lo-fi, ambient, soft cinematic moments

### Heroic / Epic / Bold
**Eb major**, **D major**, **B major**

Best for: trailers, fanfares, power anthems, action-adjacent content

### Melancholic / Introspective / Bittersweet
**A minor**, **D minor**, **G minor**, **E minor**

Best for: emotional content, lo-fi, singer-songwriter adjacent, reflective moods

### Dark / Dramatic / Serious
**C minor**, **F minor**, **B minor**, **F# minor**

Best for: dramatic cinematic, dark pop, tense underscore, villain energy

### Tragic / Heavy / Grief
**C# minor**, **Eb minor**, **Bb minor**, **Ab minor**

Best for: intense emotional moments, loss themes, deep drama — use sparingly

---

## Translation Layer

How to bridge key knowledge to prompts depending on what the model responds to.

### When to specify the key directly
Some models (and some production workflows) respond reliably to explicit key names in prompts. Use this approach when:
- The user has specified a key
- You need precise harmonic control for a composition that will be layered or remixed
- The model is known to handle key specification well (see model notes)

**Prompt example:** `melancholic lo-fi hip hop, A minor, slow BPM, piano and vinyl crackle`

### When to use mood language instead
If the model ignores or misinterprets key names, use emotional and tonal descriptors drawn from the Key → Mood table above.

**Prompt example:** `melancholic, introspective, earthy lo-fi hip hop, slow BPM, piano and vinyl crackle`

Both routes should produce similar results — the key table tells you what mood language maps to which key, so you can translate freely in either direction.

### Combining both
Including both a key and mood descriptors reinforces the tonal target and is generally safer:

**Prompt example:** `melancholic and introspective lo-fi hip hop in A minor, slow BPM, piano and vinyl crackle`

---

## Model Notes

Key specification behavior varies by model — consult the relevant model file for how to include key information in prompts.

---

## Still Testing
- Whether explicit key names reliably affect MiniMax output vs mood descriptors
- Whether flat vs sharp enharmonic spelling matters (e.g. Db vs C# in a prompt)
- Edge cases where tempo/genre override the expected mood of a key
