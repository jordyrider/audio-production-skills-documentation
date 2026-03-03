# Phase 3: YAML Index Files, JSON Schema, and Markdown Frontmatter Validation System - Context

**Gathered:** 2026-03-03
**Status:** Ready for planning

<domain>
## Phase Boundary

Add machine-readable structure to the knowledge base: YAML frontmatter on every markdown file, per-folder YAML index files for hierarchy and registry, JSON schemas to validate both, and a CLI validator script wired to VS Code's Problems panel. The knowledge base remains markdown-first — this layer enables querying and validation without changing how Claude reads the files.

</domain>

<decisions>
## Implementation Decisions

### Frontmatter depth
- All machine-readable fields move to frontmatter — everything that could be queried or validated
- Prose/narrative stays in the markdown body (explanations, context, guidance)
- Genre frontmatter includes: `type`, `status`, `parent`, `mood` (array), `bpm_range`, `tags` (array), `instrumentation` (array), `effects` (array), `canva_use_cases` (array), `prompting_rules` (array), `validated_patterns` (array of `{prompt, output}` objects), `known_limitations` (array), `still_testing` (array)
- Tool frontmatter includes: `type`, `status`, `provider`, `model`, `parameters` (object), `stable_styles` (array of `{style, behavior}` objects), `gotchas` (array)
- Voice category frontmatter includes: `type`, `status`, `delivery_style`, `example_lines` (array), `voice_recommendations` (array), `settings` (object)
- No machine-readable prompt formula template — Claude generates prompts from the structured data, it doesn't need a template string

### Index file design
- One index YAML per folder — not a single top-level index
- Index files are registries, not routing layers — `system-prompt.md` keeps its job of teaching Claude how to navigate
- `skills/music/genre/index.yaml` is the authoritative source of genre IDs — other indexes that reference genres must use these IDs
- Tool indexes reference genre IDs from the genre index for cross-reference validation (e.g. `stable_styles` genre names must resolve)
- Stable Styles on tool files IS the genre compatibility info — no separate compatibility layer needed

### Validator UX
- YAML index files: Red Hat YAML VS Code extension with schema associations in `.vscode/settings.json` — inline squiggles as you edit
- Markdown frontmatter: CLI script (Node) that outputs errors in a consistent line format
- CLI script wired as a VS Code Task with a problem matcher — errors from both sources land in the Problems panel
- Run on demand (Command Palette or keybind), not a pre-commit hook

### Schema strictness
- Strict validation: required fields must be present, enums must be valid values, cross-references must resolve
- Stub exception: when `status: stub`, content fields can be `null` or `[]` — presence required, values not
- When `status: draft` or `validated`: content fields must have actual values, no nulls
- Cross-reference checks always run regardless of status (a broken `parent` reference is always an error)
- Known enums: `status` → `stub|draft|validated`, `type` → `genre|supergenre|tool|skill|voice-category`

</decisions>

<specifics>
## Specific Ideas

- Primary use case: "I want to make lo-fi music, what's the go with this model?" — Claude queries genre frontmatter by mood/tags, reads tool frontmatter for parameters and stable styles, generates the MiniMax prompt
- The LLM is the query engine and prompt generator — structured frontmatter provides fast, reliable context, not a template engine
- Per-folder indexes because different folders serve different purposes — genre index is a genre registry, tool index tracks model-level compatibility info

</specifics>

<code_context>
## Existing Code Insights

### Existing content that moves to frontmatter
- `music-2.5.md` Stable Styles table → `stable_styles` array in frontmatter
- `music-2.5.md` Parameters section → `parameters` object in frontmatter
- `music-2.5.md` Gotchas list → `gotchas` array in frontmatter
- Genre files: Sonic DNA, instrumentation, mood, BPM → structured frontmatter fields

### Established patterns
- Status system (`stub → draft → validated`) already consistent across all files — maps directly to schema strictness rules
- File type categories already implicit in folder structure — making them explicit as `type` frontmatter enum
- 79% of files are stubs — most frontmatter content fields will be `null` initially, which is valid under the stub exception

### Integration points
- `.vscode/settings.json` — YAML schema associations for index files
- `.vscode/tasks.json` — validator task with problem matcher
- `skills/music/genre/index.yaml` — authoritative genre ID registry, referenced by tool indexes

</code_context>

<deferred>
## Deferred Ideas

None — discussion stayed within phase scope.

</deferred>

---

*Phase: 03-yaml-index-files-json-schema-and-markdown-frontmatter-validation-system*
*Context gathered: 2026-03-03*
