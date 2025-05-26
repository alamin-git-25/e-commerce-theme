"use client";

import { CheckCircle } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function OrderSuccess({ orderId = "100191" }) {
    return (
        <div className="flex flex-col items-center justify-center min-h-[60vh] text-center">
            {/* Success Icon */}
            <CheckCircle className="text-green-500 w-20 h-20" />

            {/* Success Message */}
            <h2 className="text-2xl font-semibold mt-4">Order Placed Successfully!</h2>
            <p className="text-gray-600 mt-2">
                Your payment has been successfully processed and your order -{" "}
                <span className="font-semibold">{orderId}</span> has been placed.
            </p>

            {/* Buttons */}
            <div className="mt-6 space-y-3">
                <Link href="/shop">
                    <p className="text-blue-600 hover:underline cursor-pointer">Continue Shopping</p>
                </Link>
            </div>
        </div>
    );
}
