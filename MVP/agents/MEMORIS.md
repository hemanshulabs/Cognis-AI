# Memoris - Customer 360° Profile & Memory

> **Name Origin**: Latin "memoria" — "memory"
> **Role**: The memory of Cognis — builds and remembers each customer's profile

---

## What It Does

Memoris builds and remembers each customer's profile, identity, and history. Each customer's balance, spending, and history stay in one place — the Customer 360° view.

---

## Responsibilities

1. **Identity Resolution**: Link customer data across systems
2. **Profile Aggregation**: Merge data from banking, cards, loans
3. **Feature Computation**: Calculate derived features (spend_30d, stress_score)
4. **Profile Storage**: Maintain real-time profiles
5. **Profile Retrieval**: Serve profiles for decisions

---

## Customer Profile (MVP Schema)

```sql
PROFILES
  - user_id (uuid PK → USERS)
  - balance (numeric) — current account balance
  - spend_30d (numeric) — total spend in last 30 days
  - low_balance_streak (int) — consecutive days below threshold
  - salary_latest (numeric) — most recent salary amount
  - stress_score (numeric) — calculated financial stress (0-100)
  - updated_at (timestamptz)
```

---

## MVP API Endpoints

```python
GET /api/profile/:id
  - Get complete customer profile
  - Returns: full profile object

PUT /api/profile/:id
  - Update profile attributes
  - Body: { field: value, ... }
  - Returns: updated profile

GET /api/profile/:id/history
  - Get historical profile snapshots
  - Returns: [ { timestamp, profile } ]
```

---

## Feature Computation Rules

```python
spend_30d = SUM(transactions WHERE date > now() - 30 days)

low_balance_streak = COUNT(consecutive days WHERE balance < threshold)

salary_latest = MAX(credit WHERE category = 'salary' AND date > now() - 45 days)

stress_score = f(balance, spend_30d, low_balance_streak)
```

---

## MVP Implementation Notes

- Use Supabase Postgres for storage
- Profiles must be eventually consistent
- All profile access must be logged for audit
