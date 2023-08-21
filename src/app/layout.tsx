import type { Metadata } from "next";
// styles
import "../styles/globals.css";
// Pre tag styles
import "../styles/theme3.css";
// next font
import { Lexend_Deca } from "next/font/google";
// React-hot-toast
import { Toaster } from "react-hot-toast";

const font = Lexend_Deca({ subsets: ["latin"] });

export const metadata: Metadata = { title: "Full page" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={font.className}>
        <Toaster />
        {children}
      </body>
    </html>
  );
}
