import { motion } from "framer-motion";

const LoadingSpinner = () => {
    return (
        <div className="flex justify-center items-center h-screen">
            <motion.div
                className="relative w-16 h-16 border-4 border-t-4 border-gray-300 rounded-full"
                initial={{ rotate: 0 }}
                animate={{ rotate: 360 }}
                transition={{ loop: Infinity, duration: 1, ease: "linear" }}
            >
                <div className="absolute top-0 left-0 w-full h-full border-t-4 border-gray-500 rounded-full"></div>
            </motion.div>
        </div>
    );
};

export default LoadingSpinner;
