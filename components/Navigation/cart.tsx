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
import { useEffect } from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Trash2 } from "lucide-react";
export default function Cart() {
  const cart = useAppSelector((state) => state.cart);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getTotals());
  }, [cart.cartItems, dispatch]);

  const handleRemoveFromCart = (cartItem: any) => {
    dispatch(removeFromCart(cartItem));
  };
  const handleDecreaseCart = (cartItem: any) => {
    dispatch(decreaseCart(cartItem));
  };
  const handleIncreaseCart = (cartItem: any) => {
    dispatch(addToCart(cartItem));
  };
  const handleClearCart = () => {
    dispatch(clearCart(cart));
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          className="flex items-center space-x-3 rounded-none">
          <div className="border-2 border-[#feda00] rounded-full p-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-shopping-cart stroke-[#feda00]">
              <circle cx="8" cy="21" r="1" />
              <circle cx="19" cy="21" r="1" />
              <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
            </svg>
          </div>

          <div className="text-white text-start text-sm flex flex-col">
            <p className="">Shopping Cart</p>
            <p className="">{cart.cartTotalQuantity} Products</p>
          </div>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-96 mr-5">
        <DropdownMenuLabel className="text-center font-semibold text-xl">
          Shopping Bag
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <ScrollArea className="h-96 rounded-md p-4">
          {cart.cartItems.length === 0 ? (
            <div className="text-center">
              <p className="font-semibold my-4">Cart is empty</p>
              <Link className="flex justify-center gap-2 items-center" href="/">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="fill-blue-500"
                  className="bi bi-arrow-left fill-blue-500"
                  viewBox="0 0 16 16">
                  <path
                    fillRule="evenodd"
                    d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8"
                  />
                </svg>
                <p>Start Shopping</p>
              </Link>
            </div>
          ) : (
            <div>
              {cart.cartItems?.map((cartItem: any) => (
                <div
                  className="flex justify-between items-center my-2 border-b py-2 font-semibold"
                  key={cartItem.id}>
                  <Image
                    className="h-auto"
                    src={`data:image/jpeg;base64,${cartItem.images.main}`}
                    alt={cartItem.name}
                    height={80}
                    width={80}
                  />
                  <div className="space-y-6">
                    <div className="space-y-2">
                      <p>{cartItem.name}</p>
                      <p className="">Ksh {cartItem.price}</p>
                    </div>
                    <div className="grid grid-flow-col gap-2 py-2 px-3 border border-black rounded">
                      <button onClick={() => handleDecreaseCart(cartItem)}>
                        -
                      </button>
                      <p className="text-center">{cartItem.cartQuantity}</p>
                      <button onClick={() => handleIncreaseCart(cartItem)}>
                        +
                      </button>
                    </div>
                  </div>
                  <div className="grid space-y-8">
                    <p className="place-self-end">
                      Ksh {cartItem.price * cartItem.cartQuantity}
                    </p>
                    <button
                      className="text-red-700 place-self-end relative group/item"
                      onClick={() => handleRemoveFromCart(cartItem)}>
                      <Trash2
                        size={16}
                        strokeWidth={2}
                        className="stroke-1 stroke-black roup-hover/item:stroke-red"
                      />

                      <p className="absolute top-0 bottom-0 right-5 font-normal invisible group-hover/item:visible">
                        Remove
                      </p>
                    </button>
                  </div>
                </div>
              ))}

              <div className="flex justify-between items-center">
                <button
                  className="border px-4 py-2"
                  onClick={() => handleClearCart()}>
                  Clear Cart
                </button>
                <div className="subtotal flex justify-between items-center gap-x-4 my-4">
                  <p className="font-bold">Subtotal:</p>
                  <p className="font-bold">Ksh {cart.cartTotalAmount}.00</p>
                </div>
              </div>
              <div className="flex justify-between items-center text-sm text-center my-2">
                <Link
                  href="/"
                  className="px-4 py-2 border border-blue-700 rounded  text-blue-700">
                  Continue Shopping
                </Link>
                <Link
                  href="/Checkout"
                  className="px-4 py-2 bg-blue-700 rounded text-white">
                  Proceed to Checkout
                </Link>
              </div>
            </div>
          )}
        </ScrollArea>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
