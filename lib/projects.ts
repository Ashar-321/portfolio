export type ProjectCategory = "Shopify" | "Management" | "Web apps" | "Mobile apps";
export type ProjectVisual =
  | "pos"
  | "farm"
  | "store"
  | "analytics"
  | "giftcard"
  | "scheduler"
  | "lock"
  | "school"
  | "distribution"
  | "warehouse"
  | "mobile-study"
  | "mobile-field"
  | "ledger"
  | "attendance"
  | "cattle-iot";
export type TechnologyName =
  | "Next.js"
  | "React"
  | "React Native"
  | "TypeScript"
  | "Laravel"
  | "PHP"
  | "Shopify"
  | "Tailwind CSS"
  | "Node.js"
  | "MySQL"
  | "AI";

export type ProjectScreenshot = {
  label: string;
  src?: string;
  alt: string;
  preview?: boolean;
  expectedPath?: string;
};

export type Project = {
  id: string;
  number: string;
  slug: string;
  title: string;
  category: ProjectCategory;
  kind: string;
  status: "work" | "concept";
  description: string;
  overview: string;
  stack: TechnologyName[];
  visual: ProjectVisual;
  assetFolder?: string;
  coverImage?: string;
  points: string[];
  screenshots: ProjectScreenshot[];
};

export const projects: Project[] = [
  {
    id: "royal-pos",
    number: "01",
    slug: "royal-pos",
    title: "Royal AI POS",
    category: "Management",
    kind: "Point of sale · selected work",
    status: "work",
    description:
      "An AI-powered point-of-sale platform with a business assistant, sales insights, and inventory intelligence. Built with Laravel and React.",
    overview:
      "Royal POS brings sales, customers, coupons, products, and inventory into one workspace. Its AI assistant can answer questions using live business data and support inventory decisions.",
    stack: ["Laravel", "React", "AI"],
    visual: "pos",
    assetFolder: "shopify-pos",
    coverImage: "/projects/royal-pos/screen-1.png",
    points: [
      "AI assistant for business questions and sales insights.",
      "Inventory AI to help identify stock needs.",
      "POS terminal, sales history, customers, and coupon tools.",
    ],
    screenshots: [
      { label: "AI assistant", src: "/projects/royal-pos/screen-1.png", alt: "Royal POS AI assistant and business insights screen" },
      { label: "Main POS dashboard", alt: "Shopify POS sales dashboard screen", preview: true, expectedPath: "/projects/shopify-pos/preview-1.png" },
      { label: "Point of sale", alt: "Shopify POS checkout and cart screen", expectedPath: "/projects/shopify-pos/preview-2.png" },
      { label: "Inventory management", alt: "Shopify POS product inventory screen", expectedPath: "/projects/shopify-pos/preview-3.png" },
    ],
  },
  {
    id: "cattle-erp",
    number: "02",
    slug: "cattle-erp",
    title: "Cattle ERP",
    category: "Management",
    kind: "Farm management · selected work",
    status: "work",
    description:
      "An AI-powered farm operations platform for organizations, farms, people, and access-controlled work areas. Built with Laravel and React.",
    overview:
      "Cattle ERP gives farm teams one place to manage livestock, trading, dairy and meat operations, breeding, veterinary care, feed, inventory, employees, and reports. AI intelligence supports farm decisions and brings useful information into reach.",
    stack: ["Laravel", "React", "AI"],
    visual: "farm",
    assetFolder: "livestock-erp",
    coverImage: "/projects/cattle-erp/screen-1.png",
    points: [
      "Organize multiple farms and users with access roles.",
      "Bring livestock, veterinary, dairy, feed, and inventory modules together.",
      "Use AI intelligence to surface operational insights.",
    ],
    screenshots: [
      { label: "Farm operations screenshot", src: "/projects/cattle-erp/screen-1.png", alt: "Cattle ERP dashboard showing farm and module overview" },
      { label: "Farm dashboard", alt: "Livestock ERP farm metrics and performance dashboard", preview: true, expectedPath: "/projects/livestock-erp/preview-1.png" },
      { label: "Animal management", alt: "Livestock ERP animal registry and cattle profile", expectedPath: "/projects/livestock-erp/preview-2.png" },
      { label: "Milk production and analytics", alt: "Livestock ERP milk production and farm analytics", expectedPath: "/projects/livestock-erp/preview-3.png" },
    ],
  },
  {
    id: "giftcard-discount",
    number: "03",
    slug: "shopify-gift-cards-discounts",
    title: "Gift Cards & Discounts",
    category: "Shopify",
    kind: "Shopify app concept",
    status: "concept",
    description:
      "A merchant app concept for gift-card and discount-code campaigns, with AI suggestions for offers, timing, and customer segments.",
    overview:
      "One campaign workspace for setting up gift cards, discount rules, and promotional schedules. AI assistance helps merchants shape an offer around a goal, then review its performance.",
    stack: ["Shopify", "Laravel", "React", "AI"],
    visual: "giftcard",
    points: [
      "Create gift cards and discount codes from guided templates.",
      "Use AI to draft campaign ideas and customer messages.",
      "Review redemptions and campaign performance in one place.",
    ],
    screenshots: [
      { label: "Campaign overview", alt: "Gift card and discount app concept overview", preview: true },
      { label: "Create a gift card", alt: "Gift card setup concept screen" },
      { label: "AI campaign suggestions", alt: "AI campaign suggestion concept screen" },
    ],
  },
  {
    id: "shopify-scheduler",
    number: "04",
    slug: "shopify-scheduler",
    title: "Store Scheduler",
    category: "Shopify",
    kind: "Shopify app concept",
    status: "concept",
    description:
      "A Shopify scheduling app concept for planning launches, promotions, and store content with AI-assisted timing recommendations.",
    overview:
      "A visual calendar for coordinating product launches and store campaigns. AI suggestions help merchants find a sensible time, draft supporting copy, and spot scheduling conflicts before a launch.",
    stack: ["Shopify", "Laravel", "React", "AI"],
    visual: "scheduler",
    points: [
      "Plan promotions and product launches on a shared calendar.",
      "Use AI to suggest launch times and draft campaign copy.",
      "See status and overlapping campaigns at a glance.",
    ],
    screenshots: [
      { label: "Campaign calendar", alt: "Shopify Scheduler app concept calendar", preview: true },
      { label: "Launch details", alt: "Shopify Scheduler launch planning concept screen" },
      { label: "AI timing suggestions", alt: "Shopify Scheduler AI timing concept screen" },
    ],
  },
  {
    id: "label-lock",
    number: "05",
    slug: "label-lock-products-collections",
    title: "Label Lock",
    category: "Shopify",
    kind: "Shopify app concept",
    status: "concept",
    description:
      "A Shopify access-control app concept for locking products and collections by customer tag, market, or merchant-defined rule.",
    overview:
      "Label Lock gives merchants a rule-based way to control who can see selected products and collections. AI assistance can explain rule conflicts and help review access settings before they go live.",
    stack: ["Shopify", "Laravel", "React", "AI"],
    visual: "lock",
    points: [
      "Lock individual products or full collections.",
      "Build access rules around customer tags and markets.",
      "Use AI to explain overlaps and check rule configuration.",
    ],
    screenshots: [
      { label: "Access rules overview", alt: "Label Lock app concept access rules overview", preview: true },
      { label: "Product and collection locks", alt: "Label Lock product and collection settings" },
      { label: "AI rule review", alt: "Label Lock AI rule review concept screen" },
    ],
  },
  {
    id: "school-erp",
    number: "06",
    slug: "school-management-erp",
    title: "School Management ERP",
    category: "Management",
    kind: "Management software concept",
    status: "concept",
    description:
      "An AI-powered school operations concept for student records, attendance, fees, communication, and academic reporting.",
    overview:
      "A connected workspace for school administrators, teachers, and families. AI assistance can summarize attendance patterns, help answer routine policy questions, and support clear parent communication.",
    stack: ["Laravel", "React", "AI"],
    visual: "school",
    points: [
      "Manage admissions, student profiles, classes, and attendance.",
      "Track fee schedules and academic progress.",
      "Use AI summaries to help staff spot follow-up needs.",
    ],
    screenshots: [
      { label: "School overview", alt: "AI School ERP concept overview", preview: true },
      { label: "Attendance and classes", alt: "School ERP attendance concept screen" },
      { label: "Student progress", alt: "School ERP student progress concept screen" },
    ],
  },
  {
    id: "distribution-erp",
    number: "07",
    slug: "distribution-management",
    title: "Distribution Management",
    category: "Management",
    kind: "Management software concept",
    status: "concept",
    description:
      "An AI-powered distribution operations concept for orders, inventory, delivery routes, and field-team coordination.",
    overview:
      "A practical distribution workspace connecting sales orders with warehouse stock and delivery planning. AI insights can recommend route groupings and flag replenishment needs for review.",
    stack: ["Laravel", "React", "AI"],
    visual: "distribution",
    points: [
      "Track orders from dispatch through delivery.",
      "Coordinate drivers, routes, stock, and customer accounts.",
      "Use AI-assisted route and replenishment suggestions.",
    ],
    screenshots: [
      { label: "Distribution overview", alt: "AI Distribution Management concept overview", preview: true },
      { label: "Route planning", alt: "Distribution route planning concept screen" },
      { label: "Orders and inventory", alt: "Distribution orders and inventory concept screen" },
    ],
  },
  {
    id: "warehouse-erp",
    number: "08",
    slug: "warehouse-inventory-erp",
    title: "Warehouse & Inventory ERP",
    category: "Management",
    kind: "Management software concept",
    status: "concept",
    description:
      "An AI-powered warehouse operations concept for stock visibility, purchase planning, transfers, and picking workflows.",
    overview:
      "A single inventory view for teams receiving, storing, and moving products. AI forecasts can help teams spot low-stock risks and prepare purchase recommendations for approval.",
    stack: ["Laravel", "React", "AI"],
    visual: "warehouse",
    points: [
      "Track stock across locations and movements.",
      "Organize receiving, transfers, and pick lists.",
      "Use AI to forecast low-stock risk and suggest reorders.",
    ],
    screenshots: [
      { label: "Stock overview", alt: "AI Warehouse ERP concept stock overview", preview: true },
      { label: "Transfers and picking", alt: "Warehouse transfers and picking concept screen" },
      { label: "AI reorder recommendations", alt: "Warehouse AI reorder concept screen" },
    ],
  },
  {
    id: "study-coach",
    number: "09",
    slug: "ai-study-coach-mobile",
    title: "AI Study Coach",
    category: "Mobile apps",
    kind: "React Native mobile concept",
    status: "concept",
    description:
      "A React Native study companion concept with an AI tutor, personalized practice, and a flexible revision plan.",
    overview:
      "A mobile-first study companion that turns course notes into short explanations, practice questions, and a revision schedule shaped around the learner's goals.",
    stack: ["React Native", "TypeScript", "AI"],
    visual: "mobile-study",
    points: [
      "Ask an AI tutor questions about study materials.",
      "Generate short quizzes and revision cards.",
      "Adjust a study plan as topics are completed.",
    ],
    screenshots: [
      { label: "Study plan", alt: "AI Study Coach mobile concept screen", preview: true },
      { label: "AI tutor chat", alt: "AI Study Coach tutor chat concept screen" },
      { label: "Practice session", alt: "AI Study Coach practice concept screen" },
    ],
  },
  {
    id: "field-assistant",
    number: "10",
    slug: "ai-field-sales-mobile",
    title: "AI Field Sales Companion",
    category: "Mobile apps",
    kind: "React Native mobile concept",
    status: "concept",
    description:
      "A React Native field-sales companion concept for customer visits, product availability, order capture, and AI-assisted follow-ups.",
    overview:
      "A mobile workspace designed for sales representatives on the move. AI tools can turn visit notes into follow-up tasks, surface account context, and prepare an order draft for review.",
    stack: ["React Native", "TypeScript", "AI"],
    visual: "mobile-field",
    points: [
      "Keep customer visits and follow-up actions together.",
      "Check product availability and prepare orders in the field.",
      "Use AI to summarize voice notes and suggest next steps.",
    ],
    screenshots: [
      { label: "Visit overview", alt: "AI Field Sales Companion mobile concept screen", preview: true },
      { label: "Customer notes", alt: "AI Field Sales customer notes concept screen" },
      { label: "Order draft", alt: "AI Field Sales order draft concept screen" },
    ],
  },
  {
    id: "a2-attire",
    number: "11",
    slug: "a2-attire-storefront",
    title: "A2 Attire Storefront",
    category: "Shopify",
    kind: "Storefront concept",
    status: "concept",
    description:
      "A Shopify storefront concept for a leather footwear label, with an AI shopping helper to guide product discovery.",
    overview:
      "A commerce concept focused on product discovery, considered typography, and a mobile-friendly path from collection browsing to product detail. An AI shopping helper is included as a proposed addition.",
    stack: ["Shopify", "React", "TypeScript", "AI"],
    visual: "store",
    assetFolder: "a2attire-store",
    points: [
      "Make product materials and details easy to explore.",
      "Keep collection browsing and product pages consistent.",
      "Add an AI shopping helper for product questions and discovery.",
    ],
    screenshots: [
      { label: "Storefront home", alt: "A2 Attire storefront concept homepage", preview: true, expectedPath: "/projects/a2attire-store/preview-1.png" },
      { label: "Collection page", alt: "A2 Attire collection concept screen", expectedPath: "/projects/a2attire-store/preview-2.png" },
      { label: "Product detail", alt: "A2 Attire product detail concept screen", expectedPath: "/projects/a2attire-store/preview-3.png" },
    ],
  },
  {
    id: "insight-dashboard",
    number: "12",
    slug: "insight-crm-dashboard",
    title: "Insight CRM Dashboard",
    category: "Web apps",
    kind: "Dashboard concept",
    status: "concept",
    description:
      "An AI-powered CRM concept that turns customer activity and sales trends into an approachable daily workspace.",
    overview:
      "A CRM overview concept centered on readable metrics, useful chart summaries, and AI-generated customer insights that help a team decide what to follow up on.",
    stack: ["Next.js", "React", "TypeScript", "AI"],
    visual: "analytics",
    assetFolder: "insight-crm",
    points: [
      "Prioritize useful metrics over visual noise.",
      "Pair trend summaries with readable charts.",
      "Use AI to summarize customer activity and suggest follow-ups.",
    ],
    screenshots: [
      { label: "Dashboard overview", alt: "Insight CRM AI dashboard concept", preview: true, expectedPath: "/projects/insight-crm/preview-1.png" },
      { label: "Customer details", alt: "Insight CRM customer detail concept screen", expectedPath: "/projects/insight-crm/preview-2.png" },
      { label: "AI insights", alt: "Insight CRM AI insights concept screen", expectedPath: "/projects/insight-crm/preview-3.png" },
    ],
  },
  {
    id: "ai-smart-ledger",
    number: "13",
    slug: "ai-smart-ledger",
    title: "AI Smart Ledger",
    category: "Mobile apps",
    kind: "React Native fintech app | selected work",
    status: "work",
    description:
      "A React Native financial ledger for tracking money owed and received, managing customer accounts, and getting help from an AI assistant.",
    overview:
      "AI Smart Ledger brings personal ledgers, transaction entry, payment reminders, and monthly reports into one mobile app. Its AI assistant helps people ask questions about balances and review their financial activity.",
    stack: ["React Native", "TypeScript", "AI"],
    visual: "ledger",
    assetFolder: "smart-ledger",
    coverImage: "/projects/ai-smart-ledger/screen-1.png",
    points: [
      "Record money given or received with a person, payment method, note, and date.",
      "Review receivables, payables, contact ledgers, and transaction history.",
      "Ask the AI assistant about balances and prepare payment reminders.",
      "See monthly summaries, reports, and AI-generated financial insights.",
    ],
    screenshots: [
      { label: "Supplied app screen overview", src: "/projects/ai-smart-ledger/screen-1.png", alt: "AI Smart Ledger mobile app screens showing its dashboard, transaction entry, AI assistant, people, reports, reminders, and profile" },
      { label: "Financial dashboard", alt: "AI Smart Ledger financial dashboard and cash flow screen", preview: true, expectedPath: "/projects/smart-ledger/preview-1.png" },
      { label: "AI smart entry", alt: "AI Smart Ledger transaction entry and AI categorization", expectedPath: "/projects/smart-ledger/preview-2.png" },
      { label: "Customer ledger and reports", alt: "AI Smart Ledger customer balances, payment history, and financial reports", expectedPath: "/projects/smart-ledger/preview-3.png" },
    ],
  },
  {
    id: "ai-attendance",
    number: "14",
    slug: "ai-attendance-mobile",
    title: "AI Attendance",
    category: "Mobile apps",
    kind: "React Native attendance app concept",
    status: "concept",
    description:
      "A mobile attendance concept with employee check-in, privacy-conscious AI verification, work-hour summaries, and monthly reporting.",
    overview:
      "AI Attendance gives employees a clear daily check-in flow and gives managers a readable view of hours, attendance trends, and leave. AI-assisted verification is presented as an optional step with clear status and location context.",
    stack: ["React Native", "TypeScript", "AI"],
    visual: "attendance",
    assetFolder: "ai-attendance",
    points: [
      "Check in and out with a clear status and work-hour summary.",
      "Review a monthly attendance calendar, late arrivals, and leave records.",
      "Use a privacy-conscious AI face verification concept with location confirmation.",
      "Surface attendance patterns and team follow-ups for review.",
    ],
    screenshots: [
      { label: "Employee home", alt: "AI Attendance mobile app home screen concept", preview: true, expectedPath: "/projects/ai-attendance/preview-1.png" },
      { label: "AI check-in verification", alt: "AI Attendance verification and check-in concept screen", expectedPath: "/projects/ai-attendance/preview-2.png" },
      { label: "Attendance analytics", alt: "AI Attendance calendar and analytics concept screen", expectedPath: "/projects/ai-attendance/preview-3.png" },
    ],
  },
  {
    id: "cattle-iot-erp",
    number: "15",
    slug: "cattle-erp-iot",
    title: "Cattle ERP IoT Monitor",
    category: "Mobile apps",
    kind: "React Native smart agriculture concept",
    status: "concept",
    description:
      "A smart agriculture mobile concept connecting cattle records with live barn sensors, environmental alerts, and AI-assisted farm insights.",
    overview:
      "This companion concept extends farm operations to mobile IoT monitoring. Teams can review barn temperature and humidity, check ventilation status, and connect environmental history with animal health information.",
    stack: ["React Native", "TypeScript", "AI"],
    visual: "cattle-iot",
    assetFolder: "cattle-iot-erp",
    points: [
      "Review herd health, milk production, and feed activity from a mobile dashboard.",
      "Monitor ESP32 sensor status, barn temperature, and humidity in real time.",
      "See ventilation mode and environmental alerts in one screen.",
      "Use AI insights to review animal health and farm environment patterns.",
    ],
    screenshots: [
      { label: "Farm dashboard", alt: "Cattle ERP IoT mobile dashboard concept", preview: true, expectedPath: "/projects/cattle-iot-erp/preview-1.png" },
      { label: "IoT environment monitoring", alt: "Cattle ERP IoT temperature and humidity monitoring concept", expectedPath: "/projects/cattle-iot-erp/preview-2.png" },
      { label: "Animal health and insights", alt: "Cattle ERP IoT animal health and AI insights concept", expectedPath: "/projects/cattle-iot-erp/preview-3.png" },
    ],
  },
];

export const technologies: TechnologyName[] = [
  "Next.js",
  "React",
  "TypeScript",
  "Laravel",
  "PHP",
  "Shopify",
  "Tailwind CSS",
  "Node.js",
  "MySQL",
  "React Native",
  "AI",
];

export const technologyDescriptions: Record<TechnologyName, string> = {
  "Next.js": "React framework",
  React: "Interface library",
  "React Native": "Cross-platform mobile",
  TypeScript: "Typed JavaScript",
  Laravel: "PHP application framework",
  PHP: "Server-side language",
  Shopify: "Commerce platform",
  "Tailwind CSS": "Utility-first CSS",
  "Node.js": "JavaScript runtime",
  MySQL: "Relational database",
  AI: "Smart assistance & insights",
};

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
