"use client";
// Component to help calculate decrease stitches
import { useState } from 'react';

function DecreaseCalculator() {
  const [totalStitches, setTotalStitches] = useState(0);
  const [decreaseStitches, setDecreaseStitches] = useState(0);
  const [result, setResult] = useState('');

  const handleCalculate = () => {
    const decreasePattern = `k${Math.floor(totalStitches / (decreaseStitches + 1))}, (k2tog${Math.floor(totalStitches / (decreaseStitches + 1)) - 1}) ${decreaseStitches} gånger.`;
    setResult(`Minska antalet jämnt över nästa varv: ${decreasePattern}`);
  };

  return (
    <div className="max-w-xs bg-white shadow-lg rounded-lg overflow-hidden m-4 bg-gray-100 dark:bg-custom-blue dark:text-white">
      <div className="p-4">
        <label className="block mb-2">
          Jag har totalt
          <input type="number" value={totalStitches} onChange={(e) => setTotalStitches(parseInt(e.target.value))} className="form-input mt-1 block w-full text-black dark:text-white bg-white dark:bg-gray-700" />
          maskor och jag vill minska
          <input type="number" value={decreaseStitches} onChange={(e) => setDecreaseStitches(parseInt(e.target.value))} className="form-input mt-1 block w-full text-black dark:text-white bg-white dark:bg-gray-700" />
          maskor.
        </label>
        <button onClick={handleCalculate} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">
          Beräkna minskning
        </button>
        <p className="mt-4">{result}</p>
      </div>
    </div>
  );
}

export default DecreaseCalculator;
