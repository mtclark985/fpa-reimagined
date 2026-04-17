import { useState, useEffect } from "react";

const PERSONAS = [
  // ── COE ROLES ──────────────────────────────────────────────────────────────
  {
    id: "sr-director",
    icon: "✦",
    tag: "COE LEADER",
    tagColor: "#5BC8A0",
    color: "#5BC8A0",
    title: "Sr. Director, Analytics",
    futureTitle: "Sr. Director, Analytics",
    hook: "Analytics scattered across every team. No shared roadmap, no standards, no one accountable for the whole.",
    futureHook: "Owns the CoE strategy and roadmap. Turns fragmented capability into a unified competitive advantage.",
    timeLabels: ["Stakeholder alignment", "Roadmap & strategy", "Standards & governance", "Adoption & enablement"],
    timeBefore: [0, 0, 0, 0],
    timeAfter: [25, 30, 20, 25],
    beforeSkills: ["❌ Role didn't exist", "Analytics owned by IT", "No shared roadmap", "Tool sprawl & duplication", "No investment thesis", "Tribal knowledge only"],
    afterSkills: ["Analytics roadmap ownership", "Investment prioritization", "Stakeholder alignment", "Standards-setting", "Adoption & change management", "CoE capability building"],
    challenge: "You've been handed 14 analytics tools, 6 conflicting revenue definitions, and zero shared roadmap. Leadership wants a 90-day plan.",
    steps: [
      {
        prompt: "Where do you start?",
        options: [
          { label: "Audit every tool. Build a consolidation plan. Present it to leadership.", type: "old", consequence: "You spend 90 days cataloguing the mess. The real problem — no shared definition of what the analytics org is supposed to enable — goes unaddressed." },
          { label: "Map the decisions that matter most to the business. Work backward to what data and models need to exist.", type: "new", consequence: "The roadmap is grounded in business value from day one. Every CoE investment traces to a decision the business needs to make better." }
        ]
      },
      {
        prompt: "Two BU heads want custom analytics solutions built exclusively for their teams.",
        options: [
          { label: "Scope and build each one. Add them to the CoE roadmap as BU-specific workstreams.", type: "old", consequence: "You build two custom solutions. Three more BUs ask for the same. The CoE becomes a custom dev shop. Scalability never arrives." },
          { label: "Identify the shared underlying need. Build one scalable product that serves both — and every future BU.", type: "new", consequence: "One solution ships in the time it would have taken to build one custom tool. The two BUs adopt it. Four more BUs onboard the following quarter. This is what a CoE is for." }
        ]
      },
      {
        prompt: "CoE dashboard adoption is at 20% three months after launch. Leadership is losing confidence.",
        options: [
          { label: "Run a training program. Send how-to guides to every team.", type: "old", consequence: "Attendance is low. Guides go unread. The problem wasn't knowledge — it was that the product didn't fit the workflow. You trained people for a tool they won't use." },
          { label: "Embed with the two lowest-adoption BUs. Diagnose the friction. Fix the product — not the users.", type: "new", consequence: "Two changes to the dashboard solve 80% of the adoption blockers. Adoption hits 70% the following month. The CoE earns a reputation for building things people actually use." }
        ]
      }
    ],
    responsibilities: ["CoE strategy, roadmap & standards", "Investment prioritization & business alignment", "Stakeholder engagement & adoption", "Org capability building"],
    inputs: ["Business priorities & leadership questions", "BU use case pipeline", "CoE team capacity & skill inventory", "Market & technology signals"],
    outputs: ["Analytics roadmap & investment thesis", "Standards & governance frameworks", "Adoption metrics & enablement plans", "CoE performance & value reporting"],
  },
  {
    id: "product-owner",
    icon: "◈",
    tag: "COE ROLE",
    tagColor: "#7EB8D4",
    color: "#7EB8D4",
    title: "Product Owner",
    futureTitle: "Product Owner",
    hook: "BU teams submitted analytics requests into a black hole. Nobody owned the backlog. The most valuable use cases never got built.",
    futureHook: "Bridges CoE capability and BU need. Translates messy business questions into scalable analytics products.",
    timeLabels: ["BU discovery & partnering", "Backlog & prioritization", "Use case translation", "Delivery & adoption"],
    timeBefore: [0, 0, 0, 0],
    timeAfter: [30, 25, 25, 20],
    beforeSkills: ["❌ Role didn't exist", "Requests went directly to data teams", "No backlog management", "Use cases never scoped", "Duplicate builds across BUs", "No adoption tracking"],
    afterSkills: ["Use case discovery & scoping", "Backlog prioritization", "Business-to-technical translation", "Stakeholder management", "Delivery coordination", "Adoption & feedback loops"],
    challenge: "The BU backlog has 40 analytics requests. No priorities, no scoping, no acceptance criteria. The data team is being pulled in every direction.",
    steps: [
      {
        prompt: "How do you bring order to the 40-item backlog?",
        options: [
          { label: "Rank items by number of requestors. Start with the most-requested.", type: "old", consequence: "Popularity ≠ value. The most-requested item turns out to be a report three people look at monthly. Higher-value work gets buried. The data team builds the wrong things faster." },
          { label: "Score each item by business impact, strategic alignment, and CoE reusability. Surface the top 5.", type: "new", consequence: "The backlog becomes a decision-making tool, not a wish list. The data team works on items that move the business — and every 'build once' item serves multiple BUs." }
        ]
      },
      {
        prompt: "A BU lead asks for a custom dashboard. You know it duplicates something already 80% built.",
        options: [
          { label: "Scope the custom build. Log it in the backlog. Assign to the team.", type: "old", consequence: "You build it. Two months later, a second BU asks for the same thing. The CoE has now built the same dashboard three times with three different designs." },
          { label: "Show the BU lead the existing solution. Co-design the 20% that makes it fit their context. Ship in a week.", type: "new", consequence: "The BU gets what they need faster. The CoE reuses 80% of the build. The shared solution becomes the standard — and the next BU request takes hours, not weeks." }
        ]
      },
      {
        prompt: "A newly shipped analytics product has low engagement after 6 weeks.",
        options: [
          { label: "Assume the BU needs more training. Schedule another demo.", type: "old", consequence: "The demo has 4 attendees. The product stays unused. You've shipped something nobody wanted — and the CoE's credibility takes a hit." },
          { label: "Run user interviews with 3 non-adopters. Find out what they actually need. Prioritize two specific changes.", type: "new", consequence: "The two changes take a day to ship. Engagement doubles the following week. The CoE learns to build feedback loops into every product — not just post-launch rescue missions." }
        ]
      }
    ],
    responsibilities: ["BU use case discovery & scoping", "Analytics product backlog management", "Business-to-technical requirements translation", "Delivery coordination & adoption tracking"],
    inputs: ["BU team requests & business questions", "CoE team capacity & active workstreams", "Strategic priorities from Sr. Director", "User feedback & adoption metrics"],
    outputs: ["Prioritized product backlog", "Scoped use case briefs", "Acceptance criteria & delivery milestones", "Adoption reports & feedback loops"],
  },
  {
    id: "data-scientist",
    icon: "⬡",
    tag: "COE ROLE",
    tagColor: "#A78BDB",
    color: "#A78BDB",
    title: "Data Scientist",
    futureTitle: "Data Scientist",
    hook: "Analysis was backward-looking Excel work. Nobody was asking why things happened — let alone what would happen next.",
    futureHook: "Builds the models that power the CoE's predictive and prescriptive intelligence. Turns data into foresight.",
    timeLabels: ["Model development", "Analysis & insight", "BU collaboration", "Documentation & governance"],
    timeBefore: [0, 0, 0, 0],
    timeAfter: [35, 30, 20, 15],
    beforeSkills: ["❌ Role didn't exist", "Descriptive reporting only", "Excel-based ad hoc analysis", "No ML or predictive models", "No driver identification", "Insight buried in data dumps"],
    afterSkills: ["ML model development", "Statistical driver analysis", "Predictive & prescriptive modeling", "Feature engineering", "Model validation & testing", "Insight communication"],
    challenge: "Churn has increased 12% over three quarters. Leadership wants to know why — and what to do. The data exists. No model does.",
    steps: [
      {
        prompt: "How do you start the churn analysis?",
        options: [
          { label: "Pull transaction history. Build a cohort analysis. Share the output with the BU team.", type: "old", consequence: "You identify the 'what' — which cohorts churned. But not the 'why.' Leadership asks the follow-up question you can't answer yet. The analysis is a starting point disguised as a conclusion." },
          { label: "Define the target variable first. Identify candidate drivers. Build a model that ranks their relative importance.", type: "new", consequence: "The model surfaces three drivers accounting for 70% of churn variance. Two are actionable within 90 days. You've shifted the conversation from reporting what happened to recommending what to do." }
        ]
      },
      {
        prompt: "The BU head wants the model to guarantee specific churn reduction targets.",
        options: [
          { label: "Adjust the model assumptions to produce a more favorable output.", type: "old", consequence: "The model looks better. The prediction is worse. When actuals come in, the gap is embarrassing — and trust in the CoE's analytical work takes a significant hit." },
          { label: "Explain the confidence intervals. Show the range of outcomes. Give a recommendation with clear conditions.", type: "new", consequence: "The BU head initially pushes back — then respects the honesty. The CoE builds a reputation for rigorous, defensible analysis. That trust compounds every time a model is put in front of a decision-maker." }
        ]
      },
      {
        prompt: "The model has been running 6 months. Performance has drifted from the initial validation.",
        options: [
          { label: "Note the drift. Recommend a full model rebuild when time allows.", type: "old", consequence: "Decisions continue to be made from a degrading model. Six months later, the drift has influenced a major investment. The rebuild conversation is now much harder." },
          { label: "Diagnose root cause. Is it data drift, feature decay, or a behavioral shift? Retrain the affected layers only.", type: "new", consequence: "Performance is restored in days without a full rebuild. The MLOps engineer adds a monitoring alert so drift is caught automatically going forward. The model ages gracefully instead of silently degrading." }
        ]
      }
    ],
    responsibilities: ["ML & statistical model development", "Driver identification & pattern analysis", "Predictive & prescriptive insight generation", "Model validation, documentation & handoff"],
    inputs: ["Curated datasets from Data Engineering", "Business questions from Product Owner & BU Pods", "Model performance signals from MLOps", "External benchmarks & research"],
    outputs: ["Trained, validated ML models", "Driver & pattern analysis", "Predictive forecasts & prescriptive recommendations", "Model documentation & feature inventories"],
  },
  {
    id: "data-engineer",
    icon: "◉",
    tag: "COE ROLE",
    tagColor: "#6BA8C4",
    color: "#6BA8C4",
    title: "Data Engineer",
    futureTitle: "Data Engineer",
    hook: "Data lived in 8 siloed systems. Every analyst maintained their own extract. Nobody trusted anyone else's numbers.",
    futureHook: "Builds the data foundation everything else depends on. One source of truth. Reusable. Governed. Reliable.",
    timeLabels: ["Pipeline development", "Data model maintenance", "Quality & reliability", "Enabling self-service"],
    timeBefore: [0, 0, 0, 0],
    timeAfter: [30, 25, 25, 20],
    beforeSkills: ["❌ Role didn't exist", "8 siloed source systems", "Manual CSV extracts", "Every analyst owned their own data", "No single source of truth", "Data reconciliation weekly"],
    afterSkills: ["Data pipeline architecture", "Curated dataset design", "Reusable data model development", "Data quality monitoring", "Self-service data enablement", "Lineage & documentation"],
    challenge: "Finance and Sales have two different ARR numbers. Neither team trusts the other's source. A board meeting is in 72 hours.",
    steps: [
      {
        prompt: "How do you resolve the ARR discrepancy?",
        options: [
          { label: "Pull both sources, reconcile manually, identify the delta, document the differences.", type: "old", consequence: "You find the gap but the fix is one-time. The same discrepancy re-emerges next quarter because the root cause — two systems, no shared definition — was never touched." },
          { label: "Trace the lineage. Define the canonical ARR definition. Build a single pipeline that both teams work from.", type: "new", consequence: "The reconciliation takes longer upfront. But it's the last time it happens. Both teams work from one number. Future discrepancies are caught in the pipeline — not at 11pm before a presentation." }
        ]
      },
      {
        prompt: "A Data Scientist needs a new feature for the churn model that isn't in the current data model.",
        options: [
          { label: "Build a one-time extract. Hand it off. Log the request for future inclusion.", type: "old", consequence: "The Data Scientist has their extract. But when the model goes to production, the feature isn't in the pipeline. MLOps can't deploy it. The handoff gap costs two weeks of rework." },
          { label: "Build it properly into the curated dataset. Confirm with MLOps that it's deployable before handing off.", type: "new", consequence: "The feature ships once and works in production immediately. The Data Scientist didn't have to think about the pipeline. The MLOps engineer didn't have to retrofit it. Everyone did their job without tripping over each other." }
        ]
      },
      {
        prompt: "Three BU analysts are pulling raw data directly from the source system to build their own models.",
        options: [
          { label: "Document the issue. Recommend a data governance policy.", type: "old", consequence: "The policy gets written. Nobody enforces it. Direct source pulls continue. In six months you have a shadow analytics ecosystem nobody in the CoE knows about — until a number goes wrong publicly." },
          { label: "Build the curated datasets the BU analysts actually need. Make the governed source easier to use than the raw pull.", type: "new", consequence: "The BU analysts switch because the governed data is better — not because they're forced to. Governance by convenience, not compliance. The shadow ecosystem gradually disappears." }
        ]
      }
    ],
    responsibilities: ["Data pipeline architecture & development", "Curated dataset & data model design", "Data quality monitoring & reliability", "Self-service data enablement for BU Pods & CoE"],
    inputs: ["Source system data & APIs", "Use case requirements from Product Owner", "Feature specs from Data Scientists", "Quality alerts & lineage requests"],
    outputs: ["Production-grade data pipelines", "Curated, reusable datasets", "Data quality dashboards & alerts", "Data model documentation & lineage"],
  },
  {
    id: "mlops-engineer",
    icon: "▣",
    tag: "NEW ROLE",
    tagColor: "#4AADCC",
    color: "#4AADCC",
    title: "ML Ops Engineer",
    futureTitle: "ML Ops Engineer",
    hook: "Models built by data scientists never made it to production. Or they did — once — then degraded silently with no one watching.",
    futureHook: "Closes the gap between model development and business impact. Deploys, monitors, and keeps every model production-reliable.",
    timeLabels: ["Model deployment", "Monitoring & alerting", "Automation & CI/CD", "Reliability & maintenance"],
    timeBefore: [0, 0, 0, 0],
    timeAfter: [30, 30, 25, 15],
    beforeSkills: ["❌ Role didn't exist", "Models never reached production", "No monitoring or drift detection", "Manual deployment by data scientists", "No CI/CD for ML", "Models degraded silently"],
    afterSkills: ["Model deployment & versioning", "Drift detection & alerting", "ML pipeline automation", "Performance monitoring", "CI/CD for ML workflows", "Incident response for models"],
    challenge: "The churn model has been in production for 4 months. Accuracy has dropped 15% since deployment. Nobody in the business knows — yet.",
    steps: [
      {
        prompt: "How do you respond to the drift alert?",
        options: [
          { label: "Notify the Data Scientist. Log the issue. Pause the model until it's retrained.", type: "old", consequence: "The model is offline for three weeks while the retraining queue moves. Decisions that depended on it revert to gut feel. The business loses confidence in AI reliability." },
          { label: "Diagnose the drift type first. Identify which features degraded. Route to the Data Scientist with a root cause brief. Keep the model running with a confidence flag.", type: "new", consequence: "The Data Scientist has exactly what they need to act. The model stays live with appropriate caveats. Retrained in 4 days instead of 3 weeks. The business barely notices there was a problem." }
        ]
      },
      {
        prompt: "A new model from the Data Scientist team is ready to deploy. No staging environment exists.",
        options: [
          { label: "Deploy directly to production. Monitor manually for the first week.", type: "old", consequence: "A feature incompatibility crashes the production pipeline on day two. The board pack scheduled for tomorrow is missing three key figures. The real failure was process." },
          { label: "Build a staging environment first. Run shadow scoring in parallel with production for a week before cutover.", type: "new", consequence: "The incompatibility is caught in staging. Fixed before any business user ever sees it. The deployment is invisible — which is exactly what a good deployment should be." }
        ]
      },
      {
        prompt: "The business wants five new models deployed next quarter.",
        options: [
          { label: "Review each one manually. Build deployment workflows case by case.", type: "old", consequence: "Each deployment takes 3–4 weeks. You're the bottleneck. Three of the five models are still waiting at quarter end. The CoE's delivery speed becomes the thing slowing down the business." },
          { label: "Build standardized deployment templates. Automate the 80% that's the same every time. Focus manual effort on the 20% that's unique.", type: "new", consequence: "Deployment time drops to days. All five models ship on schedule. The CoE's capacity for new work doubles — without adding headcount." }
        ]
      }
    ],
    responsibilities: ["Model deployment & versioning", "Drift detection & performance monitoring", "ML pipeline automation & CI/CD", "Production reliability & incident response"],
    inputs: ["Trained models & specs from Data Scientists", "Data pipeline outputs from Data Engineering", "Performance metrics & drift signals", "Business SLAs & reliability requirements"],
    outputs: ["Production-deployed models", "Monitoring dashboards & drift alerts", "Automated deployment pipelines", "Performance reports & incident logs"],
  },
  {
    id: "model-governance",
    icon: "◫",
    tag: "NEW ROLE",
    tagColor: "#8B9FDB",
    color: "#8B9FDB",
    title: "Model Governance",
    futureTitle: "Model Governance",
    hook: "AI models were black boxes. No documentation, no validation, no risk controls. One audit question away from a serious problem.",
    futureHook: "Makes the CoE's AI defensible. Builds the controls, documentation, and validation that turn models from risk into trust.",
    timeLabels: ["Model documentation & validation", "Risk & controls design", "Audit & compliance", "Governance standards"],
    timeBefore: [0, 0, 0, 0],
    timeAfter: [30, 25, 25, 20],
    beforeSkills: ["❌ Role didn't exist", "No model documentation", "No validation framework", "Black box AI decisions", "No audit trail", "Governance gaps flagged by auditors"],
    afterSkills: ["Model card development", "Validation & testing frameworks", "AI risk assessment", "Audit trail design", "Regulatory compliance", "Model lifecycle governance"],
    challenge: "Internal audit has flagged two AI models used in financial reporting. Neither has documentation. Neither has been formally validated. The audit committee meets in 3 weeks.",
    steps: [
      {
        prompt: "How do you prepare for the audit committee?",
        options: [
          { label: "Document what the models do retroactively. Prepare verbal explanations for the audit meeting.", type: "old", consequence: "Retroactive documentation is incomplete. The audit committee asks questions the documentation can't answer. The models are suspended pending formal review. Finance reverts to manual processes for the quarter." },
          { label: "Build model cards for both models in two weeks. Include purpose, training data, assumptions, known limitations, and validation results.", type: "new", consequence: "The audit committee has everything they need before the meeting. Questions are answered before they're asked. The models stay live. Governance becomes the thing that protects the CoE — not the thing that blocks it." }
        ]
      },
      {
        prompt: "A new model is being fast-tracked because the business needs it in two weeks.",
        options: [
          { label: "Waive the validation process given the timeline. Add it to the backlog for documentation later.", type: "old", consequence: "The model ships. 'Later' never comes. Three months on, it's being used in a board presentation with no governance record. The retroactive fix will be far more expensive than the two weeks would have cost." },
          { label: "Run a lightweight fast-track validation. Core tests, abbreviated model card, clear risk flags. Ship in compliance, not outside it.", type: "new", consequence: "The model ships on time and on the right side of governance. The business gets their deadline. The CoE sets a precedent: governance doesn't block speed — it sets the minimum bar for it." }
        ]
      },
      {
        prompt: "The Data Scientist wants to update a model in production. What's the governance process?",
        options: [
          { label: "Treat it as a minor change. No formal review needed for an update.", type: "old", consequence: "The 'minor update' changes a key feature weighting. Outputs shift by 8%. Nobody notices for two months. When it surfaces in a board review, the change can't be traced. Trust in the model erodes." },
          { label: "Apply a change impact assessment. Significant changes trigger re-validation. All changes are versioned and documented.", type: "new", consequence: "The update is deployed transparently. If outputs shift, it's expected and recorded. Auditors can trace every version. The governance layer makes the model's evolution a feature — not a liability." }
        ]
      }
    ],
    responsibilities: ["Model documentation, validation & model cards", "AI risk assessment & controls design", "Audit trail & compliance management", "Model lifecycle governance standards"],
    inputs: ["Model specs & training documentation from Data Scientists", "Deployment records from MLOps", "Regulatory & audit requirements", "Business risk context from Sr. Director"],
    outputs: ["Model cards & validation reports", "Risk assessments & control frameworks", "Audit-ready documentation", "Governance standards & lifecycle policies"],
  },
  {
    id: "viz-architect",
    icon: "◆",
    tag: "BI & VIZ TEAM",
    tagColor: "#E8836A",
    color: "#E8836A",
    title: "Viz Architect",
    futureTitle: "Viz Architect",
    hook: "Every team designed their own dashboards. 40 different definitions of 'revenue.' Nobody agreed on anything they saw.",
    futureHook: "Designs the standards, semantic layers, and self-service infrastructure that make every dashboard trustworthy and consistent.",
    timeLabels: ["Semantic layer & standards", "Dashboard design & templates", "Self-service enablement", "Governance & consistency"],
    timeBefore: [0, 0, 0, 0],
    timeAfter: [30, 25, 25, 20],
    beforeSkills: ["❌ Role didn't exist", "Every team owned their own viz", "No semantic layer", "Inconsistent metric definitions", "Tool sprawl with no standards", "Self-service meant build-your-own"],
    afterSkills: ["Semantic layer architecture", "Visualization standard-setting", "Self-service framework design", "Metric governance", "Dashboard template library", "Tool & platform strategy"],
    challenge: "The CFO is looking at three dashboards showing three different gross margin numbers for the same period. All three were built internally. None is wrong — they just use different definitions.",
    steps: [
      {
        prompt: "How do you fix the three-dashboard problem?",
        options: [
          { label: "Identify the 'correct' dashboard. Deprecate the others. Send a communication to the org.", type: "old", consequence: "People keep using the deprecated dashboards. The communication is ignored. Three months later, someone cites the 'wrong' number in a board slide and nobody caught it in time." },
          { label: "Build a semantic layer that defines gross margin once. All three dashboards draw from the same certified definition.", type: "new", consequence: "There's now one source of truth — built into the architecture, not enforced by a memo. Any future dashboard that references gross margin automatically uses the right definition. The problem can't recur." }
        ]
      },
      {
        prompt: "A BU analyst wants to build their own ad hoc dashboard outside the standard tooling.",
        options: [
          { label: "Approve it. Remind them to follow the style guide.", type: "old", consequence: "The style guide is a PDF from 2022. The dashboard goes live with non-standard metrics. Within a month it's being cited in leadership meetings. Another unofficial source of truth enters the ecosystem." },
          { label: "Give them access to the self-service layer with certified metrics and approved templates. They build freely — from a governed foundation.", type: "new", consequence: "The BU analyst gets flexibility. The CoE gets consistency. The dashboard is built faster, from trusted data, in a format the whole org can read without translation." }
        ]
      },
      {
        prompt: "The business wants three new dashboards in two weeks. The team doesn't have capacity.",
        options: [
          { label: "Prioritize the most urgent. Build the others in the following sprint.", type: "old", consequence: "The two 'less urgent' dashboards get built by BU teams independently — outside the standard. By the time the Viz Architect gets to them, there are shadow versions already in use." },
          { label: "Use the standardized component library. Configure the three dashboards from certified templates. Ship all three in a week.", type: "new", consequence: "All three launch on schedule, consistently. The component library investment pays back immediately — and every future request gets easier, not harder." }
        ]
      }
    ],
    responsibilities: ["Semantic layer design & metric governance", "Visualization standards & template library", "Self-service reporting infrastructure", "Dashboard consistency & platform strategy"],
    inputs: ["Business reporting requirements from BU Pods", "Data models from Data Engineering", "CoE standards from Sr. Director", "User feedback & adoption data from Product Owner"],
    outputs: ["Semantic layer & certified metric definitions", "Dashboard templates & design standards", "Self-service reporting environment", "Viz governance documentation"],
  },
  {
    id: "storytelling-analyst",
    icon: "◎",
    tag: "BI & VIZ TEAM",
    tagColor: "#E8C84A",
    color: "#E8C84A",
    title: "Storytelling Analyst",
    futureTitle: "Storytelling Analyst",
    hook: "Data was shared. Insight wasn't. Charts went into decks. Decisions didn't come out.",
    futureHook: "Converts CoE outputs into narratives that move decisions. The bridge between what the data says and what the business does.",
    timeLabels: ["Insight synthesis", "Narrative design", "Executive materials", "Audience framing"],
    timeBefore: [0, 0, 0, 0],
    timeAfter: [30, 25, 25, 20],
    beforeSkills: ["❌ Role didn't exist", "Data shared, insight absent", "Charts without narrative", "Decks that described, not decided", "No audience framing", "Insight buried in appendices"],
    afterSkills: ["Insight synthesis & framing", "Executive narrative design", "Decision-oriented communication", "Audience-specific storytelling", "Visual + verbal cohesion", "So-what identification"],
    challenge: "The CoE produced a 40-page analytics report for the quarterly business review. Three executives read it. Zero decisions came out of it.",
    steps: [
      {
        prompt: "How do you rebuild the quarterly analytics output?",
        options: [
          { label: "Cut the report to 20 pages. Improve the chart formatting. Add an executive summary.", type: "old", consequence: "A shorter version of the same thing. The executive summary still leads with data, not decisions. Executives read the summary and skip the rest. Same outcome, less paper." },
          { label: "Redesign around the three decisions the business needs to make this quarter. Every page is in service of one of them.", type: "new", consequence: "The report is 8 pages. Executives read all of it. Two decisions are made in the meeting. The CoE's work is now visible in business outcomes — not just page views." }
        ]
      },
      {
        prompt: "The Data Scientist team has produced a rich churn analysis. It's technically excellent and completely unreadable to the business.",
        options: [
          { label: "Share the technical output with a cover note explaining the key findings.", type: "old", consequence: "The cover note gets read. The analysis doesn't. The key finding is misquoted in the next leadership meeting because the nuance was lost in translation. The Data Scientist is frustrated. The business is misinformed." },
          { label: "Rebuild the output for the audience. Lead with the so-what. Show one chart. Explain what it means for the decision.", type: "new", consequence: "The business uses the analysis correctly. The Data Scientist gets the credit they deserve. One output serves both audiences — the technical version and the decision version." }
        ]
      },
      {
        prompt: "A senior leader asks for a 'quick summary' of six months of CoE analytics output.",
        options: [
          { label: "Compile the key outputs into a single deck. Send it with a contents page.", type: "old", consequence: "The deck is 30 slides. The leader skims it and asks for a one-pager. You've compressed the work without curating it — the most important insights compete with the least important for attention." },
          { label: "Identify the three findings that most affected business performance in the period. One page per finding with a clear so-what and next step.", type: "new", consequence: "Three pages. Three decisions. The leader reads all of it and forwards it to the board. The CoE's six months of work is now represented in a form that travels — and leads to action." }
        ]
      }
    ],
    responsibilities: ["Insight synthesis & narrative design", "Executive-ready materials & board communication", "Decision-oriented output framing", "Audience-specific storytelling & translation"],
    inputs: ["CoE model outputs & analyses", "Business context from BU Pods & Sr. Director", "Audience profiles & decision timelines", "Board agenda & leadership priorities"],
    outputs: ["Executive narratives & decision briefs", "Board pack storytelling layer", "Insight summaries & so-what frameworks", "CoE value communication"],
  },

  // ── BU POD ROLES ───────────────────────────────────────────────────────────
  {
    id: "sr-fbp",
    icon: "▲",
    tag: "BU POD LEAD",
    tagColor: "#DB8BA7",
    color: "#DB8BA7",
    title: "Senior Finance Business Partner",
    futureTitle: "Senior Finance Business Partner",
    hook: "Caught between finance requests and business demands. Translator without authority. Reporter without insight.",
    futureHook: "The BU's embedded strategist. Frames the right questions, owns performance management, turns CoE insight into decisions.",
    timeLabels: ["Reporting & requests", "Business partnering", "Performance management", "Strategic advisory"],
    timeBefore: [45, 30, 20, 5],
    timeAfter: [5, 20, 35, 40],
    beforeSkills: ["Report generation", "Budget tracking", "Variance explanation", "Stakeholder management", "BU liaison", "Ad-hoc analysis"],
    afterSkills: ["Business question framing", "CoE insight translation", "Strategic challenge & advisory", "Performance narrative", "Influence without authority", "Decision facilitation"],
    challenge: "Your BU head wants to launch a new product line. They need a finance view in 48 hours. The CoE has the models — but the BU head doesn't trust them yet.",
    steps: [
      {
        prompt: "How do you approach the 48-hour ask?",
        options: [
          { label: "Build a standard financial model in Excel. Pull comps manually. Deliver the numbers.", type: "old", consequence: "48 hours produces a skeleton model with untested assumptions. The BU head gets numbers without a recommendation. Finance is a compliance step, not a decision partner." },
          { label: "Commission the CoE scenario model. Spend the 48 hours stress-testing assumptions with the BU head. Deliver a recommendation — not just a model.", type: "new", consequence: "You arrive with a fully scenario-tested business case and a clear point of view. The CoE's model earns the BU head's trust because you were in the room contextualizing it. Finance earns a seat at the strategy table." }
        ]
      },
      {
        prompt: "The BU head pushes back hard on the CoE's margin assumptions.",
        options: [
          { label: "Go back to the CoE and ask them to revise the assumptions to match the BU head's view.", type: "old", consequence: "The model is adjusted to fit the answer the BU head wanted. Finance loses credibility as an independent voice. The CoE's analysis becomes a rubber stamp, not a challenge." },
          { label: "Show the sensitivity table. Explain what has to be true for the BU head's view to hold. Make it a conversation, not a confrontation.", type: "new", consequence: "The conversation shifts from opinion to evidence. The BU head either accepts the challenge or provides new information that improves the model. The decision gets better. Finance earns the partnership it's asking for." }
        ]
      },
      {
        prompt: "The product launches. What's your role in the first 90 days?",
        options: [
          { label: "Produce the monthly variance report. Flag significant deviations as they occur.", type: "old", consequence: "Month 3: margin has eroded 4 points. The variance report flags it after the fact. The BU head asks why Finance didn't see it coming. You reported on the outcome — you didn't influence it." },
          { label: "Set the performance questions at launch. Work with the CoE to monitor the right signals. Flag issues while they're still correctable.", type: "new", consequence: "A pricing issue surfaces in month 2. You bring it to the BU head before it compounds. Finance is embedded in execution — not just measuring it. This is what the role becomes." }
        ]
      }
    ],
    responsibilities: ["BU leadership relationship & business question framing", "Performance management & variance narrative", "CoE insight translation into BU decisions", "Strategic advisory & commercial challenge"],
    inputs: ["BU strategy & pipeline data", "CoE analytics outputs & model results", "Company financials & benchmarks", "Leadership questions & decision timelines"],
    outputs: ["Business cases & go/no-go recommendations", "Performance narratives & variance analysis", "CoE-informed strategic recommendations", "BU decision support & course corrections"],
  },
  {
    id: "fpa-analyst",
    icon: "◈",
    tag: "BU POD ROLE",
    tagColor: "#C8A96E",
    color: "#C8A96E",
    title: "FP&A Analyst",
    futureTitle: "FP&A Analyst",
    hook: "Spends 70% of the week gathering data. Rarely has time to think — let alone recommend.",
    futureHook: "CoE handles the data pipeline. They own the budgeting, forecasting, and the insight layer that makes planning meaningful.",
    timeLabels: ["Data wrangling", "Budgeting & forecasting", "Variance analysis", "Decision support"],
    timeBefore: [65, 20, 10, 5],
    timeAfter: [5, 30, 35, 30],
    beforeSkills: ["Advanced Excel / VBA", "Manual ERP pulls", "Budget consolidation", "Variance commentary", "Month-end close", "Slide building"],
    afterSkills: ["CoE model interpretation", "Assumption stress-testing", "Variance root-cause analysis", "Decision-ready financial narrative", "Scenario design", "Planning partner to BU"],
    challenge: "Q3 forecast due Friday. Revenue is tracking 8% below plan. Leadership wants answers — not just numbers.",
    steps: [
      {
        prompt: "Your first move on a tight deadline?",
        options: [
          { label: "Pull 3 years of actuals from ERP, build the Excel model from scratch, start with the biggest cost centres.", type: "old", consequence: "Three days of data wrangling. Numbers ready Friday, but no time for insight. You're a data courier, not an advisor. The 'why' question comes up in the review and you don't have an answer." },
          { label: "Query the CoE forecasting system with live data. Define the business questions first. Spend the week on interpretation.", type: "new", consequence: "Model runs by end of day one. You spend the week on what it means — not what the numbers are. You arrive Friday with a point of view and a recommendation. The Sr. FBP puts you in the room." }
        ]
      },
      {
        prompt: "The CoE model flags EMEA deals slipping into Q4. What do you do?",
        options: [
          { label: "Add a footnote to the variance slide explaining the timing shift.", type: "old", consequence: "The Sr. FBP asks 'so what?' You don't have an answer. You've described the problem — you haven't engaged with it. Finance is a reporting service, not an advisory partner." },
          { label: "Quantify the Q4 pull-through risk. Model three scenarios. Bring a recommendation to the Sr. FBP.", type: "new", consequence: "You walk into the review owning the narrative. The Sr. FBP takes it to the BU head with your analysis as the foundation. You're not a reporter — you're the analytical engine behind a real decision." }
        ]
      },
      {
        prompt: "Planning season: the BU head wants an aggressive growth budget with optimistic assumptions.",
        options: [
          { label: "Build the plan to their inputs. Note the risk assumptions in the commentary.", type: "old", consequence: "The risk note gets ignored. The plan gets approved. You spend Q2 explaining a variance that was baked in from day one. Finance becomes the team that said 'I told you so' — after it was too late to matter." },
          { label: "Run the CoE stress-test on the assumptions. Show the range of outcomes. Partner with the Sr. FBP to have the challenge conversation.", type: "new", consequence: "The BU head either revises the assumptions or commits to specific mitigations. Either way, the plan is better. Finance earns the role of planning partner — not planning recorder." }
        ]
      }
    ],
    responsibilities: ["Budgeting, forecasting & variance analysis", "BU performance reporting & planning support", "CoE model interpretation & contextualization", "Decision support & financial narrative"],
    inputs: ["CoE model outputs & forecasts", "ERP & live operational data", "BU context from Sr. Finance BP", "Planning assumptions & business priorities"],
    outputs: ["BU budget & forecast", "Variance analysis with root-cause and 'so what'", "Scenario analysis & planning submissions", "Decision-ready financial summaries"],
  },
  {
    id: "data-analyst",
    icon: "▦",
    tag: "BU POD ROLE",
    tagColor: "#A8C86E",
    color: "#A8C86E",
    title: "Data Analyst",
    futureTitle: "Data Analyst",
    hook: "Ad hoc Excel work. Custom extracts. Every analysis started from scratch. No connection to the CoE — or to each other.",
    futureHook: "Applies CoE-standardized tools to BU-specific questions. Connects business context to analytical insight at the speed the business needs.",
    timeLabels: ["Ad hoc analysis", "Dashboard interpretation", "BU context & translation", "Insight to action"],
    timeBefore: [70, 20, 8, 2],
    timeAfter: [10, 25, 35, 30],
    beforeSkills: ["Ad hoc Excel analysis", "Custom SQL extracts", "Isolated data pulls", "No CoE standards applied", "Manual report builds", "Analysis rarely reached decisions"],
    afterSkills: ["CoE dashboard application", "BU-context interpretation", "Ad hoc analysis with governed data", "Insight translation to action", "Self-service analytics", "Business question framing"],
    challenge: "The BU head wants to understand why customer acquisition cost has risen 18% over two quarters. They want an answer by end of week.",
    steps: [
      {
        prompt: "How do you start the analysis?",
        options: [
          { label: "Pull raw data from the CRM and finance system. Build a custom model in Excel.", type: "old", consequence: "Two days building the data structure. Three days on the analysis. The output doesn't match the CoE's CAC definition — which is what leadership uses. You've answered a slightly different question from a slightly different dataset." },
          { label: "Open the CoE's customer acquisition dashboard. Use it as the starting point. Apply BU-specific context to interpret the signals.", type: "new", consequence: "The analysis starts from a trusted, governed baseline. You spend your time on the 'why' — applying BU context to patterns the CoE model has already surfaced. The answer is ready in two days and aligned with the metrics leadership actually tracks." }
        ]
      },
      {
        prompt: "The CoE dashboard shows CAC rising, but your BU head believes it's a mix-shift issue, not a true efficiency problem. How do you test that?",
        options: [
          { label: "Build a separate Excel model to test the mix-shift hypothesis independently.", type: "old", consequence: "Your model produces different base numbers from the CoE dashboard. The BU head now has two versions of reality. The mix-shift question is lost in the data alignment discussion." },
          { label: "Apply the mix-shift cut directly in the CoE self-service layer. Segment by channel and cohort using the certified definitions.", type: "new", consequence: "The hypothesis is tested within 20 minutes using the same dataset leadership already trusts. The mix-shift is confirmed for two channels. The BU head gets a clean answer — and confidence that Finance and CoE are working from the same playbook." }
        ]
      },
      {
        prompt: "The Sr. FBP asks you to build a regular monthly report tracking five new BU KPIs.",
        options: [
          { label: "Build the report in Excel. Set up a monthly refresh process. Add it to the production schedule.", type: "old", consequence: "A new manual report joins the backlog. By month four, one of the KPI definitions has drifted from the CoE standard and nobody noticed. Another shadow data source is born." },
          { label: "Work with the Viz Architect to add the five KPIs to the CoE's self-service layer. Configure the BU view. No manual refresh needed.", type: "new", consequence: "The report builds itself from governed data. Zero maintenance. The Sr. FBP has a live view any time — not a monthly snapshot. You've redirected 2 hours/month of production time to actual analysis." }
        ]
      }
    ],
    responsibilities: ["Ad hoc analysis & business question answering", "CoE dashboard interpretation in BU context", "BU data needs scoping & translation to CoE", "Insight communication to BU leadership"],
    inputs: ["CoE standardized dashboards & certified datasets", "BU business context & operational data", "Ad hoc questions from Sr. Finance BP & BU head", "CoE self-service analytics layer"],
    outputs: ["BU-contextualized ad hoc analyses", "Interpreted CoE insights with business framing", "Data needs briefs for CoE Product Owner", "Decision-ready summaries for Sr. Finance BP"],
  },
];

// ── COMPONENTS ────────────────────────────────────────────────────────────────

function TimeBar({ label, before, after, color, showAfter }) {
  const val = showAfter ? after : before;
  return (
    <div style={{ marginBottom: "14px" }}>
      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "6px" }}>
        <span style={{ fontSize: "11px", color: "rgba(255,255,255,0.45)", letterSpacing: "0.3px" }}>{label}</span>
        <span style={{ fontSize: "12px", fontWeight: "700", color: showAfter ? color : "rgba(255,255,255,0.3)" }}>{val}%</span>
      </div>
      <div style={{ height: "5px", background: "rgba(255,255,255,0.07)", borderRadius: "3px", overflow: "hidden" }}>
        <div style={{
          height: "100%", width: `${val}%`, borderRadius: "3px",
          background: showAfter ? color : "rgba(255,255,255,0.18)",
          transition: "width 0.9s cubic-bezier(0.4,0,0.2,1), background 0.5s ease"
        }} />
      </div>
    </div>
  );
}

function SkillPill({ label, isNew }) {
  return (
    <span style={{
      display: "inline-block", margin: "3px",
      background: isNew ? "rgba(255,255,255,0.07)" : "rgba(255,255,255,0.02)",
      border: `1px solid ${isNew ? "rgba(255,255,255,0.15)" : "rgba(255,255,255,0.06)"}`,
      borderRadius: "100px", padding: "5px 12px",
      fontSize: "11px", color: isNew ? "rgba(255,255,255,0.8)" : "rgba(255,255,255,0.28)",
      letterSpacing: "0.2px"
    }}>{label}</span>
  );
}

function PersonaCard({ persona, onSelect }) {
  const [hov, setHov] = useState(false);
  return (
    <div
      onClick={() => onSelect(persona)}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        cursor: "pointer", borderRadius: "16px", padding: "26px 22px",
        background: hov ? "rgba(255,255,255,0.055)" : "rgba(255,255,255,0.025)",
        border: `1px solid ${hov ? persona.color + "55" : "rgba(255,255,255,0.07)"}`,
        transition: "all 0.22s ease", position: "relative", overflow: "hidden"
      }}
    >
      <div style={{
        position: "absolute", top: 0, left: 0, right: 0, height: "2px",
        background: hov ? persona.color : "transparent", transition: "all 0.22s"
      }} />

      <div style={{ display: "flex", gap: "14px", alignItems: "flex-start" }}>
        <div style={{
          width: "42px", height: "42px", borderRadius: "11px", flexShrink: 0,
          background: `${persona.color}15`, border: `1px solid ${persona.color}35`,
          display: "flex", alignItems: "center", justifyContent: "center",
          fontSize: "18px", color: persona.color
        }}>{persona.icon}</div>
        <div style={{ flex: 1 }}>
          <span style={{
            fontSize: "9px", letterSpacing: "1.8px", fontWeight: "700",
            color: persona.tagColor, background: `${persona.tagColor}15`,
            border: `1px solid ${persona.tagColor}35`, borderRadius: "4px",
            padding: "2px 7px", display: "inline-block", marginBottom: "6px"
          }}>{persona.tag}</span>
          <div style={{ fontFamily: "'Playfair Display', serif", fontSize: "16px", color: "#fff", marginBottom: "4px" }}>
            {persona.title}
          </div>
          <div style={{ fontSize: "12px", color: "rgba(255,255,255,0.38)", lineHeight: "1.55" }}>
            {persona.hook}
          </div>
        </div>
      </div>

      <div style={{
        marginTop: "14px", padding: "11px 13px", borderRadius: "9px",
        background: `${persona.color}0d`, border: `1px solid ${persona.color}22`,
        fontSize: "11px", color: persona.color, lineHeight: "1.55"
      }}>→ {persona.futureHook}</div>

      <div style={{
        marginTop: "12px", textAlign: "right", fontSize: "11px",
        color: hov ? persona.color : "rgba(255,255,255,0.25)",
        letterSpacing: "0.5px", transition: "color 0.22s"
      }}>PLAY THIS ROLE →</div>
    </div>
  );
}

function GamePlay({ persona, onBack }) {
  const [phase, setPhase] = useState("intro"); // intro | playing | done
  const [step, setStep] = useState(0);
  const [choices, setChoices] = useState([]);
  const [chosen, setChosen] = useState(null);
  const [showConsequence, setShowConsequence] = useState(false);
  const [timeToggle, setTimeToggle] = useState(false);
  const [skillsVisible, setSkillsVisible] = useState(false);
  const [timeVisible, setTimeVisible] = useState(false);

  const currentStep = persona.steps[step];
  const score = choices.filter(c => c === "new").length;

  const handleChoice = (type, idx) => {
    if (chosen !== null) return;
    setChosen(idx);
    setTimeout(() => {
      setChoices(p => [...p, type]);
      setShowConsequence(true);
    }, 350);
  };

  const advance = () => {
    setShowConsequence(false);
    setChosen(null);
    if (step + 1 >= persona.steps.length) {
      setPhase("done");
      setTimeout(() => setTimeVisible(true), 400);
      setTimeout(() => setSkillsVisible(true), 900);
    } else {
      setStep(s => s + 1);
    }
  };

  const reset = () => {
    setPhase("intro"); setStep(0); setChoices([]); setChosen(null);
    setShowConsequence(false); setTimeToggle(false); setSkillsVisible(false); setTimeVisible(false);
  };

  const lastType = choices[choices.length - 1];
  const gradeInfo = score === 3
    ? { label: "AI-NATIVE", color: persona.color, msg: `You played this role as it exists in the reimagined FP&A org. ${persona.futureTitle} is what ${persona.title} becomes when the mindset shifts.` }
    : score === 2
    ? { label: "TRANSITIONING", color: "#A78BDB", msg: "Some AI-native instincts, some old habits still pulling. The transition is real — and unfinished. The mindset shift is the hard part." }
    : score === 1
    ? { label: "RESISTANT", color: "#E8836A", msg: "You defaulted to the old playbook most of the time. The tools exist. The bottleneck is the frame — how you think the role should work." }
    : { label: "STUCK", color: "#888", msg: "Every choice was the old way. This is the most common outcome today — not because people lack capability, but because the mental model hasn't shifted yet." };

  if (phase === "intro") return (
    <div style={{ animation: "fadeUp 0.5s ease" }}>
      <button onClick={onBack} style={backBtn}>← All roles</button>
      <div style={{ display: "flex", gap: "16px", alignItems: "center", marginBottom: "10px" }}>
        <div style={{ width: "50px", height: "50px", borderRadius: "13px", background: `${persona.color}18`, border: `1px solid ${persona.color}45`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "22px", color: persona.color }}>{persona.icon}</div>
        <div>
          <div style={{ fontSize: "9px", letterSpacing: "2px", color: persona.tagColor, marginBottom: "4px", fontWeight: "700" }}>{persona.tag}</div>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "26px", color: "#fff", margin: 0 }}>{persona.title}</h2>
        </div>
      </div>

      <div style={{ margin: "28px 0", padding: "22px", borderRadius: "13px", background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)" }}>
        <div style={{ fontSize: "10px", letterSpacing: "1.8px", color: "rgba(255,255,255,0.3)", marginBottom: "10px" }}>YOUR SCENARIO</div>
        <p style={{ fontSize: "16px", color: "rgba(255,255,255,0.82)", lineHeight: "1.7", margin: 0 }}>{persona.challenge}</p>
      </div>

      <p style={{ color: "rgba(255,255,255,0.4)", fontSize: "13px", lineHeight: "1.75", marginBottom: "28px" }}>
        You'll face <strong style={{ color: "rgba(255,255,255,0.65)" }}>3 decisions</strong>. At each step, choose how to respond. The old way, or the AI-native way. Your choices reveal how far the role has to travel.
      </p>

      <button onClick={() => setPhase("playing")} style={{ ...primaryBtn(persona.color), width: "100%" }}>
        BEGIN SCENARIO →
      </button>
    </div>
  );

  if (phase === "done") return (
    <div style={{ animation: "fadeUp 0.5s ease" }}>
      <button onClick={onBack} style={backBtn}>← All roles</button>
      <div style={{ textAlign: "center", padding: "16px 0 32px" }}>
        <div style={{ fontSize: "10px", letterSpacing: "2px", color: "rgba(255,255,255,0.3)", marginBottom: "14px" }}>SCENARIO COMPLETE</div>
        <span style={{ fontSize: "10px", letterSpacing: "2.5px", fontWeight: "800", color: gradeInfo.color, background: `${gradeInfo.color}15`, border: `1px solid ${gradeInfo.color}40`, borderRadius: "6px", padding: "6px 16px", display: "inline-block", marginBottom: "16px" }}>{gradeInfo.label}</span>
        <div style={{ fontFamily: "'Playfair Display', serif", fontSize: "28px", color: "#fff", marginBottom: "10px" }}>{score}/3 AI-native decisions</div>
        <p style={{ color: "rgba(255,255,255,0.42)", maxWidth: "500px", margin: "0 auto", lineHeight: "1.7", fontSize: "14px" }}>{gradeInfo.msg}</p>
      </div>

      {/* Role transform */}
      <div style={{ display: "flex", alignItems: "center", gap: "14px", padding: "22px", background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: "13px", marginBottom: "20px", flexWrap: "wrap" }}>
        <div style={{ flex: 1, minWidth: "130px" }}>
          <div style={{ fontSize: "10px", color: "rgba(255,255,255,0.28)", letterSpacing: "1px", marginBottom: "5px" }}>TODAY</div>
          <div style={{ fontFamily: "'Playfair Display', serif", fontSize: "17px", color: "rgba(255,255,255,0.45)" }}>{persona.title}</div>
        </div>
        <div style={{ fontSize: "26px", color: persona.color }}>→</div>
        <div style={{ flex: 1, minWidth: "130px" }}>
          <div style={{ fontSize: "10px", color: persona.color, letterSpacing: "1px", marginBottom: "5px" }}>REIMAGINED</div>
          <div style={{ fontFamily: "'Playfair Display', serif", fontSize: "17px", color: "#fff" }}>{persona.futureTitle}</div>
        </div>
      </div>

      {/* Time shift */}
      <div style={{ padding: "22px", background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)", borderRadius: "13px", marginBottom: "20px", opacity: timeVisible ? 1 : 0, transform: timeVisible ? "none" : "translateY(10px)", transition: "all 0.6s ease" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "18px", flexWrap: "wrap", gap: "10px" }}>
          <div style={{ fontSize: "10px", letterSpacing: "1.5px", color: "rgba(255,255,255,0.3)" }}>HOW THIS ROLE SPENDS ITS TIME</div>
          <div style={{ display: "flex", background: "rgba(255,255,255,0.06)", borderRadius: "8px", padding: "3px" }}>
            {["TODAY", "REIMAGINED"].map((l, i) => (
              <button key={i} onClick={() => setTimeToggle(i === 1)} style={{
                background: timeToggle === (i === 1) ? `${persona.color}28` : "transparent",
                border: "none", borderRadius: "6px", padding: "5px 14px",
                color: timeToggle === (i === 1) ? persona.color : "rgba(255,255,255,0.28)",
                fontSize: "10px", letterSpacing: "1px", fontWeight: "700", cursor: "pointer", transition: "all 0.2s"
              }}>{l}</button>
            ))}
          </div>
        </div>
        {persona.timeLabels.map((lbl, i) => (
          <TimeBar key={i} label={lbl} before={persona.timeBefore[i]} after={persona.timeAfter[i]} color={persona.color} showAfter={timeToggle} />
        ))}
      </div>

      {/* Skills */}
      <div style={{ padding: "22px", background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)", borderRadius: "13px", marginBottom: "28px", opacity: skillsVisible ? 1 : 0, transform: skillsVisible ? "none" : "translateY(10px)", transition: "all 0.6s ease" }}>
        <div style={{ fontSize: "10px", letterSpacing: "1.5px", color: "rgba(255,255,255,0.3)", marginBottom: "16px" }}>SKILL PROFILE SHIFT</div>
        <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
          <div style={{ flex: 1, minWidth: "150px" }}>
            <div style={{ fontSize: "10px", color: "rgba(255,255,255,0.22)", letterSpacing: "1px", marginBottom: "10px" }}>FADING</div>
            {persona.beforeSkills.map((s, i) => <SkillPill key={i} label={s} isNew={false} />)}
          </div>
          <div style={{ flex: 1, minWidth: "150px" }}>
            <div style={{ fontSize: "10px", color: persona.color, letterSpacing: "1px", marginBottom: "10px" }}>EMERGING</div>
            {persona.afterSkills.map((s, i) => <SkillPill key={i} label={s} isNew={true} />)}
          </div>
        </div>
      </div>

      <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
        <button onClick={onBack} style={ghostBtn}>← Try another role</button>
        <button onClick={reset} style={{ ...primaryBtn(persona.color), flex: 1, minWidth: "140px" }}>↺ Replay</button>
      </div>
    </div>
  );

  // playing
  return (
    <div style={{ animation: "fadeUp 0.4s ease" }}>
      <button onClick={onBack} style={backBtn}>← All roles</button>

      {/* Progress bar */}
      <div style={{ display: "flex", gap: "5px", marginBottom: "32px" }}>
        {persona.steps.map((_, i) => (
          <div key={i} style={{
            flex: 1, height: "3px", borderRadius: "2px",
            background: i < step ? persona.color : i === step ? `${persona.color}55` : "rgba(255,255,255,0.09)",
            transition: "background 0.4s"
          }} />
        ))}
      </div>

      <div style={{ fontSize: "10px", letterSpacing: "1.5px", color: "rgba(255,255,255,0.28)", marginBottom: "8px" }}>
        DECISION {step + 1} OF {persona.steps.length}
      </div>
      <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "21px", color: "#fff", marginBottom: "26px", lineHeight: "1.4" }}>
        {currentStep.prompt}
      </h3>

      <div style={{ display: "flex", flexDirection: "column", gap: "12px", marginBottom: "24px" }}>
        {currentStep.options.map((opt, i) => {
          const isChosen = chosen === i;
          const isOld = opt.type === "old";
          return (
            <button key={i} onClick={() => handleChoice(opt.type, i)}
              disabled={chosen !== null}
              style={{
                background: isChosen ? (isOld ? "rgba(255,90,70,0.1)" : `${persona.color}15`) : "rgba(255,255,255,0.035)",
                border: `1px solid ${isChosen ? (isOld ? "rgba(255,90,70,0.4)" : `${persona.color}55`) : "rgba(255,255,255,0.08)"}`,
                borderRadius: "12px", padding: "17px 18px", cursor: chosen !== null ? "default" : "pointer",
                textAlign: "left", transition: "all 0.22s", width: "100%"
              }}>
              <div style={{ display: "flex", gap: "12px", alignItems: "flex-start" }}>
                <div style={{
                  width: "21px", height: "21px", borderRadius: "50%", flexShrink: 0, marginTop: "2px",
                  background: isChosen ? (isOld ? "rgba(255,90,70,0.25)" : `${persona.color}28`) : "rgba(255,255,255,0.06)",
                  border: `1px solid ${isChosen ? (isOld ? "rgba(255,90,70,0.55)" : persona.color) : "rgba(255,255,255,0.12)"}`,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: "10px", color: isChosen ? (isOld ? "#ff6450" : persona.color) : "rgba(255,255,255,0.3)"
                }}>
                  {isChosen ? (isOld ? "✕" : "✓") : String.fromCharCode(65 + i)}
                </div>
                <span style={{ fontSize: "14px", color: "rgba(255,255,255,0.78)", lineHeight: "1.6" }}>{opt.label}</span>
              </div>
            </button>
          );
        })}
      </div>

      {showConsequence && (
        <div style={{
          padding: "18px 20px", borderRadius: "12px", marginBottom: "22px", animation: "fadeUp 0.35s ease",
          background: lastType === "new" ? `${persona.color}10` : "rgba(255,70,50,0.07)",
          border: `1px solid ${lastType === "new" ? `${persona.color}38` : "rgba(255,70,50,0.22)"}`
        }}>
          <div style={{ fontSize: "10px", letterSpacing: "1.5px", fontWeight: "700", marginBottom: "8px", color: lastType === "new" ? persona.color : "#ff6450" }}>
            {lastType === "new" ? "✓ AI-NATIVE MOVE" : "✕ OLD PLAYBOOK"}
          </div>
          <p style={{ fontSize: "14px", color: "rgba(255,255,255,0.68)", lineHeight: "1.7", margin: 0 }}>
            {currentStep.options[chosen].consequence}
          </p>
        </div>
      )}

      {showConsequence && (
        <button onClick={advance} style={{ ...primaryBtn(persona.color), width: "100%" }}>
          {step < persona.steps.length - 1 ? "NEXT DECISION →" : "SEE OUTCOME →"}
        </button>
      )}
    </div>
  );
}

// ── ORG JOURNEY ───────────────────────────────────────────────────────────────

const JOURNEY_ORDER = ["sr-director", "product-owner", "data-scientist", "data-engineer", "mlops-engineer", "model-governance", "viz-architect", "storytelling-analyst", "sr-fbp", "fpa-analyst", "data-analyst"];

const ORG_SCENARIOS = [
  {
    id: "planning-cycle",
    icon: "◎",
    title: "Annual Planning Cycle",
    subtitle: "12 BUs. 6 weeks. The process that eats the quarter — every quarter.",
    description: "From the CoE setting standards to BU Pod analysts building models, every role touches the annual plan. See how the CoE + BU Pod model changes each one's part.",
    roles: {
      "sr-director": {
        involvement: "future-only",
        involvementNote: "Before the CoE, analytics strategy was nobody's job. Every team built their own planning models, used their own definitions, and solved the same data problems in isolation. The Sr. Director role exists specifically to fix that — and the planning cycle is the first place the absence is felt.",
        scenarioContext: "It's your first planning cycle as CoE leader. Every BU is building models in Excel using different revenue definitions. The FP&A team is drowning in consolidation. You have the mandate to change this — but the cycle is already in flight.",
        prompt: "How do you create value in this cycle while designing the next one?",
        options: [
          { label: "Focus entirely on next year's redesign. This year's cycle is too broken to fix in-flight.", type: "old", consequence: "You deliver a thorough future-state design. But this year's cycle ends in the same chaos — and the business concludes the CoE has no near-term value. Credibility is harder to build from a standing start next year." },
          { label: "Identify two high-pain consolidation problems you can solve now. Design the systemic fix in parallel. Deliver quick wins and long-term architecture.", type: "new", consequence: "Two changes — a shared revenue definition and a common template for the top 5 cost centres — save the consolidation team 10 days of cleanup. The business sees immediate CoE value. You enter next year's cycle with credibility and a clear redesign brief." }
        ]
      },
      "product-owner": {
        involvement: "future-only",
        involvementNote: "Today, analytics requests for the planning cycle go directly to individual data analysts or IT — whichever answers first. There's no backlog, no prioritization, no one ensuring the most valuable work gets built. The Product Owner makes CoE planning support coherent.",
        scenarioContext: "It's week one of planning season. The FP&A team has 12 outstanding analytics requests. The data team has capacity for 4. Nobody has prioritized the list.",
        prompt: "How do you triage the planning analytics backlog?",
        options: [
          { label: "Work through requests in the order they were submitted. First in, first out.", type: "old", consequence: "The data team builds what arrived first — not what matters most. By week three, the three requests that could have unlocked cross-BU consolidation are still queued behind individual BU reports that each serve one person." },
          { label: "Score by planning-cycle dependency and cross-BU reusability. Surface the 4 that unlock the most work downstream.", type: "new", consequence: "The top 4 items are the shared revenue model, the assumptions stress-test template, the consolidation feed, and the board pack scenario engine. Everything else benefits from these being built first. The team works in the right order." }
        ]
      },
      "data-scientist": {
        involvement: "future-only",
        involvementNote: "Before the CoE, forecasts were built bottom-up in Excel. Nobody was modeling the statistical drivers of plan accuracy or predicting where BU submissions would miss.",
        scenarioContext: "Corp FP&A asks: can you build something that predicts which BU submissions are most likely to be inaccurate before they come in?",
        prompt: "Can you build a forecast accuracy predictor for the planning cycle?",
        options: [
          { label: "It's a great idea but requires more historical data and a proper model build. Log it for next year.", type: "old", consequence: "Corp FP&A spends week 5 doing the same manual challenge review they've always done. Two BUs with historically optimistic plans slip through unchallenged. The CFO catches it in the board review." },
          { label: "Build a lightweight version using 3 years of prior submissions. Even directional predictions surface the BUs most likely to miss — and the CoE focuses challenge effort there.", type: "new", consequence: "The model flags four BUs with historically optimistic assumptions. The Sr. FBP in each pod runs targeted stress-tests on those submissions. Two are revised before submission. The consolidation review is clean for the first time in three years." }
        ]
      },
      "data-engineer": {
        involvement: "future-only",
        involvementNote: "Before the CoE, every BU pulled planning data from source systems directly. The same ERP data looked different in every BU model because each analyst applied their own extraction logic.",
        scenarioContext: "Three BUs are using Q2 actuals as their planning baseline. One is using Q1. None of them know the others are using different periods.",
        prompt: "How do you ensure all planning models work from the same baseline?",
        options: [
          { label: "Flag the issue to each BU. Ask them to align on the correct baseline manually.", type: "old", consequence: "Two BUs update their baseline. Two don't see the message in time. The consolidation team discovers the mismatch in week 4 and spends two days reconciling four different versions of the same actuals." },
          { label: "Build a single curated actuals feed that all planning models connect to. One source. One version. Updated once, reflected everywhere.", type: "new", consequence: "Every BU's planning model draws from the same baseline automatically. The reconciliation problem can't happen. The consolidation team spends week 4 on insight — not on data alignment." }
        ]
      },
      "mlops-engineer": {
        involvement: "future-only",
        involvementNote: "Before the CoE, planning models didn't go through any deployment process. They were emailed as Excel files, overwritten, and version-controlled by filename date.",
        scenarioContext: "The CoE has built a new rolling forecast model for the planning cycle. It needs to go live in 48 hours so BUs can use it for submissions.",
        prompt: "How do you deploy the planning model safely in a 48-hour window?",
        options: [
          { label: "Deploy directly to production. It's a forecast model — the stakes aren't production-critical.", type: "old", consequence: "A data schema mismatch causes the model to fail for 3 of the 12 BUs. Those BUs revert to Excel. By the time the fix is deployed, their submission windows have passed. Week 5 is a consolidation repair job." },
          { label: "Run a parallel shadow test against last year's actuals before go-live. Validate outputs across all 12 BU configurations.", type: "new", consequence: "The schema mismatch is caught in shadow testing on hour 36. Fixed before any BU attempts a submission. The model goes live cleanly. All 12 BUs submit from the same system." }
        ]
      },
      "model-governance": {
        involvement: "future-only",
        involvementNote: "Before the CoE, planning models had no governance. Assumptions were implicit. If a plan was wrong, there was no way to trace whether it was a bad model, bad inputs, or a process failure.",
        scenarioContext: "The finance controller asks: if external auditors question how the AI-assisted plan was derived, what can we show them?",
        prompt: "What governance do you put in place for AI-assisted planning?",
        options: [
          { label: "Create a general disclaimer that the models are directional. Auditors understand forecasts aren't guarantees.", type: "old", consequence: "Auditors ask to see the model logic. There's nothing to show. They classify the AI-assisted plan as undocumented and require a manual parallel process for the following year. The CoE's efficiency gains are reversed by the compliance requirement." },
          { label: "Build a model card for each planning model: purpose, inputs, assumptions, known limitations, and validation results. Create a run log for every planning cycle execution.", type: "new", consequence: "Auditors receive a complete governance package before they ask for it. No issues raised. The governance layer becomes the reason leadership trusts the AI-assisted plan — not a bureaucratic afterthought." }
        ]
      },
      "viz-architect": {
        involvement: "future-only",
        involvementNote: "Before the CoE, planning dashboards were built independently by each BU. Three different definitions of 'plan vs. actual' existed simultaneously — and nobody realized until the board review.",
        scenarioContext: "Corp FP&A needs a consolidated planning progress dashboard. Seven BUs have already built their own versions, each using slightly different metric definitions.",
        prompt: "How do you handle the seven existing BU planning dashboards?",
        options: [
          { label: "Build the consolidated view on top of the seven existing dashboards. Reconcile the metric differences manually.", type: "old", consequence: "The consolidated dashboard requires manual adjustment every week because the underlying definitions keep drifting. Corp FP&A stops trusting it by week 3 and maintains their own spreadsheet version instead." },
          { label: "Establish shared metric definitions in the semantic layer first. Build one consolidated view that all BU dashboards roll up into automatically.", type: "new", consequence: "The seven BU dashboards are retrofitted to pull from the certified definitions. The consolidated view is live and accurate without manual reconciliation. Corp FP&A uses it as the single planning status source of truth for the first time." }
        ]
      },
      "storytelling-analyst": {
        involvement: "today-only",
        involvementNote: "In the AI-native planning cycle, status dashboards and consolidation reports are generated automatically from the live planning model. The manual production work largely disappears — and this role's contribution shifts entirely to the insight layer: identifying the three themes emerging from the plan that leadership needs to act on.",
        scenarioContext: "Every planning cycle you produce a 40-page status dashboard tracking submission progress, variance flags, and consolidation status. It takes a week to assemble. Leadership glances at it once.",
        prompt: "Corp FP&A asks for the annual planning status dashboard.",
        options: [
          { label: "Build it from scratch as usual. Submission tracking, variance flags, consolidation status. Submit in a week.", type: "old", consequence: "It takes a week. Leadership looks at it once in the first planning review and never opens it again. The same request comes next year. The week was spent on a deliverable, not on insight." },
          { label: "Point Corp FP&A to the live planning model view. Redirect your week to identifying the three insight themes emerging from the plan submissions so far.", type: "new", consequence: "The dashboard runs itself. You surface the insight that two BUs are assuming contradictory market share positions in the same segment — something the status dashboard never would have flagged. That conversation happens before the CFO review, not in it." }
        ]
      },
      "sr-fbp": {
        involvement: "both",
        involvementNote: null,
        scenarioContext: "Your BU head wants to submit an aggressive growth plan. The underlying assumptions haven't been stress-tested. You have one week before the submission deadline.",
        prompt: "How do you approach the BU planning conversation?",
        options: [
          { label: "Build the plan to their inputs. Add a risk footnote. Submit on time.", type: "old", consequence: "The risk footnote gets ignored. The plan gets approved. You find out it was wrong in the Q2 close — when it's too late to course-correct without a painful conversation. Finance was a recorder, not a partner." },
          { label: "Commission the CoE scenario model. Show exactly what has to be true for the assumptions to hold. Make the challenge the starting point — not the footnote.", type: "new", consequence: "The conversation shifts from opinion to evidence. The plan submitted is achievable and defended. Finance earns credibility — not as a gatekeeper, but as the partner who made the plan better." }
        ]
      },
      "fpa-analyst": {
        involvement: "both",
        involvementNote: null,
        scenarioContext: "Six cost centre models need to be built for the plan. Two weeks. BU submissions are inconsistent and the Sr. FBP is already fielding questions from the business.",
        prompt: "How do you approach the model build?",
        options: [
          { label: "Pull actuals from ERP, build each model from scratch in Excel, start with the biggest cost centres.", type: "old", consequence: "Two weeks in, three models are done. The remaining three are rough. You miss the submission window for one BU and spend the final days in cleanup mode. The insight layer never gets built." },
          { label: "Use the CoE planning system to generate base cases for all six. Spend the two weeks stress-testing assumptions and building the insight layer.", type: "new", consequence: "All six models are ready by day two. The remaining time goes into insight and challenge. You submit on time with a point of view on each — not just numbers. The Sr. FBP has something to work with." }
        ]
      },
      "data-analyst": {
        involvement: "both",
        involvementNote: null,
        scenarioContext: "The BU head wants to understand how the plan compares to prior years across every product line — in the format they're used to, with their preferred breakdowns.",
        prompt: "How do you produce the BU planning comparison?",
        options: [
          { label: "Build the comparison in Excel. Pull prior year actuals manually. Format to the BU head's template.", type: "old", consequence: "It takes two days. The numbers don't reconcile perfectly with the CoE's consolidated view — different extraction logic, slightly different period definitions. The BU head now has two versions and asks which one to trust." },
          { label: "Use the CoE planning dashboard to generate the comparison with the right filters applied. Export in the format the BU head needs.", type: "new", consequence: "The comparison is ready in 20 minutes and aligns exactly with the consolidated view. The BU head has confidence in the numbers. You spend the saved time explaining what the year-over-year shifts actually mean." }
        ]
      }
    }
  },
  {
    id: "board-pack",
    icon: "▦",
    title: "Quarterly Board Pack",
    subtitle: "90 pages. 3 decisions the board needs to make. Finding them is the job.",
    description: "The most visible output the org produces. See how the CoE and BU Pod roles each contribute differently when the pack is built around decisions, not data.",
    roles: {
      "sr-director": {
        involvement: "future-only",
        involvementNote: "Before the CoE, the board pack was owned entirely by Corp FP&A and assembled manually. There was no analytics strategy layer, no intelligence design, and no one accountable for whether the pack enabled decisions.",
        scenarioContext: "The CFO asks you to redesign the CoE's contribution to the quarterly board pack. Currently the CoE provides charts on request — with no visibility into how they're used or whether they drive decisions.",
        prompt: "What should the CoE's role in the board pack be?",
        options: [
          { label: "Provide charts and data summaries on request. Finance owns the narrative — analytics supports it.", type: "old", consequence: "The CoE produces good charts that arrive too late, answer the wrong questions, and get cut before the final version. The board pack continues to be data-rich and decision-poor. The CoE's contribution is invisible." },
          { label: "Design the intelligence layer: what are the 3 decisions the board needs to make this quarter, and what does each one require the CoE to surface?", type: "new", consequence: "Every CoE output in the pack is anchored to a specific decision. The Storytelling Analyst knows what narrative to build. The FP&A Analyst knows what sensitivity analysis to run. The board pack changes — because the brief changed." }
        ]
      },
      "product-owner": {
        involvement: "future-only",
        involvementNote: "Before the CoE, board pack analytics requests arrived two weeks before the deadline with no scope, no audience context, and no coordination between requestors. Data teams built what they were asked for — not what was needed.",
        scenarioContext: "Three different board pack analytics requests have arrived from Corp FP&A and two BU teams. They overlap significantly and are all due Friday.",
        prompt: "How do you manage the three overlapping board pack requests?",
        options: [
          { label: "Assign each request to a different data team member. Build all three independently.", type: "old", consequence: "Three analyses are delivered. Two use different revenue definitions. One contradicts another on margin trend. The board pack editor has to reconcile them manually — and cuts all three in favor of something simpler." },
          { label: "Map the overlap. Identify the single core analysis that answers all three. Build it once with the right inputs.", type: "new", consequence: "One analysis ships in the time it would have taken to build one of the three. All three requestors get what they need. The board pack has one coherent analytics narrative instead of three competing ones." }
        ]
      },
      "data-scientist": {
        involvement: "future-only",
        involvementNote: "Before the CoE, board pack analytics were entirely historical. The board saw what happened. In the CoE model, the board sees what is likely to happen — and the specific signals that would change that view.",
        scenarioContext: "The CFO wants a predictive element in this quarter's board pack: which of the three strategic scenarios the business has been tracking is most likely to play out over the next two quarters?",
        prompt: "How do you build the predictive scenario view for the board?",
        options: [
          { label: "Caveat heavily that predictions carry uncertainty. Provide a range but don't commit to a most-likely outcome.", type: "old", consequence: "The board receives a range with no recommendation. They ask which scenario to plan against. Nobody has an answer. The analysis adds to the data volume without improving the decision." },
          { label: "Build the probability-weighted scenario with explicit assumptions. State the most likely outcome and the two leading indicators that would cause you to revise it.", type: "new", consequence: "The board has a clear view, a recommended planning scenario, and a monitoring framework. They make a capital allocation decision in the meeting rather than deferring it. The CoE's analytical work directly drove a board outcome." }
        ]
      },
      "data-engineer": {
        involvement: "future-only",
        involvementNote: "Before the CoE, the board pack was assembled from at least four source systems — two of which had known data quality issues that were worked around every quarter. Nobody owned fixing the root cause.",
        scenarioContext: "One of the board pack's core data feeds has been producing inconsistent revenue figures for two months. Everyone knows. The workaround is a manual adjustment applied in the final assembly step.",
        prompt: "A known data quality issue is affecting the board pack pipeline.",
        options: [
          { label: "Log it as a known issue. Continue the manual workaround this quarter. Note it in the commentary.", type: "old", consequence: "The workaround becomes permanent. The manual adjustment gets applied inconsistently in Q3. A board member questions a revenue figure in the meeting. Tracing it takes three days and surfaces the two-month-old unfixed pipeline issue. The credibility damage is disproportionate to the original data problem." },
          { label: "Trace the root cause. Fix the pipeline. Add a monitoring alert so it can't silently drift again.", type: "new", consequence: "The issue is resolved permanently in four days. The board pack is clean. The monitoring alert catches a related issue two months later before it reaches any output. The CoE is the reason the board can trust the numbers — not the reason they can't." }
        ]
      },
      "mlops-engineer": {
        involvement: "future-only",
        involvementNote: "Before the CoE, board pack analytics were static — models were run manually, outputs were copied into slides, and there was no automated reliability layer. A bad run on the wrong night could corrupt the entire pack.",
        scenarioContext: "The board pack relies on outputs from three CoE models. All three need to run cleanly in the 48-hour window before the pack is finalized.",
        prompt: "How do you ensure the model outputs for the board pack are reliable on deadline?",
        options: [
          { label: "Run the models manually the night before. Check the outputs visually. Flag anything that looks anomalous.", type: "old", consequence: "Two models run cleanly. One produces an output that looks right but has a stale data input. It gets missed in the visual check. The CFO catches it in the pre-read. The correction takes four hours and delays the pack distribution." },
          { label: "Build an automated board pack pipeline with validation checks at every step. Any anomaly triggers an alert before it reaches the pack.", type: "new", consequence: "The stale input is caught automatically at 2am, six hours before the pack is finalized. The alert goes to the Data Engineer who refreshes the feed. The CFO receives a clean pack. Nobody finds out there was a problem — which is exactly right." }
        ]
      },
      "model-governance": {
        involvement: "future-only",
        involvementNote: "Before the CoE, AI outputs used in the board pack had no governance record. When board members asked how a number was derived, the answer was a verbal explanation from whoever built the model.",
        scenarioContext: "A board member directly challenges the methodology behind the AI-generated revenue forecast in the board meeting. They want to understand what assumptions are driving it.",
        prompt: "A board member challenges the forecast methodology in the meeting.",
        options: [
          { label: "Acknowledge the question. Explain verbally how the model works. Offer to provide more detail offline.", type: "old", consequence: "The verbal explanation is credible but unverifiable. The board member requests a written methodology review before acting on the forecast. The decision is deferred. The CoE spends two weeks producing retroactive documentation." },
          { label: "Reference the model card in the board appendix. It has been included since the model went live — inputs, assumptions, validation results, and known limitations all documented.", type: "new", consequence: "The board member turns to page 47. Their question is answered before the next agenda item. The decision proceeds. The governance layer protected the CoE's credibility at exactly the moment it mattered most." }
        ]
      },
      "viz-architect": {
        involvement: "both",
        involvementNote: null,
        scenarioContext: "The CFO says the board pack has too much data and not enough insight — for the third consecutive quarter. The feedback is the same every time: 'it doesn't help us make decisions.'",
        prompt: "How do you respond to the board pack visualization feedback?",
        options: [
          { label: "Cut 20 pages. Simplify the charts. Submit a cleaner version of the same structure.", type: "old", consequence: "Shorter data is still data. The CFO gives the same feedback next quarter. You've optimized the production — you haven't changed what it produces." },
          { label: "Redesign the visual architecture around the three decisions the board needs to make. Build a template that makes this structure repeatable every quarter.", type: "new", consequence: "The board pack becomes a decision document. Every chart exists in service of one of the three decisions. The CFO doesn't give the feedback next quarter because the format has changed — not just the length." }
        ]
      },
      "storytelling-analyst": {
        involvement: "both",
        involvementNote: null,
        scenarioContext: "The CoE has produced a technically excellent quarter-end analysis. The CFO wants it in the board pack. In its current form, a board member would need 30 minutes and a statistics background to read it.",
        prompt: "How do you adapt the CoE analysis for the board?",
        options: [
          { label: "Add an executive summary. Highlight the key findings at the top. Keep the full analysis as an appendix.", type: "old", consequence: "The executive summary is still data-led. It lists findings without framing decisions. Board members read the summary, skip the appendix, and arrive at the meeting without a clear point of view on what to do." },
          { label: "Rebuild it for the audience. One chart. One so-what. One recommended next step. Full analysis in the appendix for those who want it.", type: "new", consequence: "Board members arrive at the meeting having already formed a view. The discussion starts at 'what do we do' rather than 'what does this mean.' The CoE's analytical work drove the conversation instead of just informing it." }
        ]
      },
      "sr-fbp": {
        involvement: "today-only",
        involvementNote: "In the CoE + BU Pod model, BU commentary for the board pack is generated automatically from live actuals and reviewed by the Sr. FBP — not written from scratch each quarter. The role shifts from author to editor to strategist, spending time on the 20% that requires judgment rather than the 80% that doesn't.",
        scenarioContext: "Your BU's board pack section needs to be drafted this quarter. Today it takes two full days — pulling data from four systems, formatting to the template, and writing descriptive commentary.",
        prompt: "How do you produce your BU's board pack section?",
        options: [
          { label: "Write the commentary from scratch. Pull the data. Format to the template. Submit.", type: "old", consequence: "Two days of production work. Half of it is data description that could have been auto-generated. The strategic context you actually bring — BU-specific nuance the board needs — gets added in the final 30 minutes when you're out of time." },
          { label: "Review and sharpen the CoE-generated commentary. Add the strategic context and forward-looking framing only you have. Submit in two hours.", type: "new", consequence: "The section is more insightful than anything produced from scratch in two days. The board gets the data description automatically and the strategic framing from you. You've spent your time on what only you can provide." }
        ]
      },
      "fpa-analyst": {
        involvement: "both",
        involvementNote: null,
        scenarioContext: "The CFO wants a sensitivity analysis on three strategic scenarios for the board meeting: base case, macro headwind, and accelerated investment. You have three days.",
        prompt: "How do you build the sensitivity analysis?",
        options: [
          { label: "Build three separate models. Run the scenarios. Compile the outputs into a comparison table.", type: "old", consequence: "Three days of model building. The models aren't fully linked. One scenario has an error the CFO catches in the pre-read. Trust in the numbers takes a hit at the worst moment." },
          { label: "Configure the CoE scenario engine. Define the key variables. Own the interpretation — not the model mechanics.", type: "new", consequence: "Three scenarios modeled in an afternoon. You spend the remaining time on what they mean — and walk into the CFO review with a recommendation, not just a table." }
        ]
      },
      "data-analyst": {
        involvement: "both",
        involvementNote: null,
        scenarioContext: "The BU head wants the board pack's BU section to include a customer-level breakdown that isn't in the standard dashboard. Two days to deliver it.",
        prompt: "How do you add the customer-level view to the board pack section?",
        options: [
          { label: "Build the customer analysis in Excel from a raw CRM export. Reconcile it with the board pack numbers manually.", type: "old", consequence: "The analysis takes two days. The base numbers don't reconcile with the board pack because the extraction logic differs slightly. The Sr. FBP spends an hour explaining the discrepancy to the BU head. The customer view gets cut from the final pack." },
          { label: "Use the CoE self-service layer to build the customer-level cut from the governed dataset. It matches the board pack numbers automatically.", type: "new", consequence: "The customer breakdown is ready in two hours and aligns exactly with every other number in the pack. The Sr. FBP adds the strategic framing. The view makes it into the final board pack — because there's nothing to reconcile." }
        ]
      }
    }
  },
  {
    id: "product-launch",
    icon: "◆",
    title: "New Product Launch Evaluation",
    subtitle: "The business wants to move fast. The CoE and BU Pods need to give them a reason to — or a reason not to.",
    description: "A high-stakes, time-compressed decision that touches every layer of the org. See who leads, who enables, and whose role barely existed until the CoE was built.",
    roles: {
      "sr-director": {
        involvement: "both",
        involvementNote: null,
        scenarioContext: "The CEO wants a go/no-go on a new product line. 10 days. The CoE has the scenario modeling capability to shape this evaluation from day one — but nobody has thought to involve them yet.",
        prompt: "How does the CoE contribute to the product launch evaluation?",
        options: [
          { label: "Wait for the FP&A team to request analytics support. Evaluations are finance decisions — the CoE provides data on request.", type: "old", consequence: "The CoE gets involved on day 7. The strategic thesis has already formed. You're asked to model three scenarios that prove the thesis rather than test it. The CoE's contribution is window dressing on a decision already made." },
          { label: "Proactively offer the scenario modeling capability. Get into the evaluation on day one — before the thesis calcifies.", type: "new", consequence: "The CoE shapes the evaluation framework from the start: what are the key assumptions, what does 'working' look like, what signals would change the recommendation? The final go/no-go is better because the questions were better." }
        ]
      },
      "product-owner": {
        involvement: "future-only",
        involvementNote: "Before the CoE, each finance and analytics team member on a product launch evaluation built their own model independently. Duplicated effort, inconsistent outputs, and no one coordinating the analytical work.",
        scenarioContext: "The FP&A Analyst, the Sr. FBP, and the Sr. Director's team are all requesting analytics support for the launch evaluation simultaneously. The requests overlap but nobody knows it.",
        prompt: "How do you coordinate the CoE's analytics support for the product launch?",
        options: [
          { label: "Assign each request to whoever is available. Build three separate analyses for three separate audiences.", type: "old", consequence: "Three analyses are delivered with slightly different assumptions. The Sr. Director's scenario model contradicts the FP&A Analyst's sensitivity analysis on margin. The CFO asks which one to use. The evaluation loses credibility at the moment it matters most." },
          { label: "Map the requests. Identify the shared core model. Build one version with audience-specific interpretation layers on top.", type: "new", consequence: "One model. Three audiences. Every role in the evaluation works from the same assumptions. When the business changes a pricing input, it updates everywhere simultaneously. The evaluation is coherent because the CoE made it coherent." }
        ]
      },
      "data-scientist": {
        involvement: "both",
        involvementNote: null,
        scenarioContext: "The product launch needs a demand forecast across three market scenarios. The business has 18 months of sales data on adjacent products — and high confidence in their commercial assumptions.",
        prompt: "How do you build the demand forecast for the launch?",
        options: [
          { label: "Use adjacent product sales as a proxy. Build a simple extrapolation with three manually adjusted scenarios.", type: "old", consequence: "The extrapolation doesn't account for pricing elasticity differences between the adjacent product and the new one. The base case is 40% optimistic. The business doesn't find out until month 4 post-launch — after significant capital has been deployed." },
          { label: "Build a demand model with identified drivers: pricing elasticity, market adjacency, and adoption curve assumptions. Produce probability-weighted scenarios with explicit confidence intervals.", type: "new", consequence: "The model surfaces that the business's commercial assumptions are plausible but sit in the top quartile of historical analogues. The CFO approves the launch with a staged capital commitment tied to hitting month-3 adoption targets. The risk is managed — not ignored." }
        ]
      },
      "data-engineer": {
        involvement: "future-only",
        involvementNote: "Before the CoE, every product launch evaluation required analysts to pull data from multiple systems and join it manually. Every evaluation started from scratch. By the time the data was ready, half the evaluation window was gone.",
        scenarioContext: "The launch evaluation requires customer behavior data from three source systems that have never been formally joined. The FP&A Analyst needs it in 24 hours.",
        prompt: "How do you make the customer behavior data available for the evaluation?",
        options: [
          { label: "Provide the join logic in a shared document. Each analyst pulls from the relevant system and applies the logic themselves.", type: "old", consequence: "Each analyst interprets the join logic slightly differently. The FP&A Analyst and the Data Analyst produce customer counts that differ by 8%. Neither is wrong — but the Sr. FBP now has to explain the discrepancy to the BU head before the evaluation can proceed." },
          { label: "Build the joined dataset in the curated data layer. One clean, versioned source that every analyst works from. Document the logic for reuse.", type: "new", consequence: "The joined dataset is live in four hours. Every analyst in the evaluation works from identical customer data. The join logic is reusable for every future product evaluation. This is the infrastructure investment that pays back across every subsequent launch." }
        ]
      },
      "mlops-engineer": {
        involvement: "future-only",
        involvementNote: "Before the CoE, evaluation models were run once and the outputs were pasted into slides. When assumptions changed mid-evaluation — which they always did — analysts rebuilt their models manually.",
        scenarioContext: "The pricing assumptions in the demand forecast change twice during the 10-day evaluation as the business refines its commercial model.",
        prompt: "How do you manage model updates during a live evaluation?",
        options: [
          { label: "Manually re-run the model each time assumptions change. Distribute updated outputs via email.", type: "old", consequence: "By the second pricing change, three versions of the output deck are circulating. The CFO's team is working from version 1. The Sr. FBP is working from version 3. The go/no-go meeting starts with 20 minutes of version reconciliation." },
          { label: "Set up an automated refresh pipeline. When assumptions change, the model re-runs and outputs update in the shared working environment.", type: "new", consequence: "Both pricing changes propagate to every output automatically. Every stakeholder always has the current version. The go/no-go meeting starts with the decision — not with data reconciliation." }
        ]
      },
      "model-governance": {
        involvement: "future-only",
        involvementNote: "Before the CoE, product launch evaluation models had no documentation. If the launch underperformed, there was no way to audit whether the model was wrong, the inputs were wrong, or the assumptions were correct but the market moved.",
        scenarioContext: "Post-launch, the CFO wants to be able to audit the assumptions that drove the go/no-go recommendation if actuals diverge significantly from the forecast.",
        prompt: "How do you ensure the launch evaluation model is auditable after the decision is made?",
        options: [
          { label: "Keep the final model version and a summary of key assumptions in a shared folder.", type: "old", consequence: "Six months post-launch, actuals are tracking 30% below forecast. The CFO asks to review the evaluation assumptions. The shared folder has three model versions with no version notes and assumption summaries that don't match any of them. The audit is inconclusive." },
          { label: "Document the model at the time of evaluation: assumptions, data sources, sensitivity ranges, and the explicit basis for the go/no-go recommendation.", type: "new", consequence: "When actuals diverge, the audit trail shows exactly what was assumed and why. The divergence is traced to a market entry timing assumption that was explicitly flagged as the highest-risk input. The evaluation was sound — the market moved. That's a very different conversation than 'we don't know why the model was wrong.'" }
        ]
      },
      "viz-architect": {
        involvement: "future-only",
        involvementNote: "Before the CoE, each team in a product launch evaluation built their own charts. The same underlying data appeared in three different formats with three different metric definitions — and the CFO was reconciling them in the meeting.",
        scenarioContext: "The launch evaluation deck has been assembled by three different teams. Slides 4, 11, and 19 all show the same demand metric — visualized three different ways, with slightly different numbers.",
        prompt: "How do you fix the visualization consistency problem mid-evaluation?",
        options: [
          { label: "Pick the 'best' version of each chart. Rebuild the others to match the formatting. Note the metric alignment issue for post-evaluation cleanup.", type: "old", consequence: "The reformatted charts still have slightly different underlying numbers because the metric definitions weren't unified — only the formatting was. The CFO still asks why slide 4 and slide 19 show different demand figures for the same scenario." },
          { label: "Apply certified metric definitions from the semantic layer retroactively. Rebuild all three from the same governed source.", type: "new", consequence: "All three charts now show the same number because they're drawing from the same definition. The CFO's question doesn't arise. The evaluation deck is coherent — because the data layer is coherent." }
        ]
      },
      "storytelling-analyst": {
        involvement: "future-only",
        involvementNote: "Before the CoE, product launch evaluation outputs were financial models and data summaries. Nobody converted them into a decision narrative before they reached the CEO. The evaluation was technically strong and communicatively weak.",
        scenarioContext: "The 10-day evaluation is complete. The CoE and BU Pod teams have produced excellent analysis. The CEO presentation is in two hours. The deck is 35 slides of models, charts, and assumptions — and nobody has turned it into a story.",
        prompt: "How do you prepare the CEO presentation?",
        options: [
          { label: "Compile the best charts from the evaluation. Add titles. Present the analysis in the order it was produced.", type: "old", consequence: "The CEO works through 35 slides trying to locate the recommendation. They ask what the team thinks they should do. Nobody has a clear answer because the deck was built to inform, not to decide. The go/no-go is deferred." },
          { label: "Identify the one decision and the three things the CEO needs to believe to make it. Build the narrative backward from that. Every chart earns its place.", type: "new", consequence: "The CEO presentation is 8 slides. The recommendation is on slide 2. The three belief conditions are slides 3–5. The risk mitigation is slide 6. The decision is made in the meeting. The CoE's 10 days of analytical work led to a decision — not a deferral." }
        ]
      },
      "sr-fbp": {
        involvement: "both",
        involvementNote: null,
        scenarioContext: "Your BU head wants to launch. The commercial team is confident. You have 48 hours to produce a credible business case before the CFO review.",
        prompt: "How do you approach the 48-hour business case?",
        options: [
          { label: "Build a standard financial model. Pull comps manually. Produce a financial summary.", type: "old", consequence: "48 hours produces a skeleton model with untested assumptions. The BU head senses you're not really in the business. Finance is a compliance step — present at the table, absent from the decision." },
          { label: "Commission the CoE scenario model immediately. Spend the 48 hours with the BU head stress-testing the commercial assumptions — not building the financial structure.", type: "new", consequence: "You deliver a scenario-tested business case with a clear go/no-go recommendation. The CoE built the model. You built the conviction. Finance earns its seat at the strategy table." }
        ]
      },
      "fpa-analyst": {
        involvement: "both",
        involvementNote: null,
        scenarioContext: "The product launch needs three financial scenarios modelled before the CFO review: base case, optimistic, and downside. The Sr. FBP needs them by end of day tomorrow.",
        prompt: "How do you build the scenario analysis?",
        options: [
          { label: "Build each scenario as a separate model. Link the key drivers manually. Compile the comparison.", type: "old", consequence: "It takes two full days. The models drift apart by the third revision. When the BU changes a pricing assumption, you update each model separately. Something slips — and the CFO finds it in the review." },
          { label: "Build one connected scenario engine using the CoE's modeling infrastructure. Define the variables. Run all three while you focus on what they mean.", type: "new", consequence: "Three scenarios are live in an afternoon. When the BU changes a pricing assumption, all three update instantly. You spend your time on the interpretation — and walk into the CFO review with a recommendation, not just outputs." }
        ]
      },
      "data-analyst": {
        involvement: "future-only",
        involvementNote: "In today's org, post-launch tracking is an afterthought — a monthly report added to the production schedule after approval. In the CoE + BU Pod model, the measurement framework is designed before launch so the right signals are tracked from day one.",
        scenarioContext: "The launch has been approved. The BU Pod needs a performance tracking framework that tells the team whether the launch is working — not just whether it hit revenue targets.",
        prompt: "How do you set up launch performance tracking?",
        options: [
          { label: "Set up a standard monthly reporting dashboard using existing revenue and margin metrics.", type: "old", consequence: "Month 3, the dashboard shows the product hitting revenue targets. Nobody notices it's destroying margin on a key customer segment because that metric wasn't tracked. The problem surfaces in month 6 when it's expensive to fix." },
          { label: "Design the KPI framework before launch. Define what 'working' looks like across revenue, margin, and customer behavior. Work with the Viz Architect to build the alert layer so signals are caught while they're still correctable.", type: "new", consequence: "The margin issue on the key customer segment surfaces in month 2. The Sr. FBP brings it to the BU head before it compounds. The launch is adjusted — not abandoned. The measurement framework is the reason the CoE caught it." }
        ]
      }
    }
  }
];

function JourneyBanner({ onStart }) {
  const [hov, setHov] = useState(false);
  return (
    <div
      onClick={onStart}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        cursor: "pointer", borderRadius: "14px", padding: "22px 24px", marginBottom: "28px",
        background: hov ? "rgba(255,255,255,0.05)" : "rgba(255,255,255,0.025)",
        border: `1px solid ${hov ? "rgba(255,255,255,0.18)" : "rgba(255,255,255,0.08)"}`,
        transition: "all 0.22s", position: "relative", overflow: "hidden",
      }}
    >
      <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "2px", background: hov ? "linear-gradient(90deg, #C8A96E, #5BC8A0, #A78BDB, #7EB8D4)" : "transparent", transition: "all 0.22s" }} />
      <div style={{ display: "flex", gap: "18px", alignItems: "center", flexWrap: "wrap" }}>
        <div style={{ flex: 1, minWidth: "220px" }}>
          <div style={{ fontSize: "9px", letterSpacing: "2px", color: "rgba(255,255,255,0.35)", fontWeight: "700", marginBottom: "7px" }}>WALK THE FULL ORG</div>
          <div style={{ fontFamily: "'Playfair Display', serif", fontSize: "20px", color: "#fff", marginBottom: "6px" }}>The Org Journey</div>
          <div style={{ fontSize: "13px", color: "rgba(255,255,255,0.42)", lineHeight: "1.65" }}>
            Pick a scenario — planning cycle, board pack, or product launch. Walk every role through their part in it. Some are central. Some are being designed away. One doesn't exist yet.
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: "10px", flexShrink: 0 }}>
          <div style={{ display: "flex", gap: "5px" }}>
            {JOURNEY_ORDER.map(id => {
              const p = PERSONAS.find(x => x.id === id);
              return <div key={id} style={{ width: "22px", height: "22px", borderRadius: "6px", background: `${p.color}20`, border: `1px solid ${p.color}40`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "11px", color: p.color }}>{p.icon}</div>;
            })}
          </div>
          <div style={{ fontSize: "11px", color: hov ? "#fff" : "rgba(255,255,255,0.35)", letterSpacing: "0.8px", fontWeight: "700", transition: "color 0.22s" }}>
            BEGIN THE JOURNEY →
          </div>
        </div>
      </div>
    </div>
  );
}

function ScenarioSelector({ onSelect, onBack }) {
  return (
    <div style={{ animation: "fadeUp 0.5s ease" }}>
      <button onClick={onBack} style={backBtn}>← Home</button>
      <div style={{ marginBottom: "36px" }}>
        <div style={{ fontSize: "10px", letterSpacing: "2px", color: "rgba(255,255,255,0.28)", marginBottom: "10px" }}>THE ORG JOURNEY</div>
        <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "28px", color: "#fff", marginBottom: "12px", lineHeight: "1.2" }}>Choose a scenario</h2>
        <p style={{ fontSize: "13px", color: "rgba(255,255,255,0.4)", lineHeight: "1.75", maxWidth: "520px" }}>
          Each scenario walks every role through their part in the same situation. Some roles are central. Some are being designed away. One doesn't exist yet.
        </p>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
        {ORG_SCENARIOS.map(scenario => (
          <ScenarioCard key={scenario.id} scenario={scenario} onSelect={onSelect} />
        ))}
      </div>
    </div>
  );
}

function ScenarioCard({ scenario, onSelect }) {
  const [hov, setHov] = useState(false);
  const involvementColor = { both: null, "today-only": "#E8C84A", "future-only": "#7EB8D4" };
  return (
    <div
      onClick={() => onSelect(scenario)}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        cursor: "pointer", borderRadius: "14px", padding: "22px 24px",
        background: hov ? "rgba(255,255,255,0.05)" : "rgba(255,255,255,0.025)",
        border: `1px solid ${hov ? "rgba(255,255,255,0.18)" : "rgba(255,255,255,0.08)"}`,
        transition: "all 0.22s", position: "relative", overflow: "hidden"
      }}
    >
      <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "2px", background: hov ? "rgba(255,255,255,0.2)" : "transparent", transition: "all 0.22s" }} />
      <div style={{ display: "flex", gap: "18px", alignItems: "flex-start", flexWrap: "wrap" }}>
        <div style={{ fontSize: "32px", color: "rgba(255,255,255,0.5)", flexShrink: 0, marginTop: "2px" }}>{scenario.icon}</div>
        <div style={{ flex: 1, minWidth: "200px" }}>
          <div style={{ fontFamily: "'Playfair Display', serif", fontSize: "19px", color: "#fff", marginBottom: "4px" }}>{scenario.title}</div>
          <div style={{ fontSize: "12px", color: "rgba(255,255,255,0.38)", marginBottom: "10px", lineHeight: "1.55" }}>{scenario.subtitle}</div>
          <div style={{ fontSize: "12px", color: "rgba(255,255,255,0.5)", lineHeight: "1.65" }}>{scenario.description}</div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: "10px", flexShrink: 0 }}>
          <div style={{ display: "flex", gap: "5px" }}>
            {JOURNEY_ORDER.map(id => {
              const p = PERSONAS.find(x => x.id === id);
              const roleData = scenario.roles[id];
              const iColor = involvementColor[roleData.involvement];
              return (
                <div key={id} title={`${p.title} · ${roleData.involvement}`} style={{
                  width: "24px", height: "24px", borderRadius: "6px",
                  background: iColor ? `${iColor}18` : `${p.color}18`,
                  border: `1px solid ${iColor ? iColor + "50" : p.color + "40"}`,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: "12px",
                  color: iColor || p.color,
                  opacity: roleData.involvement === "both" ? 1 : 0.6,
                }}>{p.icon}</div>
              );
            })}
          </div>
          <div style={{ display: "flex", gap: "10px", fontSize: "9px", color: "rgba(255,255,255,0.3)" }}>
            {["both", "today-only", "future-only"].map(type => {
              const count = JOURNEY_ORDER.filter(id => scenario.roles[id].involvement === type).length;
              if (!count) return null;
              const label = type === "both" ? "active" : type === "today-only" ? "fading" : "new";
              const color = type === "both" ? "rgba(255,255,255,0.4)" : type === "today-only" ? "#E8C84A" : "#7EB8D4";
              return <span key={type} style={{ color }}>{count} {label}</span>;
            })}
          </div>
          <div style={{ fontSize: "11px", color: hov ? "#fff" : "rgba(255,255,255,0.3)", letterSpacing: "0.8px", fontWeight: "700", transition: "color 0.22s" }}>
            START →
          </div>
        </div>
      </div>
    </div>
  );
}

function JourneyDone({ choices, scenario, onBack, onRestart }) {
  const score = choices.filter(c => c.type === "new").length;
  const gradeInfo = score >= 5
    ? { label: "AI-NATIVE ORG", color: "#5BC8A0", msg: "This finance org is moving together. Leadership, planning, partnering, analysis, insight, and infrastructure are all aligned around the same AI-native model. This is what transformation actually looks like." }
    : score >= 4
    ? { label: "TRANSITIONING", color: "#A78BDB", msg: "Most of the org has shifted, but pockets of the old playbook remain. Transformation at this scale isn't instant — the question is whether the lagging roles are catching up or falling further behind." }
    : score >= 2
    ? { label: "PARTIALLY STUCK", color: "#E8836A", msg: "Some roles are moving, others aren't. A partially AI-native org often creates more friction than a fully old-school one. The roles that have changed are waiting on the ones that haven't." }
    : { label: "STUCK", color: "#888", msg: "The org is still running the old playbook across the board. The tools exist. The bottleneck is the mental model — and it has to shift at every level, not just the top." };

  return (
    <div style={{ animation: "fadeUp 0.5s ease" }}>
      <div style={{ textAlign: "center", padding: "16px 0 36px" }}>
        <div style={{ fontSize: "10px", letterSpacing: "2px", color: "rgba(255,255,255,0.28)", marginBottom: "6px" }}>ORG JOURNEY COMPLETE</div>
        {scenario && <div style={{ fontSize: "13px", color: "rgba(255,255,255,0.4)", marginBottom: "14px" }}>{scenario.icon} {scenario.title}</div>}
        <span style={{ fontSize: "10px", letterSpacing: "2.5px", fontWeight: "800", color: gradeInfo.color, background: `${gradeInfo.color}15`, border: `1px solid ${gradeInfo.color}40`, borderRadius: "6px", padding: "6px 16px", display: "inline-block", marginBottom: "16px" }}>{gradeInfo.label}</span>
        <div style={{ fontFamily: "'Playfair Display', serif", fontSize: "26px", color: "#fff", marginBottom: "10px" }}>{score}/6 AI-native decisions</div>
        <p style={{ color: "rgba(255,255,255,0.42)", maxWidth: "500px", margin: "0 auto", lineHeight: "1.7", fontSize: "14px" }}>{gradeInfo.msg}</p>
      </div>

      <div style={{ marginBottom: "28px" }}>
        <div style={{ fontSize: "10px", letterSpacing: "1.5px", color: "rgba(255,255,255,0.28)", marginBottom: "16px" }}>DECISIONS ACROSS THE ORG</div>
        <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          {choices.map(({ personaId, type, consequence, optionLabel }) => {
            const p = PERSONAS.find(x => x.id === personaId);
            return (
              <div key={personaId} style={{
                padding: "16px 18px", borderRadius: "12px",
                background: type === "new" ? `${p.color}0c` : "rgba(255,70,50,0.05)",
                border: `1px solid ${type === "new" ? p.color + "30" : "rgba(255,70,50,0.18)"}`,
              }}>
                <div style={{ display: "flex", gap: "12px", alignItems: "flex-start" }}>
                  <div style={{ width: "32px", height: "32px", borderRadius: "8px", flexShrink: 0, background: `${p.color}15`, border: `1px solid ${p.color}30`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "14px", color: p.color }}>{p.icon}</div>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ display: "flex", gap: "8px", alignItems: "center", marginBottom: "4px", flexWrap: "wrap" }}>
                      <span style={{ fontFamily: "'Playfair Display', serif", fontSize: "13px", color: "#fff" }}>{p.title}</span>
                      <span style={{ fontSize: "9px", letterSpacing: "1px", fontWeight: "700", padding: "2px 7px", borderRadius: "4px", color: type === "new" ? p.color : "#ff6450", background: type === "new" ? `${p.color}18` : "rgba(255,70,50,0.12)", border: `1px solid ${type === "new" ? p.color + "35" : "rgba(255,70,50,0.3)"}` }}>{type === "new" ? "✓ AI-NATIVE" : "✕ OLD PLAYBOOK"}</span>
                    </div>
                    <div style={{ fontSize: "11px", color: "rgba(255,255,255,0.35)", marginBottom: "5px", fontStyle: "italic" }}>"{optionLabel}"</div>
                    <div style={{ fontSize: "12px", color: "rgba(255,255,255,0.55)", lineHeight: "1.6" }}>{consequence}</div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
        <button onClick={onBack} style={ghostBtn}>← Home</button>
        <button onClick={onRestart} style={{ ...primaryBtn("#5BC8A0"), flex: 1, minWidth: "140px" }}>↺ Walk again</button>
      </div>
    </div>
  );
}

function OrgJourney({ onBack }) {
  const [scenario, setScenario] = useState(null);
  const [roleIdx, setRoleIdx] = useState(0);
  const [phase, setPhase] = useState("overview"); // "overview" | "decision"
  const [chosen, setChosen] = useState(null);
  const [showConsequence, setShowConsequence] = useState(false);
  const [allChoices, setAllChoices] = useState([]);
  const [journeyDone, setJourneyDone] = useState(false);

  // Show scenario picker first
  if (!scenario) {
    return <ScenarioSelector onSelect={setScenario} onBack={onBack} />;
  }

  const persona = PERSONAS.find(p => p.id === JOURNEY_ORDER[roleIdx]);
  const roleData = scenario.roles[persona.id];
  const step = { prompt: roleData.prompt, options: roleData.options };
  const lastChoice = allChoices[allChoices.length - 1];
  const involvementColors = { "today-only": "#E8C84A", "future-only": "#7EB8D4" };
  const involvementLabels = { "today-only": "ROLE FADING IN AI STATE", "future-only": "NET NEW IN AI STATE" };

  const handleChoice = (type, idx) => {
    if (chosen !== null) return;
    setChosen(idx);
    setTimeout(() => {
      setAllChoices(prev => [...prev, {
        type,
        personaId: persona.id,
        consequence: step.options[idx].consequence,
        optionLabel: step.options[idx].label,
      }]);
      setShowConsequence(true);
    }, 350);
  };

  const advance = () => {
    if (roleIdx + 1 >= JOURNEY_ORDER.length) {
      setJourneyDone(true);
    } else {
      setRoleIdx(r => r + 1);
      setPhase("overview");
      setChosen(null);
      setShowConsequence(false);
    }
  };

  const restart = () => {
    setScenario(null); setRoleIdx(0); setPhase("overview"); setChosen(null);
    setShowConsequence(false); setAllChoices([]); setJourneyDone(false);
  };

  if (journeyDone) {
    return <JourneyDone choices={allChoices} scenario={scenario} onBack={onBack} onRestart={restart} />;
  }

  const nextPersona = PERSONAS.find(p => p.id === JOURNEY_ORDER[roleIdx + 1]);

  return (
    <div style={{ animation: "fadeUp 0.4s ease" }}>
      <button onClick={() => setScenario(null)} style={backBtn}>← Scenarios</button>

      {/* Scenario label */}
      <div style={{ display: "flex", gap: "8px", alignItems: "center", marginBottom: "14px" }}>
        <span style={{ fontSize: "13px", color: "rgba(255,255,255,0.25)" }}>{scenario.icon}</span>
        <span style={{ fontSize: "11px", color: "rgba(255,255,255,0.28)", letterSpacing: "0.5px" }}>{scenario.title}</span>
      </div>

      {/* Progress bar: 6 segments */}
      <div style={{ display: "flex", gap: "5px", marginBottom: "10px" }}>
        {JOURNEY_ORDER.map((id, i) => {
          const p = PERSONAS.find(x => x.id === id);
          return (
            <div key={id} style={{
              flex: 1, height: "3px", borderRadius: "2px",
              background: i < roleIdx ? p.color : i === roleIdx ? `${persona.color}60` : "rgba(255,255,255,0.08)",
              transition: "background 0.5s"
            }} />
          );
        })}
      </div>
      <div style={{ fontSize: "9px", letterSpacing: "2px", color: "rgba(255,255,255,0.22)", marginBottom: "28px" }}>
        ROLE {roleIdx + 1} OF {JOURNEY_ORDER.length} · {phase === "overview" ? "ROLE OVERVIEW" : "THE DECISION"}
      </div>

      {/* ── OVERVIEW PHASE ── */}
      {phase === "overview" && (
        <div style={{ animation: "fadeUp 0.4s ease" }}>
          {/* Involvement note */}
          {roleData.involvement !== "both" && (
            <div style={{
              padding: "12px 16px", borderRadius: "10px", marginBottom: "20px",
              background: `${involvementColors[roleData.involvement]}10`,
              border: `1px solid ${involvementColors[roleData.involvement]}35`,
            }}>
              <div style={{ fontSize: "8px", letterSpacing: "1.5px", fontWeight: "700", color: involvementColors[roleData.involvement], marginBottom: "5px" }}>{involvementLabels[roleData.involvement]}</div>
              <div style={{ fontSize: "12px", color: "rgba(255,255,255,0.5)", lineHeight: "1.6" }}>{roleData.involvementNote}</div>
            </div>
          )}

          {/* Role header */}
          <div style={{ display: "flex", gap: "14px", alignItems: "center", marginBottom: "20px" }}>
            <div style={{ width: "52px", height: "52px", borderRadius: "13px", flexShrink: 0, background: `${persona.color}18`, border: `1px solid ${persona.color}45`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "24px", color: persona.color }}>{persona.icon}</div>
            <div>
              <span style={{ fontSize: "8px", letterSpacing: "1.8px", fontWeight: "700", color: persona.tagColor, background: `${persona.tagColor}15`, border: `1px solid ${persona.tagColor}35`, borderRadius: "4px", padding: "2px 7px", display: "inline-block", marginBottom: "5px" }}>{persona.tag}</span>
              <div style={{ fontFamily: "'Playfair Display', serif", fontSize: "22px", color: "#fff" }}>{persona.title}</div>
            </div>
          </div>

          {/* Scenario-specific context for this role */}
          <p style={{ fontSize: "14px", color: "rgba(255,255,255,0.5)", lineHeight: "1.72", marginBottom: "26px", paddingLeft: "14px", borderLeft: `2px solid ${persona.color}40` }}>
            {roleData.scenarioContext}
          </p>

          {/* Responsibilities / Inputs / Outputs */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))", gap: "10px", marginBottom: "22px" }}>
            {[
              { label: "RESPONSIBILITIES", items: persona.responsibilities, accent: "rgba(255,255,255,0.5)" },
              { label: "INPUTS", items: persona.inputs, accent: "#7EB8D4" },
              { label: "OUTPUTS", items: persona.outputs, accent: persona.color },
            ].map(({ label, items, accent }) => (
              <div key={label} style={{ padding: "16px", background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)", borderRadius: "10px" }}>
                <div style={{ fontSize: "8px", letterSpacing: "1.5px", color: accent, marginBottom: "12px", fontWeight: "700" }}>{label}</div>
                {items.map((item, i) => (
                  <div key={i} style={{ display: "flex", gap: "8px", marginBottom: "8px", alignItems: "flex-start" }}>
                    <div style={{ width: "4px", height: "4px", borderRadius: "50%", background: accent, marginTop: "6px", flexShrink: 0 }} />
                    <span style={{ fontSize: "12px", color: "rgba(255,255,255,0.55)", lineHeight: "1.55" }}>{item}</span>
                  </div>
                ))}
              </div>
            ))}
          </div>

          {/* Role evolution */}
          <div style={{ padding: "18px 20px", background: `${persona.color}08`, border: `1px solid ${persona.color}20`, borderRadius: "12px", marginBottom: "26px" }}>
            <div style={{ fontSize: "9px", letterSpacing: "1.5px", color: persona.color, marginBottom: "14px", fontWeight: "700" }}>HOW THIS ROLE IS CHANGING</div>
            <div style={{ display: "flex", gap: "16px", alignItems: "flex-start", flexWrap: "wrap" }}>
              <div style={{ flex: 1, minWidth: "140px" }}>
                <div style={{ fontSize: "9px", color: "rgba(255,255,255,0.25)", letterSpacing: "1px", marginBottom: "5px" }}>TODAY · {persona.title}</div>
                <div style={{ fontSize: "12px", color: "rgba(255,255,255,0.42)", lineHeight: "1.6" }}>{persona.hook}</div>
                <div style={{ marginTop: "10px", display: "flex", flexWrap: "wrap", gap: "3px" }}>
                  {persona.beforeSkills.slice(0, 3).map((s, i) => (
                    <span key={i} style={{ fontSize: "9px", color: "rgba(255,255,255,0.25)", background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)", borderRadius: "4px", padding: "2px 6px" }}>{s}</span>
                  ))}
                </div>
              </div>
              <div style={{ fontSize: "22px", color: persona.color, paddingTop: "6px" }}>→</div>
              <div style={{ flex: 1, minWidth: "140px" }}>
                <div style={{ fontSize: "9px", color: persona.color, letterSpacing: "1px", marginBottom: "5px" }}>REIMAGINED · {persona.futureTitle}</div>
                <div style={{ fontSize: "12px", color: "rgba(255,255,255,0.6)", lineHeight: "1.6" }}>{persona.futureHook}</div>
                <div style={{ marginTop: "10px", display: "flex", flexWrap: "wrap", gap: "3px" }}>
                  {persona.afterSkills.slice(0, 3).map((s, i) => (
                    <span key={i} style={{ fontSize: "9px", color: "rgba(255,255,255,0.6)", background: "rgba(255,255,255,0.05)", border: `1px solid ${persona.color}30`, borderRadius: "4px", padding: "2px 6px" }}>{s}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <button onClick={() => setPhase("decision")} style={{ ...primaryBtn(persona.color), width: "100%" }}>
            FACE THE DECISION →
          </button>
        </div>
      )}

      {/* ── DECISION PHASE ── */}
      {phase === "decision" && (
        <div style={{ animation: "fadeUp 0.4s ease" }}>
          {/* Involvement note (compact) */}
          {roleData.involvement !== "both" && (
            <div style={{
              padding: "10px 14px", borderRadius: "8px", marginBottom: "18px",
              background: `${involvementColors[roleData.involvement]}10`,
              border: `1px solid ${involvementColors[roleData.involvement]}30`,
              fontSize: "11px", color: involvementColors[roleData.involvement], lineHeight: "1.55"
            }}>
              <span style={{ fontWeight: "700", letterSpacing: "0.5px" }}>{involvementLabels[roleData.involvement]} · </span>
              {roleData.involvementNote}
            </div>
          )}

          {/* Compact role header */}
          <div style={{ display: "flex", gap: "12px", alignItems: "center", marginBottom: "22px" }}>
            <div style={{ width: "36px", height: "36px", borderRadius: "9px", flexShrink: 0, background: `${persona.color}18`, border: `1px solid ${persona.color}40`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "16px", color: persona.color }}>{persona.icon}</div>
            <div>
              <div style={{ fontSize: "9px", color: "rgba(255,255,255,0.28)", letterSpacing: "1px" }}>{persona.tag}</div>
              <div style={{ fontFamily: "'Playfair Display', serif", fontSize: "17px", color: "#fff" }}>{persona.title}</div>
            </div>
          </div>

          {/* Scenario context */}
          <div style={{ padding: "14px 18px", background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: "10px", marginBottom: "20px" }}>
            <div style={{ fontSize: "9px", color: "rgba(255,255,255,0.28)", letterSpacing: "1px", marginBottom: "6px" }}>SITUATION</div>
            <div style={{ fontSize: "14px", color: "rgba(255,255,255,0.72)", lineHeight: "1.65" }}>{roleData.scenarioContext}</div>
          </div>

          <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "20px", color: "#fff", marginBottom: "22px", lineHeight: "1.4" }}>
            {step.prompt}
          </h3>

          <div style={{ display: "flex", flexDirection: "column", gap: "12px", marginBottom: "22px" }}>
            {step.options.map((opt, i) => {
              const isChosen = chosen === i;
              const isOld = opt.type === "old";
              return (
                <button key={i} onClick={() => handleChoice(opt.type, i)} disabled={chosen !== null} style={{
                  background: isChosen ? (isOld ? "rgba(255,90,70,0.1)" : `${persona.color}15`) : "rgba(255,255,255,0.035)",
                  border: `1px solid ${isChosen ? (isOld ? "rgba(255,90,70,0.4)" : `${persona.color}55`) : "rgba(255,255,255,0.08)"}`,
                  borderRadius: "12px", padding: "17px 18px", cursor: chosen !== null ? "default" : "pointer",
                  textAlign: "left", transition: "all 0.22s", width: "100%"
                }}>
                  <div style={{ display: "flex", gap: "12px", alignItems: "flex-start" }}>
                    <div style={{
                      width: "21px", height: "21px", borderRadius: "50%", flexShrink: 0, marginTop: "2px",
                      background: isChosen ? (isOld ? "rgba(255,90,70,0.25)" : `${persona.color}28`) : "rgba(255,255,255,0.06)",
                      border: `1px solid ${isChosen ? (isOld ? "rgba(255,90,70,0.55)" : persona.color) : "rgba(255,255,255,0.12)"}`,
                      display: "flex", alignItems: "center", justifyContent: "center",
                      fontSize: "10px", color: isChosen ? (isOld ? "#ff6450" : persona.color) : "rgba(255,255,255,0.3)"
                    }}>
                      {isChosen ? (isOld ? "✕" : "✓") : String.fromCharCode(65 + i)}
                    </div>
                    <span style={{ fontSize: "14px", color: "rgba(255,255,255,0.78)", lineHeight: "1.6" }}>{opt.label}</span>
                  </div>
                </button>
              );
            })}
          </div>

          {showConsequence && (
            <div style={{
              padding: "18px 20px", borderRadius: "12px", marginBottom: "22px", animation: "fadeUp 0.35s ease",
              background: lastChoice?.type === "new" ? `${persona.color}10` : "rgba(255,70,50,0.07)",
              border: `1px solid ${lastChoice?.type === "new" ? `${persona.color}38` : "rgba(255,70,50,0.22)"}`
            }}>
              <div style={{ fontSize: "10px", letterSpacing: "1.5px", fontWeight: "700", marginBottom: "8px", color: lastChoice?.type === "new" ? persona.color : "#ff6450" }}>
                {lastChoice?.type === "new" ? "✓ AI-NATIVE MOVE" : "✕ OLD PLAYBOOK"}
              </div>
              <p style={{ fontSize: "14px", color: "rgba(255,255,255,0.68)", lineHeight: "1.7", margin: 0 }}>
                {step.options[chosen].consequence}
              </p>
            </div>
          )}

          {showConsequence && (
            <button onClick={advance} style={{ ...primaryBtn(persona.color), width: "100%" }}>
              {nextPersona ? `NEXT: ${nextPersona.title} →` : "SEE ORG OUTCOME →"}
            </button>
          )}
        </div>
      )}
    </div>
  );
}

// ── ORG CHART ─────────────────────────────────────────────────────────────────

function OrgNode({ persona, onSelect, compact = false }) {
  const [hov, setHov] = useState(false);
  return (
    <div
      onClick={() => onSelect(persona)}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        cursor: "pointer", borderRadius: "12px",
        padding: compact ? "14px 16px" : "18px 22px",
        background: hov ? "rgba(255,255,255,0.055)" : "rgba(255,255,255,0.025)",
        border: `1px solid ${hov ? persona.color + "55" : "rgba(255,255,255,0.07)"}`,
        transition: "all 0.22s ease", position: "relative", overflow: "hidden",
        textAlign: "center",
      }}
    >
      <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "2px", background: hov ? persona.color : "transparent", transition: "all 0.22s" }} />
      <div style={{ fontSize: compact ? "20px" : "26px", color: persona.color, marginBottom: "7px" }}>{persona.icon}</div>
      <div style={{ fontSize: "8px", letterSpacing: "1.5px", color: persona.tagColor, marginBottom: "5px", fontWeight: "700" }}>{persona.tag}</div>
      <div style={{ fontFamily: "'Playfair Display', serif", fontSize: compact ? "12px" : "15px", color: "#fff", marginBottom: "3px", lineHeight: "1.3" }}>{persona.futureTitle}</div>
      <div style={{ fontSize: compact ? "10px" : "11px", color: "rgba(255,255,255,0.32)", marginBottom: "6px" }}>{persona.title}</div>
      <div style={{ fontSize: "9px", color: hov ? persona.color : "rgba(255,255,255,0.18)", transition: "color 0.22s", letterSpacing: "0.5px" }}>PLAY ROLE →</div>
    </div>
  );
}

function OrgChart({ onSelect }) {
  const byId = id => PERSONAS.find(p => p.id === id);
  const line = "rgba(255,255,255,0.12)";

  const coeIds = ["sr-director", "product-owner", "data-scientist", "data-engineer", "mlops-engineer", "model-governance", "viz-architect", "storytelling-analyst"];
  const podIds = ["sr-fbp", "fpa-analyst", "data-analyst"];

  return (
    <div style={{ animation: "fadeUp 0.5s ease" }}>
      <div style={{ textAlign: "center", marginBottom: "36px" }}>
        <div style={{ fontSize: "10px", letterSpacing: "2px", color: "rgba(255,255,255,0.28)", marginBottom: "10px" }}>AI & ANALYTICS CENTER OF EXCELLENCE</div>
        <p style={{ fontSize: "13px", color: "rgba(255,255,255,0.38)", maxWidth: "560px", margin: "0 auto", lineHeight: "1.75" }}>
          Hub & Spoke: the CoE builds shared capabilities, governance, and scalable products. BU Pods stay embedded with the business and turn insights into action. Click any role to explore.
        </p>
      </div>

      <div style={{ display: "flex", gap: "24px", width: "100%", flexWrap: "wrap" }}>
        {/* CoE Column */}
        <div style={{ flex: "1 1 340px", minWidth: "280px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "18px" }}>
            <div style={{ flex: 1, height: "0", borderTop: "1px solid rgba(255,255,255,0.09)" }} />
            <span style={{ fontSize: "9px", letterSpacing: "2px", color: "rgba(255,255,255,0.28)", fontWeight: "700", whiteSpace: "nowrap" }}>COE · SHARED CAPABILITIES</span>
            <div style={{ flex: 1, height: "0", borderTop: "1px solid rgba(255,255,255,0.09)" }} />
          </div>

          {/* Sr. Director — leader node */}
          <div style={{ width: "100%", marginBottom: "8px" }}>
            <OrgNode persona={byId("sr-director")} onSelect={onSelect} />
          </div>

          {/* Vertical connector */}
          <div style={{ display: "flex", justifyContent: "center" }}>
            <div style={{ width: "1px", height: "16px", background: line }} />
          </div>

          {/* Core CoE roles */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "8px", marginBottom: "8px" }}>
            {["product-owner", "data-scientist", "data-engineer", "mlops-engineer", "model-governance"].map(id => (
              <OrgNode key={id} persona={byId(id)} onSelect={onSelect} compact />
            ))}
          </div>

          {/* BI & Viz Team sub-section */}
          <div style={{ margin: "14px 0 8px", display: "flex", alignItems: "center", gap: "10px" }}>
            <div style={{ flex: 1, height: "0", borderTop: "1px dashed rgba(255,255,255,0.07)" }} />
            <span style={{ fontSize: "8px", letterSpacing: "1.5px", color: "rgba(255,255,255,0.18)", fontWeight: "700", whiteSpace: "nowrap" }}>BI & VISUALIZATION</span>
            <div style={{ flex: 1, height: "0", borderTop: "1px dashed rgba(255,255,255,0.07)" }} />
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "8px" }}>
            {["viz-architect", "storytelling-analyst"].map(id => (
              <OrgNode key={id} persona={byId(id)} onSelect={onSelect} compact />
            ))}
          </div>
        </div>

        {/* BU Pod Column */}
        <div style={{ flex: "0 1 260px", minWidth: "220px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "18px" }}>
            <div style={{ flex: 1, height: "0", borderTop: "1px solid rgba(255,255,255,0.09)" }} />
            <span style={{ fontSize: "9px", letterSpacing: "2px", color: "rgba(255,255,255,0.28)", fontWeight: "700", whiteSpace: "nowrap" }}>BU POD · EMBEDDED</span>
            <div style={{ flex: 1, height: "0", borderTop: "1px solid rgba(255,255,255,0.09)" }} />
          </div>

          {/* Sr. FBP — pod lead */}
          <div style={{ width: "100%", marginBottom: "8px" }}>
            <OrgNode persona={byId("sr-fbp")} onSelect={onSelect} />
          </div>

          {/* Vertical connector */}
          <div style={{ display: "flex", justifyContent: "center" }}>
            <div style={{ width: "1px", height: "16px", background: line }} />
          </div>

          {/* Pod team roles */}
          <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
            {["fpa-analyst", "data-analyst"].map(id => (
              <OrgNode key={id} persona={byId(id)} onSelect={onSelect} compact />
            ))}
          </div>

          {/* Operating model note */}
          <div style={{
            marginTop: "20px", padding: "14px 16px", borderRadius: "10px",
            background: "rgba(255,255,255,0.02)", border: "1px dashed rgba(255,255,255,0.07)"
          }}>
            <div style={{ fontSize: "8px", letterSpacing: "1.5px", color: "rgba(255,255,255,0.22)", fontWeight: "700", marginBottom: "8px" }}>OPERATING MODEL</div>
            <div style={{ fontSize: "10px", color: "rgba(255,255,255,0.30)", lineHeight: "1.65" }}>
              CoE owns tools, models & governance. BU Pods own business insight & action. One pod per business unit — embedded, not centralized.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ── SUMMARY VIEW ──────────────────────────────────────────────────────────────

function SummaryCard({ persona, onSelect }) {
  const [timeMode, setTimeMode] = useState(false);
  return (
    <div style={{
      padding: "22px", borderRadius: "14px",
      background: "rgba(255,255,255,0.025)",
      border: "1px solid rgba(255,255,255,0.07)",
      display: "flex", flexDirection: "column", gap: "18px"
    }}>
      {/* Header */}
      <div style={{ display: "flex", gap: "12px", alignItems: "flex-start" }}>
        <div style={{
          width: "38px", height: "38px", borderRadius: "10px", flexShrink: 0,
          background: `${persona.color}15`, border: `1px solid ${persona.color}35`,
          display: "flex", alignItems: "center", justifyContent: "center",
          fontSize: "16px", color: persona.color
        }}>{persona.icon}</div>
        <div style={{ flex: 1, minWidth: 0 }}>
          <span style={{
            fontSize: "8px", letterSpacing: "1.5px", fontWeight: "700",
            color: persona.tagColor, background: `${persona.tagColor}15`,
            border: `1px solid ${persona.tagColor}35`, borderRadius: "4px",
            padding: "2px 6px", display: "inline-block", marginBottom: "6px"
          }}>{persona.tag}</span>
          <div style={{ fontSize: "11px", color: "rgba(255,255,255,0.38)", marginBottom: "4px" }}>{persona.title}</div>
          <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
            <span style={{ color: persona.color, fontSize: "14px", flexShrink: 0 }}>→</span>
            <div style={{ fontFamily: "'Playfair Display', serif", fontSize: "14px", color: "#fff", lineHeight: "1.3" }}>{persona.futureTitle}</div>
          </div>
        </div>
      </div>

      {/* Time allocation */}
      <div>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "12px" }}>
          <div style={{ fontSize: "9px", letterSpacing: "1.5px", color: "rgba(255,255,255,0.25)" }}>TIME ALLOCATION</div>
          <div style={{ display: "flex", background: "rgba(255,255,255,0.06)", borderRadius: "6px", padding: "2px" }}>
            {["TODAY", "AI"].map((l, i) => (
              <button key={i} onClick={() => setTimeMode(i === 1)} style={{
                background: timeMode === (i === 1) ? `${persona.color}28` : "transparent",
                border: "none", borderRadius: "4px", padding: "3px 9px",
                color: timeMode === (i === 1) ? persona.color : "rgba(255,255,255,0.28)",
                fontSize: "8px", letterSpacing: "0.8px", fontWeight: "700", cursor: "pointer", transition: "all 0.18s"
              }}>{l}</button>
            ))}
          </div>
        </div>
        {persona.timeLabels.map((label, i) => {
          const val = timeMode ? persona.timeAfter[i] : persona.timeBefore[i];
          return (
            <div key={i} style={{ marginBottom: "8px" }}>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "4px" }}>
                <span style={{ fontSize: "9px", color: "rgba(255,255,255,0.38)" }}>{label}</span>
                <span style={{ fontSize: "9px", fontWeight: "700", color: timeMode ? persona.color : "rgba(255,255,255,0.28)" }}>{val}%</span>
              </div>
              <div style={{ height: "3px", background: "rgba(255,255,255,0.06)", borderRadius: "2px", overflow: "hidden" }}>
                <div style={{
                  height: "100%", width: `${val}%`, borderRadius: "2px",
                  background: timeMode ? persona.color : "rgba(255,255,255,0.15)",
                  transition: "all 0.7s cubic-bezier(0.4,0,0.2,1)"
                }} />
              </div>
            </div>
          );
        })}
      </div>

      {/* Skills */}
      <div style={{ display: "flex", gap: "14px" }}>
        <div style={{ flex: 1 }}>
          <div style={{ fontSize: "9px", letterSpacing: "1px", color: "rgba(255,255,255,0.2)", marginBottom: "7px" }}>FADING</div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "3px" }}>
            {persona.beforeSkills.slice(0, 4).map((s, i) => (
              <span key={i} style={{ fontSize: "9px", color: "rgba(255,255,255,0.28)", background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)", borderRadius: "4px", padding: "2px 6px" }}>{s}</span>
            ))}
          </div>
        </div>
        <div style={{ flex: 1 }}>
          <div style={{ fontSize: "9px", letterSpacing: "1px", color: persona.color, marginBottom: "7px" }}>EMERGING</div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "3px" }}>
            {persona.afterSkills.slice(0, 4).map((s, i) => (
              <span key={i} style={{ fontSize: "9px", color: "rgba(255,255,255,0.6)", background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.11)", borderRadius: "4px", padding: "2px 6px" }}>{s}</span>
            ))}
          </div>
        </div>
      </div>

      {/* CTA */}
      <button onClick={() => onSelect(persona)} style={{
        background: `${persona.color}15`, border: `1px solid ${persona.color}35`,
        color: persona.color, borderRadius: "8px", padding: "10px 16px",
        cursor: "pointer", fontSize: "10px", fontWeight: "700", letterSpacing: "1px", width: "100%",
        transition: "all 0.2s"
      }}>
        PLAY THIS ROLE →
      </button>
    </div>
  );
}

function SummaryView({ onSelect }) {
  return (
    <div style={{ animation: "fadeUp 0.5s ease" }}>
      <div style={{ marginBottom: "32px" }}>
        <div style={{ fontSize: "10px", letterSpacing: "2px", color: "rgba(255,255,255,0.28)", marginBottom: "10px" }}>ALL 6 ROLES AT A GLANCE</div>
        <p style={{ fontSize: "13px", color: "rgba(255,255,255,0.38)", lineHeight: "1.75", maxWidth: "540px" }}>
          Toggle TODAY ↔ AI on any card to see the time shift. Every role is moving — just at different speeds and in different directions.
        </p>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(360px, 1fr))", gap: "14px" }}>
        {PERSONAS.map(p => <SummaryCard key={p.id} persona={p} onSelect={onSelect} />)}
      </div>
    </div>
  );
}

// ── SHARED STYLES ─────────────────────────────────────────────────────────────
const backBtn = {
  background: "none", border: "1px solid rgba(255,255,255,0.1)", color: "rgba(255,255,255,0.38)",
  borderRadius: "8px", padding: "7px 15px", cursor: "pointer", fontSize: "12px",
  marginBottom: "30px", letterSpacing: "0.4px"
};
const primaryBtn = (color) => ({
  background: color, border: "none", color: "#06090d",
  borderRadius: "10px", padding: "13px 30px", cursor: "pointer",
  fontSize: "13px", fontWeight: "800", letterSpacing: "0.8px"
});
const ghostBtn = {
  flex: 1, minWidth: "140px", background: "rgba(255,255,255,0.05)",
  border: "1px solid rgba(255,255,255,0.1)", color: "rgba(255,255,255,0.6)",
  borderRadius: "10px", padding: "13px 22px", cursor: "pointer", fontSize: "13px", fontWeight: "600"
};

// ── APP ───────────────────────────────────────────────────────────────────────
export default function App() {
  const [selected, setSelected] = useState(null);
  const [ready, setReady] = useState(false);
  const [view, setView] = useState("roles"); // "roles" | "orgchart" | "summary"
  const [journeyMode, setJourneyMode] = useState(false);
  useEffect(() => { setTimeout(() => setReady(true), 80); }, []);

  return (
    <div style={{ minHeight: "100vh", background: "#06090d", fontFamily: "'DM Sans', 'Helvetica Neue', sans-serif", color: "#fff", overflowX: "hidden" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400&family=DM+Sans:wght@300;400;500;600;700;800&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        @keyframes fadeUp { from { opacity:0; transform:translateY(14px); } to { opacity:1; transform:translateY(0); } }
        @keyframes breathe { 0%,100% { opacity:.35; } 50% { opacity:.65; } }
        ::-webkit-scrollbar { width:5px; }
        ::-webkit-scrollbar-track { background:#06090d; }
        ::-webkit-scrollbar-thumb { background:rgba(255,255,255,0.1); border-radius:3px; }
      `}</style>

      {/* Background glow */}
      <div style={{ position:"fixed", inset:0, pointerEvents:"none", zIndex:0 }}>
        <div style={{ position:"absolute", top:"-15%", left:"25%", width:"700px", height:"700px", borderRadius:"50%", background:"radial-gradient(circle, rgba(200,169,110,0.035) 0%, transparent 65%)", animation:"breathe 9s ease-in-out infinite" }} />
        <div style={{ position:"absolute", bottom:"5%", right:"5%", width:"500px", height:"500px", borderRadius:"50%", background:"radial-gradient(circle, rgba(126,184,212,0.03) 0%, transparent 65%)" }} />
      </div>

      <div style={{ maxWidth: "860px", margin: "0 auto", padding: "52px 24px 80px", position: "relative", zIndex: 1, opacity: ready ? 1 : 0, transition: "opacity 0.6s ease" }}>
        {journeyMode ? (
          <OrgJourney onBack={() => setJourneyMode(false)} />
        ) : !selected ? (
          <>
            {/* Header */}
            <div style={{ marginBottom: "40px" }}>
              <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.09)", borderRadius: "100px", padding: "6px 14px", marginBottom: "26px" }}>
                <div style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#C8A96E", animation: "breathe 2s infinite" }} />
                <span style={{ fontSize: "11px", letterSpacing: "2px", color: "rgba(255,255,255,0.45)", fontWeight: "600" }}>FP&A REIMAGINED</span>
              </div>

              <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(30px, 5vw, 50px)", lineHeight: "1.18", marginBottom: "18px" }}>
                The Finance Org<br /><span style={{ color: "rgba(255,255,255,0.3)", fontStyle: "italic" }}>is being rewritten.</span>
              </h1>

              <p style={{ fontSize: "15px", color: "rgba(255,255,255,0.42)", lineHeight: "1.8", maxWidth: "540px" }}>
                AI isn't a chatbot you bolt onto existing processes. It's a force that reshapes roles, skills, and org structures entirely. Choose a persona. Make decisions. See what changes — and what has to.
              </p>
            </div>

            {/* Journey mode banner */}
            <JourneyBanner onStart={() => setJourneyMode(true)} />

            {/* Tab nav */}
            <div style={{ display: "flex", background: "rgba(255,255,255,0.04)", borderRadius: "10px", padding: "4px", marginBottom: "32px", gap: "3px" }}>
              {[["roles", "PLAY ROLES"], ["orgchart", "ORG CHART"], ["summary", "ALL ROLES"]].map(([v, label]) => (
                <button key={v} onClick={() => setView(v)} style={{
                  flex: 1, background: view === v ? "rgba(255,255,255,0.09)" : "transparent",
                  border: "none", borderRadius: "7px", padding: "9px 14px",
                  color: view === v ? "#fff" : "rgba(255,255,255,0.35)",
                  fontSize: "10px", letterSpacing: "1.5px", fontWeight: "700", cursor: "pointer",
                  transition: "all 0.2s"
                }}>{label}</button>
              ))}
            </div>

            {view === "roles" && (
              <>
                <div style={{ display: "flex", alignItems: "center", gap: "14px", marginBottom: "26px" }}>
                  <div style={{ flex: 1, height: "1px", background: "rgba(255,255,255,0.06)" }} />
                  <span style={{ fontSize: "10px", letterSpacing: "2px", color: "rgba(255,255,255,0.22)", fontWeight: "600" }}>SELECT A ROLE TO PLAY</span>
                  <div style={{ flex: 1, height: "1px", background: "rgba(255,255,255,0.06)" }} />
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))", gap: "14px" }}>
                  {PERSONAS.map(p => <PersonaCard key={p.id} persona={p} onSelect={setSelected} />)}
                </div>
                <div style={{ marginTop: "44px", padding: "20px 22px", background: "rgba(255,255,255,0.025)", border: "1px solid rgba(255,255,255,0.06)", borderRadius: "12px", display: "flex", gap: "14px", alignItems: "flex-start" }}>
                  <span style={{ fontSize: "17px", marginTop: "1px" }}>⚡</span>
                  <div>
                    <div style={{ fontSize: "12px", fontWeight: "700", color: "rgba(255,255,255,0.55)", marginBottom: "4px" }}>This isn't about adding AI to your current process.</div>
                    <div style={{ fontSize: "12px", color: "rgba(255,255,255,0.28)", lineHeight: "1.65" }}>
                      Every scenario shows the difference between inserting AI into old workflows and reimagining what the role should actually do. The mindset shift is the hard part — not the technology.
                    </div>
                  </div>
                </div>
              </>
            )}
            {view === "orgchart" && <OrgChart onSelect={setSelected} />}
            {view === "summary" && <SummaryView onSelect={setSelected} />}
          </>
        ) : (
          <GamePlay persona={selected} onBack={() => setSelected(null)} />
        )}

      </div>
    </div>
  );
}







