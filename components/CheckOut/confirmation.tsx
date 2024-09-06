interface ConfirmationProps {
  prevStep: () => void;
}

export default function Confirmation({ prevStep }: ConfirmationProps) {
  const handleConfirm = () => {
    alert("Order confirmed!");
  };

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold mb-4">Confirm Order</h2>
      <p>Review your order details before confirming.</p>
      <div className="flex justify-between">
        <button
          type="button"
          onClick={prevStep}
          className="px-4 py-2 bg-gray-500 text-white rounded">
          Back
        </button>
        <button
          type="button"
          onClick={handleConfirm}
          className="px-4 py-2 bg-green-500 text-white rounded">
          Confirm Order
        </button>
      </div>
    </div>
  );
}
