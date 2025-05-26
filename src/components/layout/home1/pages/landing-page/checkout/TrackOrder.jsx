// "use client";
// import { motion } from "framer-motion";
// import { ClipboardList, FileText, Truck, Package, Box } from "lucide-react";

// const steps = [
//     { label: "Order Placed", icon: ClipboardList, completed: true, date: "05:31 PM, 12 Feb 2025" },
//     { label: "Order Confirmed", icon: FileText, completed: false },
//     { label: "Preparing Shipment", icon: Truck, completed: false },
//     { label: "Order is on the way", icon: Package, completed: false },
//     { label: "Order Shipped", icon: Box, completed: false }
// ];

// export default function OrderTracking() {
//     return (
//         <div className="flex flex-col items-center py-8 bg-gray-100 min-h-screen">
//             <div className="flex items-center space-x-8 md:space-x-16">
//                 {steps.map((step, index) => (
//                     <div key={index} className="flex flex-col items-center">
//                         <motion.div
//                             className={`w-12 h-12 flex items-center justify-center rounded-full shadow-md transition-all ${step.completed ? "bg-blue-600 text-white" : "bg-gray-300 text-gray-500"}`}
//                             initial={{ scale: 0.8 }}
//                             animate={{ scale: 1 }}
//                         >
//                             <step.icon size={24} />
//                         </motion.div>
//                         <p className="mt-2 text-center text-sm font-semibold text-gray-700">{step.label}</p>
//                         {step.date && <p className="text-xs text-gray-500">{step.date}</p>}
//                     </div>
//                 ))}
//             </div>
//             <button className="mt-6 px-6 py-2 bg-blue-600 text-white rounded-md shadow hover:bg-blue-700 transition">View Order Details</button>
//         </div>
//     );
// }

"use client";
import { motion } from "framer-motion";
import { ClipboardList, FileText, Truck, Package, Box } from "lucide-react";

const steps = [
    { label: "Order Placed", icon: ClipboardList, completed: true, },
    { label: "Order Confirmed", icon: FileText, completed: false, },
    { label: "Preparing Shipment", icon: Truck, completed: false },
    { label: "Order is on the way", icon: Package, completed: false },
    { label: "Order Shipped", icon: Box, completed: true }
];

export default function OrderTracking() {
    return (
        <div className="flex flex-col items-center py-8 bg-gradient-to-r from-blue-50 to-blue-100 min-h-screen">
            <div className="relative flex items-center justify-center w-full px-8 max-w-4xl">
                {steps.map((step, index) => (
                    <div key={index} className="flex-1 flex flex-col items-center relative">
                        {/* Conditional Connecting Line */}
                        {index > 0 && (
                            <div
                                className={`absolute top-8 z-10 left-[-50%] w-full h-1 border-t-2 border-dashed transition-all ${steps[index - 1].completed
                                    ? "border-blue-600"
                                    : "border-gray-300"
                                    }`}
                            ></div>
                        )}
                        <motion.div
                            className={`w-16 h-16 z-20 flex items-center justify-center rounded-full shadow-xl border-4 transition-all ${step.completed
                                ? "bg-blue-600 text-white border-blue-600"
                                : "bg-white text-gray-500 border-gray-300 hover:border-gray-400"
                                }`}
                            initial={{ scale: 0.8 }}
                            animate={{ scale: 1 }}
                            whileHover={{ scale: 1.1 }}
                        >
                            <step.icon size={32} />
                        </motion.div>
                        <p className="mt-3 text-center text-lg font-semibold text-gray-800">{step.label}</p>
                        {step.date && <p className="text-xs text-gray-500">{step.date}</p>}
                    </div>
                ))}
            </div>
            <button className="mt-8 px-8 py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition-all">
                View Order Details
            </button>
        </div>
    );
}




