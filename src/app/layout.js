import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/Navbar";
// require("dotenv/config");

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "JWST | Techlicious",
  description:
    "A website to display information about the James Webb Space Telescope",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex max-md:flex-col bg-gradient-to-tr from-[#00081a] to-neutral-900`}
      >
        <Navbar></Navbar>
        {children}
      </body>
    </html>
  );
}
