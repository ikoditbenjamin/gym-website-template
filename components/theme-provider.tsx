"use client";

import { ReactNode } from "react";

// Placeholder — theme is handled by context/theme-context.tsx
export function ThemeProvider({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
