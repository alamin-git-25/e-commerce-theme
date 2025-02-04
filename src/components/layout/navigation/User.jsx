"use client"


import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuRadioGroup,
    DropdownMenuRadioItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { CircleUser, LogIn, MailOpen, UserPlus } from "lucide-react"
import { useState } from "react"

export function Profile() {


    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>

                <CircleUser className="size-6 cursor-pointer" />

            </DropdownMenuTrigger>

            <DropdownMenuContent
                className="w-56 shadow-lg rounded-xl bg-background border animate-in fade-in slide-in-from-top-2"
            >
                <DropdownMenuLabel className="text-center text-lg font-semibold">
                    Welcome!
                </DropdownMenuLabel>
                <DropdownMenuSeparator />

                <div className="flex flex-col gap-2 px-2 py-1">
                    <DropdownMenuItem asChild>
                        <button className="flex items-center gap-3 w-full px-4 py-2 rounded-lg  hover:text-primary-foreground transition">
                            <LogIn className="size-5" />
                            Sign In
                        </button>
                    </DropdownMenuItem>

                    <DropdownMenuItem asChild>
                        <button className="flex items-center gap-3 w-full px-4 py-2 rounded-lg  hover:text-secondary-foreground transition">
                            <UserPlus className="size-5" />
                            Sign Up
                        </button>
                    </DropdownMenuItem>
                </div>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}
