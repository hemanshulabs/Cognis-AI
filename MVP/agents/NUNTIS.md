# Nuntis - Multi-Channel Delivery

> **Name Origin**: Latin "nuntius" — "messenger"
> **Role**: The messenger of Cognis — carries the chosen message to the right channel

---

## What It Does

Nuntis carries the chosen message to the right channel (app, email, SMS, CRM) at the right moment.

---

## Responsibilities

1. **Channel Selection**: Determine optimal channel for action
2. **Message Formatting**: Format content for each channel
3. **Delivery Execution**: Send via channel providers
4. **Status Tracking**: Track delivery status
5. **Retry Handling**: Retry failed deliveries

---

## Channels (MVP)

| Channel | Provider | Use Case |
|---------|----------|----------|
| **In-App** | Next.js frontend | Primary MVP channel |
| **Email** | SendGrid | Detailed offers |
| **SMS** | Twilio | Urgent alerts |

---

## Message Templates

```json
{
  "salary_optimize": {
    "in_app": {
      "title": "Your salary landed!",
      "body": "We noticed your salary of ₹{{salary}} came in. Here's how to make the most of it."
    }
  },
  "low_balance_alert": {
    "in_app": {
      "title": "Heads up on your balance",
      "body": "Your balance has been below ₹{{threshold}} for {{streak}} days. Here are some options."
    }
  }
}
```

---

## MVP API Endpoints

```python
POST /api/nuntis/deliver
  - Deliver action to customer
  - Body: { user_id, action, channel, message }
  - Returns: delivery_id, status

GET /api/nuntis/delivery/:id
  - Get delivery status
  - Returns: status, timestamp
```

---

## MVP Implementation Notes

- Focus on in-app feed for hackathon
- Email/SMS can be mocked in Phase 1
- All deliveries must be idempotent
