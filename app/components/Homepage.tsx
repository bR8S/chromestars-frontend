'use client'

import Leaderboard from "./Leaderboard"
import Introscreen from "./Introscreen"
import { User } from "../../lib/types/user"
import { useAuth } from '../hooks/useAuth'
import { useState, useEffect } from "react"

interface HomepageProps {
    users: User[];
}

export default function({ users }: HomepageProps) {
    const res = useAuth()
    const isSignedIn = res.isSignedIn
    const [skipIntro, setSkipIntro] = useState(false)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const storedSkip = localStorage.getItem('skipIntro')
        if (storedSkip === 'true') {
            setSkipIntro(true)
        }
        setLoading(false)
    }, [])

    // Function passed to Introscreen to skip and remember
    const handleEnter = () => {
        setSkipIntro(true)
        localStorage.setItem('skipIntro', 'true')
    }

    const showIntro = !isSignedIn && !skipIntro

    if(loading) { return null } // don't render until loading complete

    return (
        <>
            { showIntro ? (
                <Introscreen onEnter={handleEnter}/>
            ) : (
                <>
                    <h1 className="text-3xl font-bold mb-8">LEADERBOARD</h1>
                    <Leaderboard users={users}/>
                </>
            )}
        </>
    )
}