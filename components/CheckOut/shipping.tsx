"use client";
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import CartItems from "./CartItems";
import OrderItems from "./Order";
import Link from "next/link";
import { Button } from "../ui/button";

interface ShippingProps {
  nextStep: () => void;
  prevStep: () => void;
}

export default function Shipping() {
  const [address, setAddress] = useState("");

  return (
    <Card className="grid grid-cols-1 md:grid-cols-3 gap-2 p-4">
      <Card className="col-span-2 p-8">
        <h1 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
          Checkout
        </h1>

        <div className="mb-6">
          <h2 className="text-xl font-semibold text-gray-700 dark:text-white mb-2">
            Shipping Address
          </h2>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="first_name"
                className="block text-gray-700 dark:text-white mb-1">
                First Name
              </label>
              <input
                type="text"
                id="first_name"
                className="w-full rounded-lg border py-2 px-3 dark:bg-gray-700 dark:text-white dark:border-none"
              />
            </div>
            <div>
              <label
                htmlFor="last_name"
                className="block text-gray-700 dark:text-white mb-1">
                Last Name
              </label>
              <input
                type="text"
                id="last_name"
                className="w-full rounded-lg border py-2 px-3 dark:bg-gray-700 dark:text-white dark:border-none"
              />
            </div>
          </div>

          <div className="mt-4">
            <label
              htmlFor="address"
              className="block text-gray-700 dark:text-white mb-1">
              Address
            </label>
            <input
              type="text"
              id="address"
              className="w-full rounded-lg border py-2 px-3 dark:bg-gray-700 dark:text-white dark:border-none"
            />
          </div>

          <div className="mt-4">
            <label
              htmlFor="city"
              className="block text-gray-700 dark:text-white mb-1">
              City
            </label>
            <input
              type="text"
              id="city"
              className="w-full rounded-lg border py-2 px-3 dark:bg-gray-700 dark:text-white dark:border-none"
            />
          </div>

          <div className="grid grid-cols-2 gap-4 mt-4">
            <div>
              <label
                htmlFor="state"
                className="block text-gray-700 dark:text-white mb-1">
                State
              </label>
              <input
                type="text"
                id="state"
                className="w-full rounded-lg border py-2 px-3 dark:bg-gray-700 dark:text-white dark:border-none"
              />
            </div>
            <div>
              <label
                htmlFor="zip"
                className="block text-gray-700 dark:text-white mb-1">
                ZIP Code
              </label>
              <input
                type="text"
                id="zip"
                className="w-full rounded-lg border py-2 px-3 dark:bg-gray-700 dark:text-white dark:border-none"
              />
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-gray-700 dark:text-white mb-2">
            Payment Information
          </h2>
          <div className="mt-4">
            <label
              htmlFor="card_number"
              className="block text-gray-700 dark:text-white mb-1">
              Card Number
            </label>
            <input
              type="text"
              id="card_number"
              className="w-full rounded-lg border py-2 px-3 dark:bg-gray-700 dark:text-white dark:border-none"
            />
          </div>

          <div className="grid grid-cols-2 gap-4 mt-4">
            <div>
              <label
                htmlFor="exp_date"
                className="block text-gray-700 dark:text-white mb-1">
                Expiration Date
              </label>
              <input
                type="text"
                id="exp_date"
                className="w-full rounded-lg border py-2 px-3 dark:bg-gray-700 dark:text-white dark:border-none"
              />
            </div>
            <div>
              <label
                htmlFor="cvv"
                className="block text-gray-700 dark:text-white mb-1">
                CVV
              </label>
              <input
                type="text"
                id="cvv"
                className="w-full rounded-lg border py-2 px-3 dark:bg-gray-700 dark:text-white dark:border-none"
              />
            </div>
          </div>
        </div>

        <div className="mt-4">
          <label
            htmlFor="card_number"
            className="block text-gray-700 dark:text-white mb-1">
            Order Notes
          </label>
          <input
            type="text"
            id="card_number"
            className="w-full rounded-lg border py-2 px-3 dark:bg-gray-700 dark:text-white dark:border-none"
          />
        </div>
      </Card>
      <div className="col-span-1">
        <OrderItems />
      </div>
    </Card>
  );
}
