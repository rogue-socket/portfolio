const portfolioSections = [
  {
    label: "What I Do",
    title: "What I Do",
    subtitle: "Focus areas plus selected systems and builds.",
    accent: "var(--accent-blue)",
    open: true,
    groups: [
      {
        title: "What I'm Building",
        subtitle: "Current product and research focus",
        open: true,
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
            subtitle: "Systems that hold up under real usage and constraints.",
            status: "current",
            chips: ["LLM backend", "latency", "reliability"]
          },
          {
            title: "Evaluation pipelines",
            subtitle: "Measuring output quality when vibes don't match.",
            status: "current",
            chips: ["evaluation", "benchmarks", "RAGAs"]
          }
        ]
      },
      {
        title: "What I Work With",
        subtitle: "Tools and systems used most of the time",
        open: true,
        items: [
          {
            title: "Agent frameworks",
            subtitle: "LangChain, LangGraph, LlamaIndex, and Hugging Face agents.",
            status: "current",
            chips: ["LangChain", "LangGraph", "LlamaIndex"]
          },
          {
            title: "Agent architecture",
            subtitle: "Tool-calling, knowledge graphs, orchestration, and evaluation.",
            status: "current",
            chips: ["tools", "knowledge graphs", "evaluation"]
          },
          {
            title: "Retrieval infrastructure",
            subtitle: "Vector databases and embedding pipelines.",
            status: "current",
            chips: ["Qdrant", "Chroma", "embeddings"]
          }
        ]
      },
      {
        title: "Applied ML",
        subtitle: "Modeling, data pipelines, and deployment-ready systems",
        open: false,
        items: [
          {
            title: "LLM and NLP pipelines",
            subtitle: "Summarization, classification, and fine-tuning workflows.",
            status: "current",
            chips: ["NLP", "LLM", "fine-tuning"]
          },
          {
            title: "Data and ML engineering",
            subtitle: "PyTorch/TensorFlow, scikit-learn, and feature pipelines.",
            status: "current",
            chips: ["PyTorch", "TensorFlow", "scikit-learn"]
          }
        ]
      },
      {
        title: "Agent Orchestration",
        subtitle: "Systems that coordinate multi-agent workflows",
        open: true,
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
          }
        ]
      },
      {
        title: "Applied Agents",
        subtitle: "Agents shipped into real-world workflows",
        open: true,
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
            title: "Real Time VLM Pedagogy",
            subtitle: "Vision + image processing pedagogy for math and guitar learning.",
            status: "live",
            chips: ["VLM", "OpenCV", "real-time"],
            href: "https://github.com/rogue-socket/math-guitar-vlm",
            external: true
          }
        ]
      },
      {
        title: "Other Builds",
        subtitle: "Additional prototypes and tools worth exploring",
        open: false,
        items: [
          {
            title: "Agentic Article Writer",
            subtitle: "Agentic writer supporting multiple article styles.",
            status: "note",
            chips: ["writing", "agents"],
            href: "https://github.com/rogue-socket/agentic_article_writer",
            external: true
          },
          {
            title: "Doctor Reporting",
            subtitle: "Agentic flow for auto-generated consultation reports.",
            status: "note",
            chips: ["healthcare", "reports"],
            href: "https://github.com/rogue-socket/doctor_reporting",
            external: true
          },
          {
            title: "Neural Network (NumPy)",
            subtitle: "Neural network built from scratch using NumPy only.",
            status: "note",
            chips: ["NumPy", "from scratch"],
            href: "https://github.com/rogue-socket/neural_network_numpy",
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
    label: "Experience",
    title: "Experience",
    subtitle: "Industry roles and applied research internships.",
    accent: "var(--accent-slate)",
    open: true,
    groups: [
      {
        title: "Industry",
        subtitle: "Internships and applied engineering roles",
        open: true,
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
      },
      {
        title: "Leadership",
        subtitle: "Communication and community leadership",
        open: false,
        items: [
          {
            title: "Toastmasters International",
            subtitle: "Member and officer roles including VP Education, President, and Program Quality Director.",
            status: "note",
            chips: ["2023 - 2025", "leadership"]
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
    open: false,
    groups: [
      {
        title: "Education",
        subtitle: "Academic background",
        open: true,
        items: [
          {
            title: "Vellore Institute of Technology",
            subtitle: "B.Tech in Computer Science (2022-2026), CGPA 9.42/10.0.",
            status: "current",
            chips: ["Vellore", "CSE"]
          },
          {
            title: "Sri Chaitanya College of Education",
            subtitle: "11th-12th (Math, Physics, Chemistry), 2020-2022.",
            status: "live",
            chips: ["MPC", "Hyderabad"]
          },
          {
            title: "CHIREC International School",
            subtitle: "High School Diploma (2020).",
            status: "live",
            chips: ["Hyderabad", "High School"]
          }
        ]
      },
      {
        title: "Certifications",
        subtitle: "Security and ML coursework",
        open: false,
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
    subtitle: "Speaking, awards, and personal interests.",
    accent: "var(--accent-amber)",
    open: false,
    groups: [
      {
        title: "Speaking and Awards",
        subtitle: "Communication and recognition",
        open: true,
        items: [
          {
            title: "Maulana Abul Kalam Azad Debate Tournament",
            subtitle: "Competitive debate participation and recognition.",
            status: "note",
            chips: ["debate", "speaking"]
          }
        ]
      },
      {
        title: "Interests",
        subtitle: "Things I stay curious about",
        open: false,
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
    accent: "var(--accent-rose)",
    open: false,
    groups: [
      {
        title: "Direct",
        subtitle: "Best routes for collaboration",
        open: true,
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
const collapseAllButton = document.getElementById("collapse-all");

const statusMap = {
  current: { label: "Current", color: "var(--accent-sage)" },
  live: { label: "Live", color: "var(--accent-blue)" },
  note: { label: "Note", color: "var(--accent-amber)" },
  open: { label: "Open", color: "var(--accent-rose)" }
};

function formatCount(value) {
  return String(value).padStart(2, "0");
}

function renderItem(section, group, item) {
  const tagName = item.href ? "a" : "article";
  const status = statusMap[item.status] ?? statusMap.current;
  const chipsLine = (item.chips || []).join(" · ");
  const searchTerms = [
    section.label,
    section.title,
    group.title,
    group.subtitle,
    item.title,
    item.subtitle,
    status.label,
    ...(item.chips || [])
  ]
    .join(" ")
    .toLowerCase();
  const attrs = [
    `class="item-row${item.href ? " is-link" : ""}"`,
    `data-search="${searchTerms}"`
  ];

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
          <span class="status-dot" style="--status-color: ${status.color};"></span>
          <h4 class="item-title">${item.title}</h4>
        </div>
        <p class="item-subtitle">${item.subtitle}</p>
      </div>
      <div class="item-meta">
        ${chipsLine ? `<span class="chip-line">${chipsLine}</span>` : ""}
      </div>
    </${tagName}>
  `;
}

function buildHighlights(items, limit) {
  return items
    .map((item) => item.title)
    .filter(Boolean)
    .slice(0, limit)
    .join(" · ");
}

function renderExplorer() {
  explorer.innerHTML = portfolioSections
    .map((section, sectionIndex) => {
      const totalItems = section.groups.reduce((count, group) => count + group.items.length, 0);
      const sectionPanelId = `section-panel-${sectionIndex}`;
      const sectionId = section.label.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
      const sectionHighlights = buildHighlights(
        section.groups.flatMap((group) => group.items),
        3
      );

      return `
        <section id="${sectionId}" class="section" style="--section-accent: ${section.accent}; --stagger: ${sectionIndex};">
          <button
            class="section-header"
            type="button"
            aria-expanded="${section.open}"
            aria-controls="${sectionPanelId}"
            data-default-expanded="${section.open}"
          >
            <span class="section-accent" aria-hidden="true"></span>
            <span class="section-index">${formatCount(sectionIndex + 1)}</span>
            <span class="section-copy">
              <h2 class="section-title">${section.title}</h2>
            </span>
            <span class="section-count">${sectionHighlights || ""}</span>
            <span class="chevron" aria-hidden="true"></span>
          </button>
          <div id="${sectionPanelId}" class="section-body${section.open ? "" : " is-hidden"}">
            ${section.groups
              .map((group, groupIndex) => {
                const groupPanelId = `group-panel-${sectionIndex}-${groupIndex}`;
                const groupHighlights = buildHighlights(group.items, 2);

                return `
                  <section class="group">
                    <button
                      class="group-header"
                      type="button"
                      aria-expanded="${group.open}"
                      aria-controls="${groupPanelId}"
                      data-default-expanded="${group.open}"
                    >
                      <span class="group-copy">
                        <h3 class="group-title">${group.title}</h3>
                        <p class="group-subtitle">${group.subtitle}</p>
                        ${groupHighlights ? `<p class="group-preview">${groupHighlights}</p>` : ""}
                      </span>
                      <span class="group-count" data-total="${group.items.length}">${formatCount(group.items.length)} entries</span>
                      <span class="group-chevron" aria-hidden="true"></span>
                    </button>
                    <div id="${groupPanelId}" class="group-items${group.open ? "" : " is-hidden"}">
                      ${group.items.map((item) => renderItem(section, group, item)).join("")}
                    </div>
                  </section>
                `;
              })
              .join("")}
          </div>
        </section>
      `;
    })
    .join("");
}

function setExpanded(toggle, expanded) {
  const panel = document.getElementById(toggle.getAttribute("aria-controls"));
  if (!panel) {
    return;
  }
  toggle.setAttribute("aria-expanded", String(expanded));
  panel.classList.toggle("is-hidden", !expanded);
  updateCollapseAllVisibility();
}

function restoreDefaults() {
  explorer.querySelectorAll(".section-header, .group-header").forEach((toggle) => {
    setExpanded(toggle, toggle.dataset.defaultExpanded === "true");
  });
}

function updateCollapseAllVisibility() {
  if (!collapseAllButton) {
    return;
  }
  const anyExpanded = Array.from(
    explorer.querySelectorAll(".section-header, .group-header")
  ).some((toggle) => toggle.getAttribute("aria-expanded") === "true");
  collapseAllButton.classList.toggle("is-hidden", !anyExpanded);
}

function bindExplorerInteractions() {
  explorer.addEventListener("click", (event) => {
    const toggle = event.target.closest(".section-header, .group-header");
    if (!toggle) {
      return;
    }

    const expanded = toggle.getAttribute("aria-expanded") === "true";
    setExpanded(toggle, !expanded);
  });

  if (collapseAllButton) {
    collapseAllButton.addEventListener("click", () => {
      explorer.querySelectorAll(".section-header, .group-header").forEach((toggle) => {
        setExpanded(toggle, false);
      });
    });
  }
}

renderExplorer();
bindExplorerInteractions();
updateCollapseAllVisibility();
