import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
  slow?: boolean;
  pauseOnHover?: boolean;
};

export function Marquee({ children, className = "", slow = false, pauseOnHover = false }: Props) {
  return (
    <div
      className={`relative overflow-hidden mask-fade-x ${className}`}
      style={pauseOnHover ? undefined : undefined}
    >
      <div
        className={`${slow ? "marquee-track-slow" : "marquee-track"} ${
          pauseOnHover ? "hover:[animation-play-state:paused]" : ""
        }`}
      >
        <div className="flex items-center gap-16 shrink-0">{children}</div>
        <div className="flex items-center gap-16 shrink-0" aria-hidden>
          {children}
        </div>
      </div>
    </div>
  );
}
