import IncreaseCalculator from "@/components/Calculators/IncreaseCalculator";
import DecreaseCalculator from "@/components/Calculators/DecreaseCalculator";

import Timer from "@/components/Tool/Timer";

export default function Tools() {
  return (
    <div className="mt-16 flex flex-col items-center justify-center min-h-screen bg-gray-100 dark:bg-custom-blue dark:text-white">
    <div className="flex flex-col md:flex-row md:space-x-8 space-y-8 md:space-y-0">
    <IncreaseCalculator />
    <DecreaseCalculator />
    <Timer />
  </div>
      
    </div>
  );
}
