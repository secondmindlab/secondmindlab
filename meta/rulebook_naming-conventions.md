# 🏛 Rulebook: Naming Conventions

> A canonical guide for naming structure across the Second Mind OS Lab
>
> _Optimized for clarity, scale, and cross-layer interoperability_

---

### WHY — Naming as System Hygiene

Naming is not cosmetic — it's cognitive infra.

This rulebook exists to:

- Eliminate micro-decisions (no re-decide)
- Maintain lab clarity across depth and time
- Enable scalable structure across pages, logs, and systems
- Align human cognition with system parsing

### TOP-LEVEL PAGE STRUCTURE

| Layer             | Naming Convention | Purpose                                  |
| ----------------- | ----------------- | ---------------------------------------- |
| **Core Layer**    | `core`            | OS models, principles, mental frameworks |
| **Logs Layer**    | `logs`            | Atomic trace logs, iteration outcomes    |
| **Rhythm Layer**  | `rhythm`          | Weekly synthesis, momentum tracking      |
| **Library Layer** | `library`         | Distilled research, papers, mappings     |
| **Meta Layer**    | `meta`            | Control plane, ops, protocols, rulebooks |
| **Experiments**   | `experiment`      | Prototypes, system sketches, infra tests |

Max depth: 3

→ Avoid over-nesting (e.g., `/core/decision/x.md` is too deep → flatten)

## NAMING STRUCTURE RULES

### Good Patterns (Preferred)

- `/core/principle_mental-model-index.md`
- `/logs/2025-04_rearchitecting-from-open-cs.md`
- `/meta/decision-log_2025-04_infra-layer-choice.md`
- `/rhythm/2025-W15_weekly-reflection.md`
- `/library/mapping_cs-infra.md`

### Anti-Patterns (To Avoid)

- `Core`, `Meta`, `Library` (folder-thinking, not namespace)
- `/pattern/log_x.md` (if `Pattern` folder does not exist)
- Nested deeper than 3 levels
- Date-prefixed filenames (`2025-04_...`) → use `Logs::2025-04::...`

## TEMPLATES

Standard page scaffolds:

### Log Entry

```
/logs/2025-04_infra-shift-from-open-cs.md
→ type: log
→ includes: context, system trace, decision, outcome, notes
```

### Decision Log

```
/meta/decision-log_2025-04_shift-to-ecs.md
→ captures one infra/pattern shift with traceability
```

### Principle

```
/core/principle_feedback-loop-design.md
→ long-form foundation, evergreen
```

## STRUCTURE ENFORCEMENT STRATEGY

- Naming reviewed quarterly during Meta sync
- No new folder added without namespace alignment
- All logs pass through `/logs/YYYY-MM_title.md` format
- Rulebook updates go through versioned `/meta/rulebook_*`

---

> _Powered by Second Mind OS_
