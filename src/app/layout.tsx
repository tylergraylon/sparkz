import "./globals.css";
import type { Metadata } from "next";
import localFont from "next/font/local";
import { Montserrat } from "next/font/google";
import { Header, Footer } from "./components";
import { WalletContext } from "./context";

const myFont = localFont({
  src: "../../public/fonts/conthrax-sb.woff2",
  display: "swap",
});

// const space_mono = Space_Mono({
//   subsets: ["latin"],
//   weight: ["400", "700"],
//   display: "swap",
//   variable: "--space_mono",
// });

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  variable: "--montserrat",
});

export const metadata: Metadata = {
  title: "SparkzStore",
  description: "Web 3 MarketPlace",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${myFont.className} ${montserrat.variable}`}
    >
      <body className="bg-backgroundcolor_pri tracking-normal">
        <WalletContext>
          <Header />
          {children}
          <Footer />
        </WalletContext>
      </body>
    </html>
  );
}
