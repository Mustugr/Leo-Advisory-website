import { useMemo, useState } from "react";
import { Calculator, DollarSign, Home, TrendingUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { PageHero } from "../components/PageHero";
import { Reveal } from "../components/Reveal";
import { CTASection } from "../components/CTASection";
import { ChapterMark } from "../components/ChapterMark";

const tabs = [
  { key: "mortgage" as const, label: "Mortgage", Icon: Home, numeral: "I" },
  { key: "loan" as const, label: "Business Loan", Icon: DollarSign, numeral: "II" },
  { key: "breakeven" as const, label: "Break-even", Icon: TrendingUp, numeral: "III" },
];

export function CalculatorsPage() {
  const [active, setActive] = useState<(typeof tabs)[number]["key"]>("mortgage");
  const activeTab = tabs.find((t) => t.key === active)!;

  return (
    <>
      <PageHero
        eyebrow="Free calculators"
        numeral="I"
        title={
          <>
            Quick tools for the questions that <em className="text-gold-300">come up most.</em>
          </>
        }
        subtitle="Estimate mortgage payments, business-loan costs, and break-even points. Plain math, no sign-up."
        accent={
          <div className="relative flex h-40 w-40 items-center justify-center rounded-sm border border-gold-400/40 bg-ink-900/60 shadow-gold backdrop-blur-sm md:-translate-x-12 lg:-translate-x-24 xl:-translate-x-32">
            <div className="pointer-events-none absolute -top-2 -left-2 h-6 w-6 border-t border-l border-gold-400/70" />
            <div className="pointer-events-none absolute -bottom-2 -right-2 h-6 w-6 border-b border-r border-gold-400/70" />
            <Calculator className="h-20 w-20 text-gold-300" strokeWidth={1.1} />
          </div>
        }
      />

      <section className="relative section bg-cream-50 overflow-hidden">
        <div className="container-px mx-auto max-w-6xl">
          <Reveal>
            <ChapterMark numeral="II" label="Pick a calculator" />
          </Reveal>

          <Reveal delay={0.1}>
            <div className="mt-10 grid gap-0 border-t border-ink-900/10 sm:grid-cols-3">
              {tabs.map((t, i) => {
                const isActive = active === t.key;
                return (
                  <button
                    key={t.key}
                    onClick={() => setActive(t.key)}
                    className={`group relative flex flex-col items-start gap-5 border-b border-ink-900/10 p-8 text-left transition-colors ${
                      i < tabs.length - 1 ? "sm:border-r sm:border-ink-900/10" : ""
                    } ${isActive ? "bg-ink-950 text-cream-50" : "hover:bg-cream-100/50"}`}
                  >
                    <div className="flex w-full items-center justify-between">
                      <span
                        className={`font-editorial italic text-xl ${
                          isActive ? "text-gold-300" : "text-gold-500"
                        }`}
                      >
                        {t.numeral}
                      </span>
                      <span
                        className={`flex h-10 w-10 items-center justify-center rounded-sm border transition-colors ${
                          isActive
                            ? "border-gold-400/40 text-gold-300"
                            : "border-ink-900/15 text-gold-500 group-hover:border-gold-500"
                        }`}
                      >
                        <t.Icon className="h-4 w-4" />
                      </span>
                    </div>
                    <h3
                      className={`font-display text-xl tracking-tight ${
                        isActive ? "text-cream-50" : "text-ink-900"
                      }`}
                    >
                      {t.label}
                    </h3>
                  </button>
                );
              })}
            </div>
          </Reveal>

          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="mt-16"
            >
              <ChapterMark numeral="III" label={activeTab.label} />
              <div className="mt-10">
                {active === "mortgage" && <MortgageCalc />}
                {active === "loan" && <LoanCalc />}
                {active === "breakeven" && <BreakevenCalc />}
              </div>
            </motion.div>
          </AnimatePresence>

          <Reveal delay={0.2}>
            <p className="mt-20 text-center font-editorial italic text-lg text-ink-500 max-w-2xl mx-auto leading-relaxed">
              These calculators are illustrative only. Actual rates and terms depend on your lender and credit profile. For loan structuring, reach out — <em className="text-gold-700 not-italic font-display">it's what we do.</em>
            </p>
          </Reveal>
        </div>
      </section>

      <CTASection />
    </>
  );
}

function money(n: number) {
  return n.toLocaleString("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 });
}

function amortPayment(principal: number, annualRate: number, years: number) {
  const r = annualRate / 100 / 12;
  const n = years * 12;
  if (r === 0) return principal / n;
  return (principal * r) / (1 - Math.pow(1 + r, -n));
}

function MortgageCalc() {
  const [price, setPrice] = useState(650000);
  const [down, setDown] = useState(130000);
  const [rate, setRate] = useState(6.75);
  const [years, setYears] = useState(30);

  const principal = Math.max(price - down, 0);
  const monthly = useMemo(() => amortPayment(principal, rate, years), [principal, rate, years]);
  const total = monthly * years * 12;
  const interest = total - principal;

  return (
    <Panel title="Mortgage payment estimator">
      <div className="grid gap-12 lg:grid-cols-[1fr_1fr]">
        <div className="space-y-8">
          <Slider label="Home price" value={price} setValue={setPrice} min={100000} max={3000000} step={10000} prefix="$" />
          <Slider label="Down payment" value={down} setValue={setDown} min={0} max={price} step={5000} prefix="$" />
          <Slider label="Interest rate" value={rate} setValue={setRate} min={1} max={15} step={0.05} suffix="%" />
          <Slider label="Term (years)" value={years} setValue={setYears} min={5} max={40} step={1} />
        </div>
        <ResultPanel
          label="Monthly payment"
          headline={money(monthly)}
          stats={[
            { label: "Loan amount", value: money(principal) },
            { label: "Total interest", value: money(interest) },
            { label: "Total paid", value: money(total) },
            { label: "Down %", value: `${((down / Math.max(price, 1)) * 100).toFixed(1)}%` },
          ]}
        />
      </div>
    </Panel>
  );
}

function LoanCalc() {
  const [amount, setAmount] = useState(250000);
  const [rate, setRate] = useState(10.5);
  const [term, setTerm] = useState(7);

  const monthly = amortPayment(amount, rate, term);
  const total = monthly * term * 12;

  return (
    <Panel title="Business loan / SBA estimator">
      <div className="grid gap-12 lg:grid-cols-[1fr_1fr]">
        <div className="space-y-8">
          <Slider label="Loan amount" value={amount} setValue={setAmount} min={25000} max={5000000} step={5000} prefix="$" />
          <Slider label="Interest rate" value={rate} setValue={setRate} min={3} max={20} step={0.1} suffix="%" />
          <Slider label="Term (years)" value={term} setValue={setTerm} min={1} max={25} step={1} />
        </div>
        <ResultPanel
          label="Monthly payment"
          headline={money(monthly)}
          stats={[
            { label: "Principal", value: money(amount) },
            { label: "Total paid", value: money(total) },
            { label: "Total interest", value: money(total - amount) },
            { label: "Effective monthly", value: `${(rate / 12).toFixed(3)}%` },
          ]}
        />
      </div>
    </Panel>
  );
}

function BreakevenCalc() {
  const [fixed, setFixed] = useState(25000);
  const [price, setPrice] = useState(450);
  const [variable, setVariable] = useState(260);

  const margin = Math.max(price - variable, 0.01);
  const units = Math.ceil(fixed / margin);
  const revenue = units * price;

  return (
    <Panel title="Break-even analysis">
      <div className="grid gap-12 lg:grid-cols-[1fr_1fr]">
        <div className="space-y-8">
          <Slider label="Fixed monthly costs" value={fixed} setValue={setFixed} min={1000} max={500000} step={500} prefix="$" />
          <Slider label="Price per unit" value={price} setValue={setPrice} min={10} max={10000} step={5} prefix="$" />
          <Slider label="Variable cost per unit" value={variable} setValue={setVariable} min={0} max={Math.max(price - 1, 1)} step={5} prefix="$" />
        </div>
        <ResultPanel
          label="Units to break even"
          headline={units.toLocaleString()}
          stats={[
            { label: "Break-even revenue", value: money(revenue) },
            { label: "Contribution margin", value: money(margin) },
            { label: "Margin %", value: `${((margin / price) * 100).toFixed(1)}%` },
            { label: "Fixed costs", value: money(fixed) },
          ]}
        />
      </div>
    </Panel>
  );
}

function Panel({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="relative border border-ink-900/10 bg-cream-50">
      <div className="border-b border-ink-900/10 px-8 py-6 md:px-12">
        <h2 className="font-display text-xl md:text-2xl text-ink-900 tracking-tight">{title}</h2>
      </div>
      <div className="p-8 md:p-12">{children}</div>
    </div>
  );
}

function ResultPanel({
  label,
  headline,
  stats,
}: {
  label: string;
  headline: string;
  stats: { label: string; value: string }[];
}) {
  return (
    <div className="relative overflow-hidden bg-ink-950 p-10 md:p-12 text-cream-50">
      <div className="absolute inset-0 bg-radial-warm opacity-30" />
      <div className="noise-dark animate-grain-drift" aria-hidden />
      <div className="relative">
        <p className="text-[10px] font-medium uppercase tracking-luxe text-gold-300/80">{label}</p>
        <p className="mt-5 font-display text-5xl md:text-6xl text-gold-300 tracking-tight">{headline}</p>
        <div className="mt-10 grid grid-cols-2 gap-8 border-t border-cream-50/10 pt-8">
          {stats.map((s) => (
            <div key={s.label}>
              <p className="text-[10px] font-medium uppercase tracking-luxe text-cream-100/50">{s.label}</p>
              <p className="mt-2 font-display text-lg text-cream-50 tracking-tight">{s.value}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function Slider({
  label,
  value,
  setValue,
  min,
  max,
  step,
  prefix,
  suffix,
}: {
  label: string;
  value: number;
  setValue: (n: number) => void;
  min: number;
  max: number;
  step: number;
  prefix?: string;
  suffix?: string;
}) {
  return (
    <div>
      <div className="flex items-baseline justify-between">
        <span className="text-[10px] font-medium uppercase tracking-luxe text-ink-400">{label}</span>
        <span className="font-display text-2xl text-ink-900 tracking-tight">
          {prefix}
          {value.toLocaleString()}
          {suffix}
        </span>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => setValue(Number(e.target.value))}
        className="mt-4 w-full accent-gold-500"
      />
      <div className="mt-2 flex justify-between text-[10px] uppercase tracking-caps text-ink-300">
        <span>{prefix}{min.toLocaleString()}{suffix}</span>
        <span>{prefix}{max.toLocaleString()}{suffix}</span>
      </div>
    </div>
  );
}
