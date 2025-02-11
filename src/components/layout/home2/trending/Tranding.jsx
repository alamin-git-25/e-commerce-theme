'use client'

import React from 'react'
import { AnimatePresence, motion } from 'framer-motion'

export default function Tranding() {
    return (
        <section className='w-screen h-screen  grid grid-cols-2 gap-5 p-10'>
            {/* Div coming from the left */}

            <motion.div
                className='w-full h-full bg-gray-800 flex justify-center items-center text-4xl text-gray-400 rounded-md'
                initial={{ opacity: 0, x: -100 }}  // Start from left off-screen
                whileInView={{ opacity: 1, x: 0 }} // Move to original position
                transition={{ duration: 1 }}       // Smooth transition
            >
                <h3>Image</h3>
            </motion.div>

            {/* Div coming from the right */}
            <motion.div
                className='w-full h-full  grid grid-cols-2 gap-4'
                initial={{ opacity: 0, x: 100 }}  // Start from right off-screen
                whileInView={{ opacity: 1, x: 0 }} // Move to original position
                transition={{ duration: 1 }}       // Smooth transition
            >
                <div className='w-full h-full  rounded-md bg-gray-800 flex justify-center items-center text-4xl text-gray-400'>
                    <h3>Image</h3>
                </div>
                <div className='w-full h-full  rounded-md bg-gray-800 flex justify-center items-center text-4xl text-gray-400'>
                    <h3>Image</h3>
                </div>
                <div className='w-full h-full col-span-2  rounded-md bg-gray-800 flex justify-center items-center text-4xl text-gray-400'>
                    <h3>Image</h3>
                </div>

                {/* <div className='w-full h-full  rounded-md bg-gray-800 flex justify-center items-center text-4xl text-gray-400'>
                    <h3>Image</h3>
                </div>
                <div className='w-full h-full  rounded-md bg-gray-800 flex justify-center items-center text-4xl text-gray-400'>
                    <h3>Image</h3>
                </div> */}
            </motion.div>

        </section >
    )
}
