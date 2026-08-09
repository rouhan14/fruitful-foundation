import { useEffect, useRef, useState } from "react";
import { useInView, animate } from "framer-motion";

/**
 * Animates a number counting up from 0 to `to` when it scrolls into view.
 * prefix/suffix let you wrap it as "2M+", "PKR 2M+", "10,000+", etc.
 */
const CountUp = ({ to, duration = 2, prefix = "", suffix = "", className = "" }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    const controls = animate(0, to, {
      duration,
      ease: "easeOut",
      onUpdate(v) {
        setValue(Math.floor(v));
      },
    });
    return () => controls.stop();
  }, [isInView, to, duration]);

  return (
    <span ref={ref} className={className}>
      {prefix}
      {value.toLocaleString()}
      {suffix}
    </span>
  );
};

export default CountUp;
