"use client";

import { useState } from "react";
import Container from "../../../../../custom/Container";
import { InputField } from "../../../../../custom/InputFiled";
import { Loader2 } from "lucide-react";
import Image from "next/image";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"; // Importing ShadCN Select

export default function Checkout() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState("");
    const [city, setCity] = useState("");
    const [paymentMethod, setPaymentMethod] = useState("cod");
    const carts = useSelector(store => store.cart.items);

    const [loading, setLoading] = useState(false);
    const router = useRouter();

    const totalAmount = carts?.reduce((total, item) => total + (item?.price * item?.quantity), 0);

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);

        setTimeout(() => {
            setLoading(false);
            router.push('/checkout/order-success')
        }, 2000);
    };

    return (
        <Container className="mt-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Billing & Shipping Info Section */}
                <section className="bg-card shadow-lg rounded-lg p-6 space-y-4">
                    <h3 className="text-2xl font-semibold">Billing & Shipping Information</h3>
                    <form className="space-y-4" onSubmit={handleSubmit}>
                        <InputField id="full-name" label="Full Name" value={name} placeholder="Enter your full name" onChange={(e) => setName(e.target.value)} />
                        <InputField id="email" label="Email Address" value={email} placeholder="Enter your email" onChange={(e) => setEmail(e.target.value)} />
                        <InputField id="phone" label="Phone Number" value={phone} placeholder="Enter your phone number" onChange={(e) => setPhone(e.target.value)} />
                        <InputField id="address" label="Address" value={address} placeholder="Enter your address" onChange={(e) => setAddress(e.target.value)} />
                        <InputField id="city" label="City" value={city} placeholder="Enter your city" onChange={(e) => setCity(e.target.value)} />

                        {/* ShadCN UI Payment Method Dropdown */}
                        <div className="">
                            <label className="block text-gray-700 dark:text-gray-300 font-medium">Payment Method</label>
                            <Select className="mt-1 " value={paymentMethod} onValueChange={setPaymentMethod}>
                                <SelectTrigger className="w-full border  dark:border-gray-600 rounded-md p-2">
                                    <SelectValue placeholder="Select Payment Method" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="cod">Cash on Delivery</SelectItem>
                                    <SelectItem value="paypal">PayPal</SelectItem>
                                    <SelectItem value="sslcommerz">SSLCommerz</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>

                        <div className="mt-8 flex justify-end">
                            {loading ? (
                                <button type="submit" className="px-8 flex gap-4 justify-center items-center py-3 bg-button text-white text-lg font-medium rounded-md hover:bg-blue-700 transition-all">
                                    <Loader2 className="animate-spin" />
                                    Processing...
                                </button>
                            ) : (
                                <button type="submit" className="px-8 flex gap-4 justify-center items-center py-3 bg-button text-white text-lg font-medium rounded-md hover:bg-blue-700 transition-all">
                                    Place Order
                                </button>
                            )}
                        </div>
                    </form>
                </section>

                {/* Product Details Section */}
                <section className="bg-card shadow-lg rounded-lg p-6 space-y-4">
                    <h3 className="text-2xl font-semibold text-gray-800">Product Details</h3>
                    <div className="space-y-4 max-h-[60vh] scroll-thin overflow-y-scroll">
                        {carts?.map((item, index) => <ProductCard key={index} item={item} />)}
                    </div>

                    {/* Total Amount */}
                    <div className="flex justify-end gap-6 text-lg font-semibold mt-4">
                        <span>Total:</span>
                        <span>${totalAmount.toFixed(2)}</span>
                    </div>
                </section>
            </div>
        </Container>
    );
}

function ProductCard({ item }) {
    return (
        <div className="flex items-center gap-4 bg-white dark:bg-gray-600 p-4 mr-5 rounded-lg border shadow-md">
            <Image width={200} height={200} src={item?.image} alt={item.name} className="lg:w-40 lg:h-40 w-24 h-24 object-contain rounded-md border" />
            <div className="flex-1">
                <h4 className="text-lg font-semibold">{item?.name}</h4>
                <p className="text-sm">{item?.category}</p>
                <div className="flex gap-2 mt-2">
                    <span className="font-medium">Price:</span>
                    <span>${item?.price}</span>
                </div>
                <div className="flex gap-2">
                    <span className="font-medium">Quantity:</span>
                    <span>{item.quantity}</span>
                </div>
                <div className="flex gap-2">
                    <span className="font-medium">Subtotal:</span>
                    <span>${(item.price * item.quantity).toFixed(2)}</span>
                </div>
            </div>
        </div>
    );
}
