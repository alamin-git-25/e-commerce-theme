"use client"
import React, { useState } from "react";

const PriceRangeSlider = () => {
    const [minPrice, setMinPrice] = useState(0);
    const [maxPrice, setMaxPrice] = useState(2448);
    const minLimit = 0;
    const maxLimit = 5000;

    const handleMinChange = (event) => {
        const value = Number(event.target.value);
        if (value < maxPrice) setMinPrice(value);
    };

    const handleMaxChange = (event) => {
        const value = Number(event.target.value);
        if (value > minPrice) setMaxPrice(value);
    };

    return (
        <div className="mt-5 bg-white dark:bg-gray-700 p-4 border rounded shadow-sm">
            <h2 className="text-lg font-semibold mb-3">Price</h2>
            <div className="relative h-6 flex items-center justify-center">
                {/* Track */}
                <div className="absolute w-full h-1 bg-gray-300 rounded-full"></div>

                {/* Range Highlight */}
                <div
                    className="absolute h-1 bg-blue-500 rounded-full"
                    style={{
                        left: `${(minPrice / maxLimit) * 100}%`,
                        right: `${100 - (maxPrice / maxLimit) * 100}%`,
                    }}
                ></div>

                {/* Min Thumb */}
                <input
                    type="range"
                    min={minLimit}
                    max={maxLimit}
                    value={minPrice}
                    onChange={handleMinChange}
                    className="absolute w-full h-1 bg-transparent appearance-none pointer-events-auto z-10"
                    style={{
                        WebkitAppearance: "none",
                        appearance: "none",
                        pointerEvents: "all",
                    }}
                />

                {/* Max Thumb */}
                <input
                    type="range"
                    min={minLimit}
                    max={maxLimit}
                    value={maxPrice}
                    onChange={handleMaxChange}
                    className="absolute w-full h-1 bg-transparent appearance-none pointer-events-auto z-10"
                    style={{
                        WebkitAppearance: "none",
                        appearance: "none",
                        pointerEvents: "all",
                    }}
                />
            </div>

            {/* Price Labels */}
            <div className="flex justify-between mt-4">
                <span className="text-gray-700">${minPrice.toFixed(2)}</span>
                <span className="text-gray-700">${maxPrice.toFixed(2)}</span>
            </div>
        </div>
    );
};

export default PriceRangeSlider;
