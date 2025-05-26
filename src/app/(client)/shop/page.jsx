import Shop from '@/components/layout/home1/pages/Shop/Shop'
import LoadingSpinner from '@/components/ui/Spinner'


import React, { Suspense } from 'react'

export default async function page({ searchParams }) {

    return (
        <Suspense fallback={<p>Loading..</p>}>
            <Shop />
        </Suspense>
    )
}
