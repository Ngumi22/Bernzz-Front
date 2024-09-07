"use client";
import { useAppSelector, useAppDispatch } from "@/lib/hooks";
import { getTotals } from "@/lib/slices/cartSlice";
import { useState, useEffect } from "react";

export default function WhatsAppOrder() {
  const [mounted, setMounted] = useState(false);
  const cart = useAppSelector((state) => state.cart);
  const dispatch = useAppDispatch();

  useEffect(() => {
    setMounted(true);
    if (typeof window !== "undefined") {
      dispatch(getTotals());
    }
  }, [cart.cartItems, dispatch]);

  const handleWhatsapp = () => {
    const cartItemsMessage = cart.cartItems
      .map((cartItem: any) => {
        return `Product: ${cartItem.name}%0AQuantity: ${
          cartItem.cartQuantity
        }%0APrice: Ksh ${cartItem.price}
        %0ATotal: Ksh ${cartItem.price * cartItem.cartQuantity}.00`;
      })
      .join("%0A%0A"); // Joins each cart item with two new lines for spacing

    const totalMessage = `Total: Ksh ${cart.cartTotalAmount}`;

    const url = `https://wa.me/?text=I%20am%20interested%20in%20the%20following%20items:%0A%0A${cartItemsMessage}%0A%0A${totalMessage}`;
    window.open(url, "_blank");
  };

  return (
    <div className="py-3 border border-green-600 bg-green-500 rounded text-black w-56 mx-auto hover:bg-white hover:text-green-500">
      <p
        onClick={handleWhatsapp}
        className="flex justify-center items-center gap-x-2 ">
        Order on Whatsapp
      </p>
    </div>
  );
}
