import type { Metadata } from "next";
import "./globals.css";
import StoreProvider from "@/components/StoreProvider";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "TechStore",
  description: "Best E-commerce store built with Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <StoreProvider>
          <Navbar/>
            {children}
        </StoreProvider>
      </body>
    </html>
  );
}