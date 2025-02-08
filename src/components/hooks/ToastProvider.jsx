"use client";

import { ToastContainer, Slide } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function ToastProvider() {
    return <ToastContainer position="top-right" autoClose={1000} transition={Slide} />;
}

