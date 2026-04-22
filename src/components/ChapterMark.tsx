import { motion } from "framer-motion";

type Props = {
  numeral: string;
  label: string;
  dark?: boolean;
  className?: string;
};

export function ChapterMark({ numeral, label, dark = false, className = "" }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      className={`flex items-center gap-4 ${className}`}
    >
      <span
        className={`font-editorial italic text-2xl tracking-tight ${
          dark ? "text-gold-300" : "text-gold-500"
        }`}
      >
        {numeral}
      </span>
      <motion.span
        initial={{ scaleX: 0, originX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 1.0, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        className={`h-px w-14 ${dark ? "bg-gold-400/60" : "bg-gold-500"}`}
      />
      <span
        className={`text-[10px] font-medium uppercase tracking-luxe ${
          dark ? "text-cream-50/70" : "text-ink-600"
        }`}
      >
        {label}
      </span>
    </motion.div>
  );
}
