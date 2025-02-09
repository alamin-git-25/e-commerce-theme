import LoadingSpinner from '@/components/hooks/Spinner'
import Shop from '@/components/Shop/Shop'

import React, { Suspense } from 'react'

export default async function page({ searchParams }) {

    return (
        <Suspense fallback={<p>Loading..</p>}>
            <Shop />
        </Suspense>
    )
}
