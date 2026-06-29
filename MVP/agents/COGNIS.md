# Cognis - Parent Orchestrator

> **Name Origin**: Latin "cognoscere" — "to recognize and know"
> **Role**: The knowing mind that runs the entire engine

---

## What It Does

Cognis is the **parent agent** that coordinates the entire engagement pipeline. Rather than a single monolithic brain, Cognis delegates to specialist child agents. It routes each money moment to the right children, weighs what they return, and makes the final call.

---

## Responsibilities

1. **Event Routing**: Receive events from Sensis and determine which agents to invoke
2. **Agent Coordination**: Call each specialist in order: Memoris → Auguris → Lexis → Arbis
3. **Decision Synthesis**: Weigh inputs from all agents and make the final call
4. **Action Dispatch**: Hand the chosen action to Nuntis for delivery
5. **Learning Loop**: Receive feedback from Vigilis to improve future decisions

---

## Orchestration Flow

```
Event happens
    ↓
Sensis picks up the event
    ↓
Cognis (parent) orchestrates:
    ↓
Memoris knows the customer
    ↓
Auguris predicts what may happen
    ↓
Lexis checks the rules
    ↓
Arbis picks the best action
    ↓
Nuntis sends the message
    ↓
Vigilis checks the result and learns
    ↓
Feedback → Cognis (next decision is sharper)
```

---

## MVP API Endpoints

```python
POST /api/cognis/event
  - Receives raw events from Sensis
  - Triggers orchestration pipeline
  - Returns: action_id, status

GET /api/cognis/decision/{decision_id}
  - Returns full decision trace
  - Shows: inputs, scores, selected action, reasoning

GET /api/cognis/health
  - Health check endpoint
```

---

## MVP Implementation Notes

- Start with rule-based triggers (salary change, financial stress)
- No ML model in Phase 1 — rules only
- Surface actions in in-app feed
- Log all decisions for audit

---

## Dependencies

| Agent | Purpose |
|-------|---------|
| Sensis | Provides ingested events |
| Memoris | Provides customer profiles |
| Auguris | Provides ML scores (Phase 2+) |
| Lexis | Provides compliance checks |
| Arbis | Provides action recommendations |
| Nuntis | Delivers selected actions |
| Vigilis | Provides outcome feedback |
