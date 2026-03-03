---
type: supergenre
status: stub
scope: null
sub_genres: null
canva_use_cases: null
---

# Super-Genre Template

## Purpose
Reference schema for super-genre descriptor files. Each super-genre folder has one of these as its entry point. Claude reads this first to orient within the cluster, then loads the specific sub-genre file.

## Status: stub

---

## Scope
What this super-genre cluster covers — the range of styles, eras, and sub-genres that fall under this umbrella. 2–4 sentences. Defines the boundaries so it's clear what belongs here and what doesn't.

## Sub-Genres
All sub-genres within this cluster, drawn from musicmap.info. Mark which have skill files built and which don't.

| Sub-Genre | Era / Notes | Skill File | Status |
|-----------|------------|-----------|--------|
| Example | 1970s–present | `example.md` | stub |
| Example | 1980s–1990s | — | not started |

## Disambiguation
Common ambiguous terms and what they likely mean in context. Use this to route to the right sub-genre file when the user's request is vague or uses a shorthand that could mean multiple things.

| Term / Phrase | Likely Means | Route to |
|---------------|-------------|---------|
| "R&B" (generic) | Contemporary R&B or soul | — |
| "something funky" | Funk or neo-soul | `funk.md` |

## Canva Use Cases
Cross-sub-genre use cases common across this whole cluster. Specific Canva contexts where any style within this super-genre fits well.

## Routing
Which file to read for which request. Supersedes the disambiguation table for common patterns.

| If the user wants... | Read |
|---------------------|------|
| — | — |
