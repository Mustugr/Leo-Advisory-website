import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { Magnetic } from "../components/MagneticButton";

export function NotFoundPage() {
  return (
    <section className="relative min-h-[100vh] overflow-hidden bg-ink-950 pt-40 pb-24 text-cream-50">
      <div className="absolute inset-0 bg-radial-warm opacity-40" />
      <div className="noise-dark animate-grain-drift" aria-hidden />

      {/* Top + bottom ledger rules */}
      <motion.div
        className="absolute inset-x-10 top-28 h-px bg-cream-50/15"
        initial={{ scaleX: 0, transformOrigin: "left" }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1.0, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
      />
      <motion.div
        className="absolute inset-x-10 bottom-14 h-px bg-cream-50/15"
        initial={{ scaleX: 0, transformOrigin: "right" }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1.0, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
      />

      <div className="relative container-px mx-auto max-w-4xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="flex items-center justify-center gap-4"
        >
          <span className="font-editorial italic text-xl text-gold-300">*</span>
          <motion.span
            initial={{ scaleX: 0, originX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1.0, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="h-px w-14 bg-gold-400/60"
          />
          <span className="text-[10px] font-medium uppercase tracking-luxe text-cream-50/70">
            Error · Four Zero Four
          </span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.7 }}
          className="mt-14 font-editorial italic text-[12rem] md:text-[18rem] leading-none text-gold-400/20"
        >
          404
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="-mt-8 md:-mt-16 font-display text-display-xl text-balance text-cream-50"
        >
          That page slipped <em className="text-gold-300">off the ledger.</em>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-10 font-editorial italic text-xl md:text-2xl text-cream-100/75 leading-relaxed max-w-xl mx-auto"
        >
          The URL you followed doesn't match any page on the site. It may have moved — or it never existed.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.0 }}
          className="mt-12 flex flex-wrap items-center justify-center gap-5"
        >
          <Magnetic>
            <Link to="/" className="btn-gold inline-flex">
              Back home
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Magnetic>
          <button onClick={() => window.history.back()} className="btn-ghost-dark inline-flex">
            <ArrowLeft className="h-4 w-4" />
            Previous page
          </button>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1.2 }}
        className="absolute bottom-20 left-10 text-[10px] uppercase tracking-luxe text-cream-50/40"
      >
        New York · MMXIX
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1.2 }}
        className="absolute bottom-20 right-10 text-[10px] uppercase tracking-luxe text-cream-50/40"
      >
        Leo Advisory LLC
      </motion.div>
    </section>
  );
}
