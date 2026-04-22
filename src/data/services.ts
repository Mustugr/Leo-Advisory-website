import type { LucideIcon } from "lucide-react";
import {
  Briefcase,
  Banknote,
  LineChart,
  Target,
  Compass,
  Building2,
  BookOpen,
  Wallet,
} from "lucide-react";

export type Service = {
  slug: string;
  title: string;
  short: string;
  lede: string;
  icon: LucideIcon;
  image: string;
  features: { label: string; body: string }[];
  deliverables: string[];
  idealFor: string[];
};

export const services: Service[] = [
  {
    slug: "cfo-services",
    title: "CFO Services",
    short: "Strategic financial leadership without the overhead of hiring in-house.",
    lede:
      "Part-time CFO support for owners who need more than bookkeeping. We translate your numbers into decisions — pricing, hiring, financing, and growth.",
    icon: Briefcase,
    image: "/images/boardroom.avif",
    features: [
      {
        label: "Growth strategy",
        body: "Capacity planning, revenue mix analysis, and margin work that compounds over quarters — not one-off dashboards.",
      },
      {
        label: "Cash flow control",
        body: "13-week rolling cash forecasts, AR/AP discipline, and draw schedules tied to project progress.",
      },
      {
        label: "Reporting that matters",
        body: "One-page owner dashboards, board-ready decks, and KPIs you'll actually use on Mondays.",
      },
      {
        label: "Budgets & forecasts",
        body: "Annual budgets, rolling forecasts, and scenario models for the next deal, hire, or contract.",
      },
      {
        label: "Compliance support",
        body: "Coordination with your CPA, audit-ready books, lien waivers, and sales/use tax hygiene.",
      },
      {
        label: "Clean books",
        body: "We keep the general ledger tight so every number you look at is a number you can trust.",
      },
    ],
    deliverables: [
      "Monthly financial package (P&L, balance sheet, cash flow)",
      "13-week cash flow forecast, updated weekly",
      "KPI dashboard tailored to your business",
      "Quarterly strategy session with the owner",
      "On-call email and phone support",
    ],
    idealFor: [
      "Contractors between $1M and $30M revenue",
      "Growing service businesses without in-house finance",
      "Founders preparing for a loan, sale, or capital raise",
    ],
  },
  {
    slug: "finance-solutions",
    title: "Finance Solutions",
    short: "Funding help — from SBA loans to project-based financing.",
    lede:
      "We help you find, prepare for, and secure the right capital for the job. Whether it's an SBA loan, a bank line, or sector-specific financing, we handle the paperwork and the lender conversations.",
    icon: Banknote,
    image: "/images/window.avif",
    features: [
      { label: "SBA loans", body: "7(a), 504, and express prep — from eligibility check to package submission." },
      { label: "Bank lines of credit", body: "Working-capital lines built around receivables and WIP." },
      { label: "Sector financing", body: "Equipment loans, bonding-line support, and construction-specific lenders." },
      { label: "Project-based funding", body: "Draw schedules, progress billing, and lender reporting for contract work." },
      { label: "Application prep", body: "Tax-ready financials, projections, and cover narratives that lenders read." },
      { label: "Lender matching", body: "Introductions to banks and non-bank lenders who actually fund your size & sector." },
    ],
    deliverables: [
      "Funding-readiness review and action plan",
      "Lender package: financials, projections, narrative",
      "Application submission and follow-through",
      "Term-sheet review and covenant modeling",
    ],
    idealFor: [
      "Owners bidding on jobs bigger than their working capital allows",
      "Businesses refinancing out of expensive debt",
      "Growing teams that need equipment or a bonding line",
    ],
  },
  {
    slug: "accounting-reporting",
    title: "Accounting & Reporting",
    short: "Operational accounting plus decision-ready reporting.",
    lede:
      "Daily accounting you can rely on and month-end closes that arrive on time. Reporting that tells you where the business actually is — not where it was 90 days ago.",
    icon: LineChart,
    image: "/images/briefcase.avif",
    features: [
      { label: "Daily accounting", body: "Bills, invoices, receipts, and categorization handled as work happens." },
      { label: "Month-end close", body: "Reconciliations, accruals, job-costing adjustments — closed by day 10." },
      { label: "Financial statements", body: "GAAP-aligned P&L, balance sheet, and cash flow every month." },
      { label: "KPI tracking", body: "Gross margin by project, DSO, utilization, overhead %, and more." },
      { label: "Tax-ready numbers", body: "Clean books your CPA can file from without a single follow-up email." },
      { label: "Performance visibility", body: "Owner reviews that highlight where money is made and lost." },
    ],
    deliverables: [
      "Monthly close completed by day 10",
      "Standardized financial reporting package",
      "KPI dashboard with trend lines",
      "Year-end handoff pack to your CPA",
    ],
    idealFor: [
      "Owners who want a real monthly close, not a rolling Google Sheet",
      "Businesses preparing for review, audit, or tax season",
      "Teams scaling past their bookkeeper's capacity",
    ],
  },
  {
    slug: "budgeting-planning",
    title: "Budgeting & Planning",
    short: "A budget you'll actually use — and a plan that adjusts with reality.",
    lede:
      "Planning without judgment. We build budgets as working documents, not shelfware — tied to your sales pipeline, headcount, and operating rhythm.",
    icon: Target,
    image: "/images/handshake.avif",
    features: [
      { label: "Budget creation", body: "Annual budgets grounded in historical data and forward commitments." },
      { label: "Budget tracking", body: "Monthly variance reviews — actuals vs plan, with the story of why." },
      { label: "Budget adjustments", body: "Rolling forecasts that change when your pipeline or cost basis changes." },
      { label: "Short & long-term planning", body: "3-year modeling for capacity, hiring, and capital expenditure." },
      { label: "Project budgets", body: "Job-level budgets with WIP schedules and gross-margin tracking." },
      { label: "Fewer surprises", body: "Spot cash squeezes and margin drift before they show up in the bank account." },
    ],
    deliverables: [
      "Annual operating budget",
      "Monthly actuals vs budget variance report",
      "Quarterly rolling forecast",
      "Project-level WIP and budget tracking",
    ],
    idealFor: [
      "Businesses tired of 'where did the cash go' at year-end",
      "Teams planning a hiring push or equipment purchase",
      "Owners building their first formal plan",
    ],
  },
  {
    slug: "advisory-consulting",
    title: "Advisory & Consulting",
    short: "Outside perspective on the hard calls.",
    lede:
      "Strategic guidance that sits on top of the numbers. Pricing changes, new service lines, partnership deals, operational bottlenecks — bring us the question and we'll bring structure.",
    icon: Compass,
    image: "/images/construction.avif",
    features: [
      { label: "Financial decisions", body: "Pricing, investment, and capital-structure calls modeled before you commit." },
      { label: "Operational decisions", body: "Scope-to-cost reviews, productivity analysis, and overhead audits." },
      { label: "Long-term planning", body: "3–5 year roadmaps: exit prep, succession, and ownership transitions." },
      { label: "Simplifying complexity", body: "We cut through the fog with one-page summaries and clear options." },
      { label: "Lender & investor prep", body: "Decks, memos, and Q&A prep for capital conversations." },
      { label: "Confidence to act", body: "You leave the meeting knowing what to do on Monday morning." },
    ],
    deliverables: [
      "Discovery conversation and written scope",
      "Financial model or decision memo",
      "Owner working session with a clear recommendation",
      "Follow-up implementation support",
    ],
    idealFor: [
      "Owners weighing a major decision — price change, hire, acquisition",
      "Teams preparing for investor, lender, or buyer conversations",
      "Businesses hitting a ceiling and needing an outside read",
    ],
  },
  {
    slug: "business-formation",
    title: "Business Formation",
    short: "Start clean — entity, accounts, and systems done right.",
    lede:
      "If you're starting a business, the first six weeks set the next six years. We handle entity choice, registration, and the financial foundation so you don't spend year two cleaning up year one.",
    icon: Building2,
    image: "/images/city.avif",
    features: [
      { label: "Entity selection", body: "LLC, S-corp, or C-corp — chosen against tax, liability, and growth goals." },
      { label: "Registration", body: "State filings, EIN, DBAs, and sales-tax registration where needed." },
      { label: "Banking setup", body: "Business banking, merchant processing, and card accounts configured properly." },
      { label: "Accounting stack", body: "QuickBooks or Xero, job-costing, receipt capture — all wired together." },
      { label: "Payroll setup", body: "Gusto, ADP, or the right platform for your headcount and states." },
      { label: "Compliance calendar", body: "A clear schedule of what's due, when, and to whom." },
    ],
    deliverables: [
      "Formation paperwork filed",
      "Chart of accounts and bookkeeping file",
      "Payroll and tax registrations",
      "First 90-day operating checklist",
    ],
    idealFor: [
      "First-time founders",
      "Owners going from side-work to formal business",
      "Teams restructuring into a new entity",
    ],
  },
  {
    slug: "bookkeeping",
    title: "Bookkeeping",
    short: "Clean, current records — the base layer everything else rests on.",
    lede:
      "Transactions categorized, accounts reconciled, records organized. The reliable foundation that makes every other financial decision simpler.",
    icon: BookOpen,
    image: "/images/boardroom.avif",
    features: [
      { label: "Daily transactions", body: "Banking, credit card, and merchant feeds categorized on a regular cadence." },
      { label: "Reconciliations", body: "Every bank and credit account reconciled monthly, without exception." },
      { label: "Record organization", body: "Receipts captured, vendor bills filed, and audit trails intact." },
      { label: "Visibility", body: "A real answer to 'where did the money go' — any month, any category." },
      { label: "Trustworthy numbers", body: "Books you can open in front of a lender or buyer with confidence." },
      { label: "Less confusion", body: "Clear categorization so your P&L tells a story, not a mystery." },
    ],
    deliverables: [
      "Weekly transaction review",
      "Monthly reconciliations and closed books",
      "Organized document archive",
      "Year-end handoff pack",
    ],
    idealFor: [
      "Businesses catching up on back-office work",
      "Owners spending nights in QuickBooks",
      "Teams who need a reliable base for better reporting",
    ],
  },
  {
    slug: "payroll",
    title: "Payroll",
    short: "Payroll run on time — including certified payroll for union jobs.",
    lede:
      "Hands-off payroll done correctly. Standard runs, certified payroll, taxes, filings, and on-time pay — every cycle.",
    icon: Wallet,
    image: "/images/handshake.avif",
    features: [
      { label: "Weekly payroll runs", body: "Standard weekly or bi-weekly processing across W-2 and 1099 workers." },
      { label: "Certified payroll", body: "Davis-Bacon, prevailing wage, and union reporting for public-works projects." },
      { label: "Payroll taxes", body: "Federal, state, and local taxes withheld, remitted, and filed." },
      { label: "Reports & filings", body: "941s, W-2s, 1099s, and new-hire reporting handled on schedule." },
      { label: "Direct deposit", body: "On-time pay for your team every cycle — no exceptions." },
      { label: "Multi-state support", body: "Registration and filings across the states you operate in." },
    ],
    deliverables: [
      "Weekly or bi-weekly payroll run",
      "Certified payroll reports (where applicable)",
      "Quarterly and annual tax filings",
      "Year-end W-2s and 1099s",
    ],
    idealFor: [
      "Contractors working prevailing-wage jobs",
      "Businesses expanding into new states",
      "Owners who want payroll off their desk — permanently",
    ],
  },
];
