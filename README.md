# FP&A Reimagined

**[Live Demo →](https://fpa-reimagined.vercel.app)**

An interactive React demo built for internal change management. The goal is to shift colleagues away from thinking about AI as a chatbot bolted onto existing processes, toward completely reimagining workflows, org structures, and the skills and responsibilities that define each finance role.

---

## The Problem It Solves

Most AI adoption in finance stalls at the tool layer. Teams add a chatbot to their existing workflow, automate a report, or buy a forecasting plugin — and call it transformation. The mental model stays the same: finance as a reporting function, analysts as data wranglers, business partners as translators.

This demo makes the case that the shift is not about tools. It's about what the role is actually for.

By putting colleagues in the seat of each finance persona and forcing a choice between the old playbook and the AI-native move, the demo makes the mindset gap visible. Not as a slide. As a lived experience.

---

## How It Works

The app has three ways to explore the reimagined finance org:

### Play a Role
Pick one of six personas and walk through three sequential decisions in a realistic scenario. Each decision presents two options — one rooted in how the role has always worked, one in how it needs to work. After each choice, a consequence reveals what that decision produces in practice. At the end, you receive a completion grade (Stuck / Resistant / Transitioning / AI-Native), a role transformation diagram, an animated before/after time allocation breakdown, and a full skill profile shift.

### The Org Journey
Walk the entire finance org in sequence — one role at a time. For each role, you first see a full overview: the role's responsibilities, what flows in, what it produces, and how the role is changing. Then you face the decision. After all six roles, you see an org-level outcome showing how the cumulative choices reflect the readiness of the whole organisation, not just one function.

### Explore the Org
- **Org Chart** — A visual hierarchy of the AI-native finance org, from CFO down through Corp FP&A, into the business-facing and analytical roles, with the Finance AI Engineer shown as a horizontal infrastructure layer that powers all of them. Every node is clickable.
- **All Roles** — A side-by-side summary of all six personas. Each card shows the role transformation, an interactive time allocation toggle (TODAY vs AI), and the fading and emerging skill sets.

---

## The Six Personas

| Current Title | Reimagined Title | Status |
|---|---|---|
| FP&A Analyst | Strategic Finance Partner | Evolving |
| Finance AI Engineer | Finance AI Engineer | Net new role |
| Finance Business Partner | Embedded Strategy Advisor | Evolving |
| Corp FP&A Lead | AI Portfolio Orchestrator | Evolving |
| Data & Reporting Analyst | Insight Designer | Merging / Evolving |
| CFO | Chief Intelligence Officer | Transforming |

### FP&A Analyst → Strategic Finance Partner
Spends 70% of the week gathering data. Rarely has time to think. In the reimagined role, AI handles the gathering — the analyst owns the thinking, the story, and the recommendation. The scenario: Q3 forecast due Friday, revenue tracking 8% below plan, leadership wants answers.

### Finance AI Engineer *(net new)*
This role doesn't exist at most companies yet. It will be one of the most critical hires in finance. Owns the AI infrastructure powering the entire function — models, pipelines, governance, and the translation layer between finance logic and technical implementation. The scenario: the rolling forecast model is drifting, and nobody knows why.

### Finance Business Partner → Embedded Strategy Advisor
Caught between finance requests and business demands — a translator without authority. In the reimagined role, AI generates the analysis and the FBP generates the direction. The scenario: the business unit wants to launch a new product line and needs a finance view in 48 hours.

### Corp FP&A Lead → AI Portfolio Orchestrator
Currently a consolidation factory — spending the quarter collecting, cleaning, and correcting BU submissions. In the reimagined role, the focus shifts to designing the planning system itself: the logic, the models, the governance, and the challenge function. The scenario: annual planning cycle kicks off across 12 business units.

### Data & Reporting Analyst → Insight Designer
A report factory. Builds the same decks every month. Rarely asked what they actually think. The reimagined role is an editorial one — curating AI-generated outputs into clear, decision-ready intelligence, and teaching the business to self-serve. The scenario: the CFO says the monthly board pack has too much data and not enough insight. Again.

### CFO → Chief Intelligence Officer
Currently the guardian of historical accuracy — trusted for what happened, rarely the first call for what's next. In the reimagined role, the CFO is the architect of the company's decision intelligence: turning AI capability into competitive advantage, and redesigning what it means for finance to lead. The scenario: the board asks whether this company is ready to compete in an AI-native landscape.

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

All six personas, their scenarios, decisions, consequences, time allocation data, and skill profiles live in a single `PERSONAS` array in `src/App.js`. Adding or editing a persona means editing that array — no database, no CMS, no API.
