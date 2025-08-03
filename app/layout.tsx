import type { Metadata } from "next";
import { Nunito, Poppins, Quicksand, Playwrite_PL } from "next/font/google";
import "./globals.css";
import { Providers } from "./lib/ThemeProvider";

const nunito = Nunito({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-nunito",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["200", "400"],
});
const playwrite = Playwrite_PL({
  style: "normal",
  weight: ["100", "200", "300", "400"],
});
const quicksand = Quicksand({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Memoro",
  description:
    "AI-powered platform that transforms study materials into engaging practice experiences. Learn smarter, not harder.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${quicksand.className} font-medium antialiased min-h-screen w-full max-w-[1440px] max-h-fit mx-auto`}>
        <Providers>
           {children}
        </Providers>
       </body>
    </html>
  );
}
