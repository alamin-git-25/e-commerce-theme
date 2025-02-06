// "use client";
// import { useState } from "react";
// import { Star } from "lucide-react";
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import { Textarea } from "@/components/ui/textarea";
// import { Button } from "@/components/ui/button";

// const ReviewForm = () => {
//     const [rating, setRating] = useState(0);
//     const [review, setReview] = useState("");
//     const [name, setName] = useState("");
//     const [reviews, setReviews] = useState([]);

//     const handleSubmit = () => {
//         if (!rating || !review.trim() || !name.trim()) {
//             alert("Please provide a name, rating, and review.");
//             return;
//         }

//         // Create new review object
//         const newReview = {
//             id: Date.now(),
//             name,
//             rating,
//             review,
//             avatar: name.charAt(0).toUpperCase(), // First letter as avatar
//         };

//         // Update reviews state (display the new review instantly)
//         setReviews([newReview, ...reviews]);

//         // Clear form fields
//         setRating(0);
//         setReview("");
//         setName("");

//         alert("Review submitted successfully!");
//     };

//     return (
//         <div className="grid grid-cols-3 gap-4">
//             {/* Review Form */}
//             <Card className="w-full shadow-lg mb-6">
//                 <CardHeader>
//                     <CardTitle className="text-center text-xl font-bold">Leave a Review</CardTitle>
//                 </CardHeader>
//                 <CardContent className="space-y-4">
//                     {/* Name Input */}
//                     <input
//                         type="text"
//                         placeholder="Your Name"
//                         value={name}
//                         onChange={(e) => setName(e.target.value)}
//                         className="w-full p-2 border rounded-md"
//                     />

//                     {/* Star Rating */}


//                     {/* Review Textarea */}
//                     <Textarea
//                         placeholder="Write your review..."
//                         value={review}
//                         onChange={(e) => setReview(e.target.value)}
//                         className="resize-none"
//                     />
//                     <div className="flex justify-start gap-2 text-yellow-500">
//                         {Array.from({ length: 5 }, (_, index) => (
//                             <Star
//                                 key={index}
//                                 size={28}
//                                 className={`cursor-pointer transition ${index < rating ? "fill-yellow-400 stroke-yellow-400" : "stroke-gray-400"
//                                     }`}
//                                 onClick={() => setRating(index + 1)}
//                             />
//                         ))}
//                     </div>
//                     {/* Submit Button */}
//                     <Button className="w-full" onClick={handleSubmit}>
//                         Submit Review
//                     </Button>
//                 </CardContent>
//             </Card>

//             {/* Display Reviews */}
//             <Card className="w-full space-y-4 col-span-2 px-4">
//                 <CardHeader>
//                     <CardTitle className="text-lg font-semibold text-center">Recent Reviews</CardTitle>
//                 </CardHeader>
//                 {reviews.length === 0 ? (
//                     <p className="text-gray-500 text-center py-5">No reviews yet. Be the first to review!</p>
//                 ) : (
//                     reviews.map((r) => (
//                         <Card key={r.id} className="shadow-md ">
//                             <CardContent className="flex gap-4 items-center p-4">
//                                 {/* Avatar (First letter of name) */}
//                                 <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center text-white font-bold">
//                                     {r.avatar}
//                                 </div>

//                                 {/* Review Content */}
//                                 <div className="flex items-center justify-center">
//                                     <div className="flex gap-1 text-yellow-500">
//                                         {Array.from({ length: 5 }, (_, index) => (
//                                             <Star
//                                                 key={index}
//                                                 size={20}
//                                                 className={index < r.rating ? "fill-yellow-400 stroke-yellow-400" : "stroke-gray-400"}
//                                             />
//                                         ))}
//                                     </div>
//                                     <p className=" text-gray-700">{r.name}</p>
//                                     <p className=" text-gray-700">{r.review}</p>
//                                 </div>
//                             </CardContent>
//                         </Card>
//                     ))
//                 )}
//             </Card>
//         </div>
//     );
// };

// export default ReviewForm;
"use client";

import { useState } from "react";
import { Star } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

const ReviewPage = () => {
    const [rating, setRating] = useState(0);
    const [review, setReview] = useState("");
    const [name, setName] = useState("");
    const [reviews, setReviews] = useState([]);

    const handleSubmit = () => {
        if (!rating || !review.trim() || !name.trim()) {
            alert("Please provide a name, rating, and review.");
            return;
        }

        const newReview = {
            id: Date.now(),
            name,
            rating,
            review,
            avatar: name.charAt(0).toUpperCase(), // First letter as avatar
        };

        setReviews([newReview, ...reviews]);
        setRating(0);
        setReview("");
        setName("");
    };

    return (
        <div className="grid md:grid-cols-2 grid-cols-1 gap-4 mt-10">
            {/* Review Form */}
            <Card className="shadow-lg md:order-none order-2">
                <CardHeader>
                    <CardTitle className=" text-xl font-bold">Leave a Review</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                    <input
                        type="text"
                        placeholder="Your Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full p-2 border rounded-md"
                    />

                    {/* Star Rating */}
                    <div className="flex justify-start gap-2 text-yellow-500">
                        {Array.from({ length: 5 }, (_, index) => (
                            <Star
                                key={index}
                                size={28}
                                className={`cursor-pointer transition ${index < rating ? "fill-yellow-400 stroke-yellow-400" : "stroke-gray-400"}`}
                                onClick={() => setRating(index + 1)}
                            />
                        ))}
                    </div>

                    {/* Review Textarea */}
                    <textarea
                        placeholder="Write your review..."
                        value={review}
                        onChange={(e) => setReview(e.target.value)}
                        className="resize-none w-full p-2 border rounded-md"
                    />

                    <Button className="w-full" onClick={handleSubmit}>
                        Submit Review
                    </Button>
                </CardContent>
            </Card>

            {/* Reviews List */}
            <Card className="shadow max-h-96 overflow-y-scroll scroll-thin">
                <CardHeader>
                    <CardTitle className="text-lg font-semibold text-center">Recent Reviews</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                    {reviews.length === 0 ? (
                        <p className="text-gray-500 text-center">No reviews yet. Be the first to review!</p>
                    ) : (
                        reviews.map((r) => (
                            <Card key={r.id} className="shadow-md">
                                <CardContent className="flex gap-4 items-start p-4">
                                    {/* Avatar */}
                                    <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center text-white font-bold">
                                        {r.avatar}
                                    </div>

                                    {/* Review Details */}
                                    <div className="flex-1">
                                        <div className="flex justify-between items-center">
                                            <p className="font-semibold">{r.name}</p>
                                            <span className="text-gray-400 text-sm">Today</span>
                                        </div>

                                        {/* Star Rating */}
                                        <div className="flex gap-1 text-yellow-500 mt-1">
                                            {Array.from({ length: 5 }, (_, index) => (
                                                <Star
                                                    key={index}
                                                    size={18}
                                                    className={index < r.rating ? "fill-yellow-400 stroke-yellow-400" : "stroke-gray-300"}
                                                />
                                            ))}
                                        </div>

                                        {/* Review Text */}
                                        <p className="text-sm text-gray-600 mt-2">{r.review}</p>
                                    </div>
                                </CardContent>
                            </Card>
                        ))
                    )}
                </CardContent>
            </Card>
        </div>
    );
};

export default ReviewPage;
