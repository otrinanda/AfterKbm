import type { Metadata } from "next";
import { Prata } from "next/font/google";
import "./globals.css";

const playfairDisplay = Prata({weight:"400", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "After KBM di Aula Putih",
  description: "Melodi, Memori, Masa SMA",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={playfairDisplay.className}>
        {/* <Navbar/> */}
        {children}
        </body>
    </html>
  );
}
