// layout.tsx
import { ClerkProvider } from "@clerk/nextjs";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/app/globals.css";
import { dark } from "@clerk/themes";
import { ThemeProvider } from "@/components/theme-provider";
import { Navbar } from "./_components/navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "TwitchClone",
  description: "A streaming platform inspired by Twitch",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider appearance={{ baseTheme: dark }}>
      <html lang="en">
        <head>
          <meta charSet="UTF-8" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
        </head>
        <body className={inter.className}>
          <header>
            <Navbar /> {/* Use Navbar component here */}
          </header>
          <main>
            <ThemeProvider
              attribute="class"
              forcedTheme="dark"
              storageKey="streamhive-theme"
            >
              {children}
            </ThemeProvider>
          </main>
        </body>
      </html>
    </ClerkProvider>
  );
}
