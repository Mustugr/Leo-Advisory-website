import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { PageHero } from "../components/PageHero";
import { Reveal } from "../components/Reveal";
import { CTASection } from "../components/CTASection";
import { ChapterMark } from "../components/ChapterMark";

type FAQ = { q: string; a: string };
type Section = { title: string; items: FAQ[] };

const sections: Section[] = [
  {
    title: "Advisory & Consulting",
    items: [
      {
        q: "What does Advisory and Consulting include?",
        a: "Strategic guidance that sits on top of your financials — pricing, new-service-line evaluation, operational bottlenecks, capital structure, and lender/investor preparation. Every engagement starts with a scoped question and ends with a written recommendation.",
      },
      {
        q: "How is it different from CFO Services?",
        a: "CFO Services is an ongoing monthly partnership with regular reporting, close, and strategy cadence. Advisory is project-based — we come in for a specific decision or initiative, deliver a recommendation, and help implement it.",
      },
      {
        q: "What kinds of businesses do you advise?",
        a: "Owner-operated businesses between roughly $500K and $30M in revenue, with a strong bias toward construction, subcontracting, and service-based companies in the NY metro. We also work with first-time founders on formation.",
      },
      {
        q: "Does the work go beyond pure finance?",
        a: "Yes. Pricing, operations, hiring, and partnership economics all have financial consequences. We work on the full decision — numbers included, but not limited to numbers.",
      },
      {
        q: "How do I know when consulting is needed?",
        a: "If you're about to make a decision that changes your cost base, your revenue mix, or your balance sheet — and you don't have a clear number on the consequences — that's the moment to bring us in.",
      },
      {
        q: "What's the expected outcome of working together?",
        a: "A written recommendation, a financial model you can re-run, and confidence about the next step. We don't deliver decks for their own sake — we deliver clarity that leads to action.",
      },
    ],
  },
  {
    title: "CFO Services",
    items: [
      {
        q: "Do I really need a CFO at my size?",
        a: "If you're between $1M and $30M in revenue and the numbers don't tell you what to do — yes. Fractional CFO is half the cost of a mistake on your next bid.",
      },
      {
        q: "How much time do you spend with us?",
        a: "Engagements range from 10 to 40 hours a month depending on complexity. Most CFO clients see us weekly for a check-in and monthly for a deeper review.",
      },
    ],
  },
  {
    title: "Bookkeeping & Accounting",
    items: [
      {
        q: "Do you use QuickBooks or Xero?",
        a: "Both. We'll recommend based on your industry, headcount, and job-costing needs. We're certified in both platforms.",
      },
      {
        q: "How quickly can you close a month?",
        a: "Day 10 is our standard. First month is usually day 15 as we learn your transaction patterns.",
      },
      {
        q: "Can you clean up historical books?",
        a: "Yes. Catch-up and cleanup is a common starting point. We scope it as a fixed-fee project before the monthly partnership begins.",
      },
    ],
  },
  {
    title: "Finance & Formation",
    items: [
      {
        q: "Do you help with SBA loans?",
        a: "Yes. We prepare the full lender package — financials, projections, narrative — and walk it through with the banker. We also know which lenders actually fund your size and sector.",
      },
      {
        q: "Can you help me set up my business from scratch?",
        a: "That's one of our most common engagements. Entity selection, state filings, EIN, banking, accounting software, payroll — we stand up the whole stack and hand it over clean.",
      },
    ],
  },
  {
    title: "Payroll",
    items: [
      {
        q: "Do you handle certified payroll?",
        a: "Yes — prevailing wage, Davis-Bacon, and union reporting for public-works projects is a specialty. We file directly with the awarding agency and keep the job compliant.",
      },
      {
        q: "Multi-state workers?",
        a: "We handle registration and filings across every state you operate in. We'll advise on whether to register where your work is happening or where your employees live.",
      },
    ],
  },
];

const roman = ["I", "II", "III", "IV", "V", "VI", "VII", "VIII"];

function AccordionItem({
  item,
  open,
  onToggle,
}: {
  item: FAQ;
  open: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="border-b border-ink-900/10 last:border-0">
      <button
        onClick={onToggle}
        className="flex w-full items-start justify-between gap-8 py-7 text-left"
      >
        <span className="font-display text-lg md:text-2xl text-ink-900 tracking-tight">
          {item.q}
        </span>
        <span className="mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-ink-900/20 text-ink-700 transition-all duration-500 hover:border-gold-500">
          {open ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
        </span>
      </button>
      <div
        className={`grid transition-all duration-700 ease-out ${
          open ? "grid-rows-[1fr] pb-8" : "grid-rows-[0fr]"
        }`}
      >
        <div className="overflow-hidden">
          <p className="text-ink-500 leading-relaxed md:pr-14">{item.a}</p>
        </div>
      </div>
    </div>
  );
}

export function FAQPage() {
  const [openKey, setOpenKey] = useState<string | null>("0-0");

  return (
    <>
      <PageHero
        eyebrow="Questions"
        numeral="I"
        size="feature"
        title={
          <>
            Questions small-business owners ask us <em className="text-gold-300">most.</em>
          </>
        }
        subtitle="Real answers to real questions. If what you need isn't here, the contact form gets to us directly."
        image="/images/handshake.avif"
      />

      <section className="relative section bg-cream-50 overflow-hidden">
        <div className="container-px mx-auto max-w-5xl">
          {sections.map((section, si) => (
            <Reveal key={section.title} delay={si * 0.05}>
              <div className="mb-20 last:mb-0">
                <ChapterMark numeral={roman[si] ?? "*"} label={section.title} />
                <div className="mt-10 border-t border-ink-900/10">
                  {section.items.map((item, ii) => {
                    const key = `${si}-${ii}`;
                    return (
                      <AccordionItem
                        key={key}
                        item={item}
                        open={openKey === key}
                        onToggle={() => setOpenKey(openKey === key ? null : key)}
                      />
                    );
                  })}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <CTASection />
    </>
  );
}
