## Stack Used

- **Runtime:** Bun
- **HTTP Framework:** Hono
- **Authentication:** Better Auth
- **ORM:** Drizzle
- **Database:** PostgreSQL
- **Email:** Mailgun

---

## Setup

### 1. Prerequisites

- [Bun](https://bun.com/)
- PostgreSQL  
  - Either installed locally
  - Or via Docker / Docker Compose

---

### 2. Install Dependencies

```bash
bun install
```

### Generate Better-Auth schema
bunx --bun @better-auth/cli@1.3.4 generate --config ./src/lib/auth.ts

bunx --bun @better-auth/cli generate