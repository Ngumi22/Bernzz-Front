import Link from "next/link";
import { Menu, Package2, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

import Cart from "./cart";
import Logo from "./logo";
import TopNav from "./TopNav";
import Contact from "./contact";

export function Navbar() {
  return (
    <section className="sticky top-0 z-20">
      <TopNav />
      <div className="flex w-full flex-col">
        <header className="lg:flex h-36 justify-between items-center gap-2 border-b bg-black md:px-6">
          <Logo />
          <div className="flex justify-between items-center lg:gap-x-20 gap-4 my-2">
            <div className="md:flex flex-shrink">
              <form className="flex flex-row justify-center items-center">
                <select
                  id="pricingType"
                  name="pricingType"
                  className="md:w-36 h-10 focus:outline-none text-sm text-black px-1 md:px-3 py-0 md:py-1 tracking-wider">
                  <option value="All">Categories</option>
                  <option value="Freemium">Freemium</option>
                  <option value="Free">Free</option>
                  <option value="Paid">Paid</option>
                </select>
                <div className="flex">
                  <input
                    type="text"
                    placeholder="Searching..."
                    className="w-[20rem] px-3 h-10 focus:outline-none "
                  />
                  <button
                    type="submit"
                    className="bg-[#feda00] text-black px-2 md:px-3 py-0 md:py-1">
                    Search
                  </button>
                </div>
              </form>
            </div>
            <div className="order-first">
              <Sheet>
                <SheetTrigger asChild>
                  <Button
                    variant="outline"
                    size="icon"
                    className="shrink-0 md:hidden text-white">
                    <Menu className="h-8 w-8" />
                    <span className="sr-only">Toggle navigation menu</span>
                  </Button>
                </SheetTrigger>
                <SheetContent side="left">
                  <nav className="grid gap-6 text-lg font-medium">
                    <Link
                      href="#"
                      className="flex items-center gap-2 text-lg font-semibold">
                      <Package2 className="h-6 w-6" />
                      <span className="sr-only">Acme Inc</span>
                    </Link>
                    <Link href="#" className="hover:text-foreground">
                      Dashboard
                    </Link>
                    <Link
                      href="#"
                      className="text-muted-foreground hover:text-foreground">
                      Orders
                    </Link>
                    <Link
                      href="#"
                      className="text-muted-foreground hover:text-foreground">
                      Products
                    </Link>
                    <Link
                      href="#"
                      className="text-muted-foreground hover:text-foreground">
                      Customers
                    </Link>
                    <Link
                      href="#"
                      className="text-muted-foreground hover:text-foreground">
                      Analytics
                    </Link>
                  </nav>
                </SheetContent>
              </Sheet>
            </div>
            <div className="flex justify-end items-center gap-4">
              <Contact />
              <Cart />
            </div>
          </div>
        </header>
      </div>
    </section>
  );
}
