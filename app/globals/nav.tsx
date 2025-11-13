'use client'
import Image from "next/image"
import { useAuth, adminAuth } from "../hooks/useAuth"

export default function(){
    const { isSignedIn } = useAuth()
    const { isAdmin } = adminAuth()

    return (
        <> 
            <header>
                <nav className="flex height-[60px] items-center justify-between px-8">
                    <a className="" href="/">
                        <Image className="relative" src="/chromestars-star.png" alt="Chromestars logo" width="55" height="35" />
                    </a>
                    <div className="flex items-center gap-2">
                        {isAdmin && 
                            <a className="px-4 py-6 font-bold" href="/admin">ADMIN</a>
                        }
                        <a className="px-4 py-6 font-bold" href="/events">EVENTS</a>
                        <a className="px-4 py-6 font-bold" href="/history">HISTORY</a>
                        <a className="px-4 py-6 font-bold" href="/">LEADERBOARD</a>
                        <div className="px-4 py-6 font-bold">SEARCH</div>
                        <a href="/account" className="pl-4">
                            <Image src="/chromestars-badge-account.png" height="48" width="48" alt="Account page logo" />
                        </a>
                    </div>
                </nav>
            </header>
        </>
    )
}