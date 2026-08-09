import { motion } from "framer-motion";

/**
 * Reveal wraps any content and fades/slides it into place when it scrolls
 * into view. Used across pages for the "animate on open / on scroll" ask.
 *
 * direction: "up" | "left" | "right" | "none"
 * delay: seconds
 */
const directions = {
  up: { y: 32, x: 0 },
  left: { x: -40, y: 0 },
  right: { x: 40, y: 0 },
  none: { x: 0, y: 0 },
};

const Reveal = ({ children, direction = "up", delay = 0, duration = 0.6, className = "", once = true }) => {
  const offset = directions[direction] || directions.up;

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, ...offset }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once, amount: 0.2 }}
      transition={{ duration, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
};

export default Reveal;
