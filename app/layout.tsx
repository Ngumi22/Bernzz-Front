import type { Metadata } from "next";
import { Inter, Noto_Sans, Montserrat, Lato, Roboto } from "next/font/google";
import "./globals.css";
import StoreProvider from "@/lib/provider";
import Footer from "@/components/Navigation/footer";
import { Navbar } from "@/components/Navigation/Navbar";
import TopNav from "@/components/Navigation/TopNav";
import MegaMenu from "@/components/Mega-Menu/mega-menu";

const inter = Inter({ subsets: ["latin"], weight: "500" });
const sans = Lato({ subsets: ["latin"], weight: "400" });
const roboto = Roboto({
  subsets: ["latin"],
  weight: "400",
});

const mont = Montserrat({
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Bernzz Digital Solutions",
  description: "Bernzz Digital Solutions",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <StoreProvider>
          <TopNav />
          <Navbar />
          <MegaMenu />
          {children}

          <Footer />
        </StoreProvider>
      </body>
    </html>
  );
}
