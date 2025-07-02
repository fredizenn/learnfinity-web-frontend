import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

// const lato = Lato({
//   variable: "--font-lato",
//   subsets: ["latin"],
//   weight: ["400"],
// })

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
  weight: ["400"],
})


export const metadata: Metadata = {
  title: "learnfinity.AI",
  description: "AI powered learning platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${nunito.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
