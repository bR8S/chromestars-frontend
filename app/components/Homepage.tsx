'use client'

import Leaderboard from "./Leaderboard"
import Introscreen from "./Introscreen"
import { User } from "../../lib/types/user"
import { useAuth } from '../hooks/useAuth'

interface HomepageProps {
    users: User[];
}

export default function({ users }: HomepageProps) {
    const res = useAuth()
    const isSignedIn = res.isSignedIn

    return (
        <>
            { isSignedIn ? (
                <>
                    <h1 className="text-3xl font-bold mb-8">LEADERBOARD</h1>
                    <Leaderboard users={users}/>
                </>
            ) : (
                <Introscreen />
            )}
        </>
    )
}