# Auguris - ML Predictions & Scoring

> **Name Origin**: Latin "augur" — "to foretell"
> **Role**: The prophet of Cognis — forecasts churn, propensity, and financial stress

---

## What It Does

Auguris forecasts churn, propensity, and financial stress from behavioural signals. It uses machine learning models to score customers and predict their behavior.

---

## Responsibilities

1. **Churn Prediction**: Identify customers likely to leave
2. **Propensity Scoring**: Predict likelihood to adopt products
3. **Stress Detection**: Detect financial stress indicators
4. **Risk Assessment**: Calculate engagement risk
5. **Model Management**: Serve and version ML models

---

## Prediction Models (Phase 2)

| Model | Target | Output |
|-------|--------|--------|
| `churn_model` | Will customer leave in 90 days? | 0-1 probability |
| `stress_model` | Is customer financially stressed? | 0-100 score |
| `propensity_model` | Will customer adopt product? | 0-1 probability |

---

## MVP API Endpoints

```python
POST /api/auguris/score
  - Score a customer across all models
  - Body: { user_id, features }
  - Returns: scores object

GET /api/auguris/models
  - List available models
  - Returns: [ { name, version, status } ]
```

---

## Scoring Output

```json
{
  "user_id": "uuid",
  "scores": {
    "churn_risk": 0.23,
    "stress_score": 35,
    "propensity_savings": 0.67
  },
  "model_version": "v1.0.0",
  "scoring_timestamp": "2026-06-29T10:30:00Z"
}
```

---

## MVP Implementation Notes

- Phase 1: Rule-based scoring only (no ML model)
- Phase 2: Train XGBoost model on Supabase data
- Use FastAPI for scoring service
- All predictions must be logged
