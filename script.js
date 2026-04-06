const portfolioSections = [
  {
    label: "Selected Work",
    title: "Selected Work and Systems",
    subtitle: "Core runtimes, workflow products, and the infrastructure behind them.",
    accent: "var(--accent-blue)",
    summary: "ClosedClaw · ForrestRun · Aqua Twin",
    groups: [
      {
        kicker: "Current direction",
        title: "What I am building toward",
        subtitle: "The recurring problems I keep choosing rather than a loose stack of tools.",
        items: [
          {
            title: "AI agents and deliberate workflows",
            subtitle: "Agent systems that are effective, efficient, and production-ready.",
            status: "current",
            chips: ["agents", "workflows", "LLMs"]
          },
          {
            title: "Structured reasoning systems",
            subtitle: "Tool-calling, orchestration, and decision traceability.",
            status: "current",
            chips: ["reasoning", "orchestration", "tools"]
          },
          {
            title: "Production-aware LLM backends",
            subtitle: "Systems that hold up under real usage and real constraints.",
            status: "current",
            chips: ["LLM backend", "latency", "reliability"]
          },
          {
            title: "Evaluation pipelines",
            subtitle: "Measuring output quality when instinct and evidence diverge.",
            status: "current",
            chips: ["evaluation", "benchmarks", "RAGAs"]
          }
        ]
      },
      {
        kicker: "Systems",
        title: "Runtimes and infrastructure",
        subtitle: "Foundational layers for creating, deploying, observing, and evaluating agents.",
        items: [
          {
            title: "ClosedClaw",
            subtitle: "Framework for automated agent creation, deployment, orchestration, and storage.",
            status: "live",
            chips: ["LangGraph", "LangChain", "MCP"],
            href: "https://github.com/rogue-socket/closed_claw",
            external: true
          },
          {
            title: "ForrestRun",
            subtitle: "Agentic runtime to design, fix, and teach agents with tracing and replay.",
            status: "live",
            chips: ["Python", "runtime", "observability"],
            href: "https://github.com/rogue-socket/agentic-runtime",
            external: true
          },
          {
            title: "Framework stack",
            subtitle: "LangChain, LangGraph, LlamaIndex, Hugging Face agents, and the glue between them.",
            status: "current",
            chips: ["LangChain", "LangGraph", "LlamaIndex"]
          },
          {
            title: "Retrieval infrastructure",
            subtitle: "Vector databases, embeddings, and retrieval layers for production use.",
            status: "current",
            chips: ["Qdrant", "Chroma", "embeddings"]
          }
        ]
      },
      {
        kicker: "Applications",
        title: "Workflow-facing products",
        subtitle: "Agents applied to actual domains rather than sandbox demos.",
        items: [
          {
            title: "MyCompAgent",
            subtitle: "Browser control agent using Playwright CLI with adaptive memory.",
            status: "live",
            chips: ["Playwright", "automation", "agent memory"],
            href: "https://github.com/rogue-socket/mycompagent",
            external: true
          },
          {
            title: "Aqua Twin",
            subtitle: "Agentic control of a water-management digital twin with telemetry and actions.",
            status: "live",
            chips: ["simulation", "control", "LangGraph"],
            href: "https://github.com/rogue-socket/AquaTwin-Web",
            external: true
          },
          {
            title: "Doctor Reporting",
            subtitle: "Agentic flow for automatically generated consultation reports.",
            status: "note",
            chips: ["healthcare", "reports"],
            href: "https://github.com/rogue-socket/doctor_reporting",
            external: true
          },
          {
            title: "Scrollable",
            subtitle: "Agent controlling Android devices for real-world tasks.",
            status: "note",
            chips: ["mobile", "automation"],
            href: "https://github.com/rogue-socket/scroller",
            external: true
          }
        ]
      },
      {
        kicker: "Adjacent work",
        title: "ML foundations and experiments",
        subtitle: "Related exploration across VLMs, ML pipelines, and product experiments.",
        items: [
          {
            title: "Real Time VLM Pedagogy",
            subtitle: "Vision and image processing pedagogy for math and guitar learning.",
            status: "live",
            chips: ["VLM", "OpenCV", "real-time"],
            href: "https://github.com/rogue-socket/math-guitar-vlm",
            external: true
          },
          {
            title: "Neural Network (NumPy)",
            subtitle: "A neural network built from scratch using NumPy only.",
            status: "note",
            chips: ["NumPy", "from scratch"],
            href: "https://github.com/rogue-socket/neural_network_numpy",
            external: true
          },
          {
            title: "LearnWithMe",
            subtitle: "Community site to find people to learn and grow with.",
            status: "note",
            chips: ["community", "web"],
            href: "https://github.com/rogue-socket/agentic_article_writer",
            external: true
          },
          {
            title: "Notes Me",
            subtitle: "Android app designed as a second brain.",
            status: "note",
            chips: ["android", "knowledge"],
            href: "https://github.com/rogue-socket/notes_me",
            external: true
          }
        ]
      }
    ]
  },
  {
    label: "Writing",
    title: "Writing, Notes, and Things I Want to Say",
    subtitle: "A place for essays, shorter posts, reading lists, and thoughts that do not fit inside a project caption.",
    accent: "var(--accent-amber)",
    summary: "Essays · notes · public thinking",
    groups: [
      {
        kicker: "Featured",
        title: "Recent pieces",
        subtitle: "Longer arguments and shorter notes that sit beside the work instead of behind it.",
        items: [
          {
            title: "On designing for slow reading",
            subtitle: "Why some interfaces should help people stay with the material rather than rush them through it.",
            status: "live",
            chips: ["essay", "featured"],
            href: "writing/on-designing-for-slow-reading.html"
          },
          {
            title: "Taxonomy before templates",
            subtitle: "Why structure and relationships usually need to be settled before layout systems can do useful work.",
            status: "live",
            chips: ["essay", "method"],
            href: "writing/taxonomy-before-templates.html"
          },
          {
            title: "Keeping a working index",
            subtitle: "Why portfolios, research repositories, and note systems benefit from similar structural habits.",
            status: "live",
            chips: ["post", "systems"],
            href: "writing/keeping-a-working-index.html"
          }
        ]
      },
      {
        kicker: "Archive",
        title: "What lives there",
        subtitle: "The archive can hold multiple tempos at once without being buried in a misc section.",
        items: [
          {
            title: "Writing archive",
            subtitle: "The full home for essays, notes, reading lists, and public thought fragments.",
            status: "current",
            chips: ["archive", "index"],
            href: "writing/index.html"
          },
          {
            title: "Reading list for structured content teams",
            subtitle: "Books, practices, and habits useful for teams working with archives, metadata, and dense interfaces.",
            status: "live",
            chips: ["list", "references"],
            href: "writing/reading-list-for-structured-content-teams.html"
          }
        ]
      }
    ]
  },
  {
    label: "Experience",
    title: "Experience",
    subtitle: "Industry roles and applied research internships.",
    accent: "var(--accent-slate)",
    summary: "Siemens EDA · DocLens.ai · Bicycle AI",
    groups: [
      {
        kicker: "Roles",
        title: "Industry experience",
        subtitle: "Applied work across enterprise copilots, medical workflows, and LLM evaluation.",
        items: [
          {
            title: "Developer Intern, Siemens EDA",
            subtitle: "Built LangGraph workflows in Siemens Capital Copilot and developed an agentic productivity framework.",
            status: "current",
            chips: ["Jan 2026 - Present", "Hyderabad"]
          },
          {
            title: "Software Engineering Intern, DocLens.ai",
            subtitle: "Developed medical necessity evaluation and RAG pipelines for insurance workflows.",
            status: "live",
            chips: ["May - Jul 2025", "Bengaluru"]
          },
          {
            title: "AI Engineering Intern, Bicycle AI",
            subtitle: "Improved context-aware SQL generation and built LLM benchmarking frameworks.",
            status: "live",
            chips: ["May - Jul 2024", "Hyderabad"]
          }
        ]
      }
    ]
  },
  {
    label: "Education",
    title: "Education and Certifications",
    subtitle: "Academic background and professional certifications.",
    accent: "var(--accent-olive)",
    summary: "VIT · security · machine learning",
    groups: [
      {
        kicker: "Education",
        title: "Academic background",
        subtitle: "Coursework and training that support the applied work.",
        items: [
          {
            title: "Vellore Institute of Technology",
            highlight: "Computer Science Engineering",
            subtitle: "B.Tech in Computer Science Engineering (2022-2026), CGPA 9.42/10.0.",
            status: "current",
            chips: ["Vellore", "Computer Science Engineering"],
            details: [
              {
                label: "Core",
                text: "Computer Networks, Operating Systems, DBMS, Compiler Design, Software Engineering, Data Structures and Algorithms, and Object-Oriented Programming."
              },
              {
                label: "Applied",
                text: "Machine Learning, Deep Learning, Natural Language Processing, data mining, and related applied computing coursework."
              }
            ]
          }
        ]
      },
      {
        kicker: "Certifications",
        title: "Security and ML coursework",
        subtitle: "Additional training across secure development and ML foundations.",
        items: [
          {
            title: "Learning the OWASP Top 10",
            subtitle: "Security fundamentals and common vulnerabilities.",
            status: "note",
            chips: ["security", "OWASP"]
          },
          {
            title: "Learning Threat Modeling for Security Professionals",
            subtitle: "Threat modeling frameworks and mitigation planning.",
            status: "note",
            chips: ["security", "threat modeling"]
          },
          {
            title: "Secure Coding in Java (2020)",
            subtitle: "Defensive Java practices and secure development.",
            status: "note",
            chips: ["Java", "security"]
          },
          {
            title: "Supervised Machine Learning: Regression and Classification",
            subtitle: "DeepLearning.AI (2023).",
            status: "note",
            chips: ["ML", "DeepLearning.AI"]
          },
          {
            title: "Agents Course + LLM Course",
            subtitle: "Hugging Face (2025).",
            status: "note",
            chips: ["LLMs", "Hugging Face"]
          },
          {
            title: "Google Cloud Skills Boost: LLM, GenAI, Transformers",
            subtitle: "Google Cloud (2023).",
            status: "note",
            chips: ["GCP", "GenAI"]
          }
        ]
      }
    ]
  },
  {
    label: "Leadership",
    title: "Leadership and Interests",
    subtitle: "Communication leadership and the topics I keep returning to.",
    accent: "var(--accent-rose)",
    summary: "Toastmasters · math · philosophy",
    groups: [
      {
        kicker: "Leadership",
        title: "Communication and community",
        subtitle: "Work that sharpened speaking, teaching, and structured communication.",
        items: [
          {
            title: "Toastmasters International",
            subtitle: "Member and officer roles including VP Education, President, and Program Quality Director.",
            status: "note",
            chips: ["2023 - 2025", "leadership"]
          }
        ]
      },
      {
        kicker: "Interests",
        title: "What I stay curious about",
        subtitle: "Topics that influence how I think about systems, clarity, and learning.",
        items: [
          {
            title: "Math and Physics",
            subtitle: "Curiosity in systems thinking and theoretical problem-solving.",
            status: "note",
            chips: ["math", "physics"]
          },
          {
            title: "Philosophy",
            subtitle: "Thinking about reasoning, ethics, and systems of knowledge.",
            status: "note",
            chips: ["philosophy", "reading"]
          },
          {
            title: "Music",
            subtitle: "Ukulele and keyboard practice.",
            status: "note",
            chips: ["ukulele", "keyboard"]
          }
        ]
      }
    ]
  },
  {
    label: "Contact",
    title: "Contact and Links",
    subtitle: "Direct ways to start a conversation, review work, or connect.",
    accent: "var(--accent-sage)",
    summary: "Email · LinkedIn · GitHub",
    groups: [
      {
        kicker: "Direct",
        title: "Best routes for collaboration",
        subtitle: "If the work is relevant, these are the fastest ways to reach me.",
        items: [
          {
            title: "Availability",
            subtitle: "Open to full-time roles.",
            status: "open",
            chips: ["2026", "availability"]
          },
          {
            title: "Email",
            subtitle: "yash.agr1510@gmail.com",
            status: "open",
            chips: ["contact"],
            href: "mailto:yash.agr1510@gmail.com"
          },
          {
            title: "LinkedIn",
            subtitle: "www.linkedin.com/in/yash-agrawal-7833a4246",
            status: "open",
            chips: ["network"],
            href: "https://www.linkedin.com/in/yash-agrawal-7833a4246",
            external: true
          },
          {
            title: "GitHub",
            subtitle: "github.com/rogue-socket",
            status: "open",
            chips: ["code"],
            href: "https://github.com/rogue-socket",
            external: true
          }
        ]
      }
    ]
  }
];

const explorer = document.getElementById("explorer");

const statusMap = {
  current: { label: "Current", color: "var(--accent-sage)" },
  live: { label: "Live", color: "var(--accent-blue)" },
  note: { label: "Note", color: "var(--accent-amber)" },
  open: { label: "Open", color: "var(--accent-rose)" }
};

const sectionVisualMap = {
  "selected-work": { icon: "stack" },
  writing: { icon: "book" },
  experience: { icon: "briefcase" },
  education: { icon: "grid" },
  leadership: { icon: "spark" },
  contact: { icon: "network" }
};

function slugify(value) {
  return value.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
}

function buildHighlights(items, limit) {
  return items
    .map((item) => item.highlight || item.title)
    .filter(Boolean)
    .slice(0, limit)
    .join(" · ");
}

function renderIcon(name) {
  switch (name) {
    case "stack":
      return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><rect x="3.5" y="4.5" width="7" height="7" rx="1.75"></rect><rect x="13.5" y="4.5" width="7" height="7" rx="1.75"></rect><path d="M7 11.5v2.25a2.75 2.75 0 0 0 2.75 2.75h4.5A2.75 2.75 0 0 0 17 13.75V11.5"></path><rect x="8.5" y="16.5" width="7" height="4" rx="1.5"></rect></svg>`;
    case "book":
      return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M6 5.5h10.5A1.5 1.5 0 0 1 18 7v11.5H8.25A2.25 2.25 0 0 0 6 20.75"></path><path d="M6 5.5v15.25"></path><path d="M9 9.25h6"></path><path d="M9 12.75h6"></path></svg>`;
    case "briefcase":
      return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><rect x="3.5" y="7.5" width="17" height="11" rx="2"></rect><path d="M9 7.5v-1A1.5 1.5 0 0 1 10.5 5h3A1.5 1.5 0 0 1 15 6.5v1"></path><path d="M3.5 11.5h17"></path></svg>`;
    case "grid":
      return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><rect x="4.25" y="4.25" width="6.5" height="6.5" rx="1.5"></rect><rect x="13.25" y="4.25" width="6.5" height="6.5" rx="1.5"></rect><rect x="4.25" y="13.25" width="6.5" height="6.5" rx="1.5"></rect><rect x="13.25" y="13.25" width="6.5" height="6.5" rx="1.5"></rect></svg>`;
    case "spark":
      return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="m12 3.75 1.9 4.65 5.1.4-3.9 3.2 1.25 5-4.35-2.65-4.35 2.65 1.25-5-3.9-3.2 5.1-.4Z"></path></svg>`;
    case "network":
      return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><circle cx="6.5" cy="7.5" r="2"></circle><circle cx="17.5" cy="6.5" r="2"></circle><circle cx="12" cy="17.5" r="2"></circle><path d="M8 8.5 10.75 15"></path><path d="M15.75 7.75 13.25 15"></path><path d="M8.4 7.2h7.1"></path></svg>`;
    case "timeline":
      return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M5 6.5h14"></path><path d="M5 12h14"></path><path d="M5 17.5h14"></path><circle cx="8" cy="6.5" r="1.25" fill="currentColor" stroke="none"></circle><circle cx="12" cy="12" r="1.25" fill="currentColor" stroke="none"></circle><circle cx="16" cy="17.5" r="1.25" fill="currentColor" stroke="none"></circle></svg>`;
    case "shield":
      return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3.75 18 6v5.4c0 4.05-2.4 7.1-6 8.85-3.6-1.75-6-4.8-6-8.85V6Z"></path><path d="m9.5 12 1.5 1.5 3.75-4"></path></svg>`;
    case "mail":
      return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><rect x="3.5" y="6.25" width="17" height="11.5" rx="2"></rect><path d="m4.75 8 7.25 5.75L19.25 8"></path></svg>`;
    case "code":
      return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="m9 8-4 4 4 4"></path><path d="m15 8 4 4-4 4"></path><path d="m13 5-2 14"></path></svg>`;
    case "eye":
      return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M2.75 12S6.5 6.5 12 6.5 21.25 12 21.25 12 17.5 17.5 12 17.5 2.75 12 2.75 12Z"></path><circle cx="12" cy="12" r="2.5"></circle></svg>`;
    case "wave":
      return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M3.5 14c2 0 2-4 4-4s2 4 4 4 2-4 4-4 2 4 4 4"></path><path d="M3.5 18c2 0 2-4 4-4s2 4 4 4 2-4 4-4 2 4 4 4"></path></svg>`;
    case "report":
      return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M7 4.75h7.5L18 8.25v11H7Z"></path><path d="M14.5 4.75v3.5H18"></path><path d="M9.5 12h6"></path><path d="M9.5 15.5h4"></path></svg>`;
    case "device":
      return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><rect x="7" y="3.75" width="10" height="16.5" rx="2"></rect><path d="M10 7h4"></path><circle cx="12" cy="17.25" r="0.9" fill="currentColor" stroke="none"></circle></svg>`;
    case "list":
      return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M9 6.5h10"></path><path d="M9 12h10"></path><path d="M9 17.5h10"></path><circle cx="5.5" cy="6.5" r="1"></circle><circle cx="5.5" cy="12" r="1"></circle><circle cx="5.5" cy="17.5" r="1"></circle></svg>`;
    case "external":
      return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M14 5.5h4.5V10"></path><path d="M18.25 5.75 10.5 13.5"></path><path d="M9.5 7.5H6.75A2.25 2.25 0 0 0 4.5 9.75v7.5a2.25 2.25 0 0 0 2.25 2.25h7.5a2.25 2.25 0 0 0 2.25-2.25V14.5"></path></svg>`;
    case "arrow":
      return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"></path><path d="m13 7 6 5-6 5"></path></svg>`;
    default:
      return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="6"></circle><path d="M12 8v8"></path><path d="M8 12h8"></path></svg>`;
  }
}

function getSectionVisual(sectionId) {
  return sectionVisualMap[sectionId] ?? { icon: "spark" };
}

function getItemIcon(sectionId, item) {
  const keywords = `${item.title} ${(item.chips || []).join(" ")}`.toLowerCase();

  switch (sectionId) {
    case "selected-work":
      if (keywords.includes("aqua") || keywords.includes("water") || keywords.includes("control")) {
        return "wave";
      }

      if (keywords.includes("vlm") || keywords.includes("vision") || keywords.includes("image")) {
        return "eye";
      }

      if (keywords.includes("health") || keywords.includes("report")) {
        return "report";
      }

      if (keywords.includes("mobile") || keywords.includes("android")) {
        return "device";
      }

      return "stack";
    case "writing":
      if (keywords.includes("list")) {
        return "list";
      }

      return "book";
    case "experience":
      return "briefcase";
    case "education":
      if (keywords.includes("security") || keywords.includes("owasp") || keywords.includes("secure")) {
        return "shield";
      }

      return "grid";
    case "leadership":
      if (keywords.includes("music")) {
        return "wave";
      }

      return "spark";
    case "contact":
      if (item.title === "Email") {
        return "mail";
      }

      if (item.title === "GitHub") {
        return "code";
      }

      if (item.title === "LinkedIn") {
        return "network";
      }

      return "spark";
    default:
      return "spark";
  }
}

function renderItem(item, sectionId) {
  const tagName = item.href ? "a" : "article";
  const status = statusMap[item.status] ?? statusMap.current;
  const chipsLine = (item.chips || []).join(" · ");
  const itemIcon = getItemIcon(sectionId, item);
  const detailsMarkup = (item.details || [])
    .map((detail) => `<p class="item-detail"><span class="item-detail-label">${detail.label}</span>${detail.text}</p>`)
    .join("");
  const attrs = [`class="item-row${item.href ? " is-link" : ""}"`];

  if (item.href) {
    attrs.push(`href="${item.href}"`);
  }

  if (item.external) {
    attrs.push('target="_blank"', 'rel="noreferrer"');
  }

  return `
    <${tagName} ${attrs.join(" ")}>
      <div class="item-main">
        <div class="item-top">
          <span class="item-icon" aria-hidden="true">${renderIcon(itemIcon)}</span>
          <div class="item-heading">
            <div class="item-title-row">
              <span class="status-dot" style="--status-color: ${status.color};"></span>
              <h4 class="item-title">${item.title}</h4>
            </div>
            <p class="item-subtitle">${item.subtitle}</p>
          </div>
          ${item.href ? `<span class="item-link-mark" aria-hidden="true">${renderIcon(item.external ? "external" : "arrow")}</span>` : ""}
        </div>
        ${detailsMarkup ? `<div class="item-detail-list">${detailsMarkup}</div>` : ""}
      </div>
      <div class="item-meta">
        ${chipsLine ? `<span class="chip-line">${chipsLine}</span>` : ""}
      </div>
    </${tagName}>
  `;
}

function renderGroup(group, sectionLabel, sectionId) {
  return `
    <section class="lane-group">
      <div class="lane-group-head">
        <p class="eyebrow">${group.kicker || sectionLabel}</p>
        <h3 class="lane-group-title">${group.title}</h3>
        <p class="lane-group-note">${group.subtitle}</p>
      </div>
      <div class="group-items">
        ${group.items.map((item) => renderItem(item, sectionId)).join("")}
      </div>
    </section>
  `;
}

function renderLane(section, sectionIndex) {
  const sectionId = section.id || slugify(section.label);
  const sectionVisual = getSectionVisual(sectionId);
  const sectionHighlights = section.summary || buildHighlights(
    section.groups.flatMap((group) => group.items),
    3
  );

  return `
    <section id="${sectionId}" class="lane" style="--lane-accent: ${section.accent}; --stagger: ${sectionIndex};">
      <header class="lane-head">
        <div class="lane-copy">
          <p class="section-label"><span class="section-symbol" aria-hidden="true">${renderIcon(sectionVisual.icon)}</span><span>${section.label}</span></p>
          <h2 class="lane-title">${section.title}</h2>
          <p class="lane-summary">${section.subtitle}</p>
        </div>
        <p class="lane-highlight">${sectionHighlights}</p>
      </header>
      <div class="lane-grid${section.groups.length === 1 ? " lane-grid-single" : ""}">
        ${section.groups.map((group) => renderGroup(group, section.label, sectionId)).join("")}
      </div>
    </section>
  `;
}

function renderExplorer() {
  if (!explorer) {
    return;
  }

  explorer.innerHTML = portfolioSections
    .map((section, sectionIndex) => renderLane(section, sectionIndex))
    .join("");
}

renderExplorer();

if (typeof initializeRailNavigation === "function") {
  initializeRailNavigation();
}
