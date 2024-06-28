import Link from "next/link";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import SearchBar from "../search-bar";

export default function Navv() {
  return (
    <div>
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon" className="shrink-0 md:hidden">
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
              className="hover:text-foreground text-md font-medium">
              Dashboard
            </Link>
            <Link
              href="#"
              className="text-muted-foreground hover:text-foreground text-md font-medium">
              Orders
            </Link>
            <Link
              href="#"
              className="text-muted-foreground hover:text-foreground text-md font-medium">
              Products
            </Link>
            <Link
              href="#"
              className="text-muted-foreground hover:text-foreground text-md font-medium">
              Customers
            </Link>
            <Link
              href="#"
              className="text-muted-foreground hover:text-foreground text-md font-medium">
              Analytics
            </Link>
          </nav>
        </SheetContent>
      </Sheet>
    </div>
  );
}
