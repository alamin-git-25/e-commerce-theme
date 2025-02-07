import Category from '@/components/category/FiterCategory';
import React from 'react'

export default function page({ params }) {
    const category = decodeURIComponent(params.category);
    return (

        <Category category={category} />

    )
}
