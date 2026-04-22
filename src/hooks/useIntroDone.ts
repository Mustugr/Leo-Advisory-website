import { useEffect, useState } from "react";

export const INTRO_KEY = "leo_seen_intro";
export const INTRO_DONE_EVENT = "leo:intro-done";
export const INTRO_RESET_EVENT = "leo:intro-reset";

/**
 * `true` once the intro overlay has finished. Resets to `false` whenever the
 * overlay replays (e.g. user returns home via the logo), so hero animations
 * stay synced with the slide-up.
 */
export function useIntroDone(): boolean {
  const [done, setDone] = useState<boolean>(() => typeof window === "undefined");

  useEffect(() => {
    const onDone = () => setDone(true);
    const onReset = () => setDone(false);
    window.addEventListener(INTRO_DONE_EVENT, onDone);
    window.addEventListener(INTRO_RESET_EVENT, onReset);
    return () => {
      window.removeEventListener(INTRO_DONE_EVENT, onDone);
      window.removeEventListener(INTRO_RESET_EVENT, onReset);
    };
  }, []);

  return done;
}
