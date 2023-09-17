import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
import { ThemeProvider } from "./context/theme-prodiver";

import { switchThemeDuration } from "./context/switchThemeDuration";
import Navbar from "./components/Navbar";
// import { ThemeProvider } from "./theme-prodiver";
// import { ThemeSwitcher } from "./components/theme-switcher";
// import { switchThemeDuration } from "./constants";

export const metadata: Metadata = {
  title: "CRUD Note App",
  description: "Next.js CRUD Note App",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    // <html lang="en">
    //   <body className={inter.className}>

    //     {children}
    //     </body>
    // </html>
    <html lang="en">
      <body
        className={`${inter.className} bg-slate-50 dark:bg-[#0d1117] ${switchThemeDuration}`}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {/* <ThemeSwitcher /> */}
          <Navbar />

          <main className="container mx-auto">{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
