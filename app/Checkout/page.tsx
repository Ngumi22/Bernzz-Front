"use client";

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
  return (
    <Tabs defaultValue="cart" className="container my-4">
      <TabsList className="grid w-full grid-cols-3 gap-x-8 text-center">
        <TabsTrigger value="cart">Your Cart</TabsTrigger>
        <TabsTrigger value="checkout">Shipping and Checkout</TabsTrigger>
        <TabsTrigger value="confirmation">Confirmation</TabsTrigger>
      </TabsList>
      <TabsContent value="cart">
        <CartItems />
      </TabsContent>
      <TabsContent value="checkout">
        <Card>
          <Shipping />
        </Card>
      </TabsContent>
      <TabsContent value="confirmation">
        <Card>
          <CardHeader>
            <CardTitle>Password</CardTitle>
            <CardDescription>
              Change your password here. After saving, you'll be logged out.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="space-y-1">
              <Label htmlFor="current">Current password</Label>
              <Input id="current" type="password" />
            </div>
            <div className="space-y-1">
              <Label htmlFor="new">New password</Label>
              <Input id="new" type="password" />
            </div>
          </CardContent>
          <CardFooter>
            <Button>Save password</Button>
          </CardFooter>
        </Card>
      </TabsContent>
    </Tabs>
  );
}
