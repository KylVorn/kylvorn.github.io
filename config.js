/* ============================================================
   KylVorn: site settings.
   Edit values, save the file, refresh index.html. Works from disk (file:///).
   Any key you delete falls back to a built-in default.
   ============================================================ */
window.SITE_CONFIG = {

  lang: "en",
  title: "{KylVorn}",
  description: "KylVorn – developer portfolio: apps, pet-projects and open source software.",

  // Browser tab title & blinking cursor
  tab: {
    title: "{KylVorn}",
    cursor: "∣",          // e.g. "_", "|", "▌" or "" to disable cursor
    blink: true,          // blink cursor in browser tab title
    interval: 650         // ms per blink step
  },

  // Browser tab icon (favicon)
  // Leave `src` empty to use the built-in monochrome {K} SVG icon,
  // or put your own file path like "assets/favicon.png" or "assets/favicon.svg".
  favicon: {
    enabled: true,
    src: "",
    bg: "#000000",
    fg: "#f2f2f2"
  },

  // Text that gets typed in the hero (and shown in the nav logo)
  brand: "{KylVorn}",

  // Colors and fonts (any CSS value). Fonts must be installed or loaded by the page.
  theme: {
    background: "#000000",
    card: "#080808",
    text: "#f2f2f2",
    muted: "#8a8a93",
    accent: "#4cc2ff",            // "Learn more" links
    accent2: "#8b7bff",
    line: "rgba(255,255,255,.1)", // card borders and dividers
    fontSans: "Inter, 'Segoe UI Variable', 'Segoe UI', system-ui, sans-serif",
    fontMono: "'JetBrains Mono', ui-monospace, 'Cascadia Code', Consolas, monospace"
  },

  // Intro transition: realistic letter -> pixelation -> ASCII morph -> reveal
  intro: {
    enabled: false,
    letter: "K",          // single letter or short symbol rendered at start
    color: "#ffffff",     // main letter color (e.g. "#ffffff", "#4cc2ff", or "gradient")
    glowColor: "rgba(255,255,255,0.28)", // ambient glow behind the letter
    hold: 380,            // ms showing the smooth letter
    pixelate: 520,        // ms pixelating & morphing into ASCII grid
    fade: 360             // ms dissolving into the hero screen
  },

  // Typing animation
  typing: {
    startDelay: 500,  // ms before the first character
    speed: 110,       // ms per character
    jitter: 90,       // random extra ms per character
    caret: true       // show the blinking caret
  },

  hero: {
    text: "Developer building fast, focused software. Below is a selection of apps and pet-projects I am building.",
    buttons: [
      { label: "View work",    href: "#pet",     primary: true },
      { label: "Get in touch", href: "#contact", primary: false }
    ]
  },

  // Sections of cards. An item belongs to the section whose id equals its "category".
  // Add a new section here and give items the same category: it appears automatically.
  sections: [
    { id: "pet",  title: "Pet-projects", subtitle: "Projects to have fun." },
    { id: "apps", title: "Apps",         subtitle: "Products you can download and use, mostly open source." }
  ],

  // Shown inside a section that has no items
  empty: {
    title: "{Oops!..}",
    text: "nothing to see here..."
  },

  card: {
    linkText: "Learn more",
    moreLabel: "More..." // Button shown in modal when item.hasPage is true
  },

  // 404 / "Project not found" screen on project.html
  notFound: {
    title: "{404}",
    text: "Project not found. Check the link or return to the main page.",
    buttonLabel: "Back to portfolio",
    buttonHref: "index.html",
    typing: {
      enabled: true,
      startDelay: 180,
      speed: 115,
      jitter: 70,
      caret: true
    },
    ascii: {
      enabled: true,
      text: "{Not found}",        // Any background text (e.g. "{KylVorn}", "{Not found}", "404")
      chars: " .,-~:;=!*#$@",
      color: "255,255,255",
      opacity: 0.22,
      animate: true
    }
  },

  contact: {
    enabled: true,
    navLabel: "Contact",
    title: "// Contact",
    text: "Feedback, bug reports, or just talking code — always welcome.",
    buttons: [
      { label: "NonCritical@kylvorn.org", href: "mailto:kylvorn@proton.me", primary: true },
      { label: "GitHub",  href: "https://github.com/BeepBoopBeem", primary: false },
      { label: "Discord", href: "https://discord.gg/vuQZsWmD7b",   primary: false }
    ]
  },

  footer: "© {year} KylVorn. All rights reserved.",

  // ASCII 3D figures behind the title
  ascii: {
    enabled: true,
    points: 12000,
    pointsMobile: 6000,   // used on screens narrower than 700px
    size: 0.3,            // figure size relative to the hero height
    hold: 4.5,            // seconds each shape stays
    morph: 2.4,           // seconds of transition
    shapes: ["torus", "sphere", "cube", "trefoil", "spring"],
    chars: " .,-~:;=!*#$@",  // dark to bright; the first character must be a space
    color: "255,255,255"     // R,G,B
  },

  // Symbol border that appears when hovering a card
  cardBorder: {
    enabled: true,
    chars: "01<>{}/\\|+=*#$@%&",
    fontSize: 8,
    step: 5.5,            // distance between symbols, px
    color: "255,255,255"
  },

  // Your cards. category must match a section id above.
  // Tip: put screenshots in an "assets/" folder next to index.html and list them in `images`.
  items: [
    {
      id: "chess",
      category: "pet",
      icon: "♟️",
      title: "{KylVorn: 0xChess}",
      status: "Idea / Draft",
      desc: "Chess pet-project in progress — stack and exact concept are still taking shape.",
      tags: ["Pet-project", "Chess", "WIP"],

      // ---- Modal content (quick preview) ----
      summary: "An experimental chess project under the {KylVorn} brand. Core rules, stack, and visual style are currently being shaped.",
      features: [
        "The time will show..."
      ],

      // PUT YOUR SCREENSHOTS HERE (create an ./assets/ folder next to index.html)
      images: [
        // { src: "assets/chess-1.png", caption: "Early prototype" },
        // { src: "assets/chess-2.png", caption: "Board view" }
      ],

      // Buttons inside the modal and on the full project page
      links: [],

      // Set to true to show the "More..." button in the modal -> opens project.html?id=chess
      hasPage: true,

      // ---- Full page content (project.html?id=chess) ----
      page: {
        ascii: {
          enabled: true,
          text: "{Chess}",
          chars: " .,-~:;=!*#$@",
          color: "255,255,255",
          opacity: 0.16,
          animate: true
        },
        meta: [
          { label: "Status",   value: "Idea / Draft" },
          { label: "Category", value: "Pet-project" },
          { label: "Stack",    value: "TBD" }
        ],
        sections: [
          {
            heading: "// Concept",
            text: [
              "{KylVorn: Chess} is a pet-project started for fun and experimentation.",
            ]
          }
        ]
      }
    },
    
    {
      id: "minesweeper",
      category: "pet",
      icon: "💣",
      title: "{KylVorn: 0xMines}",
      status: "Prototype",
      desc: "Minesweeper pet-project in progress — stack and exact concept are still taking shape.",
      tags: ["Pet-project", "Minesweeper", "MVProject"],

      // ---- Modal content (quick preview) ----
      summary: "An experimental minesweeper project under the {KylVorn} brand.",
      features: [],

      // PUT YOUR SCREENSHOTS HERE (create an ./assets/ folder next to index.html)
      images: [
        // { src: "assets/chess-1.png", caption: "Early prototype" },
        // { src: "assets/chess-2.png", caption: "Board view" }
      ],

      // Buttons inside the modal and on the full project page
      links: [
        { label: "GitHub", href: "https://github.com/BeepBoopBeem/0xmines", primary: true }
      ],

      // Set to true to show the "More..." button in the modal -> opens project.html?id=chess
      hasPage: true,

      // ---- Full page content (project.html?id=chess) ----
      page: {
        ascii: {
          enabled: true,
          text: "{Mines}",
          chars: " .,-~:;=!*#$@",
          color: "255,255,255",
          opacity: 0.16,
          animate: true
        },
        meta: [
          { label: "Status",   value: "Prototype" },
          { label: "Category", value: "Pet-project" },
          { label: "Stack",    value: "Python (prototype)" }
        ],
        sections: [
          {
            heading: "// Concept",
            text: [
              "{KylVorn: 0xMines} is a pet-project started for fun and experimentation.",
              "No more information about this project."
            ]
          }
        ]
      }
    },

    {
      id: "wave",
      category: "apps",
      icon: "🎵",
      title: "{KylVorn: Wave}",
      status: "Idea / Draft",
      desc: "Hybrid local & online music player with track caching and multi-device sync.",
      tags: ["C#", "Avalonia UI", "Portfolio"],

      // ---- Modal content (quick preview) ----
      summary: "A lightweight, cross-platform music player designed for speed and offline reliability. Combines local audio libraries with online streaming, automatic local caching, and playlist synchronization across devices.",
      features: [
        "Local library playback with zero bloat",
        "Online track streaming with automatic local caching",
        "Cross-device library & playlist synchronization",
        "Cross-platform native UI for Linux and Windows"
      ],

      // PUT YOUR SCREENSHOTS HERE (create an ./assets/ folder next to index.html)
      images: [
        // { src: "assets/wave-main.png", caption: "Main library view" },
        // { src: "assets/wave-player.png", caption: "Minimal player & ASCII visualizer" }
      ],

      // Buttons inside the modal and on the full project page
      links: [],

      // Set to true to show the "More..." button in the modal -> opens project.html?id=wave
      hasPage: true,

      // ---- Full page content (project.html?id=wave) ----
      page: {
        ascii: {
          enabled: true,
          text: "{Wave}",
          chars: " .,-~:;=!*#$@",
          color: "255,255,255",
          opacity: 0.16,
          animate: true
        },
        meta: [
          { label: "Status",    value: "In Development" },
          { label: "Stack",     value: "C# / .NET, Avalonia UI" },
          { label: "Platforms", value: "Linux, Windows" }
        ],
        sections: [
          {
            heading: "// Overview",
            text: [
              "{KylVorn: Wave} started as a personal project to solve a simple annoyance: most modern music players are either heavy Electron apps or lock your music behind online-only subscriptions.",
              "The goal is a fast, distraction-free desktop player that treats local files and online streams as first-class citizens."
            ]
          },
          {
            heading: "// Architecture & Goals",
            bullets: [
              "Chunk-based audio caching so streamed tracks remain playable offline without corrupted files.",
              "Lightweight sync layer to keep playlists and playback state consistent across Linux and Windows.",
              "Low-overhead audio pipeline and minimal dark UI matching the {KylVorn} design system."
            ]
          }
        ]
      }
    }
  ]
};
