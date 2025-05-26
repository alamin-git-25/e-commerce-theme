// "use client"
// import { useEffect, useState } from "react";

// const Loader = () => {
//     const [isVisible, setIsVisible] = useState(true);

//     useEffect(() => {
//         const timer = setTimeout(() => {
//             setIsVisible(false);
//         }, 3000);

//         return () => clearTimeout(timer);
//     }, []);

//     if (!isVisible) return null;
//     return (
//         <div className="fixed inset-0 flex md:w-full md:h-full w-screen h-screen items-center justify-center bg-gray-900/80 backdrop-blur-2xl z-50">
//             <svg viewBox="0 0 400 200" className="loading">
//                 <text x="50%" y="50%" dy=".32em" textAnchor="middle" className="text-body text-white">
//                     Amar Dokan
//                 </text>
//                 <text x="50%" y="50%" dy="2.1em" textAnchor="middle" className="title text-only">
//                     Online Shop
//                 </text>
//             </svg>
//         </div>
//     );
// };

// export default Loader;

"use client";
import { useEffect, useState } from "react";

const Loader = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const hasVisited = localStorage.getItem("hasVisited");

        if (!hasVisited) {
            setIsVisible(true);
            localStorage.setItem("hasVisited", "true");

            const timer = setTimeout(() => {
                setIsVisible(false);
            }, 2000);

            return () => clearTimeout(timer);
        }
    }, []);

    useEffect(() => {
        const handleUnload = () => {
            localStorage.removeItem("hasVisited");
        };

        window.addEventListener("beforeunload", handleUnload);
        return () => window.removeEventListener("beforeunload", handleUnload);
    }, []);

    if (!isVisible) return null;

    return (
        <div className="fixed inset-0 flex md:w-full md:h-full w-screen h-screen items-center justify-center bg-gray-900/80 backdrop-blur-2xl z-50">
            <svg viewBox="0 0 400 200" className="loading">
                <text x="50%" y="50%" dy=".32em" textAnchor="middle" className="text-body text-white">
                    Amar Dokan
                </text>
                <text x="50%" y="50%" dy="2.1em" textAnchor="middle" className="title text-only">
                    Online Shop
                </text>
            </svg>
        </div>
    );
};

export default Loader;

