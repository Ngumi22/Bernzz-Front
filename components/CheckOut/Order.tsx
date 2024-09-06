"use client";
import * as React from "react";
import Link from "next/link";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import {
  removeFromCart,
  decreaseCart,
  addToCart,
  clearCart,
  getTotals,
} from "@/lib/slices/cartSlice";
import Image from "next/image";
import { useState, useEffect } from "react";
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
    <div className="mt-4 mb-8">
      {cart.cartItems?.map((cartItem: any) => (
        <div
          className="flex justify-between items-center my-2 border-b py-2 font-semibold"
          key={cartItem.id}>
          <Image
            className="h-auto"
            src={`data:image/jpeg;base64,${cartItem.images.main}`}
            alt={cartItem.name}
            height={40}
            width={40}
          />
          <div className="space-y-6">
            <p className="text-center">{cartItem.cartQuantity}</p>
          </div>
          <div className="grid space-y-8">
            <p className="place-self-end">
              Ksh {cartItem.price * cartItem.cartQuantity}.00
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
