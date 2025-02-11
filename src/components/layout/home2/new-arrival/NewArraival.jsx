"use client"
import React from 'react';
import { motion } from 'framer-motion';

export default function NewArraival() {

    return (
        <section className='w-screen h-screen  grid grid-cols-3 gap-4 p-10'>
            <motion.div
                initial={{ x: -100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ duration: 0.6 }}
                className='w-full h-full bg-gray-800 col-span-2 rounded-md flex justify-center items-center'
            >
                <h3 className='text-6xl text-gray-400'>Image</h3>
            </motion.div>
            <motion.div
                initial={{ x: 100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ duration: 0.6 }}
                className='w-full h-full bg-gray-800 rounded-md flex justify-center items-center'
            >
                <h3 className='text-6xl text-gray-400'>Image</h3>
            </motion.div>
            <motion.div
                initial={{ x: -100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ duration: 0.6 }}
                className='w-full h-full bg-gray-800 rounded-md flex justify-center items-center'
            >
                <h3 className='text-6xl text-gray-400'>Image</h3>
            </motion.div>
            <motion.div
                initial={{ x: 100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ duration: 0.6 }}
                className='w-full h-full bg-gray-800 col-span-2 rounded-md flex justify-center items-center'
            >
                <h3 className='text-6xl text-gray-400'>Image</h3>
            </motion.div>
        </section>
    );
}
