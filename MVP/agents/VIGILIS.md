# Vigilis - Outcome Monitoring & Learning

> **Name Origin**: Latin "vigil" — "the watchman"
> **Role**: The watchful eye — watches every outcome and feeds results back

---

## What It Does

Vigilis watches every outcome, audits the system, and feeds results back so the next call is sharper. Whether a message is acted on or ignored, that shapes what comes next.

---

## Responsibilities

1. **Outcome Tracking**: Monitor customer responses to actions
2. **Conversion Attribution**: Link responses to business outcomes
3. **Performance Analytics**: Calculate action effectiveness
4. **Feedback Loop**: Feed data back to improve models
5. **Alerting**: Detect anomalies in engagement patterns

---

## Outcome Events

| Event | Description |
|-------|-------------|
| `delivered` | Message delivered |
| `opened` | Email/push opened |
| `clicked` | Link clicked |
| `converted` | Desired action taken |
| `ignored` | No response after timeout |

---

## MVP API Endpoints

```python
POST /api/vigilis/outcome
  - Record outcome event
  - Body: { delivery_id, event_type, timestamp }
  - Returns: outcome_id

GET /api/vigilis/analytics
  - Get analytics summary
  - Returns: { delivered, opened, clicked, converted }
```

---

## Admin Dashboard Metrics

```sql
-- Trigger count
SELECT trigger, COUNT(*) FROM actions GROUP BY trigger;

-- Action distribution
SELECT nba_action, COUNT(*) FROM actions GROUP BY nba_action;

-- Conversion rate
SELECT 
  COUNT(CASE WHEN status = 'converted' THEN 1 END) * 100.0 / COUNT(*) as conversion_rate
FROM actions;
```

---

## MVP Implementation Notes

- Track basic outcomes (delivered, opened, converted)
- Simple admin dashboard with counts
- Feed results back to improve trigger logic
