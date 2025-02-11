import Ads from '@/components/layout/home2/ads/Ads'
import Banner from '@/components/layout/home2/banner/Banner'
import Category from '@/components/layout/home2/category/Category'
import Footer from '@/components/layout/home2/footer/Footer'
import NewArraival from '@/components/layout/home2/new-arrival/NewArraival'
import Showcase from '@/components/layout/home2/products/Showcase'
import Service from '@/components/layout/home2/service/Service'
import Testimonial from '@/components/layout/home2/Testimonial/Testimonial'
import Tranding from '@/components/layout/home2/trending/Tranding'
import React from 'react'

export default function page() {
    return (
        <section className=''>
            <Banner />
            <NewArraival />
            <Category />
            <Tranding />
            <Service />
            <Showcase />
            <Ads />
            <Testimonial />
            <Footer />
        </section>
    )
}
