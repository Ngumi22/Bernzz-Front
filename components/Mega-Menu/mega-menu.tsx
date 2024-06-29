import Link from "next/link";
import MenuCategories from "./categories";

export default function MegaMenu() {
  return (
    <section className="flex md:space-x-14 items-center bg-white h-14 text-black w-full md:px-8">
      <MenuCategories />
      <ul className="hidden md:flex justify-between items-center space-x-12 text-sm">
        <Link href="#">Home</Link>
        <Link href="#">Catalog</Link>
        <Link href="#">About Us</Link>
        <Link href="#">Contact Us</Link>
      </ul>
    </section>
  );
}
