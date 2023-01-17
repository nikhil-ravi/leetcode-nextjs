"use client";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import { BsFillMoonStarsFill } from "react-icons/bs";

export const DarkModeButton = () => {
  const [mounted, setMounted] = useState(false);
  const { systemTheme, theme, setTheme } = useTheme();
  useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) {
    return null;
  }

  const currentTheme = theme === "system" ? systemTheme : theme;

  return (
    <div>
      {currentTheme === "dark" ? (
        <BsFillMoonStarsFill
          className="cursor-pointer text-xl"
          onClick={() => setTheme("light")}
        />
      ) : (
        <BsFillMoonStarsFill
          className="cursor-pointer text-xl"
          onClick={() => setTheme("dark")}
        />
      )}
    </div>
  );
};
