import { Link } from "react-router-dom";
import { ArrowUpRight, Phone } from "lucide-react";
import { motion } from "framer-motion";
import { Reveal } from "./Reveal";
import { ChapterMark } from "./ChapterMark";
import { Magnetic } from "./MagneticButton";
import { site } from "../data/site";

export function CTASection() {
  return (
    <section className="relative overflow-hidden bg-ink-950 text-cream-50 py-28 md:py-40">
      <div className="absolute inset-0 bg-radial-warm opacity-50" />
      <div
        className="absolute inset-0 bg-grid-lines opacity-[0.05]"
        style={{ backgroundSize: "64px 64px" }}
      />
      <div className="noise-dark animate-grain-drift" aria-hidden />

      {/* Ambient gold halo */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -bottom-40 left-1/2 -translate-x-1/2 h-[600px] w-[900px] rounded-full bg-gold-400/10 blur-3xl"
        animate={{ opacity: [0.3, 0.55, 0.3] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative container-px mx-auto max-w-6xl">
        <Reveal>
          <ChapterMark numeral="*" label="Begin" dark className="justify-center flex" />
        </Reveal>

        <Reveal delay={0.1}>
          <h2 className="mt-10 text-center font-display text-display-xl text-balance max-w-4xl mx-auto text-cream-50">
            Financial clarity starts with a{" "}
            <em className="text-gold-300">thirty-minute conversation.</em>
          </h2>
        </Reveal>

        <Reveal delay={0.2}>
          <p className="mt-10 mx-auto max-w-xl text-center text-lg text-cream-100/70 leading-relaxed">
            No sales pressure, no prep needed. Bring the questions you've been sitting on — we'll bring a clear read on what to do next.
          </p>
        </Reveal>

        <Reveal delay={0.3}>
          <div className="mt-14 flex flex-wrap items-center justify-center gap-5">
            <Magnetic>
              <Link to="/contact" className="btn-gold">
                Book a consult
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </Magnetic>
            <a href={site.phoneHref} className="btn-ghost-dark">
              <Phone className="h-4 w-4" />
              {site.phone}
            </a>
          </div>
        </Reveal>

        <Reveal delay={0.4}>
          <div className="mt-20 flex flex-wrap items-center justify-center gap-8 text-[10px] uppercase tracking-luxe text-cream-100/40">
            <span>Response within 24h</span>
            <span className="h-px w-6 bg-cream-100/20" />
            <span>New York · Est. {site.founded}</span>
            <span className="h-px w-6 bg-cream-100/20" />
            <span>{site.hours}</span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
