"use client";
import * as React from "react";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { getTotals } from "@/lib/slices/cartSlice";
import { useState, useEffect } from "react";
import { Checkbox } from "@/components/ui/checkbox";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Button } from "../ui/button";
import { FaWhatsapp } from "react-icons/fa6";
import Link from "next/link";
import CartItems from "./CartItems";
import WhatsAppOrder from "./Whatsapp";

export default function OrderItems() {
  const [mounted, setMounted] = useState(false);
  const cart = useAppSelector((state) => state.cart);
  const dispatch = useAppDispatch();

  useEffect(() => {
    setMounted(true);
    if (typeof window !== "undefined") {
      dispatch(getTotals());
    }
  }, [cart.cartItems, dispatch]);

  if (!mounted) return null; // Ensure it renders consistently on both server and client

  return (
    <Card>
      <CardHeader>
        <CardTitle>Your Order</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          {cart.cartItems?.map((cartItem: any) => (
            <div key={cartItem.id}>
              <p>{cartItem.name}</p>
              <p>{cartItem.cartQuantity}</p>
              <p>Ksh {cartItem.price * cartItem.cartQuantity}.00</p>
            </div>
          ))}
        </div>

        <div className="flex items-center space-x-2">
          <Checkbox id="terms" />
          <label
            htmlFor="terms"
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
            Accept terms and conditions
          </label>
        </div>

        <div>
          <Button className="px-4 py-2 border border-black rounded text-white">
            Place Order
          </Button>
        </div>
        <WhatsAppOrder />
      </CardContent>
    </Card>
  );
}
