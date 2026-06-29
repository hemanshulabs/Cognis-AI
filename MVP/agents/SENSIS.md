# Sensis - Event Ingestion & Sensing

> **Name Origin**: Latin "sentio" — "to sense"
> **Role**: The senses of Cognis — detects and ingests all banking events

---

## What It Does

Sensis senses and ingests every transaction, login, and balance change the moment it happens. Events arrive over HTTP, are validated against a schema, and are published to the event bus.

---

## Responsibilities

1. **Event Detection**: Monitor banking systems for relevant events
2. **Event Validation**: Ensure events meet schema requirements
3. **Event Enrichment**: Add metadata (timestamp, source, priority)
4. **Event Publishing**: Push validated events to the event stream
5. **Real-time**: Use Supabase Realtime for hackathon MVP

---

## Event Types

| Event Type | Description | Priority |
|------------|-------------|----------|
| `transaction` | Any card/UPI/NEFT transaction | High |
| `login` | User authentication event | Medium |
| `balance_update` | Balance changed | High |
| `emi_due` | EMI payment due | High |
| `salary_credit` | Salary detected | High |
| `low_balance` | Balance below threshold | Critical |

---

## MVP API Endpoints

```python
POST /api/events
  - Ingest a single event
  - Body: { user_id, event_type, payload, amount, timestamp }
  - Returns: event_id, status

POST /api/events/batch
  - Ingest multiple events
  - Body: [ { event }, ... ]
  - Returns: [ { event_id, status } ]

GET /api/events/{event_id}
  - Get event status
  - Returns: event details, processing status
```

---

## Event Schema

```json
{
  "user_id": "uuid",
  "event_type": "transaction|login|balance_update|...",
  "payload": {
    "amount": 5000.00,
    "currency": "INR",
    "merchant": "Amazon",
    "category": "shopping"
  },
  "amount": 5000.00,
  "timestamp": "2026-06-29T10:30:00Z"
}
```

---

## MVP Implementation Notes

- Use Supabase Realtime + DB triggers for hackathon
- No Kafka needed in Phase 1
- Events must be idempotent (duplicate detection)
- All events must have trace IDs for debugging
