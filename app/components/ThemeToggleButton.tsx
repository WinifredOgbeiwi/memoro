"use client";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function ThemeToggleButton() {
  const { setTheme, resolvedTheme } = useTheme();

  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return null;
  }

  const isDark = resolvedTheme === "dark";

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="w-16 h-8 bg-grey1  rounded-full p-1 flex items-center relative transition-colors duration-300"
    >
      <motion.div
        animate={{ x: isDark ? 32 : 0 }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
        className="w-6 h-6 rounded-full bg-background shadow-md"
      />
    </button>
  );
}
