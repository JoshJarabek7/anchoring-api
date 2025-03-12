import type { Metadata } from "next";
import { GeistMono } from 'geist/font/mono';
import { GeistSans } from 'geist/font/sans';
import "./globals.css";
import { ThemeProvider } from "next-themes";
import Navigation from "@/components/navigation";
import { ThemeAwareParticles } from "@/components/theme-aware-particles";

export const metadata: Metadata = {
  title: "Anchoring API - Versioned Documentation for AI",
  description: "Anchoring API helps AI coding assistants access accurate, version-specific documentation",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <body className="antialiased min-h-screen bg-background">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <ThemeAwareParticles />
          <Navigation />
          <main>
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
