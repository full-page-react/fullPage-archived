import type { Metadata } from "next";
// styles
import "../styles/globals.css";
// Pre tag styles
import "../styles/theme3.css";
// next font
import { Inter } from "next/font/google";
// React-hot-toast
import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = { title: "Full page" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <Toaster />
      <body className={inter.className}>{children}</body>
    </html>
  );
}
