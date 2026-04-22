import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";

type Props = {
  src: string;
  alt?: string;
  className?: string;
  imgClassName?: string;
  amount?: number;
  loading?: "eager" | "lazy";
  fetchPriority?: "high" | "low" | "auto";
};

export function ParallaxImage({
  src,
  alt = "",
  className = "",
  imgClassName = "",
  amount = 80,
  loading = "lazy",
  fetchPriority = "auto",
}: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [amount, -amount]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1.08, 1.04, 1.08]);

  const hasPosition = /\b(absolute|fixed|sticky|relative)\b/.test(className);
  return (
    <div ref={ref} className={`${hasPosition ? "" : "relative "}overflow-hidden ${className}`}>
      <motion.img
        src={src}
        alt={alt}
        style={reduce ? undefined : { y, scale }}
        className={`h-full w-full object-cover will-change-transform ${imgClassName}`}
        loading={loading}
        fetchPriority={fetchPriority}
        decoding="async"
      />
    </div>
  );
}
