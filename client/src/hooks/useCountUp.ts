import { useMotionValue, animate } from "motion/react";
import { useEffect, useState } from "react";

export function formatStat(value: number, suffix: string = ""): string {
  return Math.round(value).toLocaleString() + suffix;
}

export function useCountUp(
  to: number,
  duration = 1,
  formatFn?: (v: number) => string
) {
  const motionValue = useMotionValue(0);
  const [current, setCurrent] = useState("0");

  useEffect(() => {
    const controls = animate(motionValue, to, {
      duration,
      ease: "easeOut",
      onUpdate: (value) => {
        const formatted = formatFn ? formatFn(value) : formatStat(value);
        setCurrent(formatted);
      },
    });

    return controls.stop;
  }, [to]);

  return current;
}
