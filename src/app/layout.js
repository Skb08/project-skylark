import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Udaan AeroModelling Club | NITR ",
  description:
    " The Official AeroModelling Club Of NITR | Group of engineers and aviation enthusiats",
  keywords: ["Udaan ", "RC Drones", "Rockets", "Planes", "RC Planes"],
  openGraph: {
    type: "website",
    locale: "en_IE",
    url: "https://udaan/",
    title: "Udaan AeroModelling Club | NITR",
    description:
      " The Official AeroModelling Club Of NITR | Group of engineers and aviation enthusiats",
    image: "https://udaan/og.png",
    site_name: "Udaan AeroModelling Club | NITR",
  },
  twitter: {
    card: "summary_large_image",
    title: "Udaan AeroModelling Club | NITR",
    description:
      "The Official AeroModelling Club Of NITR | Group of engineers and aviation enthusiats",
    images: {
      url: "https://udaan/og.png",
      alt: "Udaan AeroModelling Club | NITR",
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar/>
        {children}</body>
    </html>
  );
}
