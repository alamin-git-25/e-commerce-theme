import { LoginForm } from '@/components/ui/login-form'
import React from 'react'

export default function page() {
    return (
        <div
            className="flex min-h-svh flex-col items-center justify-center bg-muted p-6 md:p-10">
            <div className="w-full max-w-sm md:max-w-3xl">
                <LoginForm />
            </div>
        </div>
    )
}
