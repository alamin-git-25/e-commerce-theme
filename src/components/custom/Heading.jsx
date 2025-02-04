"use client"

import { useState } from "react";

export function SectionHeader({ title, tabs, onTabChange }) {
    const [activeTab, setActiveTab] = useState(tabs[0]); // Default to the first tab
    const handleTabChange = (tab) => {
        setActiveTab(tab);
        if (onTabChange) {
            onTabChange(tab); // Trigger callback if provided
        }
    };
    return (
        <div className="flex items-center h-20  justify-between  border-gray-200 pb-2">

            <h2 className="text-4xl font-semibold text-nowrap">
                <span className="text-blue-600">{title.split(" ")[0]}</span>{" "}
                {title.split(" ").slice(1).join(" ")}
            </h2>

            <span className="h-0.5 w-1/3 bg-slate-700"></span>
            <div className="flex items-center space-x-4 text-xl">
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
        </div>
    );
}