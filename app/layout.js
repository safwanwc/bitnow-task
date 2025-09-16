import { Geist, Geist_Mono, Poppins, Monomaniac_One } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "700"], // You can adjust weights as needed
});

const monomaniacOne = Monomaniac_One({
  variable: "--font-monomaniac-one",
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata = {
  title: "BitNow",
  description: "BitNow - Your Gateway to Instant Bitcoin Transfers",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${poppins.variable} ${monomaniacOne.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
