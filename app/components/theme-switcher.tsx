"use client";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { FaSun, FaMoon } from "react-icons/fa";

export const ThemeSwitcher = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <button
      className={`w-fit  p-2 rounded-md hover:scale-110 active:scale-100 duration-200 dark:bg-white bg-[#212933]`}
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      {theme === "light" ? (
        <FaMoon className="dark:text-slate-900 text-slate-100" />
      ) : (
        <FaSun className="dark:text-slate-900 text-slate-100" />
      )}
    </button>
  );
};
