---
type: skill
status: draft
---

# Voice Characteristics

## Purpose
Provider-agnostic Layer 1 voice vocabulary reference. Defines the core descriptors used across all voice category files (Settings Guidance sections). This file is tool-independent — no provider parameters here. Translation notes indicate how each concept maps to specific tools.

## Register

Register is the perceived pitch placement and tonal weight of a voice. It describes where the voice "sits" in the frequency range and how much natural gravity or brightness it carries.

- **Low register** — chest voice, gravitas, depth. Sounds grounded and authoritative. Often reads as mature or serious.
- **Mid register** — natural conversational pitch. Neither bright nor heavy. The most neutral and widely usable baseline.
- **High register** — bright, light, youthful energy. Reads as approachable, upbeat, or excitable depending on expressiveness.

Layer 1 descriptors: "low register", "chest voice", "mid-range", "warm mid-range", "bright", "authoritative chest voice", "light and airy", "grounded".

**Translation note:** On ElevenLabs, register goals are achieved through voice selection — choose a voice whose natural baseline matches the target register. There is no parameter to shift pitch. On MiniMax, use the `pitch` parameter (±12 semitones) to adjust baseline register on top of the selected voice's natural pitch.

## Pacing

Pacing is the speed and rhythm of word delivery. It is distinct from energy — you can have slow, urgent pacing or fast, relaxed pacing.

- **Overall tempo** — words per minute. Slow pacing gives weight to each word; fast pacing creates urgency or lightness.
- **Syllable density** — how compressed or spacious each syllable feels within the flow. Rushed syllables blur; deliberate ones land.
- **Rhythmic variation** — even pacing sounds mechanical; dynamic pacing (fast-slow-fast) sounds human and keeps listener attention.

Pacing is a primary lever for perceived confidence and emotional weight. A short pause before a key phrase signals more authority than filling every beat.

Layer 1 descriptors: "deliberate", "measured", "unhurried", "rushed", "staccato", "drawn out", "clipped", "flowing", "brisk", "languid".

## Energy

Energy is emotional intensity and urgency — not loudness. This distinction is critical: energy and volume are independent variables.

- **Low energy** — calm, subdued, understated. The voice is present but not pressing. Suitable for ambient narration, meditation, background explainer.
- **High energy** — urgent, intense, forward-leaning. The voice presses toward the listener. Suitable for calls to action, sports commentary, hype.
- **Decoupled example** — whispered urgency is high energy with low volume. A slow shout is high volume with moderate energy. These are different creative targets.

Energy is set at the script level as much as the voice level — word choice, sentence rhythm, and punctuation all drive energy output from AI voice models.

Layer 1 descriptors: "low energy", "high energy", "urgent", "subdued", "intense", "measured intensity", "forward-leaning", "calm", "restrained urgency".

## Expressiveness

Expressiveness describes the range of emotional variation across a delivery. High expressiveness means wide pitch and timing swings, strong emotional colouring. Low expressiveness is flat and even.

The spectrum:
- **Flat / deadpan** — minimal pitch variation, even timing, no emotional colour. Deliberately neutral. Used for ironic meme-quote content, dry narration, or contexts where emotion should come from the script, not the voice.
- **Natural conversational** — moderate variation, light emotional colouring. Sounds human without sounding theatrical.
- **Animated** — noticeable pitch swings, clear emotional presence. Engaging and varied.
- **Exaggerated** — theatrical range, large dynamic swings. Suited to character voices, children's content, or comedy.

Deadpan is a valid and deliberate creative target — do not treat low expressiveness as a deficiency.

Layer 1 descriptors: "deadpan", "flat", "dry", "expressive", "animated", "exaggerated", "naturalistic", "restrained", "theatrical".

## Pause & Breath

Pauses and breath are structural tools, not absences of content. They shape rhythm, signal authority, and humanise delivery.

**Types of pause:**
- **Micro-pause** — beat-length, comma-equivalent. Separates phrases without breaking momentum.
- **Dramatic pause** — held silence before or after a key word. Creates anticipation and emphasis. Placing the pause *before* the key word (not after) signals authority and intentionality.
- **Breath as rhythm** — audible inhale as a pacing beat. Marks the start of a new thought and signals a human speaker.

Breath humanises AI voice. The absence of audible breath is one of the most reliable AI voice tells. Writing breath beats into the script — via commas, dashes, or explicit [pause] markers — is the primary technique to counteract robotic flatness.

Layer 1 descriptors: "breath-present", "pause before key word", "micro-pause", "dramatic pause", "beat", "inhale beat".

## Warmth vs Authority

Warmth and authority are the two poles of a continuous spectrum. Most effective voices blend both — the ratio shifts based on context.

- **Warmth-leaning** — intimacy, relatability, softness. Slightly lower energy, somewhat slower pacing, breath-present, upward inflection on occasional phrases. Feels like a conversation, not a presentation.
- **Authority-leaning** — credibility, certainty, directness. Clear enunciation, consistent register, deliberate pacing, minimal upward inflection. Feels confident rather than warm.
- **Blended** — the most broadly effective zone. Warm enough to feel approachable, authoritative enough to be believed. A trusted advisor tone.

Upward inflection (vocal fry or rising pitch at end of statements) reduces authority. Downward-closing statements project conviction. Warmth can coexist with authority when pacing is deliberate and breath is present.

Layer 1 descriptors: "warm", "intimate", "approachable", "authoritative", "credible", "direct", "conversational", "trusted", "confident-yet-warm".

## Anti-AI Patterns

AI voice models produce characteristic tells when driven by undifferentiated prose. These patterns are script-level problems with script-level fixes.

**1. Even pacing**
- Tell: every sentence arrives at the same tempo. The voice sounds metronomic.
- Fix: vary sentence length. Use short punchy sentences next to longer flowing ones. The rhythm variation forces pacing change.

**2. Monotone pitch**
- Tell: pitch barely shifts across the entire read. Sounds flat and robotic even if expressiveness is set high.
- Fix: write with punctuation that forces pitch change — questions, exclamations, ellipses mid-thought, em-dashes for interruption. Punctuation is pitch instruction.

**3. No breath**
- Tell: continuous delivery with no audible inhale. Unmistakably synthetic.
- Fix: write breath beats into the script using commas, dashes, or [pause] markers at natural inhale points. One breath every 2–3 sentences is a baseline.

**4. Robotic rhythm**
- Tell: formal prose rhythm — complete sentences, consistent clause length, no fragments. Reads cleanly on the page but sounds unnatural spoken.
- Fix: use contractions, fragments, and natural spoken language patterns. "You'll want to do this." not "You will want to perform this action." Fragments mid-thought are rhythm, not error.

**5. Consistent energy throughout**
- Tell: the energy level stays the same from opener to close. No arc, no build, no release.
- Fix: design energy arc into the script. Opener can be elevated, middle settles to conversational, CTA or closer lifts again. Map energy as a shape, not a flat line.

**6. Upward inflection on every statement**
- Tell: declarative statements sound like questions. Constant vocal uplift reads as uncertain or millennial-coded.
- Fix: use periods deliberately. Avoid ending declarative sentences with phrasing that trails upward. Rewrite "This is really going to help you?" as "This will help you." Period. Close it.
