"use client";
import { useState } from "react";
import CartItems from "@/components/CheckOut/CartItems";
import Shipping from "@/components/CheckOut/shipping";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function Checkout() {
  const [activeTab, setActiveTab] = useState("cart");
  const [agreedToTerms, setAgreedToTerms] = useState(false);
  const [orderConfirmed, setOrderConfirmed] = useState(false);

  const handleTabChange = (tabValue: string) => {
    if (tabValue === "confirmation" && (!agreedToTerms || !orderConfirmed)) {
      // Do nothing if terms are not agreed or order not confirmed
      return;
    }
    setActiveTab(tabValue);
  };

  const handleOrderConfirmation = () => {
    setOrderConfirmed(true);
    setActiveTab("confirmation");
  };

  return (
    <Tabs
      value={activeTab}
      onValueChange={handleTabChange}
      className="container my-4">
      <TabsList className="grid w-full grid-cols-3 gap-x-8 text-center">
        <TabsTrigger value="cart">Your Cart</TabsTrigger>
        <TabsTrigger value="checkout">Shipping and Checkout</TabsTrigger>
        <TabsTrigger
          value="confirmation"
          disabled={!orderConfirmed || !agreedToTerms}>
          Confirmation
        </TabsTrigger>
      </TabsList>

      <TabsContent value="cart">
        <CartItems onProceedToCheckout={() => setActiveTab("checkout")} />
      </TabsContent>

      <TabsContent value="checkout">
        <Card>
          <Shipping />
          <div className="mt-4">
            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                id="agree-terms"
                checked={agreedToTerms}
                onChange={(e) => setAgreedToTerms(e.target.checked)}
              />
              <Label htmlFor="agree-terms">
                I agree to the terms and conditions
              </Label>
            </div>
            <Button
              onClick={handleOrderConfirmation}
              disabled={!agreedToTerms}
              className="mt-4">
              Confirm Order
            </Button>
          </div>
        </Card>
      </TabsContent>

      <TabsContent value="confirmation">
        <Card>
          <CardHeader>
            <CardTitle>Confirmation</CardTitle>
            <CardDescription>
              Your order has been confirmed! Thank you for shopping with us.
            </CardDescription>
          </CardHeader>
        </Card>
      </TabsContent>
    </Tabs>
  );
}
