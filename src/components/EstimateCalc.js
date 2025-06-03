"use client"

import { useState } from "react";
import Card from "./Card";

const EstimateCalc = () => {
  const [area, setArea] = useState("");
  const [length, setLength] = useState("");
  const [width, setWidth] = useState("");
  const [usage, setUsage] = useState("");
  const [estimate, setEstimate] = useState("");
  const [error, setError] = useState("");

  const costPerSF = [
    { max: 5000, rate: 7.4 },
    { max: 10000, rate: 6.7 },
    { max: 15000, rate: 5.57 },
    { max: 20000, rate: 5.1 },
    { max: 25000, rate: 5.0 },
    { max: Infinity, rate: 4.79 },
  ];

  const handleCalculation = () => {
    setError("");
    let squareFeet = 0;

    if (area) {
      squareFeet = parseFloat(area);
    } else if (length && width) {
      squareFeet = parseFloat(length) * parseFloat(width);
    } else {
      setError("Please enter area or length & width.");
      return;
    }

    if (squareFeet <= 0) {
      setError("Area cannot be zero or negative.");
      return;
    }

    let selectedRate = costPerSF.find((entry) => squareFeet < entry.max).rate;

    let multiplier = 1;
    if (usage === "light") multiplier = 0.9;
    if (usage === "heavy") multiplier = 1.1;

    let baseCost = squareFeet * selectedRate * multiplier;
    let lowEstimate = Math.round(baseCost * 0.9);
    let highEstimate = Math.round(baseCost * 1.1);

    setEstimate(`$${lowEstimate.toLocaleString()} - $${highEstimate.toLocaleString()}`);
  };

  return (
    <section className="flex items-center justify-center bg-white sm:p-8">
      <Card>
        {/* Left Section: Introduction */}
        <div className="w-full mid:w-1/2 flex flex-col my-6">
          <h1 className="text-4xl sm:text-6xl font-bold text-black mb-4 font-alfarn tracking-[-3px]">
            GET A <span className="text-cyan-950">ROUGH ESTIMATE</span>
          </h1>
          <p className="text-start mx-2 font-kumbh_sans">
            Use our quick estimate calculator to get a rough price range for your project. Enter the square footage or dimensions and select the usage type.
          </p>
        </div>

        {/* Right Section: Calculator Form */}
        <div className="w-fit mid:w-1/2 mid:mx-6 px-5">
          <h2 className="text-2xl sm:text-3xl font-bold text-black my-4 font-alfarn tracking-[-3px] mid:my-7">
            Estimate Your Cost
          </h2>
          <form className="space-y-4">
            {/* Area Input */}
            <div>
              <label className="block text-black font-bold mb-2">Total Area (sq ft) *</label>
              <input
                type="number"
                value={area}
                onChange={(e) => {
                  setArea(e.target.value);
                  setLength("");
                  setWidth("");
                }}
                placeholder="Enter total square footage"
                className="w-full border border-gray-300 p-2"
              />
            </div>

            {/* Length & Width Inputs */}
            <div className="flex gap-2">
              <div className="flex-1">
                <label className="block text-black font-bold mb-2">Length (ft)</label>
                <input
                  type="number"
                  value={length}
                  onChange={(e) => {
                    setLength(e.target.value);
                    setArea("");
                  }}
                  placeholder="Enter length"
                  className="w-full border border-gray-300 p-2"
                />
              </div>
              <div className="flex-1">
                <label className="block text-black font-bold mb-2">Width (ft)</label>
                <input
                  type="number"
                  value={width}
                  onChange={(e) => {
                    setWidth(e.target.value);
                    setArea("");
                  }}
                  placeholder="Enter width"
                  className="w-full border border-gray-300 p-2"
                />
              </div>
            </div>

            {/* Usage Type */}
            <div>
              <label className="block text-black font-bold mb-2">How much</label>
              <select
                value={usage}
                onChange={(e) => setUsage(e.target.value)}
                className="w-full border border-gray-300 p-2"
              >
                <option value="" disabled>Select thickness</option>
                <option value="light">light (2-3 inches)</option>
                <option value="frequent">medium (4 inches)</option>
                <option value="heavy">heavy (6- 8 inches)</option>
              </select>
            </div>

            {/* Error Message */}
            {error && <p className="text-red-500">{error}</p>}

            {/* Estimate Output */}
            {estimate && (
              <p className="mt-4 text-lg font-bold text-cyan-950">
                Estimated Cost: {estimate}
              </p>
            )}

            {/* Calculate Button */}
            <div>
              <button
                type="button"
                onClick={handleCalculation}
                className="bg-cyan-950 text-white font-bold py-2 px-4 w-32 hover:bg-cyan-700"
              >
                Calculate
              </button>
            </div>
          </form>
        </div>
      </Card>
    </section>
  );
};

export default EstimateCalc;
