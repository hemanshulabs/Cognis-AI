# Arbis - Next-Best-Action Selection

> **Name Origin**: Latin "arbiter" — "the one who decides"
> **Role**: The judge of Cognis — weighs scores, rules, and value to pick the best action

---

## What It Does

Arbis weighs scores, rules, and value to pick the single best next action. It settles on the one action that fits that person right now.

---

## Responsibilities

1. **Candidate Generation**: Generate potential actions based on triggers
2. **Eligibility Check**: Request Lexis to validate candidates
3. **Scoring**: Rank candidates by expected value
4. **Selection**: Pick the single best action
5. **Context Passing**: Package action with full context for delivery

---

## Action Types (MVP)

| Action | Trigger | Channel |
|--------|---------|---------|
| `salary_optimize` | salary_change | in-app |
| `savings_offer` | salary_change | in-app |
| `low_balance_alert` | financial_stress | in-app |
| `spending_insight` | financial_stress | in-app |
| `emi_reminder` | emi_due | in-app |

---

## Decision Logic

```python
def select_best_action(user_id, trigger, profile, eligible_actions):
    candidates = []
    
    for action in eligible_actions:
        expected_value = action.base_value * action.urgency_multiplier
        candidates.append({
            "action": action,
            "expected_value": expected_value
        })
    
    candidates.sort(key=lambda x: x.expected_value, reverse=True)
    best = candidates[0]
    
    return {
        "selected_action": best.action,
        "expected_value": best.expected_value,
        "reasoning": generate_reasoning(best)
    }
```

---

## MVP API Endpoints

```python
POST /api/arbis/select
  - Select best action for customer
  - Body: { user_id, trigger, profile, context }
  - Returns: selected action + reasoning

GET /api/arbis/actions
  - List available action types
  - Returns: [ { action_type, base_value, channel } ]
```

---

## MVP Implementation Notes

- Phase 1: Simple rule-based selection
- Phase 2: ML scores influence ranking
- All decisions must be logged with reasoning
