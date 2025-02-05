import { cn } from '@/lib/utils'
import React from 'react'

export default function Container({ children, className }) {
    return (
        <section className={cn("md:container w-full mx-auto md:px-0 px-3 ", className)}>
            {children}
        </section>
    )
}
