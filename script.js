const portfolioSections = [
  {
    id: "projects",
    label: "Projects",
    title: "Projects and What I Am Building",
    subtitle: "Start here with live systems, then see prototypes, adjacent builds, and current focus.",
    accent: "var(--accent-blue)",
    summary: "ClosedClaw · ForrestRun · Aqua Twin",
    groups: [
      {
        kicker: "Start here",
        title: "Live systems and products",
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
          }
        ]
      },
      {
        kicker: "Portfolio prototypes",
        title: "Interface and archive projects",
        items: [
          {
            title: "Signals Ledger",
            subtitle: "An internal product interface recast as an editorial ledger for monitoring signals, annotations, and decision context without the visual weight of an operational dashboard.",
            status: "live",
            chips: ["product system", "editorial", "interface"],
            href: "details/signals-ledger.html"
          },
          {
            title: "Atlas of Materials",
            subtitle: "A searchable reference browser for a materials studio working across samples, provenance, supplier notes, and editorial annotation without falling back to a spreadsheet feel.",
            status: "live",
            chips: ["research interface", "metadata", "browse"],
            href: "details/atlas-of-materials.html"
          },
          {
            title: "Field Notes Archive",
            subtitle: "A browsing system for interviews, transcripts, workshop notes, and tags designed to feel like an annotated reading room rather than a file dump.",
            status: "live",
            chips: ["archive", "research", "notes"],
            href: "details/field-notes-archive.html"
          }
        ]
      },
      {
        kicker: "In progress and adjacent",
        title: "Builds, notes, and experiments",
        collapsible: true,
        collapsed: true,
        items: [
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
          },
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
      },
      {
        kicker: "Current direction",
        title: "What I am building right now",
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
      }
    ]
  },
  {
    label: "Experience",
    title: "Experience",
    accent: "var(--accent-slate)",
    summary: "Siemens EDA · DocLens.ai · Bicycle AI",
    groups: [
      {
        kicker: "Roles",
        title: "Roles",
        items: [
          {
            title: "Developer Intern, Siemens EDA",
            subtitle: "Built LangGraph workflows in Siemens Capital Copilot and developed an agentic productivity framework.",
            status: "current",
            chips: ["Jan 2026 - Present", "Hyderabad"],
            logo: "assets/logos/siemens-mark.svg",
            href: "details/siemens-eda-internship.html"
          },
          {
            title: "Software Engineering Intern, DocLens.ai",
            subtitle: "Developed medical necessity evaluation and RAG pipelines for insurance workflows.",
            status: "live",
            chips: ["May - Jul 2025", "Bengaluru"],
            logo: "assets/logos/doclens.png",
            href: "details/doclens-ai-internship-2025.html"
          },
          {
            title: "AI Engineering Intern, Bicycle AI",
            subtitle: "Improved context-aware SQL generation and built LLM benchmarking frameworks.",
            status: "live",
            chips: ["May - Jul 2024", "Hyderabad"],
            logo: "assets/logos/bicycle-mark.svg",
            href: "details/bicycle-ai-internship-2024.html"
          }
        ]
      }
    ]
  },
  {
    label: "Education",
    title: "Education and Certifications",
    accent: "var(--accent-olive)",
    summary: "VIT · AI · machine learning",
    groups: [
      {
        kicker: "Education",
        title: "Academic background",
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
        title: "Certifications",
        items: [
          {
            title: "Supervised Machine Learning: Regression and Classification",
            subtitle: "DeepLearning.AI (2023).",
            status: "note",
            chips: ["ML", "DeepLearning.AI"],
            logo: "assets/logos/deeplearning-ai.png"
          },
          {
            title: "Agents Course + LLM Course",
            subtitle: "Hugging Face (2025).",
            status: "note",
            chips: ["LLMs", "Hugging Face"],
            logo: "assets/logos/huggingface.svg"
          },
          {
            title: "Google Cloud Skills Boost: LLM, GenAI, Transformers",
            subtitle: "Google Cloud (2023).",
            status: "note",
            chips: ["GCP", "GenAI"],
            logo: "assets/logos/google-cloud.svg"
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
    half: true,
    collapsed: true,
    groups: [
      {
        title: "Leadership",
        hideKicker: true,
        hideSubtitle: true,
        items: [
          {
            title: "Toastmasters International",
            subtitle: "",
            collapsible: true,
            status: "note",
            chips: ["2024 - 2025", "leadership"],
            logo: "assets/logos/toastmasters.png",
            awards: {
              title: "Contest awards",
              levels: "Club · Area · Division",
              wins: "Wins at club and division levels",
              contests: [
                "Evaluation Speech Contest",
                "International Speech Contest",
                "Table Topics Contest",
                "Humorous Speech Contest"
              ]
            },
            timeline: [
              { label: "Jan 2024 - Jul 2024", title: "Vice President of Education" },
              { label: "Jul 2024 - Dec 2024", title: "President" },
              { label: "Jul 2024 - Jul 2025", title: "Program Quality Director, Co-Secretary" }
            ]
          }
        ]
      },
      {
        title: "Interests",
        hideKicker: true,
        hideSubtitle: true,
        tags: ["Math", "Physics", "Philosophy", "Music"],
        items: [
          
        ]
      }
    ]
  },
  {
    label: "Contact",
    title: "Contact and Links",
    compact: true,
    half: true,
    accent: "var(--accent-sage)",
    summary: "Email · LinkedIn · GitHub",
    groups: [
      {
        title: "Contact links",
        items: [
          {
            title: "Email",
            status: "open",
            chips: ["contact"],
            href: "mailto:yash.agr1510@gmail.com",
            logo: "assets/logos/gmail.svg"
          },
          {
            title: "LinkedIn",
            status: "open",
            chips: ["network"],
            href: "https://www.linkedin.com/in/yash-agrawal-7833a4246",
            external: true,
            logo: "assets/logos/linkedin.svg"
          },
          {
            title: "GitHub",
            status: "open",
            chips: ["code"],
            href: "https://github.com/rogue-socket",
            external: true,
            logo: "assets/logos/github.svg"
          }
        ]
      }
    ]
  }
];

const explorer = document.getElementById("explorer");

const sectionVisualMap = {
  projects: { icon: "stack" },
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
    case "projects":
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
  const chipsLine = (item.chips || []).join(" · ");
  const itemIcon = getItemIcon(sectionId, item);
  const hasLogo = Boolean(item.logo);
  const hasTimeline = (item.timeline || []).length > 0;
  const hasAwards = Boolean(item.awards);
  const hasTags = Array.isArray(item.tags) && item.tags.length > 0;
  const subtitleMarkup = item.subtitle ? `<p class="item-subtitle">${item.subtitle}</p>` : "";
  const titleMarkup = item.hideTitle ? "" : `<h4 class="item-title">${item.title}</h4>`;
  const iconMarkup = item.hideIcon
    ? ""
    : `<span class="item-icon${hasLogo ? " is-logo" : ""}" aria-hidden="true">${hasLogo ? `<img src="${item.logo}" alt="" class="item-logo-img">` : renderIcon(itemIcon)}</span>`;
  const tagsMarkup = hasTags
    ? `<div class="item-tags">${item.tags.map((tag) => `<span class="item-tag">${tag}</span>`).join("")}</div>`
    : "";
  const timelineMarkup = (item.timeline || [])
    .map(
      (step, index) => `
        <div class="timeline-step">
          <span class="timeline-dot" aria-hidden="true"></span>
          <div class="timeline-copy">
            <p class="timeline-title">${step.title}</p>
            <p class="timeline-label">${step.label}</p>
          </div>
        </div>
      `
    )
    .join("");
  const awardsMarkup = item.awards ? `
        <div class="item-awards">
          <p class="item-awards-title">${item.awards.title || "Awards"}</p>
          <p class="item-awards-meta">${item.awards.levels}${item.awards.wins ? ` · ${item.awards.wins}` : ""}</p>
          <ul class="item-awards-list">
            ${item.awards.contests.map((contest) => `<li>${contest}</li>`).join("")}
          </ul>
        </div>
      ` : "";
  const detailsMarkup = (item.details || [])
    .map((detail) => `<p class="item-detail"><span class="item-detail-label">${detail.label}</span>${detail.text}</p>`)
    .join("");
  const hasExtras = Boolean(timelineMarkup || awardsMarkup || detailsMarkup);
  const isItemCollapsible = Boolean(item.collapsible) && hasExtras;
  const isItemCollapsed = Boolean(item.collapsed);
  const itemId = `${sectionId}-${slugify(item.title || item.subtitle || "item")}`;
  const toggleMarkup = isItemCollapsible
    ? `<button class="item-toggle" type="button" aria-expanded="${String(!isItemCollapsed)}" aria-controls="${itemId}-extra" data-item-toggle>
        <span class="chevron" aria-hidden="true"></span>
      </button>`
    : "";
  const attrs = [`class="item-row${item.href ? " is-link" : ""}${hasTimeline ? " has-timeline" : ""}${hasAwards ? " has-awards" : ""}${isItemCollapsible ? " is-collapsible" : ""}"`];

  if (item.href) {
    attrs.push(`href="${item.href}"`);
  }

  if (item.external) {
    attrs.push('target="_blank"', 'rel="noreferrer"');
  }

  return `
    <${tagName} ${attrs.join(" ")}>
      <div class="item-main">
        <div class="item-top${item.hideIcon ? " no-icon" : ""}">
          ${iconMarkup}
          <div class="item-heading">
            <div class="item-title-row">
              ${titleMarkup}
            </div>
          </div>
          ${toggleMarkup || (item.href ? `<span class="item-link-mark" aria-hidden="true">${renderIcon(item.external ? "external" : "arrow")}</span>` : "")}
        </div>
        ${subtitleMarkup}
        ${tagsMarkup}
        ${hasExtras ? `<div id="${itemId}-extra" class="item-extra"${isItemCollapsed ? " hidden" : ""}>
          ${timelineMarkup ? `<div class="item-timeline" aria-label="Leadership timeline">${timelineMarkup}</div>` : ""}
          ${awardsMarkup}
          ${detailsMarkup ? `<div class="item-detail-list">${detailsMarkup}</div>` : ""}
        </div>` : ""}
      </div>
      <div class="item-meta">
        ${chipsLine ? `<span class="chip-line">${chipsLine}</span>` : ""}
      </div>
    </${tagName}>
  `;
}

function renderGroup(group, sectionLabel, sectionId) {
  const isCompact = sectionId === "contact" || group.compact;
  const groupId = `${sectionId}-${slugify(group.title || sectionLabel)}`;
  const isCollapsible = Boolean(group.collapsible);
  const isExpanded = !group.collapsed;
  const groupPreview = group.preview || buildHighlights(group.items, 2);
  const kickerText = group.kicker || sectionLabel;
  const kickerMarkup = group.hideKicker || !kickerText ? "" : `<p class="eyebrow">${kickerText}</p>`;
  const subtitleMarkup = group.hideSubtitle || !group.subtitle ? "" : `<p class="lane-group-note">${group.subtitle}</p>`;
  const groupTagsMarkup = Array.isArray(group.tags) && group.tags.length
    ? `<div class="lane-group-tags">${group.tags.map((tag) => `<span class="lane-group-tag">${tag}</span>`).join("")}</div>`
    : "";
  const titleRowMarkup = `
    <div class="lane-group-title-row">
      <h3 class="lane-group-title">${group.title}</h3>
      ${groupTagsMarkup}
    </div>
  `;

  if (isCompact) {
    return `
      <section class="lane-group lane-group-compact">
        <div class="group-items">
          ${group.items.map((item) => renderItem(item, sectionId)).join("")}
        </div>
      </section>
    `;
  }

  if (isCollapsible) {
    return `
      <section class="lane-group">
        <button
          class="group-header"
          type="button"
          aria-expanded="${String(isExpanded)}"
          aria-controls="${groupId}"
          data-group-toggle
        >
          <div class="group-copy">
            ${kickerMarkup}
            ${titleRowMarkup}
            ${subtitleMarkup}
            <p class="group-preview">${groupPreview}</p>
          </div>
          <span class="group-chevron" aria-hidden="true"></span>
        </button>
        <div id="${groupId}" class="group-items"${isExpanded ? "" : " hidden"}>
          ${group.items.map((item) => renderItem(item, sectionId)).join("")}
        </div>
      </section>
    `;
  }

  return `
    <section class="lane-group">
      <div class="lane-group-head">
        ${kickerMarkup}
        ${titleRowMarkup}
        ${subtitleMarkup}
      </div>
      <div class="group-items">
        ${group.items.map((item) => renderItem(item, sectionId)).join("")}
      </div>
    </section>
  `;
}

function renderLane(section, sectionIndex) {
  const sectionId = section.id || slugify(section.label);
  const laneContentId = `${sectionId}-content`;
  const sectionVisual = getSectionVisual(sectionId);
  const isCompact = Boolean(section.compact);
  const isCollapsed = Boolean(section.collapsed);
  const sectionHighlights = section.summary || buildHighlights(
    section.groups.flatMap((group) => group.items),
    3
  );
  const toggleMarkup = isCompact ? "" : `
        <button
          class="lane-toggle"
          type="button"
          aria-expanded="${String(!isCollapsed)}"
          aria-controls="${laneContentId}"
          data-lane-toggle
        >
          <span class="lane-highlight">${sectionHighlights}</span>
          <span class="chevron" aria-hidden="true"></span>
        </button>
  `;

  return `
    <section id="${sectionId}" class="lane${isCompact ? " lane-compact" : ""}${section.half ? " lane-half" : ""}${sectionId === "leadership" ? " lane-leadership" : ""}" data-collapsed="${isCollapsed}" style="--lane-accent: ${section.accent}; --stagger: ${sectionIndex};">
      <header class="lane-head">
        <div class="lane-copy">
          <div class="lane-title-row">
            <span class="lane-title-icon" aria-hidden="true">${renderIcon(sectionVisual.icon)}</span>
            <h2 class="lane-title">${section.title}</h2>
          </div>
        </div>
        ${toggleMarkup}
      </header>
      <div id="${laneContentId}" class="lane-grid${section.groups.length === 1 ? " lane-grid-single" : ""}"${isCollapsed ? " hidden" : ""}>
        ${section.groups.map((group) => renderGroup(group, section.label, sectionId)).join("")}
      </div>
    </section>
  `;
}

function renderExplorer() {
  if (!explorer) {
    return;
  }

  const output = [];

  for (let index = 0; index < portfolioSections.length; index += 1) {
    const section = portfolioSections[index];
    const sectionId = section.id || slugify(section.label);
    const nextSection = portfolioSections[index + 1];
    const nextSectionId = nextSection ? (nextSection.id || slugify(nextSection.label)) : null;

    if (sectionId === "leadership" && nextSectionId === "contact") {
      const writingCta = `
        <a class="lane lane-compact lane-half lane-cta" href="writing/index.html">
          <div class="lane-cta-inner">
            <span class="lane-cta-icon" aria-hidden="true">${renderIcon("book")}</span>
            <div class="lane-cta-copy">
              <p class="lane-cta-label">Writing</p>
              <h3 class="lane-cta-title">Go read my writing</h3>
            </div>
            <span class="lane-cta-arrow" aria-hidden="true">${renderIcon("arrow")}</span>
          </div>
        </a>
      `;
      output.push(`
        <div class="lane-row">
          ${renderLane(section, index)}
          <div class="lane-column">
            ${renderLane(nextSection, index + 1)}
            ${writingCta}
          </div>
        </div>
      `);
      index += 1;
      continue;
    }

    output.push(renderLane(section, index));
  }

  explorer.innerHTML = output.join("");
}

function initializeGroupToggles() {
  if (!explorer) {
    return;
  }

  explorer.querySelectorAll("[data-group-toggle]").forEach((button) => {
    button.addEventListener("click", () => {
      const controlsId = button.getAttribute("aria-controls");
      const content = controlsId ? document.getElementById(controlsId) : null;
      const isExpanded = button.getAttribute("aria-expanded") === "true";

      button.setAttribute("aria-expanded", String(!isExpanded));

      if (content) {
        content.hidden = isExpanded;
      }
    });
  });
}

function initializeLaneToggles() {
  if (!explorer) {
    return;
  }

  explorer.querySelectorAll("[data-lane-toggle]").forEach((button) => {
    button.addEventListener("click", () => {
      const controlsId = button.getAttribute("aria-controls");
      const content = controlsId ? document.getElementById(controlsId) : null;
      const isExpanded = button.getAttribute("aria-expanded") === "true";
      const lane = button.closest(".lane");

      button.setAttribute("aria-expanded", String(!isExpanded));

      if (content) {
        content.hidden = isExpanded;
      }

      if (lane) {
        lane.dataset.collapsed = String(isExpanded);
      }
    });
  });
}

function initializeItemToggles() {
  if (!explorer) {
    return;
  }

  explorer.querySelectorAll("[data-item-toggle]").forEach((button) => {
    button.addEventListener("click", (event) => {
      event.preventDefault();
      event.stopPropagation();
      const controlsId = button.getAttribute("aria-controls");
      const content = controlsId ? document.getElementById(controlsId) : null;
      const isExpanded = button.getAttribute("aria-expanded") === "true";

      button.setAttribute("aria-expanded", String(!isExpanded));

      if (content) {
        content.hidden = isExpanded;
      }
    });
  });
}

renderExplorer();
initializeLaneToggles();
initializeGroupToggles();
initializeItemToggles();

if (typeof initializeRailNavigation === "function") {
  initializeRailNavigation();
}
