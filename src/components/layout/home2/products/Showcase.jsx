import React from 'react'

export default function Showcase() {
    let div = []
    for (let i = 0; i < 10; i++) {
        div.push(i)
    }
    return (
        <section className='w-screen h-screen  grid grid-cols-5 gap-4 p-10'>
            {
                div.map((it) => <div key={it} className='w-full h-full bg-gray-800 flex justify-center items-center text-4xl text-gray-400 rounded-md'>
                    <h3>Products</h3>
                </div>)
            }
        </section>
    )
}
