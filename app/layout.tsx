import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import "./globals.css";
import { Variable, Weight } from "lucide-react";

const poppins = Poppins({ 
  subsets: ["latin"] ,
  weight: ['400', '500', '600', '700'],
  variable: '--font-poppins',
});

// name of app
// main logo
export const metadata: Metadata = {
  title: "Evently",
  description: "To manage all the event",
  icons: {
    icon: "/public/assets/images/logo.svg",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
    <html lang="en">
      <body className={poppins.variable}>{children}</body>
    </html>
    </ClerkProvider>
  );
}
