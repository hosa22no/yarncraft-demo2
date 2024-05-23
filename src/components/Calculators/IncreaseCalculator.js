"use client";

// Component to help calculate increase stitches

import { useState } from 'react';

function IncreaseCalculator() {
  const [totalStitches, setTotalStitches] = useState(0);
  const [increaseStitches, setIncreaseStitches] = useState(0);
  const [result, setResult] = useState('');

  const handleCalculate = () => {
    const increasePattern = `k${increaseStitches + 1}, (k${Math.floor(totalStitches / (increaseStitches + 1)) - 1}, m1) ${Math.floor(increaseStitches / 2)} gånger.`;
    setResult(`Öka jämnt över nästa runda: ${increasePattern}`);
  };

  return (
    <div className="max-w-xs bg-white shadow-lg rounded-lg overflow-hidden m-4 bg-gray-100 dark:bg-custom-blue dark:text-white">
      <div className="p-4">
        <label className="block mb-2">
          Jag har totalt
          <input type="number" value={totalStitches} onChange={(e) => setTotalStitches(parseInt(e.target.value))} className="form-input mt-1 block w-full text-black dark:text-white bg-white dark:bg-gray-700" />
          maskor och jag vill öka med
          <input type="number" value={increaseStitches} onChange={(e) => setIncreaseStitches(parseInt(e.target.value))} className="form-input mt-1 block w-full text-black dark:text-white bg-white dark:bg-gray-700" />
          maskor.
        </label>
        <button onClick={handleCalculate} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">
          Beräkna ökningen
        </button>
        <p className="mt-4">{result}</p>
      </div>
    </div>
  );
}

export default IncreaseCalculator;
