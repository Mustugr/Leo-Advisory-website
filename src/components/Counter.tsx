import { useEffect, useRef, useState } from "react";
import { useIntroDone } from "../hooks/useIntroDone";

type Props = {
  end: number;
  prefix?: string;
  suffix?: string;
  duration?: number;
  decimals?: number;
  delay?: number;
  className?: string;
};

export function Counter({
  end,
  prefix = "",
  suffix = "",
  duration = 1.8,
  decimals = 0,
  delay = 0,
  className,
}: Props) {
  const introDone = useIntroDone();
  const [value, setValue] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    // Wait for the intro overlay to finish before counting — otherwise the
    // animation elapses invisibly behind it and the user never sees it.
    if (!introDone) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) {
      setValue(end);
      return;
    }

    const kickoff = () => {
      if (started.current) return;
      started.current = true;
      const start = performance.now();
      const step = (t: number) => {
        const p = Math.min((t - start) / (duration * 1000), 1);
        // easeOutExpo — strong deceleration into the final value
        const eased = p === 1 ? 1 : 1 - Math.pow(2, -10 * p);
        setValue(end * eased);
        if (p < 1) requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
    };

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            window.setTimeout(kickoff, delay * 1000);
          }
        });
      },
      { threshold: 0.35 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [end, duration, delay, introDone]);

  return (
    <span ref={ref} className={className}>
      {prefix}
      {value.toLocaleString("en-US", {
        minimumFractionDigits: decimals,
        maximumFractionDigits: decimals,
      })}
      {suffix}
    </span>
  );
}
