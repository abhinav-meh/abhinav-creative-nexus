import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function CustomCursor() {
  const [position, setPosition] = useState({
    x: -100,
    y: -100,
  });

  const [cursorVariant, setCursorVariant] = useState("default");

  useEffect(() => {
    const moveCursor = (e) => {
      setPosition({
        x: e.clientX,
        y: e.clientY,
      });

      const target = e.target;

      if (
        target.closest("[data-cursor='view']")
      ) {
        setCursorVariant("view");
      } else if (
        target.closest("a") ||
        target.closest("button")
      ) {
        setCursorVariant("hover");
      } else {
        setCursorVariant("default");
      }
    };

    window.addEventListener("mousemove", moveCursor);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, []);

  const outerVariants = {
    default: {
      x: position.x - 20,
      y: position.y - 20,
      width: 40,
      height: 40,
    },

    hover: {
      x: position.x - 40,
      y: position.y - 40,
      width: 80,
      height: 80,
    },

    view: {
      x: position.x - 50,
      y: position.y - 50,
      width: 100,
      height: 100,
    },
  };

  return (
    <>
      {/* Outer Circle */}
      <motion.div
        className="fixed top-0 left-0 rounded-full border border-white pointer-events-none z-[9999] mix-blend-difference flex items-center justify-center text-xs font-medium"
        variants={outerVariants}
        animate={cursorVariant}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 35,
        }}
      >
        {cursorVariant === "view" && "VIEW"}
      </motion.div>

      {/* Inner Dot */}
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 bg-white rounded-full pointer-events-none z-[10000] mix-blend-difference"
        animate={{
          x: position.x - 4,
          y: position.y - 4,
        }}
        transition={{
          duration: 0,
        }}
      />
    </>
  );
}