import Link from "next/link";
import { Menu, Package2, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

import Cart from "./cart";
import Logo from "./logo";
import TopNav from "./TopNav";
import Contact from "./contact";
import { Separator } from "../ui/separator";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function Navbar() {
  return (
    <section className="sticky top-0 z-50">
      <header className="bg-black grid grid-flow-row md:h-32 py-2 md:grid-flow-col place-content-evenlyr content-center gap-2">
        <Logo />
        <form className="flex justify-center items-center rounded border m-auto w-[98%]">
          <Select>
            <SelectTrigger className="w-48">
              <SelectValue placeholder="Categories" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Fruits</SelectLabel>
                <SelectItem value="apple">Apple</SelectItem>
                <SelectItem value="banana">Banana</SelectItem>
                <SelectItem value="blueberry">Blueberry</SelectItem>
                <SelectItem value="grapes">Grapes</SelectItem>
                <SelectItem value="pineapple">Pineapple</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>

          <Input
            type="text"
            placeholder="Search..."
            className="px-2 bottom-2 border-none rounded-none h-10"
          />
          <button
            type="submit"
            className="bg-[#feda00] h-10 text-sm text-black px-8 rounded-r-sm">
            Search
          </button>
        </form>
        <div className="grid grid-flow-col md:place-content-center place-content-between content-center my-auto">
          <div className="md:hidden">
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

          <div className="grid grid-flow-col content-center place-content-center">
            <Contact />
            <Cart />
          </div>
        </div>
      </header>
    </section>
  );
}
