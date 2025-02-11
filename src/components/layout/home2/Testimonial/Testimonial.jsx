import React from 'react'

export default function Testimonial() {
    const div = [];
    for (let index = 0; index < 4; index++) {
        div.push(index)

    }
    return (
        <section className='w-screen h-[50vh] grid grid-cols-6 gap-4 p-10'>
            <div className='w-full h-full  bg-gray-800 rounded-md flex justify-center items-center text-4xl text-gray-400'>
                <h3>Testimonial</h3>
            </div>
            <div className='w-full h-full  bg-gray-800 rounded-md flex justify-center items-center text-4xl text-gray-400'>
                <h3>Testimonial</h3>
            </div>
            <div className='w-full h-full  bg-gray-800 rounded-md flex justify-center items-center text-4xl text-gray-400'>
                <h3>Testimonial</h3>
            </div>
            <div className='w-full h-full  bg-gray-800 rounded-md flex justify-center items-center text-4xl text-gray-400'>
                <h3>Testimonial</h3>
            </div>
            <div className='w-full h-full  bg-gray-800 rounded-md flex justify-center items-center text-4xl text-gray-400'>
                <h3>Testimonial</h3>
            </div>
            <div className='w-full h-full  bg-gray-800 rounded-md flex justify-center items-center text-4xl text-gray-400'>
                <h3>Testimonial</h3>
            </div>


        </section>
    )
}
