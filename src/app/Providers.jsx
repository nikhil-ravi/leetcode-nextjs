"use client";
import { ThemeProvider } from "next-themes";
export const Providers = ({ children }) => {
  return (
    <ThemeProvider enableSystem={true} attribute="class">
      {children}
    </ThemeProvider>
  );
};
