"use client";

import * as React from "react";
import Link from "next/link";

import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import CategoryList from "../categories";

export default function MenuCategories() {
  return (
    <NavigationMenu className="md:bg-black bg-[#21476b] hover:bg-[#feda00] md:my-2 md:rounded-md">
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="text-lg">
            All Categories
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="lg:flex w-screen gap-3 py-4 md:w-screen sm:grid-cols-2 md:grid-cols-2">
              <CategoryList />
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}
