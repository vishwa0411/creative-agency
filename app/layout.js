import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Creative Studio | Digital Agency",

  description:
    "Creative Studio provides professional web development, digital marketing, brand identity and UI/UX design services.",

  keywords: [
    "Creative Agency",
    "Web Development",
    "Digital Marketing",
    "Brand Identity",
    "UI UX Design",
    "Creative Studio",
  ],

  authors: [{ name: "Creative Studio" }],

  openGraph: {
    title: "Creative Studio | Digital Agency",
    description:
      "Creative Studio provides professional web development, digital marketing, brand identity and UI/UX design services.",
    siteName: "Creative Studio",
    type: "website",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable}`}
      suppressHydrationWarning
    >
      <body>{children}</body>
    </html>
  );
}