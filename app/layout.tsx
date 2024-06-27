import type { Metadata } from "next";
import { Inter, Noto_Sans, Montserrat, Lato, Roboto } from "next/font/google";
import "./globals.css";
import StoreProvider from "@/lib/provider";
import MainNav from "@/components/Navigation/main-nav";
import Footer from "@/components/Navigation/footer";

const inter = Inter({ subsets: ["latin"], weight: "500" });
const sans = Lato({ subsets: ["latin"], weight: "400" });
const roboto = Roboto({
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
      <body className="font-family">
        <StoreProvider>
          <MainNav />
          <section className="py-52">{children}</section>

          <Footer />
        </StoreProvider>
      </body>
    </html>
  );
}
