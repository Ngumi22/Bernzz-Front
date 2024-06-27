import Link from "next/link";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Cart from "@/components/Navigation/cart";
import WishList from "./wishlist";
import Compare from "./compare";
import MegaMenu from "../Mega-Menu/mega-menu";

import Search from "../search";
import Image from "next/image";

export default function MainNav() {
  return (
    <div className="fixed w-screen flex flex-col z-50">
      <div className="bg-gray-500 h-10">
        <p>Marquee</p>
      </div>
      <header className="top-0 flex z-50 justify-between h-28 items-center gap-4 border-b bg-black px-4 md:px-8">
        <Image
          src="/logooo.png"
          alt="Bernzz Logo"
          width={250}
          height={250}
          priority
          className="object-contain h-52 w-52 overflow-hidden"
        />
        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant="outline"
              size="icon"
              className="shrink-0 md:hidden"
            >
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left">
            <Link className="text-2xl font-bold" href="/">
              Bernzz
            </Link>
            <nav className="grid gap-6 my-10">
              <Link
                href="#"
                className="hover:text-foreground text-md font-medium"
              >
                Dashboard
              </Link>
              <Link
                href="#"
                className="text-muted-foreground hover:text-foreground text-md font-medium"
              >
                Orders
              </Link>
              <Link
                href="#"
                className="text-muted-foreground hover:text-foreground text-md font-medium"
              >
                Products
              </Link>
              <Link
                href="#"
                className="text-muted-foreground hover:text-foreground text-md font-medium"
              >
                Customers
              </Link>
              <Link
                href="#"
                className="text-muted-foreground hover:text-foreground text-md font-medium"
              >
                Analytics
              </Link>
            </nav>
          </SheetContent>
        </Sheet>
        <div>
          <form className="ml-auto flex-1 sm:flex-initial">
            <div className="relative">
              <Search placeholder={"Search..."} />
            </div>
          </form>
        </div>
        <div className="flex items-center justify-center gap-1 md:gap-4">
          <Compare />
          <WishList />
          <Cart />
        </div>
      </header>

      <MegaMenu />
    </div>
  );
}
