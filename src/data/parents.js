export const PARENTS = [
  {
    id: 'research',
    label: 'Research',
    tagline: 'Understand the people you build for.',
    blurb: 'The customer-focused work of surfacing needs, behaviors, and pain points. Qualitative and quantitative, planned and opportunistic, generative and evaluative.',
    accent: '#b8a7ed',
    glow: 'rgba(184, 167, 237, 0.35)',
    branches: [
      {
        title: 'Foundations',
        description: 'What design research is and how it fits a product team.',
        resources: [
          { type: 'article', title: 'UX Research Cheat Sheet (NN/g)', href: 'https://www.nngroup.com/articles/ux-research-cheat-sheet/' },
          { type: 'article', title: "Complete Beginner's Guide to UX Research", href: 'https://www.uxbooth.com/articles/complete-beginners-guide-to-design-research/' },
          { type: 'article', title: 'The 9 Rules of Design Research', href: 'https://medium.com/mule-design/the-9-rules-of-design-research-1a273fdd1d3b' },
          { type: 'article', title: 'ResearchOps 101 (NN/g)', href: 'https://www.nngroup.com/articles/research-ops-101/' },
        ],
      },
      {
        title: 'Qualitative methods',
        description: 'Talking to people, watching them work, surfacing meaning.',
        resources: [
          { type: 'article', title: 'User Interviews: How, When, and Why', href: 'https://www.nngroup.com/articles/user-interviews/' },
          { type: 'article', title: 'Contextual Inquiry: Inspire Design by Observing', href: 'https://www.nngroup.com/articles/contextual-inquiry/' },
          { type: 'article', title: 'Usability Testing 101', href: 'https://www.nngroup.com/articles/usability-testing-101/' },
          { type: 'article', title: 'Open-Ended vs Closed-Ended Questions', href: 'https://www.nngroup.com/articles/open-ended-questions/' },
        ],
      },
      {
        title: 'Quantitative methods',
        description: "Numbers, scale, and what they can and can't tell you.",
        resources: [
          { type: 'article', title: 'A/B Testing 101', href: 'https://www.nngroup.com/articles/ab-testing/' },
          { type: 'article', title: 'When to Use Which UX Method', href: 'https://www.nngroup.com/articles/which-ux-research-methods/' },
          { type: 'article', title: 'Survey Design Best Practices', href: 'https://www.nngroup.com/articles/survey-best-practices/' },
          { type: 'article', title: 'Analytics for UX Designers', href: 'https://www.smashingmagazine.com/2020/09/google-analytics-web-developers-ui-ux-design/' },
        ],
      },
      {
        title: 'Discovery & competitive',
        description: 'Mapping the landscape before you commit to a direction.',
        resources: [
          { type: 'article', title: 'Competitive Analysis for UX', href: 'https://www.nngroup.com/articles/competitive-usability-evaluations/' },
          { type: 'article', title: 'How to Conduct a SWOT Analysis', href: 'https://www.investopedia.com/terms/s/swot.asp' },
          { type: 'article', title: "Task Analysis: Support Users' Goals", href: 'https://www.nngroup.com/articles/task-analysis/' },
        ],
        contributions: [
          { title: 'Competitive FTUX walkthrough loop', summary: 'Workflow using Operator to do live walkthroughs of competitor sign-up and onboarding flows. Captures behavior the static screenshots miss.', context: 'Jobber', year: '2025' },
        ],
      },
      {
        title: 'Synthesis & sharing',
        description: 'Turning raw input into insights people actually use.',
        resources: [
          { type: 'article', title: 'Affinity Diagramming for UX Findings', href: 'https://www.nngroup.com/articles/affinity-diagram/' },
          { type: 'article', title: 'Research Repositories', href: 'https://www.nngroup.com/articles/research-repositories/' },
          { type: 'article', title: "Card Sorting: Uncover Users' Mental Models", href: 'https://www.nngroup.com/articles/card-sorting-definition/' },
        ],
      },
      {
        title: 'AI-assisted research',
        description: 'Synthesis, transcription, theme extraction, and where the human still has to do the work.',
        resources: [
          { type: 'site', title: 'Dovetail (AI synthesis)', href: 'https://dovetail.com' },
          { type: 'site', title: 'Marvin (AI research repository)', href: 'https://heymarvin.com' },
          { type: 'article', title: 'Accelerating UX research with AI (NN/g)', href: 'https://www.nngroup.com/articles/research-with-ai/' },
        ],
        contributions: [
          { title: 'MCP analytics integration', summary: 'Built an MCP-based workflow that surfaces Amplitude and FullStory queries directly into the design environment. Behavioral data lives next to the artwork, not in a separate tab.', context: 'Jobber', year: '2025' },
        ],
      },
    ],
  },
  {
    id: 'product-thinking',
    label: 'Product Thinking',
    tagline: 'Own product outcomes, not just design ones.',
    blurb: 'As the seams between design, engineering, and PM dissolve, senior designers are increasingly accountable not just for how a product looks and feels, but for whether it actually succeeds. Vision, discovery, prioritization, positioning, monetization, measurement: the full operator toolkit.',
    accent: '#f0a4a4',
    glow: 'rgba(240, 164, 164, 0.35)',
    branches: [
      {
        title: 'Foundations',
        description: 'What it means to think like a product person, not just a designer.',
        resources: [
          { type: 'article', title: 'What is Product Thinking?', href: 'https://uxdesign.cc/what-is-product-thinking-9b2dbe85af40' },
          { type: 'book', title: 'Inspired (Marty Cagan)', href: 'https://www.svpg.com/inspired-how-to-create-products-customers-love/' },
          { type: 'book', title: 'Empowered (Cagan & Jones)', href: 'https://www.svpg.com/empowered/' },
        ],
      },
      {
        title: 'Vision & strategy',
        description: "Where the product is going and the bet you're making.",
        resources: [
          { type: 'article', title: 'How to Write a Product Vision', href: 'https://www.romanpichler.com/blog/the-product-vision/' },
          { type: 'article', title: 'Product Strategy (ProductPlan)', href: 'https://www.productplan.com/glossary/product-strategy/' },
          { type: 'article', title: 'Value Proposition Canvas', href: 'https://www.strategyzer.com/library/the-value-proposition-canvas' },
          { type: 'article', title: 'Product-Market Fit (Andreessen)', href: 'https://pmarchive.com/guide_to_startups_part4.html' },
        ],
      },
      {
        title: 'Continuous discovery',
        description: 'Talking to customers every week. Opportunity solution trees. The work of finding what to build, continuously.',
        resources: [
          { type: 'book', title: 'Continuous Discovery Habits (Teresa Torres)', href: 'https://www.producttalk.org/continuous-discovery-habits/' },
          { type: 'article', title: 'Opportunity Solution Trees', href: 'https://www.producttalk.org/opportunity-solution-tree/' },
          { type: 'article', title: 'Dual-Track Agile (Cagan)', href: 'https://www.svpg.com/dual-track-agile/' },
        ],
      },
      {
        title: 'Prioritization & tradeoffs',
        description: 'Frameworks for deciding what gets in and what gets cut. The skill of saying no without losing trust.',
        resources: [
          { type: 'article', title: 'RICE Scoring (Intercom)', href: 'https://www.intercom.com/blog/rice-simple-prioritization-for-product-managers/' },
          { type: 'article', title: 'The Kano Model', href: 'https://foldingburritos.com/blog/kano-model/' },
          { type: 'article', title: 'Comparing Prioritization Frameworks', href: 'https://www.productplan.com/solutions/product-prioritization' },
          { type: 'book', title: 'Shape Up (Basecamp): on cutting scope', href: 'https://basecamp.com/shapeup' },
          { type: 'article', title: 'The Art of the Strategic No', href: 'https://www.intercom.com/blog/product-strategy-means-saying-no/' },
        ],
      },
      {
        title: 'Roadmaps & planning',
        description: 'Sequencing the work without lying about the future.',
        resources: [
          { type: 'article', title: 'Now / Next / Later Roadmaps', href: 'https://www.prodpad.com/blog/now-next-later-roadmap/' },
          { type: 'article', title: 'How to Build a Product Roadmap', href: 'https://www.productplan.com/learn/roadmap-basics' },
          { type: 'article', title: 'Outcomes Over Outputs', href: 'https://www.svpg.com/outcomes-over-output/' },
        ],
      },
      {
        title: 'Positioning & GTM',
        description: 'How a product enters a market and why people choose it. Positioning is design at the category level.',
        resources: [
          { type: 'book', title: 'Obviously Awesome (April Dunford): positioning', href: 'https://www.aprildunford.com/obviously-awesome' },
          { type: 'book', title: 'Crossing the Chasm (Geoffrey Moore)', href: 'https://www.harpercollins.com/products/crossing-the-chasm-3rd-edition-geoffrey-a-moore' },
          { type: 'article', title: 'JTBD as a Positioning Tool', href: 'https://jtbd.info/replacing-the-user-story-with-the-job-story-af7cdee10c27' },
          { type: 'site', title: 'First Round Review: GTM essays', href: 'https://review.firstround.com/articles/go-to-market/' },
        ],
      },
      {
        title: 'Launch',
        description: 'Getting a product out the door, and the work that begins on day one.',
        resources: [
          { type: 'article', title: 'Amazon Working Backwards', href: 'https://commoncog.com/working-backwards/' },
          { type: 'article', title: 'Product Launch Checklist (PMA)', href: 'https://www.productmarketingalliance.com/product-launch-checklist-framework/' },
        ],
      },
      {
        title: 'Pricing & monetization',
        description: 'How a product makes money. Pricing is product, not afterthought.',
        resources: [
          { type: 'book', title: 'Monetizing Innovation (Ramanujam & Tacke)', href: 'https://www.simon-kucher.com/en/insights/monetizing-innovation' },
          { type: 'article', title: 'SaaS Pricing Strategies (Patrick Campbell, ProfitWell)', href: 'https://www.mindtheproduct.com/a-guide-to-unlocking-growth-with-optimized-pricing/' },
          { type: 'article', title: 'Freemium vs Free Trial vs Reverse Trial (Elena Verna)', href: 'https://amplitude.com/blog/reverse-trial' },
          { type: 'article', title: 'The DNA of a great pricing page (Elena Verna)', href: 'https://www.elenaverna.com/p/the-dna-of-a-great-pricing-page' },
        ],
      },
      {
        title: 'Metrics that matter',
        description: 'Activation, retention, engagement, and the difference between vanity and signal.',
        resources: [
          { type: 'article', title: 'AARRR Pirate Metrics', href: 'https://www.productplan.com/glossary/aarrr-framework/' },
          { type: 'article', title: 'North Star Framework', href: 'https://amplitude.com/north-star' },
          { type: 'article', title: 'Choosing the Right UX Metrics (NN/g)', href: 'https://www.nngroup.com/articles/ux-metrics-goals/' },
          { type: 'article', title: 'HEART framework (Google)', href: 'https://research.google/pubs/measuring-the-user-experience-on-a-large-scale-user-centered-metrics-for-web-applications/' },
        ],
      },
    ],
  },
  {
    id: 'ux',
    label: 'User Experience',
    tagline: 'Make complex things feel obvious.',
    blurb: 'The discipline of designing how a system behaves across time: flows, structures, interactions, the gradient between confusion and confidence.',
    accent: '#87c5d6',
    glow: 'rgba(135, 197, 214, 0.35)',
    branches: [
      {
        title: 'Foundations & principles',
        description: 'The mental models that everything else builds on.',
        resources: [
          { type: 'article', title: 'The Definition of User Experience (NN/g)', href: 'https://www.nngroup.com/articles/definition-user-experience/' },
          { type: 'article', title: '10 Usability Heuristics (Nielsen)', href: 'https://www.nngroup.com/articles/ten-usability-heuristics/' },
          { type: 'book', title: 'The Design of Everyday Things (Norman)', href: 'https://www.nngroup.com/books/design-everyday-things-revised/' },
        ],
      },
      {
        title: 'Design thinking & discovery',
        description: 'Frameworks for moving from a fuzzy problem to a clear one.',
        resources: [
          { type: 'article', title: 'Design Thinking: A Quick Overview', href: 'https://www.interaction-design.org/literature/topics/design-thinking' },
          { type: 'article', title: 'Empathy Mapping', href: 'https://www.nngroup.com/articles/empathy-mapping/' },
          { type: 'article', title: 'Journey Mapping 101', href: 'https://www.nngroup.com/articles/journey-mapping-101/' },
          { type: 'article', title: 'Jobs to be Done', href: 'https://jtbd.info/2-what-is-jobs-to-be-done-jtbd-796b82081cca' },
        ],
        contributions: [
          { title: 'FTUX team at Jobber', summary: 'Sign-up flow and trial conversion patterns. Built FTUX-specific product knowledge that now informs my work on the Quotes team in the Sales area.', context: 'Jobber', year: '2022–' },
        ],
      },
      {
        title: 'Information architecture',
        description: 'Where things live, how they connect, and how people find them.',
        resources: [
          { type: 'article', title: 'IA Basics (NN/g)', href: 'https://www.nngroup.com/articles/ia-vs-navigation/' },
          { type: 'book', title: "Information Architecture (O'Reilly)", href: 'https://www.oreilly.com/library/view/information-architecture-4th/9781491913529/' },
          { type: 'article', title: 'User Flows: Mapping Tasks', href: 'https://www.nngroup.com/articles/user-journeys-vs-user-flows/' },
        ],
      },
      {
        title: 'Cognitive & behavioral',
        description: 'How perception, memory, and attention shape what people experience.',
        resources: [
          { type: 'article', title: 'Gestalt Principles', href: 'https://www.smashingmagazine.com/2014/03/design-principles-visual-perception-and-the-principles-of-gestalt/' },
          { type: 'site', title: 'Laws of UX', href: 'https://lawsofux.com' },
          { type: 'article', title: 'Cognitive Load in UX', href: 'https://www.nngroup.com/articles/minimize-cognitive-load/' },
          { type: 'book', title: '100 Things Every Designer Needs to Know About People', href: 'https://www.amazon.com/Things-Designer-People-Voices-Matter/dp/0321767535' },
        ],
      },
      {
        title: 'Prototyping & testing',
        description: 'Making it real enough to learn from.',
        resources: [
          { type: 'article', title: 'Prototype Fidelity (NN/g)', href: 'https://www.nngroup.com/articles/ux-prototype-hi-lo-fidelity/' },
          { type: 'article', title: 'Usability Testing 101', href: 'https://www.nngroup.com/articles/usability-testing-101/' },
          { type: 'article', title: 'Writing Great User Stories', href: 'https://www.romanpichler.com/blog/10-tips-writing-good-user-stories/' },
        ],
      },
      {
        title: 'Content & storytelling',
        description: 'Words are interface. Microcopy is design.',
        resources: [
          { type: 'site', title: 'UX Writing Hub', href: 'https://uxwritinghub.com/category/resources/' },
          { type: 'book', title: 'Strategic Writing for UX (Podmajersky)', href: 'https://www.oreilly.com/library/view/strategic-writing-for/9781492049388/' },
          { type: 'article', title: 'Mailchimp Voice and Tone', href: 'https://styleguide.mailchimp.com/voice-and-tone/' },
        ],
        contributions: [
          { title: 'Apple-style copywriting system', summary: 'Grade 8 reading level, short sentences, active voice, Canadian spelling. Started as a portfolio guide. Now the default voice across my work.', context: 'Personal', year: '2024–' },
        ],
      },
    ],
  },
  {
    id: 'ui',
    label: 'User Interface',
    tagline: 'The craft of the visible surface.',
    blurb: 'How a product looks, feels, and responds. Typography, color, components, motion, accessibility: the layer where ideas become tangible.',
    accent: '#c5d97f',
    glow: 'rgba(197, 217, 127, 0.35)',
    branches: [
      {
        title: 'Visual foundations',
        description: 'Typography, color, grid, hierarchy. The grammar of UI.',
        resources: [
          { type: 'book', title: 'Refactoring UI', href: 'https://refactoringui.com' },
          { type: 'article', title: 'Practical Typography', href: 'https://practicaltypography.com' },
          { type: 'article', title: 'Color in UI Design', href: 'https://www.smashingmagazine.com/2016/04/web-developer-guide-color/' },
          { type: 'site', title: 'Learn UI Design Blog', href: 'https://www.learnui.design/blog/' },
          { type: 'book', title: 'Universal Principles of Design', href: 'https://www.amazon.com/Universal-Principles-Design-Revised-Updated/dp/1592535879' },
        ],
      },
      {
        title: 'Components & patterns',
        description: 'The building blocks of interfaces and the patterns people already know.',
        resources: [
          { type: 'article', title: 'Atomic Design (Brad Frost)', href: 'https://atomicdesign.bradfrost.com/chapter-2/' },
          { type: 'site', title: 'UI Patterns', href: 'https://ui-patterns.com' },
          { type: 'site', title: 'Mobbin (real UI examples)', href: 'https://mobbin.com' },
          { type: 'site', title: 'Page Flows', href: 'https://pageflows.com' },
        ],
      },
      {
        title: 'Design systems',
        description: 'Scaling design through reusable, governed primitives.',
        resources: [
          { type: 'book', title: 'Design Systems Handbook (InVision)', href: 'https://www.designbetter.co/design-systems-handbook' },
          { type: 'site', title: 'GitHub Primer', href: 'https://primer.style' },
          { type: 'site', title: 'Atlassian Design System', href: 'https://atlassian.design' },
          { type: 'site', title: 'Shopify Polaris', href: 'https://polaris.shopify.com' },
        ],
      },
      {
        title: 'Motion & micro-interactions',
        description: 'How interfaces breathe. Easing, choreography, intentional delay.',
        resources: [
          { type: 'article', title: 'An Introduction to Micro-Interactions', href: 'https://www.smashingmagazine.com/2016/08/experience-design-essentials-animated-microinteractions-in-mobile-apps/' },
          { type: 'site', title: 'Motion library docs', href: 'https://motion.dev' },
          { type: 'article', title: 'Designing UI Animation', href: 'https://uxdesign.cc/designing-ui-animations-the-ultimate-guide-2c8b3aa1f5f0' },
        ],
      },
      {
        title: 'Accessibility & inclusivity',
        description: 'Designing for the full range of human ability and context.',
        resources: [
          { type: 'article', title: 'WCAG 2.2 Quickref', href: 'https://www.w3.org/WAI/WCAG22/quickref/' },
          { type: 'site', title: 'A11y Project Checklist', href: 'https://www.a11yproject.com/checklist/' },
          { type: 'book', title: 'Inclusive Design Patterns (Pickering)', href: 'https://www.smashingmagazine.com/inclusive-design-patterns/' },
          { type: 'article', title: 'Microsoft Inclusive Design', href: 'https://inclusive.microsoft.design' },
        ],
      },
      {
        title: 'Platform & responsive',
        description: 'Designing for iOS, Android, web, and everything in between.',
        resources: [
          { type: 'site', title: 'Apple Human Interface Guidelines', href: 'https://developer.apple.com/design/human-interface-guidelines/' },
          { type: 'site', title: 'Material Design 3', href: 'https://m3.material.io' },
          { type: 'article', title: 'Responsive Web Design Basics', href: 'https://web.dev/responsive-web-design-basics/' },
          { type: 'article', title: 'Container Queries Guide', href: 'https://css-tricks.com/css-container-queries/' },
        ],
      },
      {
        title: 'Tools',
        description: 'The kit, as of now. Figma at the center, AI assistance everywhere.',
        resources: [
          { type: 'site', title: 'Figma', href: 'https://figma.com' },
          { type: 'site', title: 'Figma Make (AI design)', href: 'https://www.figma.com/make/' },
          { type: 'site', title: 'Penpot (open source)', href: 'https://penpot.app' },
          { type: 'site', title: 'Rive (interactive animation)', href: 'https://rive.app' },
          { type: 'site', title: 'UX Tools: current tool survey', href: 'https://uxtools.co/survey' },
        ],
        contributions: [
          { title: 'DocuCrit', summary: 'Figma plugin: linter + resizer for design files. Currently in development.', context: 'Personal', year: '2026' },
        ],
      },
    ],
  },
  {
    id: 'communication',
    label: 'Communication',
    tagline: 'Designs are won and lost in rooms.',
    blurb: 'The soft skills that make the hard skills count. Presenting, facilitating, navigating stakeholders, building trust, telling the story of the work.',
    accent: '#f4c476',
    glow: 'rgba(244, 196, 118, 0.35)',
    branches: [
      {
        title: 'Working in teams',
        description: 'Team structures, cross-functional dynamics, where design sits.',
        resources: [
          { type: 'article', title: 'How to structure a design team', href: 'https://www.invisionapp.com/inside-design/structure-a-design-team/' },
          { type: 'article', title: 'Designer ↔ PM partnership', href: 'https://www.svpg.com/the-designer-product-manager-relationship/' },
        ],
      },
      {
        title: 'Stakeholders & alignment',
        description: 'Bringing decision-makers along without losing the work.',
        resources: [
          { type: 'article', title: 'Define OKRs that drive design impact', href: 'https://www.atlassian.com/agile/agile-at-scale/okr' },
          { type: 'article', title: 'The Science of Persuasion (Cialdini, HBR)', href: 'https://hbr.org/2001/10/harnessing-the-science-of-persuasion' },
        ],
      },
      {
        title: 'Presenting work',
        description: 'How to share design so the audience actually understands it.',
        resources: [
          { type: 'article', title: 'How to Present Design Work', href: 'https://www.invisionapp.com/inside-design/present-design-work/' },
          { type: 'book', title: 'Articulating Design Decisions (Greever)', href: 'https://tomgreever.com/articulating-design-decisions-book/' },
          { type: 'article', title: 'Storytelling for designers', href: 'https://uxdesign.cc/storytelling-for-designers-a-how-to-guide-cfdab66cfb5c' },
        ],
        contributions: [
          { title: 'Two-act video presentation', summary: 'Five-minute script. Act 1: keynote-style segment on the Synapse agent system, calm and grounded. Act 2: absurdist 90s toy commercial for DocuCrit, high-energy. Plus a coming-soon illustration principles microsite.', context: 'Personal', year: '2026' },
        ],
      },
      {
        title: 'Feedback & critique',
        description: 'Giving and receiving feedback in a way that improves the work.',
        resources: [
          { type: 'book', title: 'Discussing Design (Connor & Irizarry)', href: 'https://www.oreilly.com/library/view/discussing-design/9781491902394/' },
          { type: 'article', title: 'How to give better design feedback (Figma)', href: 'https://www.figma.com/blog/figmas-gift-guide-how-to-give-great-feedback/' },
        ],
      },
      {
        title: 'Methodologies',
        description: 'Lean, Agile, Dual-Track: the rhythms design teams work in.',
        resources: [
          { type: 'book', title: 'Lean UX (Gothelf)', href: 'https://leanuxbook.com/' },
          { type: 'article', title: 'Agile UX in practice', href: 'https://www.nngroup.com/articles/agile-not-easy-ux/' },
          { type: 'article', title: 'Dual-Track Agile (Cagan)', href: 'https://www.svpg.com/dual-track-agile/' },
        ],
      },
      {
        title: 'Portfolio & narrative',
        description: 'How you tell the story of your work outside the building.',
        resources: [
          { type: 'article', title: 'How to write a UX case study (UXfolio)', href: 'https://blog.uxfol.io/ux-case-study-structure/' },
          { type: 'article', title: 'What hiring managers look for', href: 'https://uxdesign.cc/what-hiring-managers-look-for-in-a-portfolio' },
        ],
        contributions: [
          { title: 'Portfolio prompt system', summary: 'Five-question intake. Five distinct output types. Structured case study format aimed at executive audiences.', context: 'Personal', year: '2024' },
          { title: 'Staff-level narrative work', summary: 'Active investment in making AI workflow contributions visible internally. Doing Staff-level work is insufficient without matching narrative: artifacts that spread, director-level relationships, and presence in the right rooms.', context: 'Jobber', year: '2025–' },
        ],
      },
    ],
  },
  {
    id: 'design-engineer',
    label: 'Design Engineer',
    tagline: 'Designers who ship production code.',
    blurb: 'Skips traditional handoff. Prototypes in code where the medium demands it: motion, gesture, performance. Owns the implementation craft of the systems they help design.',
    accent: '#7fd1a8',
    glow: 'rgba(127, 209, 168, 0.4)',
    branches: [
      {
        title: 'Foundations of the role',
        description: 'What it is, where it sits, who hires for it.',
        resources: [
          { type: 'article', title: 'Design Engineering at Vercel', href: 'https://vercel.com/blog/design-engineering-at-vercel' },
          { type: 'article', title: 'The Rise of the Generalist (Figma)', href: 'https://www.figma.com/blog/the-rise-of-the-generalist/' },
          { type: 'article', title: 'What is a Design Engineer?', href: 'https://maggieappleton.com/design-engineers' },
          { type: 'site', title: 'Linear', href: 'https://linear.app' },
          { type: 'site', title: 'Clerk', href: 'https://clerk.com' },
        ],
      },
      {
        title: 'Code fluency',
        description: 'HTML, CSS, JS, React, TypeScript. The daily languages.',
        resources: [
          { type: 'article', title: 'MDN: Modern CSS', href: 'https://developer.mozilla.org/en-US/docs/Web/CSS' },
          { type: 'article', title: 'React docs', href: 'https://react.dev' },
          { type: 'article', title: 'Next.js docs', href: 'https://nextjs.org/docs' },
          { type: 'article', title: 'TypeScript handbook', href: 'https://www.typescriptlang.org/docs/handbook' },
          { type: 'site', title: 'web.dev (Google)', href: 'https://web.dev' },
        ],
      },
      {
        title: 'Prototyping in code',
        description: 'When code beats Figma: motion, gesture, real-time behavior.',
        resources: [
          { type: 'site', title: 'Rauno Freiberg', href: 'https://rauno.me' },
          { type: 'site', title: 'Paco Coursey', href: 'https://paco.me' },
          { type: 'site', title: 'Emil Kowalski', href: 'https://emilkowal.ski' },
          { type: 'article', title: 'View Transitions API', href: 'https://developer.chrome.com/docs/web-platform/view-transitions' },
          { type: 'article', title: 'Framer Motion docs', href: 'https://www.framer.com/motion/' },
        ],
        contributions: [
          { title: 'Agent-repo prototyping', summary: 'Cursor loaded with Jobber context generates working React prototypes, not Figma frames. Used for quick exploration before committing to a direction. Exploration speed measured in minutes, not days.', context: 'Jobber', year: '2025' },
        ],
      },
      {
        title: 'Design systems as implementation',
        description: 'Component APIs, tokens, primitives. The code reality of a design system.',
        resources: [
          { type: 'site', title: 'Radix Primitives', href: 'https://www.radix-ui.com/primitives' },
          { type: 'site', title: 'shadcn/ui', href: 'https://ui.shadcn.com' },
          { type: 'article', title: 'Style Dictionary', href: 'https://styledictionary.com/' },
          { type: 'site', title: 'Storybook', href: 'https://storybook.js.org' },
        ],
      },
      {
        title: 'Production craft',
        description: 'Pixel perfection, performance, accessibility, cross-browser polish.',
        resources: [
          { type: 'article', title: 'Core Web Vitals', href: 'https://web.dev/vitals/' },
          { type: 'article', title: 'WCAG 2.2 Quickref', href: 'https://www.w3.org/WAI/WCAG22/quickref/' },
          { type: 'article', title: 'Inclusive Components', href: 'https://inclusive-components.design' },
        ],
      },
      {
        title: 'Workflow & collaboration',
        description: 'The embedded model. No handoff. Iterating in code with designers.',
        resources: [
          { type: 'article', title: 'How Linear builds product', href: 'https://linear.app/method' },
          { type: 'article', title: 'Vercel design eng process', href: 'https://vercel.com/blog/design-engineering-at-vercel' },
        ],
      },
    ],
  },
  {
    id: 'ai-designer',
    label: 'AI Designer',
    tagline: 'Designers who shape probabilistic systems.',
    blurb: 'Designs for non-determinism. Builds trust into model interactions. Defines the patterns by which humans collaborate with AI agents.',
    accent: '#e8b86d',
    glow: 'rgba(232, 184, 109, 0.4)',
    branches: [
      {
        title: 'Foundations of the role',
        description: 'What AI Design is. Why probabilistic systems need different rules.',
        resources: [
          { type: 'site', title: 'Anthropic', href: 'https://www.anthropic.com' },
          { type: 'site', title: 'Linear AI features', href: 'https://linear.app/agents' },
          { type: 'site', title: 'Notion AI', href: 'https://www.notion.so/product/ai' },
          { type: 'site', title: 'Cursor', href: 'https://cursor.com' },
        ],
        contributions: [
          { title: 'Synapse: public architecture defense', summary: 'Built and publicly discussed a locally-run Cursor-based agent system loaded with Jobber-specific context. Defended the design against concerns about maintenance liability: context-specificity is the moat, not the scaffolding.', context: 'Jobber + public', year: '2025' },
        ],
      },
      {
        title: 'Human-AI interaction principles',
        description: 'The foundational guidelines from Microsoft, Google, Apple, IBM.',
        resources: [
          { type: 'site', title: 'Microsoft HAX Toolkit', href: 'https://www.microsoft.com/en-us/haxtoolkit/' },
          { type: 'site', title: 'Google PAIR Guidebook', href: 'https://pair.withgoogle.com' },
          { type: 'site', title: 'Apple HIG: Machine Learning', href: 'https://developer.apple.com/design/human-interface-guidelines/machine-learning' },
          { type: 'article', title: 'Guidelines for Human-AI Interaction (Amershi et al.)', href: 'https://www.microsoft.com/en-us/research/publication/guidelines-for-human-ai-interaction/' },
          { type: 'site', title: 'IBM Design for AI', href: 'https://www.ibm.com/design/ai/' },
        ],
      },
      {
        title: 'Designing for probabilistic systems',
        description: 'Confidence, error states, recovery, trust cliffs.',
        resources: [
          { type: 'article', title: 'How to design AI for failure', href: 'https://www.microsoft.com/en-us/haxtoolkit/ai-guidelines/' },
          { type: 'article', title: 'Calibrated uncertainty in AI UX', href: 'https://pair.withgoogle.com/chapter/errors-failing/' },
        ],
      },
      {
        title: 'AI interaction patterns',
        description: 'Chat, copilots, agents, generative UI.',
        resources: [
          { type: 'site', title: 'Shape of AI (pattern library)', href: 'https://shapeof.ai' },
          { type: 'site', title: 'v0 by Vercel', href: 'https://v0.dev' },
          { type: 'site', title: 'Claude Artifacts', href: 'https://claude.ai' },
        ],
      },
      {
        title: 'Prompt design as a design discipline',
        description: 'System prompts as UX writing. Structured outputs as IA. Evals as testing.',
        resources: [
          { type: 'article', title: 'Anthropic prompt engineering', href: 'https://docs.claude.com/en/docs/build-with-claude/prompt-engineering/overview' },
          { type: 'article', title: 'OpenAI prompt guide', href: 'https://platform.openai.com/docs/guides/prompt-engineering' },
        ],
        contributions: [
          { title: 'Agent toolkit consolidation', summary: 'Consolidated two Claude Code toolkits (design-skills with five specialist worker personas for design phases, and pm-skills with reviewer/critique personas, slash commands, task logs) into a unified setup. Built a combined product designer reviewer persona focused on mental models, trust signals, cognitive load, interaction patterns. Identified and fixed best-practice violations: over-stuffed CLAUDE.md files, missing context-forks on verbose skills, too many agents loaded simultaneously.', context: 'Personal', year: '2024–25' },
        ],
      },
      {
        title: 'Trust, sourcing & transparency',
        description: 'Citations, confidence indicators, control surfaces.',
        resources: [
          { type: 'site', title: 'Perplexity', href: 'https://www.perplexity.ai' },
          { type: 'article', title: 'Claude citations', href: 'https://docs.claude.com/en/docs/build-with-claude/citations' },
        ],
        contributions: [
          { title: 'Agent self-audit pattern', summary: "Running Synapse outputs through an isolated Claude Code instance or Codex sandbox to avoid blind-spot problems. An agent auditing itself sees what it expects to see; an isolated peer reviewer doesn't.", context: 'Personal', year: '2025' },
        ],
      },
      {
        title: 'AI-augmented design workflow',
        description: 'Using AI to do design work. Cursor, v0, Claude Artifacts, Figma Make, custom agents.',
        resources: [
          { type: 'site', title: 'Cursor', href: 'https://cursor.com' },
          { type: 'site', title: 'v0', href: 'https://v0.dev' },
          { type: 'site', title: 'Figma Make', href: 'https://www.figma.com/make/' },
          { type: 'article', title: 'Anthropic MCP', href: 'https://docs.claude.com/en/docs/mcp' },
        ],
        contributions: [
          { title: 'Synapse: context-loaded Cursor agent', summary: 'Locally-run agent system loaded with Jobber design system, personas, content guidelines. Primary workhorse for prototyping, exploration, and competitive research.', context: 'Jobber', year: '2025' },
          { title: 'Multi-tool workflow stack', summary: 'Cursor as primary workhorse, Operator reserved for interactive competitor FTUX walkthroughs, isolated Claude Code or Codex sandbox for self-audits. Each tool picked for what it does best, not as a one-size-fits-all.', context: 'Personal', year: '2025' },
          { title: 'Paperclip evaluation', summary: 'Scoped Paperclip (paperclip.ing) as a potential orchestration layer. Use cases: async design critique pipelines, competitive FTUX monitoring loops, portfolio production pipelines. Approver role for me; agents run autonomously.', context: 'Personal', year: '2025' },
        ],
      },
      {
        title: 'Safety & responsible AI',
        description: 'Bias, hallucinations, privacy, governance.',
        resources: [
          { type: 'article', title: 'Anthropic Responsible Scaling', href: 'https://www.anthropic.com/news/announcing-our-updated-responsible-scaling-policy' },
          { type: 'article', title: 'NIST AI Risk Management Framework', href: 'https://www.nist.gov/itl/ai-risk-management-framework' },
        ],
      },
    ],
  },
];
