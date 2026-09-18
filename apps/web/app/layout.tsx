import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { ClickEffect } from "@/components/click-effect";
import { CustomCursor } from "@/components/custom-cursor";

export const metadata: Metadata = {
  title: "PrepSphere • IELTS Academic & Digital SAT Prep",
  description:
    "Unified AI-powered simulation and preparation platform for IELTS Academic and Digital SAT",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600;700&family=Plus+Jakarta+Sans:ital,wght@0,400;0,500;0,600;0,700;0,800;1,400;1,500;1,600&display=swap"
          rel="stylesheet"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var saved = localStorage.getItem('prepsphere_theme');
                  var isDark = saved === 'dark' || (!saved && window.matchMedia('(prefers-color-scheme: dark)').matches) || (saved === 'system' && window.matchMedia('(prefers-color-scheme: dark)').matches);
                  var root = document.documentElement;
                  if (isDark) {
                    root.classList.add('dark');
                    root.classList.remove('light');
                  } else {
                    root.classList.add('light');
                    root.classList.remove('dark');
                  }
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      <body className="bg-[var(--background)] text-[var(--foreground)] min-h-screen antialiased selection:bg-[#007EA7] selection:text-white transition-colors duration-150">
        <ThemeProvider>
          <CustomCursor />
          <ClickEffect />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
