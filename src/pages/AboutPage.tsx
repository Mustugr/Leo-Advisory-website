import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { PageHero } from "../components/PageHero";
import { Reveal } from "../components/Reveal";
import { CTASection } from "../components/CTASection";
import { ChapterMark } from "../components/ChapterMark";
import { Magnetic } from "../components/MagneticButton";
import { ParallaxImage } from "../components/ParallaxImage";
import { site } from "../data/site";

const values = [
  {
    title: "Practical over performative",
    body: "No dashboards-for-show. Every report we build has an owner, an action, and a decision behind it.",
  },
  {
    title: "Close to the work",
    body: "We sit inside your operation — job sites, bids, payroll calls — not at arm's length.",
  },
  {
    title: "Quiet discipline",
    body: "Books closed on time. Reconciliations real. Taxes filed. Reliability is a feature, not a pitch.",
  },
  {
    title: "Long-term partnership",
    body: "We're structured for clients who want a thinking partner for years — not a three-month cleanup project.",
  },
];

const milestones = [
  { year: "2019", text: "Leo Advisory founded in New York with a focus on construction finance." },
  { year: "2021", text: "Built our job-costing and WIP reporting playbook across specialty subs." },
  { year: "2023", text: "Expanded CFO services to service-based small businesses outside construction." },
  { year: "2025", text: "Launched Financial Insights — plain-English perspectives for owners." },
];

export function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Leo Advisory"
        numeral="I"
        size="feature"
        title={
          <>
            A finance partner that shows up <em className="text-gold-300">on Monday mornings.</em>
          </>
        }
        subtitle="We're a New York firm built around one idea — that small business owners deserve the same quality of financial thinking the Fortune 500 takes for granted."
        image="/images/boardroom.avif"
      />

      {/* Founder's letter — editorial two-column */}
      <section className="relative section bg-cream-50 overflow-hidden">
        <div className="container-px mx-auto max-w-7xl">
          <div className="grid gap-16 lg:grid-cols-12 lg:gap-24 items-start">
            <Reveal className="lg:col-span-5">
              <div className="relative">
                <ParallaxImage
                  src="/images/founder.avif"
                  alt="Akin Kececi, founder of Leo Advisory"
                  className="aspect-[4/5] rounded-sm overflow-hidden"
                  amount={30}
                />
                <div className="pointer-events-none absolute -top-3 -left-3 h-8 w-8 border-t border-l border-gold-500/70" />
                <div className="pointer-events-none absolute -bottom-3 -right-3 h-8 w-8 border-b border-r border-gold-500/70" />
              </div>
              <div className="mt-8 flex items-center gap-4">
                <div>
                  <p className="font-display text-2xl text-ink-900 tracking-tight">
                    {site.founder}
                  </p>
                  <p className="mt-1 text-[11px] uppercase tracking-caps text-ink-400">
                    Founder · Leo Advisory
                  </p>
                </div>
              </div>
            </Reveal>

            <Reveal className="lg:col-span-7" delay={0.1}>
              <ChapterMark numeral="II" label="Founder's letter" />
              <h2 className="mt-10 font-display text-display-lg text-balance">
                Finance shouldn't feel like a black box. <em className="text-gold-600">It should feel like clarity.</em>
              </h2>
              <div className="mt-10 space-y-7 text-lg leading-relaxed text-ink-500">
                <p className="drop-cap">
                  I started Leo Advisory because small-business owners — especially in construction — kept telling me the same story. They had a bookkeeper, maybe a CPA, and still no real answer to the basic question: is the business actually making money?
                </p>
                <p>
                  The gap wasn't effort. It was structure. Books were kept, taxes filed, but nothing tied together into a picture the owner could steer by. Margin eroded quietly. Cash dried up on the way from invoice to deposit. Good businesses slowed down for reasons their financials never surfaced in time.
                </p>
                <p>
                  We built Leo Advisory to close that gap. Clean books as a floor — not a ceiling. Reporting that tells you the story of the business, not just its taxes. A partner on the phone when the bid is tight, the crew is short, and the lender wants numbers by Friday.
                </p>
                <p className="font-editorial italic text-2xl text-ink-900 pt-4">
                  — {site.founder}
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Values — editorial list */}
      <section className="relative section bg-cream-100/60 overflow-hidden">
        <div className="container-px mx-auto max-w-7xl">
          <Reveal>
            <ChapterMark numeral="III" label="What we value" />
            <h2 className="mt-10 font-display text-display-xl text-balance max-w-4xl">
              The operating principles behind <em className="text-gold-600">every engagement.</em>
            </h2>
          </Reveal>

          <div className="mt-20 grid gap-0 border-t border-ink-900/10 md:grid-cols-2">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={(i % 2) * 0.1}>
                <div
                  className={`group relative h-full border-b border-ink-900/10 p-10 md:p-14 transition-colors hover:bg-cream-50 ${
                    i % 2 === 0 ? "md:border-r md:border-ink-900/10" : ""
                  }`}
                >
                  <p className="font-editorial italic text-2xl text-gold-500 leading-none">
                    0{i + 1}
                  </p>
                  <h3 className="mt-8 font-display text-2xl md:text-3xl text-ink-900 tracking-tight">
                    {v.title}
                  </h3>
                  <p className="mt-5 text-ink-500 leading-relaxed max-w-md">
                    {v.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="relative section bg-cream-50 overflow-hidden">
        <div className="container-px mx-auto max-w-5xl">
          <Reveal>
            <ChapterMark numeral="IV" label="Firm timeline" />
            <h2 className="mt-10 font-display text-display-lg text-balance">
              A short <em className="text-gold-600">history.</em>
            </h2>
          </Reveal>
          <div className="mt-16 relative">
            <div className="absolute left-[7px] top-2 bottom-0 w-px bg-ink-900/10" aria-hidden />
            <div className="space-y-0">
              {milestones.map((m, i) => (
                <Reveal key={m.year} delay={i * 0.08}>
                  <div className="relative pl-12 pb-12 last:pb-0">
                    <span className="absolute left-0 top-3 h-4 w-4 rounded-full border border-gold-500 bg-cream-50" />
                    <span className="absolute left-[3.5px] top-[14px] h-2.5 w-2.5 rounded-full bg-gold-500" />
                    <p className="font-editorial italic text-2xl text-gold-600">{m.year}</p>
                    <p className="mt-4 text-lg text-ink-700 leading-relaxed max-w-2xl">
                      {m.text}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
          <Reveal delay={0.2}>
            <Magnetic>
              <Link to="/contact" className="mt-16 btn-primary inline-flex">
                Start a conversation
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </Magnetic>
          </Reveal>
        </div>
      </section>

      <CTASection />
    </>
  );
}
