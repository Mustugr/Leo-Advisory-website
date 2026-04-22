import { Link } from "react-router-dom";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import { PageHero } from "../components/PageHero";
import { Reveal } from "../components/Reveal";
import { CTASection } from "../components/CTASection";
import { ChapterMark } from "../components/ChapterMark";
import { Magnetic } from "../components/MagneticButton";
import { services } from "../data/services";

export function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="The Practice"
        numeral="I"
        size="feature"
        title={
          <>
            Eight service lines, <em className="text-gold-300">one accountable partner.</em>
          </>
        }
        subtitle="From first entity filing to board-ready reporting, everything you need from a finance function — delivered by a team that's worked inside your kind of business."
        image="/images/window.avif"
      />

      <section className="relative section bg-cream-50 overflow-hidden">
        <div className="container-px mx-auto max-w-7xl">
          <Reveal>
            <ChapterMark numeral="II" label="Capabilities" />
          </Reveal>

          <div className="mt-12 grid gap-0 border-t border-ink-900/10 md:grid-cols-2">
            {services.map((s, i) => (
              <Reveal key={s.slug} delay={(i % 2) * 0.08}>
                <Link
                  to={`/services/${s.slug}`}
                  className={`group relative flex h-full flex-col justify-between gap-6 border-b border-ink-900/10 p-7 md:p-8 transition-all duration-500 hover:bg-cream-100/50 ${
                    i % 2 === 0 ? "md:border-r md:border-ink-900/10" : ""
                  }`}
                >
                  <div className="flex items-start justify-between gap-6">
                    <div>
                      <p className="font-editorial italic text-lg text-gold-500">
                        {String(i + 1).padStart(2, "0")}
                      </p>
                      <h2 className="mt-3 font-display text-2xl md:text-[26px] text-ink-900 tracking-tight text-balance leading-tight">
                        {s.title}
                      </h2>
                      <p className="mt-3 text-sm md:text-[15px] text-ink-500 leading-relaxed max-w-xl">
                        {s.lede}
                      </p>
                    </div>
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-sm border border-ink-900/15 text-gold-500 transition-all duration-500 group-hover:border-gold-500 group-hover:bg-gold-400 group-hover:text-ink-950">
                      <s.icon className="h-[18px] w-[18px]" />
                    </span>
                  </div>
                  <p className="inline-flex items-center gap-2 text-[11px] font-medium uppercase tracking-caps text-ink-900 transition-all duration-500 group-hover:gap-3">
                    Details
                    <ArrowRight className="h-3.5 w-3.5" />
                  </p>
                </Link>
              </Reveal>
            ))}
          </div>

          <Reveal>
            <div className="mt-24 relative overflow-hidden rounded-sm border border-ink-900/10 bg-ink-950 text-cream-50 p-12 md:p-16 text-center">
              <div className="absolute inset-0 bg-radial-warm opacity-40" />
              <div className="noise-dark animate-grain-drift" aria-hidden />
              <div className="relative">
                <ChapterMark numeral="*" label="Start here" dark className="justify-center" />
                <h2 className="mt-10 font-display text-display-lg text-balance max-w-3xl mx-auto text-cream-50">
                  Not sure which service <em className="text-gold-300">fits?</em>
                </h2>
                <p className="mt-6 max-w-xl mx-auto text-cream-100/70 leading-relaxed">
                  Start with a free 30-minute call. We'll map your current state to what would actually move the needle this quarter.
                </p>
                <Magnetic>
                  <Link to="/contact" className="mt-10 btn-gold inline-flex">
                    Book a consult
                    <ArrowUpRight className="h-4 w-4" />
                  </Link>
                </Magnetic>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <CTASection />
    </>
  );
}
