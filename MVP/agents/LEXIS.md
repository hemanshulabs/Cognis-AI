# Lexis - Rules Engine & Compliance

> **Name Origin**: Latin "lex" — "law"
> **Role**: The guardian of Cognis — ensures all actions comply with regulations

---

## What It Does

Lexis enforces eligibility, frequency caps, and regulatory guardrails. Nothing reaches a customer until it clears the SBI and RBI guidelines.

---

## Responsibilities

1. **Regulatory Compliance**: Enforce RBI/SBI banking regulations
2. **Frequency Capping**: Limit message frequency per customer
3. **Quiet Hours**: Block sends during restricted hours
4. **Eligibility Checks**: Validate customer qualifies for action
5. **Audit Logging**: Record all rule evaluations

---

## MVP Rule-Based Triggers

### Trigger 1: Salary Change
```python
def detect_salary_change(user_id, events):
    salary_events = [e for e in events if e.event_type == 'salary_credit']
    if len(salary_events) >= 2:
        latest = salary_events[-1].amount
        previous = salary_events[-2].amount
        if abs(latest - previous) / previous > 0.1:  # 10% change
            return {"trigger": "salary_change", "change_pct": (latest-previous)/previous}
    return None
```

### Trigger 2: Financial Stress
```python
def detect_financial_stress(user_id, profile):
    if profile.low_balance_streak >= 3:
        return {"trigger": "financial_stress", "streak": profile.low_balance_streak}
    if profile.stress_score > 70:
        return {"trigger": "financial_stress", "score": profile.stress_score}
    return None
```

---

## Rules Configuration

```json
{
  "rules": [
    {
      "id": "R001",
      "name": "sms_frequency_cap",
      "channel": "sms",
      "max_count": 3,
      "period": "daily"
    },
    {
      "id": "R002",
      "name": "quiet_hours",
      "channels": ["sms", "push", "email"],
      "start_hour": 21,
      "end_hour": 8
    }
  ]
}
```

---

## MVP API Endpoints

```python
POST /api/lexis/evaluate
  - Evaluate action against all rules
  - Body: { user_id, action_type, channel, timestamp }
  - Returns: eligibility result

GET /api/lexis/rules
  - List all active rules
  - Returns: [ { rule } ]
```

---

## MVP Implementation Notes

- Start with 2 triggers: salary change, financial stress
- No ML in Phase 1 — rules only
- All rejections must have audit trail
