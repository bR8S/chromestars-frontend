import { User } from "@/lib/types/user";
import Image from "next/image"

const API_BASE = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000"

interface LeaderboardProps {
  users: User[];
}

export default function({ users }: LeaderboardProps){
    return (
        <>
            <ol>
            {users.map( (user, index) => (
                <li key={user.username}>
                    <a
                        key={user._id}
                        href={`/racer/${user.username}`}
                        className="flex"
                        data-id={user._id}
                        >
                        <div className="">{index + 1}.</div>

                        <div className="">
                            <Image className="rounded-full w-[36px] h-[36px] object-cover" src={user.profile_image || "/chromestars-avi.png"} width="36" height="36" alt="" />
                            {/*<Image className="" src={user.profile_image || "/chromestars-avi.png"} width="36" height="36" alt="" />*/}
                            {user.username}
                        </div>

                        <div className="">{user.score}</div>
                        <div className="">{user.elo}</div>
                        <div className="">{user.wins}</div>
                        <div className="">{user.competitions}</div>
                        <div className="">
                            <div className=""></div>
                        </div>
                    </a>
                </li>
            ))}
            </ol>
        </>
    )
}