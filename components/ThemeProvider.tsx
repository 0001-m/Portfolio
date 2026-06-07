/**
 * ThemeProvider.tsx
 * -----------------
 * A thin wrapper around next-themes' ThemeProvider.
 * This is a client component because next-themes needs access to
 * browser APIs (localStorage, matchMedia) for theme detection.
 * We keep it separate so the rest of the layout stays a server component.
 */

"use client";

import { ThemeProvider as NextThemesProvider } from "next-themes";
import { type ComponentProps } from "react";

export function ThemeProvider({
  children,
  ...props
}: ComponentProps<typeof NextThemesProvider>) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}
