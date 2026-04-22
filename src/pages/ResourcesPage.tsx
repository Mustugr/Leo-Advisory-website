import { ArrowUpRight } from "lucide-react";
import { PageHero } from "../components/PageHero";
import { Reveal } from "../components/Reveal";
import { CTASection } from "../components/CTASection";
import { ChapterMark } from "../components/ChapterMark";

type Resource = { name: string; url: string; note: string };
type Group = { title: string; items: Resource[] };

const groups: Group[] = [
  {
    title: "Tax & Accounting Standards",
    items: [
      { name: "IRS", url: "https://www.irs.gov", note: "Primary federal tax authority — forms, publications, and guidance." },
      { name: "FASB", url: "https://www.fasb.org", note: "U.S. accounting standards — GAAP pronouncements and interpretations." },
      { name: "The Tax Adviser", url: "https://www.thetaxadviser.com", note: "AICPA publication — practitioner-level tax analysis and updates." },
      { name: "Journal of Accountancy", url: "https://www.journalofaccountancy.com", note: "AICPA — accounting, auditing, and tax practice insights." },
      { name: "Accounting Today", url: "https://www.accountingtoday.com", note: "Daily news and analysis for the accounting profession." },
    ],
  },
  {
    title: "Economic Data & Indicators",
    items: [
      { name: "FRED", url: "https://fred.stlouisfed.org", note: "St. Louis Fed — comprehensive U.S. economic data series." },
      { name: "Federal Reserve", url: "https://www.federalreserve.gov", note: "Monetary policy, rate decisions, and financial stability reports." },
      { name: "U.S. Census — Construction", url: "https://www.census.gov/construction/", note: "Monthly and annual construction spending and housing data." },
      { name: "White House Economic Reports", url: "https://www.whitehouse.gov/cea/", note: "Council of Economic Advisers — policy analysis and outlook." },
    ],
  },
  {
    title: "Firm Insights & Research",
    items: [
      { name: "Deloitte Insights", url: "https://www2.deloitte.com/us/en/insights.html", note: "Cross-industry research — finance, tax, and strategy perspectives." },
      { name: "EY Insights", url: "https://www.ey.com/en_us/insights", note: "Global perspectives on tax, assurance, and transactions." },
      { name: "Grant Thornton Insights", url: "https://www.grantthornton.com/insights", note: "Mid-market focused research and thought leadership." },
      { name: "BDO Insights", url: "https://www.bdo.com/insights", note: "Assurance, tax, and advisory publications." },
    ],
  },
];

const roman = ["I", "II", "III", "IV", "V", "VI", "VII", "VIII"];

export function ResourcesPage() {
  return (
    <>
      <PageHero
        eyebrow="Resources"
        numeral="I"
        title={
          <>
            A curated library of where we go for <em className="text-gold-300">good data.</em>
          </>
        }
        subtitle="Authoritative sources for tax, accounting, economic, and industry research — hand-picked and kept current."
        image="/images/briefcase.avif"
      />

      <section className="relative section bg-cream-50 overflow-hidden">
        <div className="container-px mx-auto max-w-5xl">
          <div className="space-y-24">
            {groups.map((g, gi) => (
              <Reveal key={g.title} delay={gi * 0.05}>
                <div>
                  <ChapterMark numeral={roman[gi + 1] ?? "*"} label={g.title} />
                  <div className="mt-10 border-t border-ink-900/10">
                    {g.items.map((r, i) => (
                      <a
                        key={r.name}
                        href={r.url}
                        target="_blank"
                        rel="noreferrer noopener"
                        className="group flex items-start justify-between gap-8 border-b border-ink-900/10 py-8 transition-colors hover:bg-cream-100/50 md:px-4"
                      >
                        <div className="flex items-start gap-6">
                          <span className="font-editorial italic text-lg text-gold-500 w-8 pt-1">
                            {String(i + 1).padStart(2, "0")}
                          </span>
                          <div>
                            <p className="font-display text-xl md:text-2xl text-ink-900 tracking-tight transition-colors group-hover:text-gold-700">
                              {r.name}
                            </p>
                            <p className="mt-3 text-ink-500 leading-relaxed max-w-2xl">{r.note}</p>
                          </div>
                        </div>
                        <ArrowUpRight className="mt-2 h-5 w-5 shrink-0 text-ink-300 transition-all duration-500 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-gold-600" />
                      </a>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
