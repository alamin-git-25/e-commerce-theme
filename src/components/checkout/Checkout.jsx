"use client";

import { useState } from "react";
import Container from "../custom/Container";
import { InputField } from "../custom/InputFiled";
import { Loader2 } from "lucide-react";
import Image from "next/image";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";


export default function Checkout() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState("");
    const [city, setCity] = useState("");
    const [loading, setLoading] = useState(false)
    const router = useRouter()
    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
        // Simulate payment processing...
        setTimeout(() => {
            setLoading(false);
            toast.success("Order Pleced!");
        }, 2000);
        router.push('/payment-getway')
    };
    return (
        <Container className="mt-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Billing & Shipping Info Section */}
                <section className="bg-card shadow-lg rounded-lg p-6 space-y-4">
                    <h3 className="text-2xl font-semibold ">Billing & Shipping Information</h3>
                    <form className="space-y-4" onSubmit={handleSubmit}>
                        <InputField
                            id="full-name"
                            label="Full Name"
                            value={name}
                            placeholder="Enter your full name"
                            onChange={(e) => setName(e.target.value)}
                        />
                        <InputField
                            id="email"
                            label="Email Address"
                            value={email}
                            placeholder="Enter your email"
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <InputField
                            id="phone"
                            label="Phone Number"
                            value={phone}
                            placeholder="Enter your phone number"
                            onChange={(e) => setPhone(e.target.value)}
                        />
                        <InputField
                            id="address"
                            label="Address"
                            value={address}
                            placeholder="Enter your address"
                            onChange={(e) => setAddress(e.target.value)}
                        />
                        <InputField
                            id="city"
                            label="City"
                            value={city}
                            placeholder="Enter your city"
                            onChange={(e) => setCity(e.target.value)}
                        />
                        <div className="mt-8 flex justify-end">
                            {
                                loading ? <button type="submit" className="px-8 flex gap-4 justify-center items-center py-3 bg-blue-600 text-white text-lg font-medium rounded-md hover:bg-blue-700 transition-all">
                                    <Loader2 className="animate-spin" />
                                    Proccesing...
                                </button> : <button type="submit" className="px-8 flex gap-4 justify-center items-center py-3 bg-blue-600 text-white text-lg font-medium rounded-md hover:bg-blue-700 transition-all">
                                    Plece Order
                                </button>
                            }
                        </div>
                    </form>
                </section>

                {/* Product Details Section */}
                <section className="bg-card shadow-lg rounded-lg p-6 space-y-4">
                    <h3 className="text-2xl font-semibold text-gray-800">Product Details</h3>
                    <div className="space-y-4 max-h-[60vh] scroll-thin overflow-y-scroll">

                        <ProductCard />

                    </div>
                    {/* Total Amount */}
                    <div className="flex justify-end gap-6 text-lg font-semibold  mt-4">
                        <span>Total:</span>
                        <span>$120</span>
                    </div>
                </section>
            </div>
        </Container>
    );
}



function ProductCard({ item }) {
    return (
        <div className="flex items-center gap-4 bg-white dark:bg-gray-600 p-4 mr-5 rounded-lg border shadow-md">
            <Image
                width={200}
                height={200}
                src={'/p.jpg'}
                alt=""
                className="lg:w-40 lg:h-40 w-24 h-24 object-contain rounded-md border"
            />
            <div className="flex-1">
                <h4 className="text-lg font-semibold ">Name</h4>
                <p className="text-sm ">Category</p>
                <div className="flex gap-2  mt-2">
                    <span className="font-medium">Price:</span>
                    <span>$1120</span>
                </div>
                <div className="flex gap-2 ">
                    <span className="font-medium">Quantity:</span>
                    <span>52</span>
                </div>
                <div className="flex gap-2 ">
                    <span className="font-medium">Subtotal:</span>
                    <span>$152</span>
                </div>
            </div>
        </div>
    );
}