"use client";

import { useTheme } from "@/contexts/ThemeContext";
import { Button } from "../Button/Button";

export const ThemeToggle = () => {
  const { mode, toggleTheme } = useTheme();

  return (
    <Button onClick={toggleTheme} variant="outline">
      {mode === "light" ? "🌙 Dark Mode" : "☀️ Light Mode"}
    </Button>
  );
};
