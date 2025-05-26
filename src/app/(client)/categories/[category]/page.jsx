import Category from '@/components/layout/home1/pages/category/FiterCategory';
import LoadingSpinner from '@/components/ui/Spinner';
import React, { Suspense } from 'react'

export default function page({ params }) {
    const category = decodeURIComponent(params?.category);
    return (

        <Suspense fallback={<p>Loading...</p>}>
            <Category category={category} />
        </Suspense>

    )
}
