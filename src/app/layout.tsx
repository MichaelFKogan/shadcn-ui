// src/app/layout.tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { MainNav } from "@/components/MainNav"
import "./globals.css";
// import "./color-scheme.css"

const inter = Inter({ subsets: ["latin"] });
import { ThemeProvider } from "@/components/theme-provider"

// export const metadata: Metadata = {
//   title: "NomadHub",
//   description: "A collection of digital nomad content.",
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body id="body-tag" className={inter.className}>
        <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
