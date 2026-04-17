# FP&A Reimagined

**[Live Demo →](https://fpa-reimagined.vercel.app)**

An interactive React demo built for internal change management. The goal is to shift colleagues away from thinking about AI as a chatbot bolted onto existing processes, toward completely reimagining workflows, org structures, and the skills and responsibilities that define each role — through the lens of an AI & Analytics Center of Excellence with embedded BU Pods.

---

## The Problem It Solves

Most AI adoption in finance stalls at the tool layer. Teams add a chatbot to their existing workflow, automate a report, or buy a forecasting plugin — and call it transformation. The mental model stays the same: finance as a reporting function, analysts as data wranglers, business partners as translators.

This demo makes the case that the shift is not about tools. It's about what the role is actually for — and how a hub-and-spoke operating model (CoE + BU Pods) changes who builds, who governs, and who turns insight into action.

By putting colleagues in the seat of each role and forcing a choice between the old playbook and the AI-native move, the demo makes the mindset gap visible. Not as a slide. As a lived experience.

---

## How It Works

The app has three ways to explore the reimagined org:

### Play a Role
Pick one of eleven roles and walk through three sequential decisions in a realistic scenario. Each decision presents two options — one rooted in how the role has always worked, one in how it needs to work. After each choice, a consequence reveals what that decision produces in practice. At the end, you receive a completion grade (Stuck / Resistant / Transitioning / AI-Native), a role transformation diagram, an animated before/after time allocation breakdown, and a full skill profile shift.

### The Org Journey
Walk the entire org in sequence — one role at a time across three cross-functional scenarios (Annual Planning Cycle, Quarterly Board Pack, New Product Launch Evaluation). For each role, you first see a full overview: the role's responsibilities, what flows in, what it produces, and how the role is changing. Then you face the decision. After all eleven roles, you see an org-level outcome showing how the cumulative choices reflect the readiness of the whole organisation, not just one function.

### Explore the Org
- **Org Chart** — A two-column visual of the AI & Analytics CoE (Sr. Director → core roles → BI & Viz team) and the embedded BU Pod (Sr. FBP → FP&A Analyst + Data Analyst). Every node is clickable.
- **All Roles** — A side-by-side summary of all eleven roles. Each card shows the role transformation, an interactive time allocation toggle (TODAY vs AI), and the fading and emerging skill sets.

---

## The Org Structure

### CoE — Shared Capabilities (8 roles)

| Role | Focus |
|---|---|
| Sr. Director, Analytics | CoE strategy, roadmap, standards, adoption |
| Product Owner | Use case discovery, backlog management, business-to-technical translation |
| Data Scientist | ML/statistical models, driver analysis, predictive/prescriptive insight |
| Data Engineer | Data pipelines, curated datasets, reusable data models |
| ML Ops Engineer | Model deployment, monitoring, automation, production reliability |
| Model Governance | Controls, documentation, validation, risk management for AI/ML |
| Viz Architect *(BI & Viz)* | Semantic layers, dashboard standards, self-service reporting |
| Storytelling Analyst *(BI & Viz)* | Insight-to-narrative conversion, executive-ready materials |

### BU Pod — Embedded per Business Unit (3 roles)

| Role | Focus |
|---|---|
| Senior Finance Business Partner | BU leadership relationship, business question framing, performance management |
| FP&A Analyst | Budgeting, forecasting, variance analysis, decision support |
| Data Analyst | Ad hoc analysis, CoE dashboard interpretation in BU context |

### Accountability Split

- **CoE owns:** tools, models, governance, scalable analytics products
- **BU Pods own:** business insight, action, BU-specific context and decision support

---

## Org Scenarios (Cross-Functional Journeys)

Each scenario walks all 11 roles through the same business situation, showing how CoE and BU Pod roles interact:

1. **Annual Planning Cycle** — 12 BUs, 6 weeks, the process that eats the quarter
2. **Quarterly Board Pack** — 90 pages, 3 decisions the board needs to make
3. **New Product Launch Evaluation** — high-stakes, time-compressed go/no-go

Roles are tagged by involvement type:
- `both` — active in today's org and in the CoE model
- `future-only` — new CoE capability that didn't exist before
- `today-only` — work that gets automated or redesigned away

---

## Design Principles

**Decisions over declarations.** The demo works because it puts people in the role rather than describing the role to them. The insight lands differently when you've just chosen the wrong path and read what it produces.

**Consequences, not scores.** The grade at the end matters less than the consequence text after each choice. That's where the real content is — a precise, specific description of what the old playbook actually produces in practice, and what the AI-native move makes possible instead.

**The mindset shift is the hard part.** Every piece of copy in the demo is written to make this point: the tools are available. The bottleneck is how people think the role should work. The scenarios are designed to surface that gap, not to advocate for specific software.

**Role-first, not function-first.** The framing is always personal. Not "finance needs to change" — but "here's what your week looks like now, and here's what it could look like." The before/after time allocation and skill profile are specific to each role, not generic.

**No abstraction without grounding.** Every future-state claim is anchored in a concrete consequence: what gets built, who gets called, what the CFO says in the review, how the audit goes. The reimagined roles are not aspirational slides — they're described through outcomes.

---

## Running Locally

Requires Node.js 16 or later.

```bash
# Install dependencies
npm install

# Start the development server
npm start
```

The app runs at `http://localhost:3000` with hot reload enabled.

```bash
# Build for production
npm run build
```

The production build outputs to the `build/` folder as a static site — no backend required. It can be hosted on any static file server, internal SharePoint, or deployed via a CDN.

---

## Tech Stack

- **React 19** via Create React App
- **No external UI libraries** — all styling is inline CSS
- **No backend** — fully static, all data hardcoded
- **No routing library** — navigation is managed through component state
- **Google Fonts** — Playfair Display (headings) and DM Sans (body)

All eleven roles, their scenarios, decisions, consequences, time allocation data, and skill profiles live in `PERSONAS` and `ORG_SCENARIOS` arrays in `src/App.js`. Adding or editing a role means editing those arrays — no database, no CMS, no API.
