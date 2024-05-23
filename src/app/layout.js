import { Inter } from "next/font/google";
import "./globals.css";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "YarnCraft",
  description: "Knitting has never been easier",
};

export default function RootLayout({ children }) {
  return (
    <>
      <html lang="en">
        <head>
          <script
            dangerouslySetInnerHTML={{
              __html: `
              if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                document.documentElement.classList.add('dark')
              } else {
                document.documentElement.classList.remove('dark')
              }
        `,
            }}
          />
        </head>
        <body className={inter.className}>
          <main className="bg-gray-100 dark:bg-custom-blue dark:text-white h-screen">
            {/* Navbar and Footer should be present on every page */}
            <Navbar />

            {children}

            <Footer />
          </main>
        </body>
      </html>
    </>
  );
}
