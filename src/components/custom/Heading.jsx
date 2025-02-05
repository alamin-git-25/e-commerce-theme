

"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export function SectionHeader({ title, tabs = [], onTabChange, onPrev, onNext }) {
    const [activeTab, setActiveTab] = useState(tabs[0] || "Default Tab");

    const handleTabChange = (tab) => {
        setActiveTab(tab);
        if (onTabChange) onTabChange(tab); // Trigger callback if provided
    };

    return (
        <div className="flex flex-col lg:flex-row items-center justify-between my-10">
            <div className="flex flex-col mb-4 lg:mb-0">
                <div className="flex items-center space-x-4">
                    <h2 className="text-xl sm:text-4xl font-semibold">
                        <span className="text-blue-600">{title.split(" ")[0]}</span>{" "}
                        {title.split(" ").slice(1).join(" ")}
                    </h2>
                </div>
            </div>
            <span className="block h-0.5 w-1/2 bg-gray-300 lg:w-1/3"></span>
            {tabs.length > 0 && (
                <div className="flex space-x-4 mt-2 text-base sm:text-lg">
                    {tabs.map((tab) => (
                        <button
                            key={tab}
                            onClick={() => handleTabChange(tab)}
                            className={`${activeTab === tab
                                ? "text-blue-600 font-medium border-b-2 border-blue-600"
                                : "text-gray-500 hover:text-gray-700"
                                }`}
                        >
                            {tab}
                        </button>
                    ))}
                </div>
            )}
            {tabs.length === 0 && (
                <div className="flex gap-2 mt-4 lg:mt-0">
                    <button
                        onClick={onPrev}
                        className="bg-gray-200 p-2 rounded-full shadow-md hover:bg-gray-300 transition"
                    >
                        <ChevronLeft className="w-6 h-6 text-gray-700" />
                    </button>
                    <button
                        onClick={onNext}
                        className="bg-gray-200 p-2 rounded-full shadow-md hover:bg-gray-300 transition"
                    >
                        <ChevronRight className="w-6 h-6 text-gray-700" />
                    </button>
                </div>
            )}
        </div>

    );
}

