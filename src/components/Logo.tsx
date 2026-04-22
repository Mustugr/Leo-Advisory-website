import { Link } from "react-router-dom";

type Props = {
  variant?: "dark" | "light";
  size?: "sm" | "md" | "lg";
  className?: string;
  showTagline?: boolean;
};

const sizes = {
  sm: { mark: "h-9 w-9", name: "text-[15px]", tag: "text-[9px]" },
  md: { mark: "h-11 w-11", name: "text-[17px]", tag: "text-[10px]" },
  lg: { mark: "h-14 w-14", name: "text-xl", tag: "text-[11px]" },
};

export function Logo({
  variant = "dark",
  size = "md",
  className = "",
  showTagline = true,
}: Props) {
  const light = variant === "light";
  const tone = light ? "text-cream-50" : "text-ink-900";
  const tag = light ? "text-gold-300" : "text-gold-600";
  const markBorder = light ? "border-gold-300/40" : "border-ink-900/15";
  const markInner = light ? "text-gold-300" : "text-gold-500";
  const s = sizes[size];

  return (
    <Link
      to="/"
      className={`group inline-flex items-center gap-3.5 ${className}`}
      aria-label="Leo Advisory — home"
    >
      <span
        className={`relative inline-flex ${s.mark} items-center justify-center rounded-sm border ${markBorder} transition-all duration-500 group-hover:border-gold-400`}
      >
        <span
          className={`font-editorial italic text-[20px] leading-none tracking-tightest ${markInner} translate-y-[-1px]`}
          style={{ fontFeatureSettings: "'ss01','dlig'" }}
        >
          L
          <span className="text-ink-400/80 font-display not-italic">·</span>
          A
        </span>
        <span
          className={`absolute -bottom-1 left-1/2 h-px w-4 -translate-x-1/2 ${
            light ? "bg-gold-300/70" : "bg-gold-500/70"
          }`}
        />
      </span>
      <span className={`flex flex-col leading-none ${tone}`}>
        <span
          className={`monogram ${s.name} font-medium ${tone}`}
          style={{ letterSpacing: "0.01em" }}
        >
          Leo Advisory
        </span>
        {showTagline && (
          <span
            className={`mt-1.5 ${s.tag} font-medium uppercase tracking-luxe ${tag}`}
          >
            Finance · Strategy · Growth
          </span>
        )}
      </span>
    </Link>
  );
}
