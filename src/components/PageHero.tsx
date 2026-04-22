import type { ReactNode } from "react";
import { motion } from "framer-motion";
import { Reveal } from "./Reveal";
import { ParallaxImage } from "./ParallaxImage";

type Props = {
  eyebrow?: string;
  numeral?: string;
  title: ReactNode;
  subtitle?: ReactNode;
  image?: string;
  accent?: ReactNode;
  size?: "default" | "feature";
};

export function PageHero({
  eyebrow,
  numeral = "I",
  title,
  subtitle,
  image,
  accent,
  size = "default",
}: Props) {
  const isFeature = size === "feature";

  return (
    <section
      className={`relative flex items-end overflow-hidden bg-ink-950 text-cream-50 ${
        isFeature
          ? "min-h-[26rem] pt-28 pb-10 md:min-h-[32rem] md:pt-32 md:pb-12 lg:min-h-[38rem]"
          : "min-h-[18rem] pt-24 pb-8 md:min-h-[22rem] md:pt-28 md:pb-10"
      }`}
    >
      {image && (
        <ParallaxImage
          src={image}
          className="absolute inset-0 h-full w-full"
          imgClassName={`${isFeature ? "opacity-[0.3]" : "opacity-[0.35]"} object-cover`}
          amount={25}
          loading="eager"
          fetchPriority="high"
        />
      )}
      <div
        className={`absolute inset-0 ${
          isFeature
            ? "bg-gradient-to-b from-ink-950/45 via-ink-950/72 to-ink-950/96"
            : "bg-gradient-to-b from-ink-950/55 via-ink-950/70 to-ink-950/95"
        }`}
      />
      <div className={`absolute inset-0 bg-radial-warm ${isFeature ? "opacity-40" : "opacity-30"}`} />
      {isFeature && (
        <div
          className="absolute inset-0 bg-grid-lines opacity-[0.06]"
          style={{ backgroundSize: "64px 64px" }}
        />
      )}
      <div className="noise-dark animate-grain-drift" aria-hidden />

      <div className="relative container-px mx-auto max-w-7xl w-full">
        <div className={accent ? "flex flex-col gap-8 md:flex-row md:items-end md:justify-between md:gap-12" : ""}>
          {accent && (
            <Reveal className="shrink-0 order-first">
              {accent}
            </Reveal>
          )}
          <div className={accent ? "md:max-w-2xl" : "flex-1"}>
            <Reveal>
              <div className="flex items-center gap-4">
                <span className="font-editorial italic text-lg tracking-tight text-gold-300">
                  {numeral}
                </span>
                <motion.span
                  initial={{ scaleX: 0, originX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 1.0, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
                  className="h-px w-12 bg-gold-400/60"
                />
                {eyebrow && (
                  <span className="text-[10px] font-medium uppercase tracking-luxe text-cream-50/70">
                    {eyebrow}
                  </span>
                )}
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <h1
                className={`mt-3 font-display text-balance text-cream-50 ${
                  isFeature
                    ? "max-w-5xl text-display-lg md:text-display-xl"
                    : "max-w-4xl text-display-sm md:text-display-md"
                }`}
              >
                {title}
              </h1>
            </Reveal>

            {subtitle && (
              <Reveal delay={0.2}>
                <p
                  className={`mt-3 text-cream-100/70 ${
                    isFeature
                      ? "max-w-3xl text-base leading-relaxed md:text-lg"
                      : "max-w-2xl text-sm leading-snug"
                  }`}
                >
                  {subtitle}
                </p>
              </Reveal>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
