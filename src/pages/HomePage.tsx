import { Link } from "react-router-dom";
import { motion, type Variants } from "framer-motion";
import { ArrowUpRight, ArrowRight, Plus } from "lucide-react";
import { Reveal } from "../components/Reveal";
import { CTASection } from "../components/CTASection";
import { Counter } from "../components/Counter";
import { Marquee } from "../components/Marquee";
import { ChapterMark } from "../components/ChapterMark";
import { Magnetic } from "../components/MagneticButton";
import { ParallaxImage } from "../components/ParallaxImage";
import { useIntroDone } from "../hooks/useIntroDone";
import { services } from "../data/services";
import { posts } from "../data/posts";
import { promises, site } from "../data/site";

const testimonials = [
  {
    quote:
      "We went from a box of receipts and a nervous CPA to a board-ready monthly package in two months. The first time we actually understood our margin by project was the week we signed with Leo.",
    name: "Marco R.",
    role: "Owner · Specialty subcontractor, Queens NY",
    initial: "M",
  },
  {
    quote:
      "They didn't just fix our books — they taught us how to read them. Pricing decisions that used to take a week of arguing now take a 20-minute call with Akin and a one-page model.",
    name: "Priya S.",
    role: "Founder · Design-build firm, Brooklyn NY",
    initial: "P",
  },
  {
    quote:
      "Our SBA package came back approved in eleven days. Leo prepped every document, every projection, and sat in the lender call with us. Best $5K we've spent on the business.",
    name: "David K.",
    role: "Operations lead · Commercial GC, NYC metro",
    initial: "D",
  },
];

type Stat = {
  label: string;
  end?: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
  display?: string;
};

const stats: Stat[] = [
  { label: "Years partnering with small business", end: 8, suffix: "+" },
  { label: "Client revenue under advisement", end: 40, prefix: "$", suffix: "M+" },
  { label: "Average monthly close", end: 10, prefix: "Day " },
  { label: "Typical response time", display: "<24h" },
];

const workflow = [
  {
    n: "I",
    title: "Discovery",
    body: "A 30-minute conversation about your business, your books, and the question on your mind.",
  },
  {
    n: "II",
    title: "Diagnostic",
    body: "We pull your financials, look under the hood, and return with a written one-page read on the business.",
  },
  {
    n: "III",
    title: "Clean-up",
    body: "Books brought current, systems tightened, reporting standardized. Month-one is about foundation.",
  },
  {
    n: "IV",
    title: "Rhythm",
    body: "Monthly close, KPI review, and owner working session — plus on-call support when the big calls come.",
  },
];

const sectors = [
  "General Contractors",
  "Specialty Subcontractors",
  "Design-Build Firms",
  "Developers",
  "Electricians",
  "Mechanical & HVAC",
  "Concrete & Masonry",
  "Site Work",
  "Metal Fabrication",
  "Prevailing-Wage Crews",
];

export function HomePage() {
  const introDone = useIntroDone();

  const heroContainer: Variants = {
    hidden: {},
    show: {
      transition: { staggerChildren: 0.1, delayChildren: 0.1 },
    },
  };
  const heroItem: Variants = {
    hidden: { opacity: 0, y: 30 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 1.0, ease: [0.16, 1, 0.3, 1] as const },
    },
  };
  const wordReveal: Variants = {
    hidden: { y: "120%" },
    show: {
      y: "0%",
      transition: { duration: 1.2, ease: [0.22, 1, 0.36, 1] as const },
    },
  };

  return (
    <>
      {/* ═══════════════════ HERO ═══════════════════ */}
      <section className="relative overflow-hidden bg-ink-950 pt-20 pb-10 text-cream-50 md:pt-24 md:pb-14">
        <ParallaxImage
          src="/images/hero-skyline.avif"
          className="absolute inset-0 h-full w-full"
          imgClassName="opacity-[0.30] object-cover"
          amount={25}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink-950/55 via-ink-950/75 to-ink-950/95" />
        <div
          className="absolute inset-0 bg-grid-lines opacity-[0.06]"
          style={{ backgroundSize: "64px 64px" }}
        />
        <div className="noise-dark animate-grain-drift" aria-hidden />

        {/* Ambient gold halo */}
        <motion.div
          aria-hidden
          className="pointer-events-none absolute -top-40 right-[-10%] h-[700px] w-[700px] rounded-full bg-gold-400/10 blur-3xl"
          animate={{ opacity: [0.3, 0.55, 0.3] }}
          transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          aria-hidden
          className="pointer-events-none absolute bottom-[-20%] left-[-10%] h-[500px] w-[500px] rounded-full bg-gold-500/[0.06] blur-3xl"
          animate={{ opacity: [0.25, 0.5, 0.25] }}
          transition={{ duration: 13, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />

        {/* Top meta */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: introDone ? 1 : 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative container-px mx-auto max-w-7xl"
        >
          <div className="hidden md:flex items-center justify-between text-[10px] uppercase tracking-luxe text-cream-100/40">
            <span>New York · Est. {site.founded}</span>
            <span>Ledger №{new Date().getFullYear()}</span>
          </div>
        </motion.div>

        <div className="relative container-px mx-auto max-w-7xl mt-8 md:mt-10">
          <motion.div
            variants={heroContainer}
            initial="hidden"
            animate={introDone ? "show" : "hidden"}
          >
            <motion.div variants={heroItem}>
              <div className="flex items-center gap-4">
                <span className="font-editorial italic text-xl text-gold-300">*</span>
                <span className="h-px w-14 bg-gold-400/60" />
                <span className="text-[10px] font-medium uppercase tracking-luxe text-gold-300">
                  Outsourced CFO · Since {site.founded}
                </span>
              </div>
            </motion.div>

            {/* Split-text headline */}
            <h1 className="mt-6 max-w-6xl font-display text-display-hero text-balance text-cream-50">
              <span className="inline-block overflow-hidden align-baseline">
                <motion.span
                  variants={wordReveal}
                  className="inline-block"
                >
                  Finance
                </motion.span>
              </span>{" "}
              <span className="inline-block overflow-hidden align-baseline">
                <motion.span variants={wordReveal} className="inline-block">
                  built
                </motion.span>
              </span>{" "}
              <span className="inline-block overflow-hidden align-baseline">
                <motion.span variants={wordReveal} className="inline-block">
                  around
                </motion.span>
              </span>{" "}
              <span className="inline-block overflow-hidden align-baseline">
                <motion.span variants={wordReveal} className="inline-block">
                  the
                </motion.span>
              </span>
              <br />
              <span className="inline-block overflow-hidden align-baseline">
                <motion.span
                  variants={wordReveal}
                  className="inline-block font-editorial italic font-400 text-gold-300"
                >
                  way
                </motion.span>
              </span>{" "}
              <span className="inline-block overflow-hidden align-baseline">
                <motion.span
                  variants={wordReveal}
                  className="inline-block font-editorial italic text-gold-300"
                >
                  you
                </motion.span>
              </span>{" "}
              <span className="inline-block overflow-hidden align-baseline">
                <motion.span
                  variants={wordReveal}
                  className="inline-block font-editorial italic text-gold-300"
                >
                  actually
                </motion.span>
              </span>{" "}
              <span className="inline-block overflow-hidden align-baseline">
                <motion.span
                  variants={wordReveal}
                  className="inline-block font-editorial italic text-gold-300"
                >
                  work.
                </motion.span>
              </span>
            </h1>

            <motion.div
              variants={heroItem}
              className="mt-8 grid gap-10 lg:grid-cols-[1fr_420px] lg:items-end"
            >
              <p className="max-w-xl text-lg text-cream-100/75 leading-relaxed">
                Outsourced CFO, bookkeeping, and strategic finance for contractors, subcontractors, and growing small businesses. Fewer surprises. Cleaner books. Better decisions.
              </p>

              <div className="flex flex-col gap-4">
                <div className="flex flex-wrap gap-3">
                  <Magnetic>
                    <Link to="/contact" className="btn-gold group">
                      Book a consult
                      <ArrowUpRight className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </Link>
                  </Magnetic>
                  <Link to="/services" className="btn-ghost-dark">
                    Explore practice
                  </Link>
                </div>
                <div className="flex flex-col gap-2 pt-2 text-[11px] uppercase tracking-luxe text-cream-100/50">
                  <span className="flex items-center gap-3">
                    <span className="h-px w-5 bg-gold-400/70" />
                    Construction-native finance
                  </span>
                  <span className="flex items-center gap-3">
                    <span className="h-px w-5 bg-gold-400/70" />
                    SBA &amp; lender-ready packaging
                  </span>
                  <span className="flex items-center gap-3">
                    <span className="h-px w-5 bg-gold-400/70" />
                    Certified payroll for prevailing wage
                  </span>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Stats */}
          <motion.div
            variants={heroContainer}
            initial="hidden"
            animate={introDone ? "show" : "hidden"}
            transition={{ delay: 0.5 }}
            className="mt-12 grid grid-cols-2 gap-10 border-t border-cream-100/10 pt-8 md:grid-cols-4"
          >
            {stats.map((s, i) => (
              <motion.div key={s.label} variants={heroItem} className="flex flex-col">
                <span className="chapter text-gold-400">0{i + 1}</span>
                <p className="mt-4 font-display text-gold-200 tabular num-lg" style={{ fontWeight: 400 }}>
                  {s.display ? (
                    s.display
                  ) : (
                    <Counter
                      end={s.end ?? 0}
                      prefix={s.prefix}
                      suffix={s.suffix}
                      decimals={s.decimals}
                    />
                  )}
                </p>
                <p className="mt-4 text-[11px] uppercase tracking-luxe text-cream-100/50 max-w-[18ch] leading-relaxed">
                  {s.label}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Scroll cue */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: introDone ? 0.6 : 0 }}
          transition={{ duration: 1.0, delay: 1.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[10px] font-medium uppercase tracking-luxe text-cream-50/50"
        >
          <span>Scroll</span>
          <motion.span
            className="block h-10 w-px bg-gold-400/60"
            animate={{ scaleY: [0.2, 1, 0.2], originY: 0 }}
            transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>
      </section>

      {/* ═══════════════════ SECTOR MARQUEE ═══════════════════ */}
      <section className="relative overflow-hidden bg-ink-950 py-10 border-y border-cream-50/10">
        <Marquee>
          {sectors.map((label, i) => (
            <div key={i} className="flex items-center gap-16">
              <span className="font-display text-2xl md:text-3xl tracking-tight text-cream-50/60">
                {label}
              </span>
              <span className="text-gold-400 text-lg">✦</span>
            </div>
          ))}
        </Marquee>
      </section>

      {/* ═══════════════════ PROMISES ═══════════════════ */}
      <section className="relative section bg-cream-50 overflow-hidden">
        <div className="container-px mx-auto max-w-7xl">
          <div className="grid gap-16 lg:grid-cols-12 lg:gap-24">
            <Reveal className="lg:col-span-5">
              <ChapterMark numeral="I" label="Why Leo Advisory" />
              <h2 className="mt-10 font-display text-display-xl text-balance">
                One-size-fits-all finance <em className="text-gold-600">doesn't fit anyone.</em>
              </h2>
              <p className="mt-8 text-lg leading-relaxed text-ink-500 max-w-lg">
                We work inside the operation — not next to it. Our systems are shaped by how your team actually books work, bills clients, and pays crews. That's the only way the numbers stay honest.
              </p>
              <Link
                to="/about"
                className="mt-10 inline-flex items-center gap-2 text-[12px] font-medium uppercase tracking-caps text-ink-900 link-underline"
              >
                Meet the practice
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </Reveal>

            <div className="lg:col-span-7 space-y-px">
              {promises.map((p, i) => (
                <Reveal key={p.title} delay={i * 0.08}>
                  <div className="group relative grid grid-cols-[auto_1fr] gap-8 border-b border-ink-900/10 py-10 first:border-t transition-colors hover:bg-cream-100/40">
                    <span className="font-editorial italic text-2xl text-gold-500 leading-none pt-1">
                      0{i + 1}
                    </span>
                    <div>
                      <h3 className="font-display text-2xl md:text-3xl text-ink-900 tracking-tight">
                        {p.title}
                      </h3>
                      <p className="mt-4 text-ink-500 leading-relaxed max-w-2xl">
                        {p.body}
                      </p>
                    </div>
                    <span
                      aria-hidden
                      className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 opacity-0 text-gold-400 transition-all duration-500 group-hover:translate-x-0 group-hover:opacity-100"
                    >
                      <Plus className="h-5 w-5" />
                    </span>
                  </div>
                </Reveal>
              ))}
              <Reveal delay={promises.length * 0.08}>
                <div className="group relative grid grid-cols-[auto_1fr] gap-8 border-b border-ink-900/10 py-10 transition-colors hover:bg-cream-100/40">
                  <span className="font-editorial italic text-2xl text-gold-500 leading-none pt-1">
                    04
                  </span>
                  <div>
                    <h3 className="font-display text-2xl md:text-3xl text-ink-900 tracking-tight">
                      Show up when it matters.
                    </h3>
                    <p className="mt-4 text-ink-500 leading-relaxed max-w-2xl">
                      Payroll tight, bid due tomorrow, lender on the phone — we pick up. This isn't a ticket queue.
                    </p>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════ SERVICES ═══════════════════ */}
      <section className="relative section bg-ink-950 text-cream-50 overflow-hidden">
        <div className="absolute inset-0 bg-radial-warm opacity-30" />
        <div className="noise-dark animate-grain-drift" aria-hidden />
        <div className="relative container-px mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-20 lg:items-end">
            <Reveal className="lg:col-span-7">
              <ChapterMark numeral="II" label="The Practice" dark />
              <h2 className="mt-10 font-display text-display-xl text-balance text-cream-50">
                Eight lanes of support, <em className="text-gold-300">one accountable partner.</em>
              </h2>
            </Reveal>
            <Reveal delay={0.1} className="lg:col-span-5">
              <p className="text-lg text-cream-100/70 leading-relaxed max-w-md lg:ml-auto">
                From the first book to the next round — a finance function shaped by how your business actually runs.
              </p>
              <Link
                to="/services"
                className="mt-6 inline-flex items-center gap-2 text-[12px] font-medium uppercase tracking-caps text-gold-300 hover:text-gold-200 transition-colors lg:ml-auto lg:flex"
              >
                <span>Full practice</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </Reveal>
          </div>

          <div className="mt-16 grid gap-0 border-t border-cream-50/10 md:grid-cols-2 lg:grid-cols-4">
            {services.map((s, i) => {
              const mdBorder = (i + 1) % 2 === 0 ? "md:border-r-0" : "md:border-r md:border-cream-50/10";
              const lgBorder = (i + 1) % 4 === 0 ? "lg:border-r-0" : "lg:border-r lg:border-cream-50/10";
              return (
              <Reveal key={s.slug} delay={(i % 4) * 0.06}>
                <Link
                  to={`/services/${s.slug}`}
                  className={`group relative flex h-full flex-col gap-5 border-b border-cream-50/10 p-6 md:p-7 transition-all duration-500 hover:bg-ink-900/60 ${mdBorder} ${lgBorder}`}
                >
                  <div className="flex items-start justify-between gap-4">
                    <p className="font-editorial italic text-base text-gold-400">
                      {String(i + 1).padStart(2, "0")}
                    </p>
                    <span className="flex h-9 w-9 items-center justify-center rounded-sm border border-cream-50/15 text-gold-400 transition-all duration-500 group-hover:border-gold-400 group-hover:bg-gold-400 group-hover:text-ink-950">
                      <s.icon className="h-[15px] w-[15px]" />
                    </span>
                  </div>
                  <h3 className="font-display text-lg md:text-xl text-cream-50 tracking-tight leading-tight">
                    {s.title}
                  </h3>
                  <p className="text-[13px] text-cream-100/60 leading-relaxed line-clamp-2">
                    {s.short}
                  </p>
                  <p className="mt-auto inline-flex items-center gap-1.5 text-[10px] font-medium uppercase tracking-caps text-gold-300 transition-all duration-500 group-hover:gap-2.5">
                    Read more
                    <ArrowUpRight className="h-3 w-3" />
                  </p>
                </Link>
              </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══════════════════ PULL QUOTE ═══════════════════ */}
      <section className="relative section bg-cream-50 overflow-hidden">
        <div className="container-px mx-auto max-w-6xl">
          <Reveal>
            <ChapterMark numeral="III" label="In their words" className="justify-center" />
          </Reveal>
          <Reveal delay={0.1}>
            <blockquote className="mt-16 text-center font-display text-display-xl text-balance text-ink-900 leading-[1.05]">
              <span className="text-gold-500 font-editorial italic">&ldquo;</span>
              We went from a box of receipts and a nervous CPA to a{" "}
              <em className="text-gold-600">board-ready monthly package</em> in two months.
              <span className="text-gold-500 font-editorial italic">&rdquo;</span>
            </blockquote>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="mt-16 flex items-center justify-center gap-5">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-sm border border-ink-900/15 font-editorial italic text-lg text-gold-600">
                M
              </span>
              <div>
                <p className="font-display text-lg text-ink-900 tracking-tight">Marco R.</p>
                <p className="mt-1 text-[11px] uppercase tracking-caps text-ink-400">
                  Specialty subcontractor · Queens, NY
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ═══════════════════ PROCESS ═══════════════════ */}
      <section className="relative section bg-cream-100/60 overflow-hidden">
        <div className="container-px mx-auto max-w-7xl">
          <Reveal>
            <div className="flex flex-wrap items-end justify-between gap-6">
              <div className="max-w-2xl">
                <ChapterMark numeral="IV" label="The Process" />
                <h2 className="mt-10 font-display text-display-lg text-balance">
                  From messy books to <em className="text-gold-600">monthly rhythm.</em>
                </h2>
              </div>
              <p className="max-w-sm text-sm text-ink-500 leading-relaxed">
                Four phases. Predictable timing. You'll know exactly where we are, and what's next, every week.
              </p>
            </div>
          </Reveal>

          <div className="mt-20 grid gap-0 md:grid-cols-4">
            {workflow.map((step, i) => (
              <Reveal key={step.n} delay={i * 0.08}>
                <div className={`group relative h-full p-8 md:p-10 border-t-2 border-ink-900/10 transition-all duration-500 hover:border-gold-500 ${
                  i < workflow.length - 1 ? "md:border-r md:border-r-ink-900/5" : ""
                }`}>
                  <p className="font-editorial italic text-3xl text-gold-500 leading-none">
                    {step.n}
                  </p>
                  <h3 className="mt-8 font-display text-2xl text-ink-900 tracking-tight">
                    {step.title}
                  </h3>
                  <p className="mt-5 text-ink-500 leading-relaxed text-[15px]">
                    {step.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════ INDUSTRY FEATURE ═══════════════════ */}
      <section className="relative overflow-hidden bg-ink-950 text-cream-50 py-28 md:py-40">
        <div className="absolute inset-0 bg-radial-warm opacity-30" />
        <div className="noise-dark animate-grain-drift" aria-hidden />
        <div className="relative container-px mx-auto max-w-7xl">
          <div className="grid gap-16 lg:grid-cols-12 lg:gap-20 lg:items-center">
            <Reveal className="lg:col-span-6">
              <ChapterMark numeral="V" label="Construction-native" dark />
              <h2 className="mt-10 font-display text-display-lg text-balance text-cream-50">
                We speak contractor — <em className="text-gold-300">job-costing, WIP, certified payroll, bonding.</em>
              </h2>
              <p className="mt-8 text-lg text-cream-100/75 leading-relaxed max-w-xl">
                General accounting doesn't cut it when every job has a different budget, a different retainage, and a different draw schedule. We've closed books for GCs, subs, and specialty trades — and we know what breaks when you scale.
              </p>
              <ul className="mt-10 space-y-0">
                {[
                  "Job-level P&L and WIP reporting",
                  "Certified payroll for prevailing wage jobs",
                  "Lien waivers, retainage, and progress billing",
                  "Bonding and SBA lender relationships",
                ].map((item, i) => (
                  <li
                    key={item}
                    className={`flex items-center gap-5 border-b border-cream-50/10 py-4 ${
                      i === 0 ? "border-t" : ""
                    }`}
                  >
                    <span className="font-editorial italic text-sm text-gold-400 w-8">
                      0{i + 1}
                    </span>
                    <span className="text-cream-100/85">{item}</span>
                  </li>
                ))}
              </ul>
              <Magnetic>
                <Link to="/services/cfo-services" className="mt-12 inline-flex btn-gold">
                  CFO for contractors
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              </Magnetic>
            </Reveal>

            <Reveal delay={0.15} className="lg:col-span-6">
              <div className="relative">
                <ParallaxImage
                  src="/images/construction.avif"
                  className="aspect-[4/5] rounded-sm overflow-hidden"
                  amount={30}
                />
                <div className="absolute inset-0 rounded-sm bg-gradient-to-t from-ink-950/50 via-transparent to-transparent pointer-events-none" />
                <div className="absolute left-0 right-0 bottom-0 p-8 md:p-10">
                  <p className="text-[10px] uppercase tracking-luxe text-gold-300">
                    Practice Area
                  </p>
                  <p className="mt-3 font-display text-2xl md:text-3xl text-cream-50 tracking-tight leading-[1.1]">
                    Construction &amp; the Trades
                  </p>
                </div>
                <div className="pointer-events-none absolute -top-3 -left-3 h-8 w-8 border-t border-l border-gold-400/60" />
                <div className="pointer-events-none absolute -bottom-3 -right-3 h-8 w-8 border-b border-r border-gold-400/60" />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ═══════════════════ TESTIMONIALS ═══════════════════ */}
      <section className="relative section bg-cream-50 overflow-hidden">
        <div className="container-px mx-auto max-w-7xl">
          <Reveal>
            <ChapterMark numeral="VI" label="Client voices" />
            <h2 className="mt-10 font-display text-display-lg text-balance max-w-3xl">
              Owners talking about the work — <em className="text-gold-600">in their words.</em>
            </h2>
          </Reveal>

          <div className="mt-20 grid gap-0 md:grid-cols-3 border-t border-ink-900/10">
            {testimonials.map((t, i) => (
              <Reveal key={t.name} delay={i * 0.1}>
                <figure
                  className={`group relative h-full p-8 md:p-10 ${
                    i < testimonials.length - 1 ? "md:border-r md:border-ink-900/10" : ""
                  }`}
                >
                  <p className="font-editorial italic text-2xl text-gold-500 leading-none">
                    {String(i + 1).padStart(2, "0")}
                  </p>
                  <blockquote className="mt-8 font-display text-xl md:text-2xl leading-snug text-ink-900 tracking-tight">
                    &ldquo;{t.quote}&rdquo;
                  </blockquote>
                  <figcaption className="mt-10 flex items-center gap-4 border-t border-ink-900/10 pt-6">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-sm border border-ink-900/15 font-editorial italic text-base text-gold-600">
                      {t.initial}
                    </div>
                    <div className="min-w-0">
                      <p className="font-display text-ink-900 tracking-tight">{t.name}</p>
                      <p className="mt-0.5 text-[10px] uppercase tracking-caps text-ink-400 leading-relaxed">
                        {t.role}
                      </p>
                    </div>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════ INSIGHTS ═══════════════════ */}
      <section className="relative section bg-cream-100/60 overflow-hidden">
        <div className="container-px mx-auto max-w-7xl">
          <Reveal>
            <div className="flex flex-wrap items-end justify-between gap-6">
              <div>
                <ChapterMark numeral="VII" label="Financial Insights" />
                <h2 className="mt-10 font-display text-display-lg text-balance max-w-2xl">
                  Plain-English perspectives for <em className="text-gold-600">small-business owners.</em>
                </h2>
              </div>
              <Link
                to="/blog"
                className="inline-flex items-center gap-2 text-[12px] font-medium uppercase tracking-caps text-ink-900 link-underline"
              >
                All insights
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </Reveal>

          <div className="mt-20 grid gap-10 md:grid-cols-3">
            {posts.map((p, i) => (
              <Reveal key={p.slug} delay={i * 0.1}>
                <Link
                  to={`/blog/${p.slug}`}
                  className="group block h-full"
                >
                  <div className="aspect-[5/4] overflow-hidden rounded-sm bg-ink-100">
                    <img
                      src={p.cover}
                      alt=""
                      className="h-full w-full object-cover transition-transform duration-[1400ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105"
                    />
                  </div>
                  <div className="mt-6">
                    <div className="flex items-center gap-3 text-[10px] uppercase tracking-caps text-gold-600">
                      <span>{p.category}</span>
                      <span className="h-px w-4 bg-gold-400/60" />
                      <span className="text-ink-400">{p.readTime}</span>
                    </div>
                    <h3 className="mt-4 font-display text-2xl leading-snug text-ink-900 tracking-tight line-clamp-2 transition-colors group-hover:text-gold-700">
                      {p.title}
                    </h3>
                    <p className="mt-4 text-ink-500 leading-relaxed line-clamp-2 text-[15px]">
                      {p.excerpt}
                    </p>
                    <p className="mt-6 inline-flex items-center gap-2 text-[11px] uppercase tracking-caps text-ink-900 transition-all duration-500 group-hover:gap-3">
                      Read the article
                      <ArrowUpRight className="h-3.5 w-3.5" />
                    </p>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <HomeFAQ />

      <CTASection />
    </>
  );
}

const homeFaqs = [
  {
    q: "What size business do you typically work with?",
    a: "Our sweet spot is roughly $500K to $30M in revenue — owner-operated, often in construction or subcontracting. We also help earlier-stage founders get their first financial systems in order.",
  },
  {
    q: "How quickly can you get us onboarded?",
    a: "Most engagements kick off within 10 business days. Catch-up and cleanup starts the same week, and a standardized monthly close is usually in place by day 45.",
  },
  {
    q: "Do you replace our CPA?",
    a: "No — we work alongside your tax preparer. We keep the books clean and the numbers decision-ready all year so the tax handoff in Q1 is a non-event, not a two-month project.",
  },
  {
    q: "What does this actually cost?",
    a: "Monthly engagements start at $2,500 and scale with complexity — transaction volume, number of employees, reporting depth, and advisory intensity. Project work (SBA prep, formation, cleanup) is fixed-fee after a scoping call.",
  },
];

function HomeFAQ() {
  return (
    <section className="relative overflow-hidden bg-ink-950 text-cream-50 py-28 md:py-40">
      <div className="absolute inset-0 bg-radial-warm opacity-25" />
      <div className="noise-dark animate-grain-drift" aria-hidden />
      <div className="relative container-px mx-auto max-w-7xl">
        <div className="grid gap-16 lg:grid-cols-[420px_1fr] lg:gap-28">
          <Reveal>
            <ChapterMark numeral="VIII" label="Questions" dark />
            <h2 className="mt-10 font-display text-display-lg text-balance text-cream-50">
              A few answers before <em className="text-gold-300">you pick up the phone.</em>
            </h2>
            <p className="mt-8 text-cream-100/70 leading-relaxed max-w-sm">
              The ones we hear most on a first call. Full library lives on the FAQ page — or just ask us directly.
            </p>
            <Link to="/faq" className="mt-10 btn-ghost-dark inline-flex">
              All FAQs
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="border-t border-cream-50/10">
              {homeFaqs.map((f) => (
                <details
                  key={f.q}
                  className="group border-b border-cream-50/10 py-7 md:py-8"
                >
                  <summary className="flex cursor-pointer list-none items-start justify-between gap-8">
                    <span className="font-display text-lg md:text-2xl text-cream-50 tracking-tight">
                      {f.q}
                    </span>
                    <span className="mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-gold-400/40 text-gold-300 transition-all duration-500 group-open:rotate-45 group-open:border-gold-400 group-open:bg-gold-400 group-open:text-ink-950">
                      <svg
                        viewBox="0 0 24 24"
                        className="h-3 w-3"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                      >
                        <path d="M12 5v14M5 12h14" strokeLinecap="round" />
                      </svg>
                    </span>
                  </summary>
                  <p className="mt-5 text-cream-100/70 leading-relaxed md:pr-14">
                    {f.a}
                  </p>
                </details>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
