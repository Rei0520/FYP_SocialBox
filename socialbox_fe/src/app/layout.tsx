import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "./components/header/header";
import { Context } from "./provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SocialBox",
  description: "SocialBox",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css?family=Poppins"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Titan One"
          rel="stylesheet"
        ></link>
        <link
          href="https://fonts.googleapis.com/css?family=Oswald"
          rel="stylesheet"
        ></link>
        <link
          href="https://fonts.googleapis.com/css?family=Inter"
          rel="stylesheet"
        ></link>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
        />
      </head>
      <body className={inter.className}>
        <Context>{children}</Context>
      </body>
    </html>
  );
}
