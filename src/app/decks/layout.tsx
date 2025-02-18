import type { Metadata } from "next";
import "../globals.css";
import Header from "@/components/Header";


// // eslint-disable-next-line @typescript-eslint/no-unused-vars
// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// // eslint-disable-next-line @typescript-eslint/no-unused-vars
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

export const metadata: Metadata = {
  title: 'Deckbuilder',
  description: 'Create, manage, retrieve TCG decks across all your devices',
};

const Layout = async ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {

  return (
    <html lang="en">
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}

export default Layout;