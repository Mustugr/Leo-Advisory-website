import { Download, FileText, Lock } from "lucide-react";
import { PageHero } from "../components/PageHero";
import { Reveal } from "../components/Reveal";
import { CTASection } from "../components/CTASection";
import { ChapterMark } from "../components/ChapterMark";

const files = [
  {
    name: "Monthly Financial Review — Template",
    type: "PDF · 12 pages",
    desc: "A one-page owner dashboard plus supporting schedules we build for most CFO clients.",
  },
  {
    name: "Chart of Accounts — Construction",
    type: "XLSX · 2 sheets",
    desc: "A starter chart of accounts structured for GCs and subcontractors with job-costing.",
  },
  {
    name: "13-Week Cash Flow — Worksheet",
    type: "XLSX · 1 sheet",
    desc: "Rolling cash flow template with AR, AP, payroll, and contract-draw lines.",
  },
  {
    name: "SBA Loan Readiness Checklist",
    type: "PDF · 3 pages",
    desc: "Everything a lender typically asks for — organized so you can pull it in a day.",
  },
  {
    name: "Job-Cost WIP Tracker",
    type: "XLSX · 1 sheet",
    desc: "Project-level WIP with estimated cost, actuals, progress, and over/under billings.",
  },
  {
    name: "Year-End Handoff — CPA Pack",
    type: "PDF · 8 pages",
    desc: "The package your CPA actually wants to receive at year-end.",
  },
];

export function FileSharePage() {
  return (
    <>
      <PageHero
        eyebrow="File Share"
        numeral="I"
        title={
          <>
            Templates and worksheets <em className="text-gold-300">from the work we do most.</em>
          </>
        }
        subtitle="Free downloads for owners who want to start sharper. Every file is stripped-down — exactly what we use inside engagements."
        image="/images/handshake.avif"
      />

      <section className="relative section bg-cream-50 overflow-hidden">
        <div className="container-px mx-auto max-w-7xl">
          <Reveal>
            <ChapterMark numeral="II" label="Downloads" />
          </Reveal>

          <div className="mt-14 grid gap-0 border-t border-ink-900/10 md:grid-cols-2">
            {files.map((f, i) => (
              <Reveal key={f.name} delay={(i % 2) * 0.08}>
                <div
                  className={`group relative h-full border-b border-ink-900/10 p-8 md:p-10 transition-colors hover:bg-cream-100/60 ${
                    i % 2 === 0 ? "md:border-r md:border-ink-900/10" : ""
                  }`}
                >
                  <div className="flex items-start justify-between gap-6">
                    <span className="flex h-12 w-12 items-center justify-center rounded-sm border border-ink-900/15 text-gold-500 transition-all duration-500 group-hover:border-gold-500 group-hover:bg-gold-400 group-hover:text-ink-950">
                      <FileText className="h-5 w-5" />
                    </span>
                    <span className="text-[10px] uppercase tracking-caps text-ink-400">{f.type}</span>
                  </div>
                  <p className="mt-8 font-editorial italic text-lg text-gold-500">
                    {String(i + 1).padStart(2, "0")}
                  </p>
                  <h3 className="mt-4 font-display text-xl md:text-2xl text-ink-900 tracking-tight">
                    {f.name}
                  </h3>
                  <p className="mt-4 text-ink-500 leading-relaxed">{f.desc}</p>
                  <button className="mt-8 inline-flex items-center gap-2 text-[11px] font-medium uppercase tracking-caps text-ink-900 transition-all duration-500 group-hover:gap-3 group-hover:text-gold-700">
                    <Download className="h-3.5 w-3.5" />
                    Request file
                  </button>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal>
            <div className="mt-20 relative overflow-hidden rounded-sm border border-gold-400/30 bg-cream-100/60 p-10">
              <div className="absolute inset-0 bg-radial-warm opacity-40 pointer-events-none" />
              <div className="relative flex items-start gap-6">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-sm border border-gold-400/40 bg-cream-50 text-gold-600">
                  <Lock className="h-5 w-5" />
                </span>
                <div>
                  <ChapterMark numeral="*" label="Client document portal" />
                  <p className="mt-6 text-lg text-ink-600 leading-relaxed max-w-2xl">
                    Existing clients — secure document exchange runs through our portal. If you need access, email{" "}
                    <a href="mailto:info@leo-advisory.com" className="text-ink-900 font-medium underline decoration-gold-500 underline-offset-4">
                      info@leo-advisory.com
                    </a>{" "}
                    and we'll send the link.
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <CTASection />
    </>
  );
}
