import type { ReactNode } from "react";
import { PageHero } from "../components/PageHero";
import { CTASection } from "../components/CTASection";
import { Reveal } from "../components/Reveal";
import { ChapterMark } from "../components/ChapterMark";

type Section = { heading: string; paragraphs: string[] };

const roman = ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X", "XI", "XII"];

export function LegalLayout({
  eyebrow,
  title,
  subtitle,
  updated,
  sections,
}: {
  eyebrow: string;
  title: ReactNode;
  subtitle?: string;
  updated: string;
  sections: Section[];
}) {
  return (
    <>
      <PageHero eyebrow={eyebrow} numeral="I" title={title} subtitle={subtitle} />
      <section className="relative section bg-cream-50 overflow-hidden">
        <div className="container-px mx-auto max-w-3xl">
          <Reveal>
            <div className="flex items-center gap-4 border-b border-ink-900/10 pb-6">
              <span className="font-editorial italic text-lg text-gold-500">*</span>
              <span className="h-px w-10 bg-gold-400/60" />
              <p className="text-[10px] uppercase tracking-luxe text-ink-400">
                Last updated · {updated}
              </p>
            </div>

            <div className="mt-14 space-y-16">
              {sections.map((s, i) => (
                <div key={s.heading}>
                  <ChapterMark numeral={roman[i] ?? "*"} label={s.heading} />
                  <div className="mt-8 space-y-6 text-lg leading-relaxed text-ink-600">
                    {s.paragraphs.map((p, j) => (
                      <p key={j} className={i === 0 && j === 0 ? "drop-cap" : ""}>
                        {p}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>
      <CTASection />
    </>
  );
}
