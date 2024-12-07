import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/Header";
import { getAuthenticatedAppForUser } from "@/lib/firebase/serverApp";
import { User } from "firebase/auth";

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

export default async({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const authApp = await getAuthenticatedAppForUser();

  return (
    <html lang="en">
      <body>
        <Header initialUser={authApp?.currentUser?.toJSON() as User ?? undefined} />
        {children}
      </body>
    </html>
  );
}
