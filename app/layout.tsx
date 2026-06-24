import type { Metadata } from "next";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
// @ts-ignore: side-effect import of CSS module
import "./globals.css";


export const metadata: Metadata = {
  title: "HILFUL FUZUL || Humanity & Charity Organization",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body>
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
