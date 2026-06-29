# Cognis Agent System - Overview

## Project: Cognis AI Banking Engagement Platform

**Hackathon**: SBI Hackathon @ GFF 2026
**Goal**: AI-Driven Financial Digital Engagement Engine
**MVP Timeline**: 24-48 hours

---

## What is Cognis?

Most banking apps send the same message to everyone. A batch campaign goes out on a schedule, regardless of whether it fits the customer's situation. **Cognis takes a different approach** — it follows real activity, detects patterns and life events as they occur, and responds with an action that is useful at that moment.

Cognis (Latin: "to recognize and know") is the parent orchestrator that runs the engine. It coordinates a family of specialist child sub-agents, each owning one job in the pipeline.

---

## How It Works

```
1. Something happens (a swipe, a login, an EMI is due)
2. Sensis notices it right away (events flow in as they occur)
3. Memoris remembers the person (balance, spending, recent salary)
4. Auguris + Lexis + Arbis decide what would genuinely help
5. Nuntis reaches out gently (in-app, email, or SMS)
6. Customer responds their way (open, act, or ignore)
7. Vigilis watches, and each time we get a little sharper
```

---

## The Agent Family

| Agent | Role | Latin Root |
|-------|------|------------|
| **Cognis** | Parent orchestrator | cognoscere — "to recognize and know" |
| **Sensis** | Sense & ingest events | sentio — "to sense" |
| **Memoris** | Customer 360 & memory | memoria — "memory" |
| **Auguris** | Predict churn/propensity/stress | augur — "to foretell" |
| **Lexis** | Rules & compliance | lex — "law" |
| **Arbis** | Pick the next best action | arbiter — "the one who decides" |
| **Nuntis** | Deliver across channels | nuntius — "messenger" |
| **Vigilis** | Monitor outcomes & learn | vigil — "the watchman" |

---

## MVP Tech Stack (Hackathon)

| Layer | Technology |
|-------|-----------|
| **Frontend** | Next.js + Tailwind CSS (Vercel free tier) |
| **Backend** | Node.js + TypeScript (Express/Fastify) or Supabase Edge Functions |
| **Database** | Supabase (Postgres, Auth, Realtime) |
| **Event Streaming** | Supabase Realtime + DB triggers |
| **ML/AI** | Python + FastAPI + XGBoost/scikit-learn |
| **Channels** | In-app, Email, SMS |

---

## MVP Data Model (Supabase)

```sql
USERS
  - id (uuid PK)
  - full_name (text)
  - email (text)
  - segment (text)
  - created_at (timestamptz)

EVENTS
  - id (uuid PK)
  - user_id (uuid FK → USERS)
  - event_type (text)
  - payload (jsonb)
  - amount (numeric)
  - occurred_at (timestamptz)

PROFILES
  - user_id (uuid PK → USERS)
  - balance (numeric)
  - spend_30d (numeric)
  - low_balance_streak (int)
  - salary_latest (numeric)
  - stress_score (numeric)
  - updated_at (timestamptz)

ACTIONS
  - id (uuid PK)
  - user_id (uuid FK → USERS)
  - trigger (text)
  - nba_action (text)
  - channel (text)
  - status (text)
  - created_at (timestamptz)
```

---

## Phase 1: Hackathon MVP (24-48 hours)

1. Set up Supabase tables: users, events, profiles, actions
2. Build `/events` API + Supabase Realtime subscription
3. Two rule-based triggers:
   - **Salary change**: compare latest salary event vs previous
   - **Financial stress**: several low-balance or missed-payment events within 30 days
4. Rule-based NBA (no model yet) — surface actions in in-app feed
5. Simple admin dashboard (trigger counts, actions, conversions)

---

## Phase 2: ML & Smarter NBA

- Export Supabase data to notebook
- Train churn/stress model (XGBoost)
- Stand up scoring service (FastAPI)
- Feed scores into NBA for better ranking

---

## Phase 3: Production

- Replace event stream with Kafka/Flink
- Full CDP with identity resolution + feature store
- Multi-tenancy, RBAC, governance

---

## API Endpoints (MVP)

```
POST /events          — Ingest a banking event
GET  /profile/:id     — Get customer 360 profile
GET  /actions/:id     — Get action details + reasoning
GET  /dashboard       — Admin metrics
```

---

## Key Metrics

- Event processing latency
- Action conversion rate
- Customer engagement rate
- Decision accuracy

---

## How to Use This Documentation

Each agent's markdown file contains:
1. **Role**: What this agent does
2. **Responsibilities**: Specific tasks owned
3. **Inputs/Outputs**: Data flow
4. **Tech Stack**: Implementation details
5. **API Endpoints**: Interface contracts
6. **MVP Scope**: What to build in hackathon

Start with this README, then read your specific agent file.
