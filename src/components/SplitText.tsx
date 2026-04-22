import { motion, useReducedMotion, type Variants } from "framer-motion";
import { useIntroDone } from "../hooks/useIntroDone";

type Props = {
  text: string;
  as?: "h1" | "h2" | "h3" | "p" | "span" | "div";
  className?: string;
  wordClassName?: string;
  delay?: number;
  stagger?: number;
  once?: boolean;
  waitForIntro?: boolean;
  italicIndexes?: number[];
};

const container = (stagger: number, delay: number): Variants => ({
  hidden: {},
  show: {
    transition: { staggerChildren: stagger, delayChildren: delay },
  },
});

const word: Variants = {
  hidden: { y: "120%", opacity: 0 },
  show: {
    y: "0%",
    opacity: 1,
    transition: { duration: 1.1, ease: [0.22, 1, 0.36, 1] },
  },
};

export function SplitText({
  text,
  as = "h1",
  className = "",
  wordClassName = "",
  delay = 0,
  stagger = 0.07,
  once = true,
  waitForIntro = false,
  italicIndexes = [],
}: Props) {
  const reduce = useReducedMotion();
  const introDone = useIntroDone();
  const Tag = motion[as];
  const words = text.split(" ");

  const animateProp = waitForIntro
    ? { animate: introDone ? "show" : "hidden" }
    : { whileInView: "show", viewport: { once, margin: "-80px" } };

  if (reduce) {
    const Static = as;
    return <Static className={className}>{text}</Static>;
  }

  return (
    <Tag
      className={className}
      variants={container(stagger, delay)}
      initial="hidden"
      {...animateProp}
    >
      {words.map((w, i) => (
        <span key={i} className="inline-block overflow-hidden align-baseline pb-1 -mb-1">
          <motion.span
            variants={word}
            className={`inline-block ${italicIndexes.includes(i) ? "font-editorial italic text-gold-300" : ""} ${wordClassName}`}
          >
            {w}
            {i < words.length - 1 ? "\u00A0" : ""}
          </motion.span>
        </span>
      ))}
    </Tag>
  );
}
