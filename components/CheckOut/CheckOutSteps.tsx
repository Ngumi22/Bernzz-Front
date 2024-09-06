interface CheckoutStepsProps {
  currentStep: number;
}

const steps = ["Cart", "User Info", "Shipping", "Payment", "Confirm"];

export default function CheckoutSteps({ currentStep }: CheckoutStepsProps) {
  return (
    <div className="flex justify-between mb-8">
      {steps.map((step, index) => (
        <div
          key={index}
          className={`w-1/4 text-center ${
            index + 1 <= currentStep ? "text-blue-500" : "text-gray-400"
          }`}>
          <div className="mb-2">
            <div
              className={`w-8 h-8 rounded-full mx-auto ${
                index + 1 <= currentStep ? "bg-blue-500" : "bg-gray-200"
              }`}>
              {index + 1}
            </div>
          </div>
          <div>{step}</div>
        </div>
      ))}
    </div>
  );
}
