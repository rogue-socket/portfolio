const portfolioSections = [
  {
    label: "Practice",
    title: "Practice Areas",
    subtitle: "Ongoing lines of work across research, design systems, and front-end delivery.",
    accent: "var(--accent-sage)",
    open: true,
    groups: [
      {
        title: "Interface Systems",
        subtitle: "Navigation, density, and legibility for content-rich products",
        open: true,
        items: [
          {
            title: "Navigation models for large information sets",
            subtitle: "Tree views, cross-linking, progressive disclosure, and search behavior shaped for real reading.",
            status: "current",
            chips: ["UI architecture", "prototypes"]
          },
          {
            title: "Calm design language for dense applications",
            subtitle: "Tokens, spacing rhythms, and restrained motion tuned for products that reward concentration.",
            status: "current",
            chips: ["systems", "accessibility"]
          }
        ]
      },
      {
        title: "Research and Editing",
        subtitle: "Turning raw inputs into structures people can browse and trust",
        open: true,
        items: [
          {
            title: "Editorial schemas for notes, references, and source material",
            subtitle: "Taxonomies and metadata models that make early research legible without flattening nuance.",
            status: "current",
            chips: ["taxonomy", "content ops"]
          },
          {
            title: "Decision records and internal guidance",
            subtitle: "Concise documentation for teams that need continuity across design, product, and engineering.",
            status: "current",
            chips: ["documentation", "facilitation"]
          }
        ]
      },
      {
        title: "Delivery and Collaboration",
        subtitle: "Shipping the work and pairing with teams without adding unnecessary process weight",
        open: false,
        items: [
          {
            title: "Accessible interactions with lightweight JavaScript",
            subtitle: "Small scripts for search, toggles, and filters instead of heavy client frameworks when they are not needed.",
            status: "live",
            chips: ["HTML", "CSS", "vanilla JS"]
          },
          {
            title: "Prototype-to-build pairing for product teams",
            subtitle: "Working interfaces used for review, alignment, and tighter handoff between design and engineering.",
            status: "current",
            chips: ["handoff", "cross-functional"]
          },
          {
            title: "Short audits for content-heavy products",
            subtitle: "Focused reviews covering hierarchy, navigation, density, and calmer interaction patterns.",
            status: "current",
            chips: ["audit", "strategy"]
          }
        ]
      }
    ]
  },
  {
    label: "Selected Work",
    title: "Selected Projects",
    subtitle: "Recent commissions and self-directed builds with a fuller project readout.",
    accent: "var(--accent-blue)",
    open: true,
    groups: [
      {
        title: "Research Interfaces",
        subtitle: "Projects centered on browsing, filtering, and annotated reading",
        open: true,
        items: [
          {
            title: "Atlas of Materials",
            subtitle: "A reference browser for a materials studio working across samples, provenance, and supplier notes.",
            status: "live",
            chips: ["case study", "interface"],
            href: "details/atlas-of-materials.html"
          },
          {
            title: "Signals Ledger",
            subtitle: "An editorial ledger for tracking signals, commentary, and decision context without the feel of a dashboard.",
            status: "live",
            chips: ["product", "taxonomy"],
            href: "details/signals-ledger.html"
          }
        ]
      },
      {
        title: "Archive Tools",
        subtitle: "Systems for turning raw field material into reusable working knowledge",
        open: true,
        items: [
          {
            title: "Field Notes Archive",
            subtitle: "A browsing layer for interviews, transcripts, and workshop notes designed like an annotated reading room.",
            status: "current",
            chips: ["archive", "prototype"],
            href: "details/field-notes-archive.html"
          },
          {
            title: "Source Map Library",
            subtitle: "A source browser for tracing references, excerpts, and editorial summaries through an ongoing research program.",
            status: "current",
            chips: ["library", "research"]
          }
        ]
      },
      {
        title: "Sites and Systems",
        subtitle: "Portfolio sites, publishing surfaces, and compact product layers",
        open: false,
        items: [
          {
            title: "Editorial Portfolio System",
            subtitle: "A portfolio shell for presenting project context, experience, and supporting material in one continuous structure.",
            status: "live",
            chips: ["portfolio", "system"]
          },
          {
            title: "Program Notes Microsite",
            subtitle: "A publishing interface for a cultural program balancing event listings, essays, and archival documents.",
            status: "live",
            chips: ["publishing", "site"]
          }
        ]
      }
    ]
  },
  {
    label: "Experience",
    title: "Experience",
    subtitle: "Roles, collaborations, and teaching formats that support product, interface, and content work.",
    accent: "var(--accent-slate)",
    open: true,
    groups: [
      {
        title: "Recent Roles",
        subtitle: "Independent work, product teams, and long-form collaborations",
        open: true,
        items: [
          {
            title: "Independent Interface Designer",
            subtitle: "Selected freelance practice spanning research interfaces, design systems, and front-end prototypes for small teams.",
            status: "current",
            chips: ["2023-now", "independent"]
          },
          {
            title: "Senior Product Designer, Studio North",
            subtitle: "Led structure, hierarchy, and interaction design for complex internal tools and content-rich workflows.",
            status: "live",
            chips: ["2020-2023", "product"]
          },
          {
            title: "Front-end Design Partner",
            subtitle: "Worked across contract engagements translating prototype intent into shipped interfaces and shared UI patterns.",
            status: "live",
            chips: ["2018-2020", "contract"]
          }
        ]
      },
      {
        title: "Teaching and Facilitation",
        subtitle: "Formats that support client teams beyond direct production work",
        open: false,
        items: [
          {
            title: "Content structure clinics",
            subtitle: "Working sessions for teams reorganizing loose repositories into more navigable systems.",
            status: "note",
            chips: ["workshop", "facilitation"]
          },
          {
            title: "Product critique and review sessions",
            subtitle: "Focused critique for teams that need calmer hierarchy, better navigation, or stronger explanatory structure.",
            status: "note",
            chips: ["advisory", "review"]
          }
        ]
      }
    ]
  },
  {
    label: "Portfolio Materials",
    title: "Portfolio Materials",
    subtitle: "Resume, references, process notes, and supporting documents that sit alongside the visible work.",
    accent: "var(--accent-olive)",
    open: false,
    groups: [
      {
        title: "Documents",
        subtitle: "Practical materials often requested alongside project work",
        open: true,
        items: [
          {
            title: "Resume and tailored case-study packet",
            subtitle: "A compact document set that can be adapted for staff roles, freelance inquiries, or speaking opportunities.",
            status: "open",
            chips: ["resume", "PDF"]
          },
          {
            title: "References and collaboration notes",
            subtitle: "Short summaries of how projects were run, where value was created, and how teams worked together.",
            status: "open",
            chips: ["references", "context"]
          }
        ]
      },
      {
        title: "Background",
        subtitle: "Education, talks, and adjacent material that adds context",
        open: false,
        items: [
          {
            title: "Selected talks and guest sessions",
            subtitle: "Teaching material and speaking formats centered on interface clarity, structure, and editorial systems.",
            status: "note",
            chips: ["speaking", "teaching"]
          },
          {
            title: "Education and continuing study",
            subtitle: "Formal training plus ongoing reading and practice around content systems, interaction design, and front-end craft.",
            status: "note",
            chips: ["education", "study"]
          }
        ]
      },
      {
        title: "Process Assets",
        subtitle: "Useful extras for teams that want to inspect how the work is made",
        open: false,
        items: [
          {
            title: "Component samples and front-end snippets",
            subtitle: "Lightweight implementation examples showing how interface ideas translate into maintainable code.",
            status: "live",
            chips: ["code", "samples"]
          },
          {
            title: "Working methods and project checklists",
            subtitle: "Concise operating documents for audits, discovery work, handoff, and structured critique.",
            status: "note",
            chips: ["process", "methods"]
          }
        ]
      }
    ]
  },
  {
    label: "Writing",
    title: "Notes and Talks",
    subtitle: "Short essays, teaching sessions, and public material around structure and interface clarity.",
    accent: "var(--accent-amber)",
    open: false,
    groups: [
      {
        title: "Essays",
        subtitle: "Published and internal writing",
        open: true,
        items: [
          {
            title: "On designing for slow reading",
            subtitle: "A short essay on pacing, density, and why some interfaces should lower tempo instead of increasing it.",
            status: "note",
            chips: ["essay"]
          },
          {
            title: "Taxonomy before templates",
            subtitle: "A field note on structuring knowledge before designing chrome or component wrappers.",
            status: "note",
            chips: ["method"]
          },
          {
            title: "Reading list for structured content teams",
            subtitle: "A compact set of references on taxonomy, archives, and editorial interface design.",
            status: "note",
            chips: ["reading list"]
          }
        ]
      },
      {
        title: "Sessions",
        subtitle: "Workshops and teaching formats",
        open: false,
        items: [
          {
            title: "Content structure clinic",
            subtitle: "A working session for teams trying to move from loose repositories to searchable, navigable systems.",
            status: "note",
            chips: ["workshop"]
          },
          {
            title: "Editorial interface critiques",
            subtitle: "Live reviews for products that need more clarity, hierarchy, and calmer navigation patterns.",
            status: "note",
            chips: ["talk"]
          }
        ]
      }
    ]
  },
  {
    label: "Contact",
    title: "Contact and Links",
    subtitle: "Direct ways to start a conversation, review work, or continue elsewhere.",
    accent: "var(--accent-rose)",
    open: false,
    groups: [
      {
        title: "Direct",
        subtitle: "The simplest route for project inquiries",
        open: true,
        items: [
          {
            title: "Availability",
            subtitle: "Open to select freelance, staff, and advisory conversations in 2026.",
            status: "open",
            chips: ["2026", "availability"]
          },
          {
            title: "Email",
            subtitle: "hello@yourname.com",
            status: "open",
            chips: ["inquiries"],
            href: "mailto:hello@yourname.com"
          },
          {
            title: "LinkedIn",
            subtitle: "Profile, background, and collaboration history.",
            status: "open",
            chips: ["network"],
            href: "https://www.linkedin.com/in/your-name",
            external: true
          },
          {
            title: "GitHub",
            subtitle: "Code, experiments, and implementation samples.",
            status: "open",
            chips: ["code"],
            href: "https://github.com/your-name",
            external: true
          }
        ]
      }
    ]
  }
];

const explorer = document.getElementById("explorer");
const searchInput = document.getElementById("portfolio-search");
const searchCount = document.getElementById("search-count");
const searchEmpty = document.getElementById("search-empty");

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
        ${(item.chips || []).map((chip) => `<span class="chip">${chip}</span>`).join("")}
      </div>
    </${tagName}>
  `;
}

function renderExplorer() {
  explorer.innerHTML = portfolioSections
    .map((section, sectionIndex) => {
      const totalItems = section.groups.reduce((count, group) => count + group.items.length, 0);
      const sectionPanelId = `section-panel-${sectionIndex}`;
      const sectionId = section.label.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");

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
              <span class="section-copy-top">
                <span class="section-label">${section.label}</span>
              </span>
              <h2 class="section-title">${section.title}</h2>
              <p class="section-subtitle">${section.subtitle}</p>
            </span>
            <span class="section-count" data-total="${totalItems}">${formatCount(totalItems)} entries</span>
            <span class="chevron" aria-hidden="true"></span>
          </button>
          <div id="${sectionPanelId}" class="section-body${section.open ? "" : " is-hidden"}">
            ${section.groups
              .map((group, groupIndex) => {
                const groupPanelId = `group-panel-${sectionIndex}-${groupIndex}`;

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
  toggle.setAttribute("aria-expanded", String(expanded));
  panel.classList.toggle("is-hidden", !expanded);
}

function restoreDefaults() {
  explorer.querySelectorAll(".section-header, .group-header").forEach((toggle) => {
    setExpanded(toggle, toggle.dataset.defaultExpanded === "true");
  });
}

function updateCounts(queryActive) {
  let visibleItems = 0;

  explorer.querySelectorAll(".group").forEach((group) => {
    const items = Array.from(group.querySelectorAll(".item-row"));
    const visible = items.filter((item) => !item.classList.contains("is-hidden")).length;
    const countNode = group.querySelector(".group-count");
    countNode.textContent = queryActive
      ? `${formatCount(visible)} matches`
      : `${formatCount(Number(countNode.dataset.total))} entries`;
    visibleItems += visible;
  });

  explorer.querySelectorAll(".section").forEach((section) => {
    const visible = Array.from(section.querySelectorAll(".item-row")).filter(
      (item) => !item.classList.contains("is-hidden")
    ).length;
    const countNode = section.querySelector(".section-count");
    countNode.textContent = queryActive
      ? `${formatCount(visible)} matches`
      : `${formatCount(Number(countNode.dataset.total))} entries`;
  });

  searchCount.textContent = queryActive
    ? `${formatCount(visibleItems)} matches`
    : `${formatCount(visibleItems)} entries`;
  searchEmpty.classList.toggle("is-hidden", visibleItems > 0);
}

function applySearch(rawQuery) {
  const query = rawQuery.trim().toLowerCase();
  const queryActive = query.length > 0;

  explorer.querySelectorAll(".item-row").forEach((item) => {
    const matches = !queryActive || item.dataset.search.includes(query);
    item.classList.toggle("is-hidden", !matches);
  });

  explorer.querySelectorAll(".group").forEach((group) => {
    const visibleItems = group.querySelectorAll(".item-row:not(.is-hidden)").length;
    group.classList.toggle("is-hidden", visibleItems === 0);

    const toggle = group.querySelector(".group-header");
    if (queryActive && visibleItems > 0) {
      setExpanded(toggle, true);
    }
  });

  explorer.querySelectorAll(".section").forEach((section) => {
    const visibleGroups = section.querySelectorAll(".group:not(.is-hidden)").length;
    section.classList.toggle("is-hidden", visibleGroups === 0);

    const toggle = section.querySelector(".section-header");
    if (queryActive && visibleGroups > 0) {
      setExpanded(toggle, true);
    }
  });

  if (!queryActive) {
    explorer.querySelectorAll(".group, .section").forEach((node) => node.classList.remove("is-hidden"));
    restoreDefaults();
  }

  updateCounts(queryActive);
}

function bindExplorerInteractions() {
  explorer.addEventListener("click", (event) => {
    const toggle = event.target.closest(".section-header, .group-header");
    if (!toggle || searchInput.value.trim()) {
      return;
    }

    const expanded = toggle.getAttribute("aria-expanded") === "true";
    setExpanded(toggle, !expanded);
  });

  searchInput.addEventListener("input", (event) => {
    applySearch(event.target.value);
  });
}

renderExplorer();
bindExplorerInteractions();
applySearch("");