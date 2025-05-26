import React from 'react'
import Container from '../../../../custom/Container'
import Image from 'next/image'

export default function Service() {
    const supports = [
        { id: 1, icon: '/icons/delivery.png', title: "Fast & Free Delivery", subTitle: "on all orders" },
        { id: 2, icon: '/icons/support.png', title: "Always available ", subTitle: "to assist you" },
        { id: 3, icon: '/icons/cash.png', title: "Hassle-free returns ", subTitle: "within 30 dayss" },
        { id: 4, icon: '/icons/shield.png', title: "100% secure and trusted", subTitle: " payments" },
    ];
    return (
        <Container className="grid lg:grid-cols-4 md:grid-cols-2  gap-2 my-10">
            {
                supports.map((item, index) => (
                    <div key={index} className='w-full h-36 rounded-md flex shadow justify-center gap-6 bg-card items-center'>
                        <Image src={item.icon} width={50} height={50} alt='' />
                        <span className='flex flex-col justify-center items-center'>
                            <p>{item.title}</p>
                            <p> {item.subTitle}</p>
                        </span>
                    </div>
                ))
            }

        </Container>
    )
}
