// "use client";

// import { useState } from "react";
// import { Card, CardContent } from "@/components/ui/card";
// import { Input } from "@/components/ui/input";
// import { Button } from "@/components/ui/button";
// import { CreditCard, Lock, User } from "lucide-react";

// export default function PaymentPage() {
//     const [name, setName] = useState('');
//     const [creditNumber, setCreditNumber] = useState('');
//     const [exp, setExp] = useState('');
//     const [cvv, setCvv] = useState('');

//     const formatCardNumber = (value) => {
//         return value.replace(/\D/g, "").replace(/(.{4})/g, "$1 ").trim();
//     };

//     const handleCardChange = (e) => {
//         setCreditNumber(formatCardNumber(e.target.value));
//     };

//     return (
//         <div className="flex justify-center items-center min-h-screen bg-gray-100">
//             <div className="bg-white p-6 rounded-2xl shadow-lg w-[400px] space-y-6">
//                 {/* Card Preview */}

//                 <Card className="relative bg-gradient-to-r from-blue-600 to-blue-800 p-5 text-white rounded-xl h-full w-full shadow-xl flex flex-col justify-between">
//                     <CardContent className="p-0 relative">
//                         {/* Visa Logo */}
//                         <div className="absolute top-4 right-4 text-xl font-bold tracking-widest">VISA</div>

//                         {/* Chip Design */}
//                         <div className="absolute top-6 left-4 bg-yellow-300 w-14 h-10 rounded-sm shadow-md"></div>

//                         {/* Card Number */}
//                         <p className="text-2xl tracking-widest mt-16 text-center font-mono">
//                             {creditNumber || "0000 0000 0000 0000"}
//                         </p>

//                         {/* Card Holder & Expiry */}
//                         <div className="flex justify-between mt-6 text-sm px-4">
//                             <span>CARD HOLDER</span>
//                             <span>VALID THRU</span>
//                         </div>
//                         <div className="flex justify-between  text-lg mt-1 px-4">
//                             <span className="uppercase">{name || 'your Name'}</span>
//                             <span>{exp || "12 / 35"}</span>
//                         </div>
//                     </CardContent>
//                 </Card>
//                 {/* Payment Form */}
//                 <div className="space-y-4">
//                     <div>
//                         <label className="block text-gray-600">Cardholder Name</label>
//                         <div className="relative">
//                             <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
//                             <Input
//                                 type="text"
//                                 value={name}
//                                 onChange={(e) => setName(e.target.value)}
//                                 className="pl-10"
//                             />
//                         </div>
//                     </div>

//                     <div>
//                         <label className="block text-gray-600">Card Number</label>
//                         <div className="relative">
//                             <CreditCard className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
//                             <Input
//                                 type="text"
//                                 value={creditNumber}
//                                 onChange={handleCardChange}
//                                 maxLength={19}
//                                 className="pl-10"
//                             />
//                         </div>
//                     </div>

//                     <div className="flex space-x-4">
//                         <div className="w-1/2">
//                             <label className="block text-gray-600">Expiration Date</label>
//                             <Input
//                                 type="text"
//                                 value={exp}
//                                 onChange={(e) => setExp(e.target.value)}
//                                 placeholder="MM/YY"
//                                 className="pl-3"
//                             />
//                         </div>
//                         <div className="w-1/2">
//                             <label className="block text-gray-600">CVV</label>
//                             <div className="relative">
//                                 <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
//                                 <Input
//                                     type="password"
//                                     value={cvv}
//                                     onChange={(e) => setCvv(e.target.value)}
//                                     maxLength={4}
//                                     className="pl-10"
//                                 />
//                             </div>
//                         </div>
//                     </div>
//                 </div>

//                 {/* Confirm Button */}
//                 <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
//                     Confirm
//                 </Button>
//             </div>
//         </div>
//     );
// }

"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { CreditCard, Loader2, Lock, User } from "lucide-react";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

export default function PaymentPage() {
    const [name, setName] = useState('');
    const [creditNumber, setCreditNumber] = useState('');
    const [exp, setExp] = useState('');
    const [cvv, setCvv] = useState('');

    const formatCardNumber = (value) => {
        return value.replace(/\D/g, "").replace(/(.{4})/g, "$1 ").trim();
    };

    const handleCardChange = (e) => {
        setCreditNumber(formatCardNumber(e.target.value));
    };
    const [loading, setLoading] = useState(false)
    const router = useRouter()
    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            toast.success("Payment Successful");
        }, 2000);
        router.push('/')
    };
    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-200 text-white">
            <div className="bg-indigo-400 backdrop-blur-lg p-6 rounded-2xl shadow-lg w-[400px] space-y-6">


                <Card className="relative bg-gradient-to-r from-blue-600 to-blue-800 p-5 text-text rounded-xl h-full w-full shadow-xl flex flex-col justify-between">
                    <CardContent className="p-0 relative">
                        {/* Visa Logo */}
                        <div className="absolute top-4 right-4 text-xl font-bold tracking-widest">VISA</div>

                        <div className="absolute top-6 left-4 bg-yellow-300 w-14 h-10 rounded-sm shadow-md">

                        </div>

                        <p className="text-2xl tracking-widest mt-16 text-center font-mono">
                            {creditNumber || "0000 0000 0000 0000"}
                        </p>

                        {/* Card Holder & Expiry */}
                        <div className="flex justify-between mt-6 text-sm px-4">
                            <span>CARD HOLDER</span>
                            <span>VALID THRU</span>
                        </div>
                        <div className="flex justify-between  text-lg mt-1 px-4">
                            <span className="uppercase">{name || 'your Name'}</span>
                            <span>{exp || "12 / 35"}</span>
                        </div>
                    </CardContent>
                </Card>
                <div className="space-y-4">
                    <div>
                        <label className="block text-text">Cardholder Name</label>
                        <div className="relative">
                            <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                            <Input
                                type="text"
                                value={name}
                                placeholder="Your Name"
                                onChange={(e) => setName(e.target.value)}
                                className="pl-10 bg-gray-600  text-text border-none"
                            />
                        </div>
                    </div>

                    <div>
                        <label className="block text-text">Card Number</label>
                        <div className="relative">
                            <CreditCard className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                            <Input
                                type="text"
                                value={creditNumber}
                                onChange={handleCardChange}
                                placeholder="4444 4444 4444 4444"
                                maxLength={19}
                                className="pl-10 bg-gray-600 text-text border-none"
                            />
                        </div>
                    </div>

                    <div className="flex space-x-4">
                        <div className="w-1/2">
                            <label className="block text-text">Expiration Date</label>
                            <Input
                                type="text"
                                value={exp}
                                onChange={(e) => setExp(e.target.value)}
                                placeholder="MM/YY"
                                className="pl-3 bg-gray-600  text-text border-none"
                            />
                        </div>
                        <div className="w-1/2">
                            <label className="block text-text">CVV</label>
                            <div className="relative">
                                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                                <Input
                                    type="password"
                                    value={cvv}
                                    onChange={(e) => setCvv(e.target.value)}
                                    placeholder="****"
                                    maxLength={4}
                                    className="pl-10 bg-gray-600 text-text border-none"
                                />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Confirm Button */}
                <form onSubmit={handleSubmit}>
                    {
                        loading ? <Button className="w-full bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 text-white shadow-lg shadow-blue-400/50">
                            <Loader2 className="animate-spin" />
                            Proccessing...
                        </Button> : <Button type="submit" className="w-full text-xl bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 text-white shadow-lg shadow-blue-400/50">
                            Confirm
                        </Button>
                    }
                </form>

            </div>
        </div>
    );
}

