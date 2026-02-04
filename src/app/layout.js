import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import TrackingComponent from "@/components/TrackingComponent";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Trustiqo Business Solutions | Premium Web & Mobile Apps",
  description: "Empowering businesses with intelligent School Management, Sports Academy, CRM, and E-commerce solutions.",
  icons: {
    icon: '/icon.png',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <TrackingComponent />
        {children}
      </body>
    </html>
  );
}
