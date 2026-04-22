export type Post = {
  slug: string;
  title: string;
  date: string;
  readTime: string;
  category: string;
  author: string;
  excerpt: string;
  cover: string;
  body: { heading?: string; paragraphs: string[] }[];
};

export const posts: Post[] = [
  {
    slug: "is-overhead-really-killing-your-margin",
    title: "Is Overhead Really Killing Your Margin — Or Are You Just Underpricing?",
    date: "2025-05-30",
    readTime: "6 min read",
    category: "Coffee Break",
    author: "Akin Kececi",
    excerpt:
      "Margin problems get blamed on overhead — but often the real issue is a price that never covered the work in the first place.",
    cover: "/images/briefcase.avif",
    body: [
      {
        paragraphs: [
          "When margin slips, overhead gets the blame first. It's the easiest target: a line that always looks too big, growing a little every quarter, full of items nobody wants to defend. So owners cut rent, renegotiate software, cancel the good coffee.",
          "Then the next month lands. The margin still isn't there.",
        ],
      },
      {
        heading: "Overhead isn't always the villain",
        paragraphs: [
          "The uncomfortable truth: in most small businesses we see, overhead is proportional. It scales with the team and the work. The problem isn't usually the size of overhead — it's that overhead was never fully priced into the jobs.",
          "A project that looked like a 15% margin on paper turned into a 4% margin once you added real supervisor time, real truck fuel, real insurance, real PM hours. The job didn't lose money because overhead grew. It lost money because the bid never paid for the overhead it was about to consume.",
        ],
      },
      {
        heading: "The test",
        paragraphs: [
          "Take your last ten completed jobs. Load full overhead — not a flat 10% — against the actual direct cost and hours. If your effective margin is under 8–10%, you're not overhead-heavy. You're under-priced.",
          "That's a pricing conversation, not a cost-cutting one. And it's fixable on the next bid, not the next fiscal year.",
        ],
      },
      {
        heading: "Where to look first",
        paragraphs: [
          "Start with your three largest recurring jobs. Pull the actuals. Re-allocate overhead based on hours, not revenue. If the same job produces different answers under different allocation methods, you've found the leak — and the conversation gets real.",
        ],
      },
    ],
  },
  {
    slug: "grow-with-debt-or-inject-capital",
    title: "Grow with Debt or Inject Capital?",
    date: "2025-05-30",
    readTime: "5 min read",
    category: "Coffee Break",
    author: "Akin Kececi",
    excerpt:
      "There's no universal answer — but the right one always starts with the purpose of the money, not the cost of it.",
    cover: "/images/window.avif",
    body: [
      {
        paragraphs: [
          "Every founder eventually reaches the same fork: the business can grow faster than the cash flow can fund. That's when owners ask the big question — do we borrow, or do we put more in?",
          "Neither answer is universally right. But most bad answers come from skipping the first question: what is the money actually for?",
        ],
      },
      {
        heading: "Debt works when the use is defined and time-bound",
        paragraphs: [
          "Equipment with a known payback. A contract that needs working capital for 90 days. A facility expansion with modeled revenue. These are the conditions where debt is cheap — because the money has a job and a finish line.",
          "Debt becomes expensive when it funds operating losses or vague growth. The interest meter runs regardless of whether the investment performs.",
        ],
      },
      {
        heading: "Owner capital works when the runway is uncertain",
        paragraphs: [
          "New service lines, first hires in a new department, market tests — these need patient money. If you borrow to fund a bet that might take 18 months to clarify, the debt will mature before the answer does.",
          "Internal capital is slower and more controlled. It forces discipline about size and pace, and it doesn't introduce covenants that constrain you in year two.",
        ],
      },
      {
        heading: "A quick framework",
        paragraphs: [
          "Debt: known return, short horizon, asset-backed.",
          "Equity or owner capital: uncertain return, longer horizon, funds the experiment itself.",
          "Mix both when the project has one of each — fund the asset with a loan and the team build-out with owner capital.",
        ],
      },
    ],
  },
  {
    slug: "growing-fast-but-the-books-are-a-mess",
    title: "Growing Fast but the Books Are a Mess?",
    date: "2025-05-30",
    readTime: "7 min read",
    category: "Coffee Break",
    author: "Akin Kececi",
    excerpt:
      "Growth surfaces every weak joint in your financial system. A cleanup workflow that gets you current — and keeps you there.",
    cover: "/images/construction.avif",
    body: [
      {
        paragraphs: [
          "Fast growth is unforgiving to accounting systems that were good enough at half the size. Revenue doubles, complexity triples, and suddenly you can't answer simple questions: which jobs made money, where the cash is, what the team actually costs.",
          "The story is always the same — the books didn't get worse overnight. The business outgrew the way they were kept.",
        ],
      },
      {
        heading: "What growth breaks first",
        paragraphs: [
          "Transaction coding drift. Projects used to be tagged cleanly; now half of them are just 'Job Cost.' Payroll allocation stops matching the work. Reimbursements pile up in personal accounts. Credit-card receipts get entered once a quarter, in a panic.",
          "On the cash side: AR ages quietly because nobody's watching the report. Vendor terms get missed. Tax deposits slip.",
        ],
      },
      {
        heading: "The cleanup workflow",
        paragraphs: [
          "1. Assess. Pull a trial balance and a bank reconciliation for the last complete month. Identify unreconciled items older than 60 days.",
          "2. Set up or clean up. Fix the chart of accounts, standardize project codes, and close any zombie accounts nobody has looked at in a year.",
          "3. Monthly tracking. Commit to a real close date — day 10 or day 15 — and protect it. A close that floats never actually finishes.",
          "4. Better reporting. Once the base data is clean, layer a simple owner dashboard on top. Three to five numbers you look at every week.",
        ],
      },
      {
        heading: "Why it matters beyond tidiness",
        paragraphs: [
          "Clean books aren't a hygiene project — they're what lets you borrow, sell, hire, and price correctly. Every one of those decisions gets worse when the numbers are late or wrong.",
          "Build the financial structure early. Not for tax season. For the next job you're bidding on.",
        ],
      },
    ],
  },
];
