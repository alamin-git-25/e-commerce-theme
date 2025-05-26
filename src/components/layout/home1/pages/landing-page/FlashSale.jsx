"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

export default function FlashSaleCountdown({ saleEndTime }) {
    const calculateTimeLeft = () => {
        const difference = new Date(saleEndTime) - new Date();
        if (difference > 0) {
            return {
                hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((difference / (1000 * 60)) % 60),
                seconds: Math.floor((difference / 1000) % 60),
            };
        }
        return { hours: 0, minutes: 0, seconds: 0 };
    };

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);
        return () => clearInterval(timer);
    }, []);

    return (
        <Card className="p-6 bg-red-500 text-white text-center max-w-md mx-auto rounded-2xl shadow-lg">
            <h2 className="text-2xl font-bold mb-4">🔥 Flash Sale Ends In 🔥</h2>
            <CardContent className="flex justify-center gap-4 text-4xl font-semibold">
                {["hours", "minutes", "seconds"].map((unit, index) => (
                    <motion.div
                        key={unit}
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.5, ease: "easeInOut" }}
                        className="bg-white text-red-600 px-4 py-2 rounded-lg shadow-md"
                    >
                        {String(timeLeft[unit]).padStart(2, "0")}
                        <span className="block text-sm">{unit.toUpperCase()}</span>
                    </motion.div>
                ))}
            </CardContent>
        </Card>
    );
}
