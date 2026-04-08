import { useState, useEffect } from "react";

const PERSONAS = [
  {
    id: "analyst",
    icon: "◈",
    tag: "EVOLVING ROLE",
    tagColor: "#C8A96E",
    color: "#C8A96E",
    title: "FP&A Analyst",
    futureTitle: "Strategic Finance Partner",
    hook: "Spends 70% of their week gathering data. Rarely has time to think.",
    futureHook: "AI handles the gathering. They own the thinking, the story, the recommendation.",
    timeLabels: ["Data wrangling", "Building decks", "Analysis", "Strategic advisory"],
    timeBefore: [65, 20, 10, 5],
    timeAfter: [8, 12, 45, 35],
    beforeSkills: ["Advanced Excel / VBA", "Month-end close", "Variance commentary", "Manual ERP pulls", "Budget consolidation", "Slide building"],
    afterSkills: ["AI output interpretation", "Business storytelling", "Scenario design", "Cross-functional influence", "Decision framing", "Financial narrative"],
    challenge: "Q3 forecast due Friday. Revenue tracking 8% below plan. Leadership wants answers.",
    steps: [
      {
        prompt: "Your first move on a tight deadline?",
        options: [
          { label: "Pull 3 years of actuals from ERP, start building the Excel model from scratch", type: "old", consequence: "Three days of data wrangling. Numbers ready Friday, but no time for insight. You're a data courier, not an advisor." },
          { label: "Query the AI forecasting system with live signals. Define the strategic questions first.", type: "new", consequence: "Model runs in 20 minutes. You spend the week on what it means, not what the numbers are. You arrive with a point of view." }
        ]
      },
      {
        prompt: "AI flags EMEA deals slipping into Q4. What do you do?",
        options: [
          { label: "Add a footnote to the variance slide explaining the timing shift", type: "old", consequence: "CFO asks 'so what?' in the review. You don't have an answer prepared. You've described the problem, not solved it." },
          { label: "Run three scenarios, quantify Q4 pull-through risk, prep a clear recommendation", type: "new", consequence: "You walk into the review owning the narrative. CFO asks you to join the board prep call. You're not a reporter — you're an advisor." }
        ]
      },
      {
        prompt: "Leadership asks: cut headcount or protect investment?",
        options: [
          { label: "Share the variance report and let leadership make the call", type: "old", consequence: "You're a data provider. The decision happens around you, not with you. Finance is peripheral." },
          { label: "Model NPV of both paths against strategic priorities. Make a recommendation with conviction.", type: "new", consequence: "You're a decision partner. You're in the room where it happens. This is what the role becomes." }
        ]
      }
    ],
    responsibilities: ["Forecasting & scenario modeling", "Variance & root-cause analysis", "Decision support for leadership", "Financial narrative & storytelling"],
    inputs: ["ERP & live system data", "AI forecasting model outputs", "Business context from Finance BPs", "Leadership questions & decisions"],
    outputs: ["Forecasts with scenario ranges", "Variance analysis with 'so what'", "Decision-ready recommendations", "Strategic financial narrative"],
  },
  {
    id: "operator",
    icon: "⬡",
    tag: "NEW ROLE",
    tagColor: "#7EB8D4",
    color: "#7EB8D4",
    title: "Finance AI Engineer",
    futureTitle: "Finance AI Engineer",
    hook: "This role doesn't exist at most companies. It will be one of the most critical hires in finance.",
    futureHook: "Owns the AI infrastructure powering the entire finance org — models, pipelines, governance.",
    timeLabels: ["Model ops & monitoring", "Pipeline maintenance", "Governance & audit", "Enabling analysts"],
    timeBefore: [0, 0, 0, 0],
    timeAfter: [30, 25, 25, 20],
    beforeSkills: ["❌ Role doesn't exist", "Ad-hoc IT requests", "Shadow spreadsheets", "Manual data handoffs", "No model governance", "Finance ↔ Tech gap"],
    afterSkills: ["Model monitoring & tuning", "Pipeline architecture", "Prompt & logic governance", "Data quality ownership", "Finance-tech translation", "AI audit & compliance"],
    challenge: "The rolling forecast model is drifting — actuals beat AI predictions by 4–6% three months running.",
    steps: [
      {
        prompt: "How do you diagnose the model drift?",
        options: [
          { label: "Escalate to IT. Open a ticket and wait.", type: "old", consequence: "Two weeks of bad forecasts. Finance loses confidence in the AI system. The old Excel model gets quietly reactivated." },
          { label: "Inspect feature importance. Check whether the new PLG sales motion is in the training data.", type: "new", consequence: "Root cause found in 2 hours. Patch deployed same day. Trust in the model increases because the team sees it can self-correct." }
        ]
      },
      {
        prompt: "New CFO wants 'strategic initiative spend' as a forecast input. How do you handle it?",
        options: [
          { label: "Add a manual override column in the output spreadsheet", type: "old", consequence: "A parallel system forms. People start trusting the spreadsheet more than the model. AI adoption quietly collapses." },
          { label: "Define the variable properly, source the data, retrain the relevant model layer", type: "new", consequence: "The model evolves with the business. CFO's confidence grows. You've shown the system is living infrastructure, not a black box." }
        ]
      },
      {
        prompt: "Auditors want to understand how the revenue forecast was generated.",
        options: [
          { label: "Export model outputs and explain verbally in the audit meeting", type: "old", consequence: "Audit drags for weeks. No lineage documentation. Risk flag raised. CFO is unhappy. AI credibility takes a hit." },
          { label: "Pull the model card, feature log, and decision audit trail from the governance layer", type: "new", consequence: "Clean audit in a day. Explainability was built in from the start. This becomes the standard for AI governance across the company." }
        ]
      }
    ],
    responsibilities: ["AI model operations & monitoring", "Data pipeline architecture & maintenance", "Model governance & audit trails", "Enabling analyst self-service"],
    inputs: ["Business requirements & use cases", "Data warehouse feeds", "Model drift & performance alerts", "Audit & compliance requests"],
    outputs: ["Trained & monitored AI models", "Governance docs & model cards", "Reliable data pipelines", "Analyst self-service capability"],
  },
  {
    id: "fbp",
    icon: "◉",
    tag: "EVOLVING ROLE",
    tagColor: "#A78BDB",
    color: "#A78BDB",
    title: "Finance Business Partner",
    futureTitle: "Embedded Strategy Advisor",
    hook: "Caught between finance requests and business demands. Translator without authority.",
    futureHook: "The business unit's embedded strategist. AI generates the analysis — they generate the direction.",
    timeLabels: ["Reporting requests", "Data reconciliation", "Business partnering", "Proactive strategy"],
    timeBefore: [40, 30, 25, 5],
    timeAfter: [5, 5, 45, 45],
    beforeSkills: ["Report generation", "Budget tracking", "Variance explanation", "Stakeholder management", "BU liaison", "Ad-hoc analysis"],
    afterSkills: ["Strategic challenge", "AI scenario modeling", "Business case development", "Commercial acumen", "Influence without authority", "Forward-looking advisory"],
    challenge: "Your business unit wants to launch a new product line. They need a finance view in 48 hours.",
    steps: [
      {
        prompt: "How do you approach the 48-hour ask?",
        options: [
          { label: "Build a standard 3-statement model in Excel. Pull comps manually.", type: "old", consequence: "48 hours produces a skeleton model with untested assumptions. The BU head senses you're not really in the business." },
          { label: "Use AI to generate base case financials instantly. Spend the 48 hours stress-testing assumptions with the business.", type: "new", consequence: "You deliver a fully scenario-tested business case with a clear recommendation. Not just numbers — a decision with a point of view." }
        ]
      },
      {
        prompt: "The BU head pushes back hard on your margin assumptions.",
        options: [
          { label: "Revise the model to reflect their preferred inputs and resubmit", type: "old", consequence: "You've become a number-adjusting service. The analysis loses all credibility. Finance is seen as a rubber stamp." },
          { label: "Show the sensitivity table. Explain what has to be true for their view to hold.", type: "new", consequence: "You shift the conversation from opinion to evidence. The BU head respects the challenge. Finance earns a seat at the strategy table." }
        ]
      },
      {
        prompt: "Leadership greenlights the launch. What's your role now?",
        options: [
          { label: "Hand off to accounting and return to the reporting cycle", type: "old", consequence: "Finance is absent from the most critical phase. You find out about margin erosion in the next quarterly close." },
          { label: "Set up real-time KPI monitoring with the AI system. Own the in-flight course correction.", type: "new", consequence: "Finance is embedded in execution, not just planning. You catch a pricing issue in month 2 and save 3 points of margin." }
        ]
      }
    ],
    responsibilities: ["BU business case development", "Commercial challenge & strategic support", "In-flight performance monitoring", "Finance-to-business translation"],
    inputs: ["BU strategy & pipeline data", "Company financials & benchmarks", "AI scenario model outputs", "Leadership decisions & requests"],
    outputs: ["Business cases & go/no-go recommendations", "Real-time KPI frameworks", "Margin & performance alerts", "Strategic finance perspective"],
  },
  {
    id: "corpfpa",
    icon: "▣",
    tag: "EVOLVING ROLE",
    tagColor: "#5BC8A0",
    color: "#5BC8A0",
    title: "Corp FP&A Lead",
    futureTitle: "AI Portfolio Orchestrator",
    hook: "Consolidation factory. Spends the quarter collecting, cleaning, and correcting BU submissions.",
    futureHook: "Architect of the AI-native planning system. Sets the logic, governs the models, elevates the org.",
    timeLabels: ["Chasing submissions", "Consolidation & cleanup", "Insight generation", "System design & governance"],
    timeBefore: [35, 40, 20, 5],
    timeAfter: [5, 5, 40, 50],
    beforeSkills: ["Consolidation management", "Submission tracking", "Variance roll-ups", "Board deck assembly", "Process enforcement", "Cross-BU coordination"],
    afterSkills: ["AI model governance", "Planning logic design", "Scenario orchestration", "Board-level storytelling", "Org capability building", "System-level thinking"],
    challenge: "Annual planning cycle kicks off. 12 business units. 6 weeks. Historically a chaos machine.",
    steps: [
      {
        prompt: "How do you set up the planning cycle?",
        options: [
          { label: "Send the Excel template pack, schedule submission deadlines, start chasing in week 3", type: "old", consequence: "Week 5 is a reconciliation nightmare. Half the submissions have formula errors. You rebuild the board deck at 11pm the night before." },
          { label: "Define planning logic centrally. Push AI-generated base cases to each BU. They adjust assumptions, not structure.", type: "new", consequence: "BUs spend time on strategy, not spreadsheet mechanics. Consolidation is automatic. Week 6 is reserved for insight and challenge — not cleanup." }
        ]
      },
      {
        prompt: "Two BUs submit wildly optimistic plans with no factual basis.",
        options: [
          { label: "Note the variance in the consolidation commentary and escalate to the CFO", type: "old", consequence: "CFO spends the review interrogating assumptions you didn't challenge. You're a messenger, not a filter." },
          { label: "Run the AI's scenario stress-test against their submissions. Present the gap analysis before the CFO review.", type: "new", consequence: "You arrive with the hard question already answered. The CFO asks you to run the board sensitivity session. You've become the quality control layer." }
        ]
      },
      {
        prompt: "Post-planning, the CFO asks how to make next year's cycle faster.",
        options: [
          { label: "Propose tighter deadlines and a cleaner template", type: "old", consequence: "Same broken process, marginally better compliance. The fundamental bottleneck — manual consolidation — remains untouched." },
          { label: "Redesign the cycle architecture: continuous planning, AI-maintained rolling forecasts, quarterly assumption reviews only", type: "new", consequence: "Annual planning becomes a lightweight calibration. The org runs on a live financial picture year-round. The cycle goes from 6 weeks to 6 days." }
        ]
      }
    ],
    responsibilities: ["Consolidated planning across all BUs", "Governing planning logic & assumptions", "Board-level financial narrative", "AI model oversight & quality control"],
    inputs: ["BU submissions & AI-generated base cases", "CFO strategic priorities", "Market signals & economic data", "Board agenda & investor questions"],
    outputs: ["Consolidated financial plan", "Board deck & scenario analysis", "Planning system design", "Quality-assured, stress-tested forecasts"],
  },
  {
    id: "datareporting",
    icon: "◫",
    tag: "MERGING / EVOLVING",
    tagColor: "#E8836A",
    color: "#E8836A",
    title: "Data & Reporting Analyst",
    futureTitle: "Insight Designer",
    hook: "Report factory. Builds the same decks every month. Rarely asked what they actually think.",
    futureHook: "Curates AI outputs into clear, decision-ready intelligence. The editor who finds the signal in the noise.",
    timeLabels: ["Report production", "Data validation", "Visualization design", "Insight framing"],
    timeBefore: [60, 25, 10, 5],
    timeAfter: [5, 10, 30, 55],
    beforeSkills: ["SQL / data pulls", "Dashboard maintenance", "Excel charting", "Manual data validation", "Report scheduling", "PowerBI / Tableau"],
    afterSkills: ["AI output curation", "Narrative data design", "Signal vs. noise judgment", "Decision-ready framing", "Visualization strategy", "Audience-specific insight"],
    challenge: "The CFO says the monthly board pack has too much data and not enough insight. Again.",
    steps: [
      {
        prompt: "How do you respond to the CFO's feedback?",
        options: [
          { label: "Cut slides and simplify the charts. Reduce from 40 pages to 25.", type: "old", consequence: "Still data-led. Still backward-looking. The CFO gives the same feedback next quarter. Less data is not the same as more insight." },
          { label: "Rebuild the pack around three decisions the board needs to make. Every chart earns its place.", type: "new", consequence: "The board pack becomes a decision document. CFO shares it with peer CFOs as a best-practice example. You've changed the format and the function." }
        ]
      },
      {
        prompt: "AI generates 200 KPIs from the data warehouse. Leadership wants a summary.",
        options: [
          { label: "Build a dashboard showing all 200. Flag the ones that moved significantly.", type: "old", consequence: "Nobody reads it. The important signal is buried in the volume. Leadership starts asking for the 'real' summary." },
          { label: "Apply editorial judgment. Surface the 5 that matter this quarter. Explain the 'so what' of each.", type: "new", consequence: "Leadership starts forwarding your summary to their direct reports. You've become the signal filter — the most valuable function in a data-rich environment." }
        ]
      },
      {
        prompt: "A business unit wants their own custom reporting suite.",
        options: [
          { label: "Build it to spec. Add it to the monthly production schedule.", type: "old", consequence: "Another report to maintain forever. You're a production service. Your backlog grows, your strategic value shrinks." },
          { label: "Give them access to the AI reporting layer with guardrails. Train them to self-serve.", type: "new", consequence: "You've eliminated a recurring task and upskilled the BU. You redirect that time to board-level insight work. This is the leverage model." }
        ]
      }
    ],
    responsibilities: ["Board pack & insight production", "KPI curation & signal filtering", "Data quality & validation", "Self-serve analytics enablement"],
    inputs: ["Data warehouse & AI-generated KPIs (200+)", "Leadership & BU report requests", "Audience context & board agenda", "Business questions to answer"],
    outputs: ["Decision-ready board packs", "Signal summaries (5 KPIs, not 200)", "Self-serve reporting tools", "Audience-specific insights"],
  },
  {
    id: "cfo",
    icon: "✦",
    tag: "TRANSFORMING",
    tagColor: "#E8C84A",
    color: "#E8C84A",
    title: "CFO",
    futureTitle: "Chief Intelligence Officer",
    hook: "Guardian of historical accuracy. Trusted for what happened. Rarely the first call for what's next.",
    futureHook: "Architect of the company's decision intelligence. Turns AI capability into competitive advantage.",
    timeLabels: ["Close & compliance", "Reporting cycle", "Business partnering", "Forward-looking strategy"],
    timeBefore: [30, 35, 25, 10],
    timeAfter: [10, 5, 30, 55],
    beforeSkills: ["Financial controls", "Board reporting", "Capital allocation", "Risk management", "Investor relations", "Compliance oversight"],
    afterSkills: ["AI governance & ethics", "Decision architecture", "Org capability design", "Real-time capital strategy", "Competitive intelligence", "Human + AI team leadership"],
    challenge: "The board asks: is this company ready to compete in an AI-native landscape?",
    steps: [
      {
        prompt: "How do you answer the board's question?",
        options: [
          { label: "Present the AI tools currently in use across the business and cost savings achieved", type: "old", consequence: "The board hears 'we're using AI as a cost tool.' That's table stakes, not differentiation. The question remains unanswered." },
          { label: "Present the decision velocity of the org. How fast can finance generate insight? How does that compare to competitors?", type: "new", consequence: "You reframe the conversation entirely: AI readiness is a strategic capability, not a software checklist. The board funds it at a different level." }
        ]
      },
      {
        prompt: "Your FP&A team wants to automate the entire forecasting process.",
        options: [
          { label: "Approve the automation project. Set an ROI target and a timeline.", type: "old", consequence: "You get faster forecasts. But the team automated a broken process. The same bad questions get answered faster." },
          { label: "Challenge them first: what decisions does the forecast need to enable? Redesign from the output backward.", type: "new", consequence: "The team builds a system that answers the right questions automatically. The forecast becomes a strategic instrument, not a compliance exercise." }
        ]
      },
      {
        prompt: "The CEO asks you to evaluate a major acquisition. Timeline: 10 days.",
        options: [
          { label: "Mobilize the team. Start pulling comps, building the model, coordinating with bankers.", type: "old", consequence: "Day 10 you have financials. But the strategic thesis was shaped without finance's perspective in the room early enough to matter." },
          { label: "Deploy AI scenario modeling in hour one. Spend the 10 days stress-testing the strategic thesis — not building the spreadsheet.", type: "new", consequence: "Finance shapes the deal logic from day one. You identify a structural risk the bankers missed. The board sees the CFO as a strategic partner, not a scorekeeper." }
        ]
      }
    ],
    responsibilities: ["Capital allocation & investment strategy", "Board reporting & investor relations", "AI governance & org capability design", "Strategic decision architecture"],
    inputs: ["Business performance data & AI insights", "Board & investor questions", "M&A opportunities & market intelligence", "AI capability assessments"],
    outputs: ["Capital allocation decisions", "Strategic direction & priorities", "AI investment thesis & governance", "Org transformation roadmap"],
  }
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

const JOURNEY_ORDER = ["cfo", "corpfpa", "fbp", "analyst", "datareporting", "operator"];

const ORG_SCENARIOS = [
  {
    id: "planning-cycle",
    icon: "◎",
    title: "Annual Planning Cycle",
    subtitle: "12 BUs. 6 weeks. The process that eats the quarter — every quarter.",
    description: "From the CFO setting direction to the analyst building models, every finance role touches the annual plan. See how AI changes each one's part.",
    roles: {
      cfo: {
        involvement: "both",
        involvementNote: null,
        scenarioContext: "The board has asked you to cut the planning cycle time in half and improve the quality of outputs. The current process relies on manual submissions, consolidation, and last-minute cleanup.",
        prompt: "How do you redesign the planning process?",
        options: [
          { label: "Commission a task force to tighten submission timelines and enforce template compliance", type: "old", consequence: "A governance layer on top of a broken process. The cycle is marginally faster. The real bottleneck — manual consolidation — is untouched. You'll have the same conversation next year." },
          { label: "Redesign from the decision backward: what does the board actually need from the plan, and what system produces it continuously?", type: "new", consequence: "Planning logic is defined once. The AI executes it every cycle. The annual plan becomes a calibration of a live model, not a six-week production event. The board gets better answers faster." }
        ]
      },
      corpfpa: {
        involvement: "both",
        involvementNote: null,
        scenarioContext: "13 BU submissions are due in 4 weeks. Based on last year, half will have formula errors, three will miss the deadline, and you'll spend week 5 reconciling conflicting assumptions.",
        prompt: "How do you set up this year's planning cycle?",
        options: [
          { label: "Send the Excel template pack, set the deadline, and prepare to chase from week 3", type: "old", consequence: "Week 5 is a reconciliation war. You rebuild the board deck at 11pm the night before it's due. This is still the most common outcome in finance." },
          { label: "Push AI-generated base cases to each BU. They adjust assumptions, not structure. Consolidation runs automatically.", type: "new", consequence: "BUs spend time on strategy, not spreadsheet mechanics. Week 6 is reserved for insight and challenge — not cleanup. The cycle ends on schedule with a defensible plan." }
        ]
      },
      fbp: {
        involvement: "both",
        involvementNote: null,
        scenarioContext: "Your BU head wants to submit an aggressive growth plan. The underlying assumptions haven't been stress-tested. You have one week before the submission deadline.",
        prompt: "How do you approach the BU planning conversation?",
        options: [
          { label: "Build the plan to their inputs. Add a risk footnote. Submit on time.", type: "old", consequence: "The risk footnote gets ignored. The plan gets approved. You find out it was wrong in the Q2 close — when it's too late to course-correct without a painful conversation." },
          { label: "Run the AI scenario model. Show exactly what has to be true for their assumptions to hold. Make the challenge the starting point.", type: "new", consequence: "The conversation shifts from opinion to evidence. The plan submitted is actually achievable. Finance earns credibility — not as a gatekeeper, but as a partner who made the plan better." }
        ]
      },
      analyst: {
        involvement: "both",
        involvementNote: null,
        scenarioContext: "Six cost centre models need to be built for the plan. Two weeks. The BU submissions are inconsistent and the FBP is already fielding questions from the business.",
        prompt: "How do you approach the model build?",
        options: [
          { label: "Pull actuals from ERP, build each model from scratch in Excel, start with the biggest cost centres", type: "old", consequence: "Two weeks in, three models are done. The remaining three are rough. You miss the submission window for one BU and spend the final days in cleanup mode." },
          { label: "Use the AI system to generate base cases for all six instantly. Spend the two weeks stress-testing assumptions and building the insight layer.", type: "new", consequence: "All six models are ready by day two. The remaining time goes into insight and challenge. You submit on time with a point of view on each — not just numbers." }
        ]
      },
      datareporting: {
        involvement: "today-only",
        involvementNote: "In the AI-native planning cycle, status dashboards and consolidation reports are generated automatically from the live planning model. The manual production work that fills this role's planning cycle largely disappears — freeing it for something more valuable.",
        scenarioContext: "Every planning cycle you produce a 40-page status dashboard tracking submission progress, variance flags, and consolidation status. It takes a week to build. Leadership glances at it once.",
        prompt: "Finance leadership asks for a planning cycle status dashboard.",
        options: [
          { label: "Build it from scratch using the submitted data. Include every metric. Add filters for BU and cost centre.", type: "old", consequence: "It takes a week. Leadership looks at it once in the first planning review and never opens it again. The same request comes next year." },
          { label: "Point them to the live planning model view. Configure what they need to see. Redirect your time to the insights the data can't surface automatically.", type: "new", consequence: "The dashboard runs itself from now on. You've freed up a week of production time and redirected it to the editorial work — signal identification and narrative framing — that actually requires judgment." }
        ]
      },
      operator: {
        involvement: "future-only",
        involvementNote: "This role doesn't exist in today's planning cycle. That's part of why the cycle is broken — nobody owns the AI infrastructure that would make the whole process reliable.",
        scenarioContext: "In the AI-native org, you maintain the models and data pipelines that every other role depends on during the planning cycle. You prevent problems before they happen.",
        prompt: "Three BUs are using outdated revenue assumptions in the planning model. The data hasn't been refreshed in two quarters.",
        options: [
          { label: "Wait for the BUs to flag it in their submissions — it's their data responsibility", type: "old", consequence: "The model produces a plan built on stale assumptions. Nobody finds out until the Q2 forecast diverges significantly. By then, capital has already been misallocated." },
          { label: "Proactively identify the gap, flag it to the relevant FBPs, and update the training data before the planning window opens", type: "new", consequence: "The planning model is reliable from day one. Every role downstream works from accurate data. You've prevented a problem nobody knew was coming — and nobody would have thanked you for missing." }
        ]
      }
    }
  },
  {
    id: "board-pack",
    icon: "▦",
    title: "Quarterly Board Pack",
    subtitle: "90 pages. 3 decisions the board needs to make. Finding them is the job.",
    description: "The most visible output finance produces. See how each role's contribution changes when the pack is built around decisions, not data.",
    roles: {
      cfo: {
        involvement: "both",
        involvementNote: null,
        scenarioContext: "The board has told you — again — that the pack is too long, too backward-looking, and doesn't help them make decisions. This is the third consecutive quarter with the same feedback.",
        prompt: "How do you respond?",
        options: [
          { label: "Ask the team to cut 20 pages and simplify the charts. Set a 70-page cap going forward.", type: "old", consequence: "You get a shorter version of the same thing. Less data is not more insight. The feedback comes again next quarter, verbatim." },
          { label: "Reframe the pack entirely around the three decisions the board needs to make this quarter. Every page earns its place.", type: "new", consequence: "The board finishes in 90 minutes instead of three hours. Two decisions get made in the room. You've changed what the board pack is for — not just how long it is." }
        ]
      },
      corpfpa: {
        involvement: "both",
        involvementNote: null,
        scenarioContext: "The board pack is due in 5 days. Three BUs haven't submitted their commentary. Two that have submitted need significant revisions.",
        prompt: "How do you handle the missing and incomplete commentary?",
        options: [
          { label: "Chase the BUs. Hold the pack. Push the deadline if needed.", type: "old", consequence: "The pack goes out late. The board receives it the morning of the meeting. Two members haven't read it. The CFO is frustrated and the process looks broken." },
          { label: "Generate AI commentary from each BU's actuals and variance data. Send it to BUs for review and approval — not for drafting from scratch.", type: "new", consequence: "BUs review and approve in hours rather than days. The pack goes out 48 hours early. The board arrives prepared. The process is no longer held hostage by the slowest BU." }
        ]
      },
      fbp: {
        involvement: "today-only",
        involvementNote: "In the reimagined org, BU commentary for the board pack is generated automatically from live actuals and reviewed by the FBP — not drafted from scratch each quarter. The role shifts from author to editor to strategist.",
        scenarioContext: "Today, writing the BU section of the board pack takes two full days every quarter. You pull data from four systems, format it to the template, and draft commentary that is mostly descriptive.",
        prompt: "Your BU's board section needs to be drafted for this quarter.",
        options: [
          { label: "Write the commentary from scratch. Pull the data. Format to the template. Submit.", type: "old", consequence: "Two days of production work. Half of it is data description that could have been auto-generated. You're a formatting service, not a strategic voice in the board narrative." },
          { label: "Review and sharpen the AI-generated commentary. Add the context and strategic framing only you have. Submit in two hours.", type: "new", consequence: "The section is better than anything written from scratch in two days. You've spent your time on the 20% that required judgment — not the 80% that didn't." }
        ]
      },
      analyst: {
        involvement: "both",
        involvementNote: null,
        scenarioContext: "The CFO wants a sensitivity analysis on three strategic scenarios for the board meeting: base case, macro headwind, and accelerated investment. You have three days.",
        prompt: "How do you build the sensitivity analysis?",
        options: [
          { label: "Build three separate models. Run the scenarios. Compile the outputs into a single comparison table.", type: "old", consequence: "Three days of model building. They aren't fully linked. One scenario has an error the CFO catches in the pre-read. Trust in the numbers takes a hit at the worst moment." },
          { label: "Configure the AI scenario engine. Define the variables, stress-test the logic, own the interpretation.", type: "new", consequence: "Three scenarios modelled in an afternoon. You spend the remaining time on what they mean — and walk into the CFO review with a recommendation, not just a table." }
        ]
      },
      datareporting: {
        involvement: "both",
        involvementNote: null,
        scenarioContext: "You build the board pack — 90 pages, every quarter, on a tight deadline. It's the most visible thing finance produces. And the CFO has just said it's not working.",
        prompt: "The CFO says the pack has too much data and not enough insight. Again. How do you respond?",
        options: [
          { label: "Cut 20 pages. Simplify the charts. Submit a cleaner version of the same structure.", type: "old", consequence: "Shorter data is still data. The CFO gives the same feedback next quarter. You've optimised the production — you haven't changed what it produces." },
          { label: "Rebuild the pack around the three decisions the board needs to make. Every chart earns its place. AI handles the data — you handle the story.", type: "new", consequence: "The board pack becomes a decision document. The CFO shares it as a best-practice example internally. You've changed the format and the function of the role — not just the page count." }
        ]
      },
      operator: {
        involvement: "future-only",
        involvementNote: "Today the board pack relies on manual data pulls from multiple systems, at least two of which have known quality issues that get worked around every quarter. In the reimagined org, you've eliminated the pulls and the risk.",
        scenarioContext: "You maintain the data pipelines that feed the board pack automatically. One core feed has been producing inconsistent outputs for two months. Everyone knows about it. Nobody has fixed it.",
        prompt: "A data feed for the board pack has had a known quality issue for two months.",
        options: [
          { label: "Log it as a known issue. Work around it manually each month. Note it in the commentary.", type: "old", consequence: "The workaround becomes permanent. Everyone knows the number is approximate but the pack goes out anyway. Trust in the data erodes quietly until a board member questions a figure in the room." },
          { label: "Trace the root cause. Fix the pipeline. Document the fix and add a monitoring alert so it can't quietly drift again.", type: "new", consequence: "The issue is resolved permanently. The board pack is clean. You've removed a recurring risk that nobody was formally accountable for — and that was one bad quarter away from a governance problem." }
        ]
      }
    }
  },
  {
    id: "product-launch",
    icon: "◆",
    title: "New Product Launch Evaluation",
    subtitle: "The business wants to move fast. Finance needs to give them a reason to — or a reason not to.",
    description: "A high-stakes, time-compressed decision that touches every layer of the finance org. See who leads, who enables, and whose role barely exists until now.",
    roles: {
      cfo: {
        involvement: "both",
        involvementNote: null,
        scenarioContext: "The CEO wants a go/no-go recommendation on a new product line. 10 days. Significant capital implications. The business is confident. You haven't seen the numbers yet.",
        prompt: "How do you approach the evaluation?",
        options: [
          { label: "Mobilise the team. Pull comps. Start building the model. Coordinate with the business and external advisors.", type: "old", consequence: "Day 10 you have a financial model. The strategic thesis was shaped without finance in the room early enough. You're a scorekeeper who arrived late — not a partner who shaped the decision." },
          { label: "Deploy AI scenario modeling in hour one. Spend the 10 days stress-testing the strategic thesis with the CEO — not building the spreadsheet.", type: "new", consequence: "Finance shapes the deal logic from day one. You identify a structural risk the business hadn't modelled. The board sees the CFO as the person who makes decisions sharper, not just the person who prices them." }
        ]
      },
      corpfpa: {
        involvement: "both",
        involvementNote: null,
        scenarioContext: "The new product launch will require significant capital reallocation across the existing portfolio. Three other investment commitments are in flight. Nobody has flagged the portfolio-level conflict yet.",
        prompt: "How do you assess the portfolio impact?",
        options: [
          { label: "Run the standard capital allocation model. Flag the reallocation in the next planning cycle review.", type: "old", consequence: "By the time the reallocation shows up in the plan, two other investments have already been committed. The portfolio is over-allocated. The CFO is managing a problem that could have been avoided." },
          { label: "Run the AI portfolio model in real time. Show exactly what this launch displaces and what the true opportunity cost is — before the decision is made.", type: "new", consequence: "The capital conversation happens before the commitment, not after. The portfolio stays balanced. Finance is in the room when the decision is made — not explaining the consequences after the fact." }
        ]
      },
      fbp: {
        involvement: "both",
        involvementNote: null,
        scenarioContext: "Your BU head wants to launch. They're confident on the commercial side. You have 48 hours to produce a credible business case before the CFO review.",
        prompt: "How do you approach the 48-hour ask?",
        options: [
          { label: "Build a standard 3-statement model. Pull comps manually. Produce a financial summary.", type: "old", consequence: "48 hours produces a skeleton model with untested assumptions. The BU head senses you're not really in the business. Finance is a compliance step, not a decision partner." },
          { label: "Use AI to generate base case financials instantly. Spend the 48 hours stress-testing assumptions with the business. Deliver a recommendation with conviction.", type: "new", consequence: "You deliver a fully scenario-tested business case with a clear go/no-go recommendation. Not just numbers — a decision with a point of view. Finance earns its seat at the strategy table." }
        ]
      },
      analyst: {
        involvement: "both",
        involvementNote: null,
        scenarioContext: "The product launch needs three financial scenarios modelled before the CFO review: base case, optimistic, and downside. The FBP needs them by end of day tomorrow.",
        prompt: "How do you build the scenario analysis?",
        options: [
          { label: "Build each scenario as a separate model. Link the key drivers manually. Compile the comparison outputs.", type: "old", consequence: "It takes two full days. The models drift apart by the third revision. When the BU changes a pricing assumption, you update each model separately. Something slips." },
          { label: "Build one connected scenario engine. Define the key variables. Run all three scenarios while you focus on the interpretation.", type: "new", consequence: "Three scenarios are live in an afternoon. When the BU changes a pricing assumption, all three update instantly. You spend your time on what it means — not on rebuilding the same model three times." }
        ]
      },
      datareporting: {
        involvement: "future-only",
        involvementNote: "In today's org, this role isn't meaningfully involved in a product launch evaluation. In the reimagined org, the Insight Designer builds the KPI framework that determines whether the launch actually works — before it launches.",
        scenarioContext: "The launch has been approved. In the AI-native org, your role isn't reporting after the fact — it's designing the measurement framework before launch so the right signals are tracked from day one.",
        prompt: "The product launch is approved. Finance needs to track its performance.",
        options: [
          { label: "Set up a standard monthly reporting dashboard using the existing revenue and margin metrics.", type: "old", consequence: "Month 3, the dashboard shows the product hitting revenue targets. Nobody notices it's destroying margin on a key customer segment. The metrics tracked the wrong things." },
          { label: "Design the KPI framework before launch. Define what 'working' means across revenue, margin, and customer behaviour. Build the AI alert layer on top.", type: "new", consequence: "When a pricing issue appears in month 2, the alert fires before it compounds. Finance catches it while it's still correctable. The KPI framework becomes the source of truth for the entire launch team." }
        ]
      },
      operator: {
        involvement: "future-only",
        involvementNote: "This role doesn't exist in today's product launch evaluation — so each analyst builds their own model in isolation and the outputs are compared manually. In the reimagined org, you make the entire evaluation possible at speed.",
        scenarioContext: "The FBP, the analyst, and the CFO are all running scenarios for the evaluation. In the AI-native org, they're all working from the same central model — which you built, maintain, and keep aligned with the latest business inputs.",
        prompt: "The business wants to model 5 pricing scenarios before the launch decision.",
        options: [
          { label: "Each analyst builds their own version. Outputs are compared manually in a shared spreadsheet.", type: "old", consequence: "Five different models. Three different answers. The CFO asks which one to trust. Nobody is certain. The evaluation loses credibility at the moment it matters most." },
          { label: "Build one central scenario model with clean, governed inputs. Every role runs their analysis from the same source of truth.", type: "new", consequence: "All five scenarios run in under an hour. Every stakeholder works from identical assumptions. The decision is made with clarity — not in spite of the models, but because of them." }
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
  const [engHov, setEngHov] = useState(false);
  const byId = id => PERSONAS.find(p => p.id === id);
  const line = "rgba(255,255,255,0.12)";
  const operator = byId("operator");

  return (
    <div style={{ animation: "fadeUp 0.5s ease" }}>
      <div style={{ textAlign: "center", marginBottom: "36px" }}>
        <div style={{ fontSize: "10px", letterSpacing: "2px", color: "rgba(255,255,255,0.28)", marginBottom: "10px" }}>AI-NATIVE FINANCE ORG</div>
        <p style={{ fontSize: "13px", color: "rgba(255,255,255,0.38)", maxWidth: "500px", margin: "0 auto", lineHeight: "1.75" }}>
          The hierarchy stays. The roles are fundamentally different. Click any node to explore the transformation.
        </p>
      </div>

      <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
        {/* Level 1: CFO */}
        <div style={{ width: "min(260px, 100%)" }}>
          <OrgNode persona={byId("cfo")} onSelect={onSelect} />
        </div>

        {/* Vertical connector: CFO → Corp FP&A */}
        <div style={{ width: "1px", height: "24px", background: line }} />

        {/* Level 2: Corp FP&A */}
        <div style={{ width: "min(260px, 100%)" }}>
          <OrgNode persona={byId("corpfpa")} onSelect={onSelect} />
        </div>

        {/* Branch connector: Corp FP&A → 3 children */}
        <div style={{ width: "100%", position: "relative", height: "42px" }}>
          <div style={{ position: "absolute", left: "50%", top: 0, width: "1px", height: "20px", background: line, transform: "translateX(-50%)" }} />
          <div style={{ position: "absolute", left: "16.7%", right: "16.7%", top: "20px", height: "1px", background: line }} />
          {[16.7, 50, 83.3].map(pct => (
            <div key={pct} style={{ position: "absolute", left: `${pct}%`, top: "20px", width: "1px", height: "22px", background: line, transform: "translateX(-50%)" }} />
          ))}
        </div>

        {/* Level 3: FBP, Analyst, Data & Reporting */}
        <div style={{ display: "flex", gap: "12px", width: "100%" }}>
          {["fbp", "analyst", "datareporting"].map(id => (
            <div key={id} style={{ flex: 1 }}>
              <OrgNode persona={byId(id)} onSelect={onSelect} compact />
            </div>
          ))}
        </div>
      </div>

      {/* AI Infrastructure divider */}
      <div style={{ margin: "40px 0 22px", display: "flex", alignItems: "center", gap: "14px" }}>
        <div style={{ flex: 1, height: "0", borderTop: "1px dashed rgba(255,255,255,0.09)" }} />
        <span style={{ fontSize: "9px", letterSpacing: "2px", color: "rgba(255,255,255,0.22)", fontWeight: "700", whiteSpace: "nowrap" }}>AI INFRASTRUCTURE LAYER</span>
        <div style={{ flex: 1, height: "0", borderTop: "1px dashed rgba(255,255,255,0.09)" }} />
      </div>

      {/* Finance AI Engineer: platform role */}
      <div
        onClick={() => onSelect(operator)}
        onMouseEnter={() => setEngHov(true)}
        onMouseLeave={() => setEngHov(false)}
        style={{
          cursor: "pointer", borderRadius: "12px", padding: "18px 22px",
          background: engHov ? `${operator.color}18` : `${operator.color}0a`,
          border: `1px solid ${engHov ? operator.color + "50" : operator.color + "25"}`,
          display: "flex", alignItems: "center", gap: "18px",
          transition: "all 0.22s", position: "relative", overflow: "hidden"
        }}
      >
        <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "2px", background: engHov ? operator.color : "transparent", transition: "all 0.22s" }} />
        <div style={{ fontSize: "28px", color: operator.color, flexShrink: 0 }}>{operator.icon}</div>
        <div style={{ flex: 1 }}>
          <div style={{ fontSize: "8px", letterSpacing: "1.5px", color: operator.tagColor, marginBottom: "4px", fontWeight: "700" }}>NEW ROLE · POWERS ALL OF THE ABOVE</div>
          <div style={{ fontFamily: "'Playfair Display', serif", fontSize: "16px", color: "#fff", marginBottom: "3px" }}>{operator.futureTitle}</div>
          <div style={{ fontSize: "11px", color: "rgba(255,255,255,0.35)", lineHeight: "1.5" }}>{operator.futureHook}</div>
        </div>
        <div style={{ fontSize: "10px", color: engHov ? operator.color : "rgba(255,255,255,0.22)", transition: "color 0.22s", letterSpacing: "0.5px", flexShrink: 0 }}>PLAY ROLE →</div>
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







