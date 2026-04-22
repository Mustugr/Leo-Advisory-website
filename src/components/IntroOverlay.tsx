import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { INTRO_DONE_EVENT, INTRO_RESET_EVENT } from "../hooks/useIntroDone";

export function IntroOverlay() {
  const reduce = useReducedMotion();
  const location = useLocation();
  const [show, setShow] = useState<boolean>(
    () => typeof window !== "undefined" && window.location.pathname === "/",
  );
  const [showSkip, setShowSkip] = useState(false);
  const prevPath = useRef<string | null>(null);

  const finish = () => {
    window.dispatchEvent(new CustomEvent(INTRO_DONE_EVENT));
    setShow(false);
    setShowSkip(false);
  };

  // Replay the intro when the user returns to the home route via SPA nav.
  useEffect(() => {
    if (prevPath.current === null) {
      prevPath.current = location.pathname;
      return;
    }
    if (prevPath.current !== "/" && location.pathname === "/") {
      window.dispatchEvent(new CustomEvent(INTRO_RESET_EVENT));
      setShowSkip(false);
      setShow(true);
    }
    prevPath.current = location.pathname;
  }, [location.pathname]);

  useEffect(() => {
    if (!show) return;
    document.documentElement.style.overflow = "hidden";
    const skipTimer = window.setTimeout(() => setShowSkip(true), 700);
    const endTimer = window.setTimeout(finish, reduce ? 400 : 3000);
    return () => {
      window.clearTimeout(skipTimer);
      window.clearTimeout(endTimer);
      document.documentElement.style.overflow = "";
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [show, reduce]);

  const skip = () => {
    finish();
  };

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          key="intro"
          className="fixed inset-0 z-[100] bg-ink-950 text-cream-50 overflow-hidden"
          initial={{ y: 0, opacity: 0 }}
          animate={{ y: 0, opacity: 1, transition: { duration: 0.35, ease: "easeOut" } }}
          exit={{ y: "-100%", transition: { duration: 0.95, ease: [0.76, 0, 0.24, 1] } }}
          onAnimationComplete={() => {
            document.documentElement.style.overflow = "";
          }}
        >
          {/* Warm radial atmosphere */}
          <motion.div
            className="absolute inset-0 bg-radial-warm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.55 }}
            transition={{ duration: 1.0 }}
          />
          {/* Paper grain */}
          <div className="noise-dark animate-grain-drift" aria-hidden />

          {/* Chart line — bronze */}
          {!reduce && (
            <svg
              className="absolute inset-0 h-full w-full"
              viewBox="0 0 1440 900"
              preserveAspectRatio="none"
              aria-hidden
            >
              <defs>
                <linearGradient id="introLine" x1="0" y1="1" x2="1" y2="0">
                  <stop offset="0%" stopColor="#c29e48" stopOpacity="0" />
                  <stop offset="45%" stopColor="#c29e48" stopOpacity="0.85" />
                  <stop offset="100%" stopColor="#e7c87a" stopOpacity="1" />
                </linearGradient>
                <filter id="introGlow">
                  <feGaussianBlur stdDeviation="5" />
                </filter>
              </defs>

              <motion.path
                d="M -20 760 C 240 720, 340 640, 500 600 S 820 500, 980 400 S 1260 240, 1480 150"
                fill="none"
                stroke="url(#introLine)"
                strokeWidth="3"
                strokeLinecap="round"
                filter="url(#introGlow)"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 0.9 }}
                transition={{ duration: 1.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              />
              <motion.path
                d="M -20 760 C 240 720, 340 640, 500 600 S 820 500, 980 400 S 1260 240, 1480 150"
                fill="none"
                stroke="#c29e48"
                strokeWidth="1"
                strokeLinecap="round"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 0.8 }}
                transition={{ duration: 1.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              />
              <motion.circle
                cx={1480}
                cy={150}
                r={7}
                fill="#e7c87a"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: [0, 1, 0.7, 1], scale: [0, 1.4, 1, 1.2] }}
                transition={{ duration: 1.2, delay: 1.7, ease: "easeOut" }}
              />
            </svg>
          )}

          {/* Centerpiece — monogram + wordmark */}
          <div className="relative z-10 flex h-full flex-col items-center justify-center px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 1.0, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col items-center gap-10"
            >
              {/* Monogram */}
              <motion.span
                initial={{ opacity: 0, scale: 0.88 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.0, delay: 1.1, ease: [0.22, 1, 0.36, 1] }}
                className="flex h-20 w-20 items-center justify-center rounded-sm border border-gold-400/40 bg-ink-900/60 backdrop-blur-sm"
              >
                <span className="font-editorial italic text-4xl text-gold-300 leading-none">
                  L<span className="text-cream-50/30 mx-0.5">·</span>A
                </span>
              </motion.span>

              <div className="flex flex-col items-center">
                <motion.span
                  className="font-display text-4xl md:text-6xl font-light text-cream-50 tracking-tightest"
                  initial={{ letterSpacing: "0.32em", opacity: 0 }}
                  animate={{ letterSpacing: "-0.02em", opacity: 1 }}
                  transition={{ duration: 1.3, delay: 1.3, ease: [0.22, 1, 0.36, 1] }}
                >
                  Leo Advisory
                </motion.span>

                <motion.div
                  className="mt-8 h-px bg-gold-500"
                  initial={{ width: 0, opacity: 0 }}
                  animate={{ width: 120, opacity: 1 }}
                  transition={{ duration: 0.9, delay: 2.0, ease: [0.22, 1, 0.36, 1] }}
                />
                <motion.p
                  className="mt-6 text-[10px] font-medium uppercase tracking-luxe text-gold-300"
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 2.2 }}
                >
                  Finance · Strategy · Growth
                </motion.p>
              </div>
            </motion.div>
          </div>

          {/* Top + bottom editorial rules */}
          <motion.div
            className="absolute inset-x-10 top-10 h-px bg-cream-50/15"
            initial={{ scaleX: 0, transformOrigin: "left" }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1.0, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          />
          <motion.div
            className="absolute inset-x-10 bottom-10 h-px bg-cream-50/15"
            initial={{ scaleX: 0, transformOrigin: "right" }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1.0, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          />

          {/* Corner meta — editorial serif */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="absolute top-14 left-10 text-[10px] uppercase tracking-luxe text-cream-50/50"
          >
            New York
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="absolute top-14 right-10 text-[10px] uppercase tracking-luxe text-cream-50/50"
          >
            Est. MMXIX
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="absolute bottom-14 left-10 flex items-center gap-3 text-[10px] uppercase tracking-luxe text-cream-50/50"
          >
            <span className="font-editorial italic text-sm text-gold-400 normal-case tracking-normal">I</span>
            <span className="h-px w-6 bg-cream-50/20" />
            Leo Advisory LLC
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="absolute bottom-14 right-10 font-editorial italic text-sm text-cream-50/40"
          >
            — loading the ledger
          </motion.div>

          {/* Skip */}
          <AnimatePresence>
            {showSkip && (
              <motion.button
                key="skip"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
                onClick={skip}
                className="absolute top-14 right-1/2 translate-x-1/2 inline-flex items-center gap-3 text-[10px] uppercase tracking-luxe text-cream-50/50 hover:text-gold-300 transition-colors"
                aria-label="Skip intro"
              >
                Skip
                <span className="inline-block h-px w-8 bg-current" />
              </motion.button>
            )}
          </AnimatePresence>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
