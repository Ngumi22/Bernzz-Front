"use client";
import { useState } from "react";

interface PaymentProps {
  nextStep: () => void;
  prevStep: () => void;
}

export default function Payment({ nextStep, prevStep }: PaymentProps) {
  const [paymentDetails, setPaymentDetails] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    nextStep();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <h2 className="text-2xl font-bold mb-4">Payment Details</h2>
      <div>
        <label htmlFor="payment" className="block">
          Credit Card Number
        </label>
        <input
          type="text"
          id="payment"
          className="w-full p-2 border rounded"
          value={paymentDetails}
          onChange={(e) => setPaymentDetails(e.target.value)}
        />
      </div>
      <div className="flex justify-between">
        <button
          type="button"
          onClick={prevStep}
          className="px-4 py-2 bg-gray-500 text-white rounded">
          Back
        </button>
        <button
          type="submit"
          className="px-4 py-2 bg-blue-500 text-white rounded">
          Next
        </button>
      </div>
    </form>
  );
}
