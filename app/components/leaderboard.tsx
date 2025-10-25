import { User } from "@/lib/types/user";
import Image from "next/image"

const API_BASE = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000"

interface LeaderboardProps {
  users: User[];
}

export default function({ users }: LeaderboardProps){
    return (
        <>
            <div className="">
                <div className="p-8 rounded-xl border border-[#ffffff38] bg-[#ffffff0c]">
                    <div className="flex w-full gap-[20px] mb-6 px-[28px]">
                        <div className="w-[2%]"></div>
                        <h3 className="w-[38%] text-left font-bold">DRIVER</h3>
                        <h3 className="w-[17%] text-center font-bold">SCORE</h3>
                        <h3 className="w-[17%] text-center font-bold">ELO RATING</h3>
                        <h3 className="w-[17%] text-center font-bold">TOTAL WINS</h3>
                        <h3 className="w-[17%] text-center font-bold">COMPETITIONS</h3>
                        <h3 className="w-[17%] text-center font-bold">AVERAGE POSITION</h3>
                    </div>

                    <ol className="w-full flex flex-col gap-[20px]">
                        {users.map( (user, index) => (
                            <li key={user.username}
                                className="w-full">
                                <a
                                    key={user._id}
                                    href={`/racer/${user.username}`}
                                    className="flex w-full items-center gap-[20px] px-[28px] py-[12px] border border-[#ffffff24] bg-[#ffffff0d] hover:bg-[#ffffff1f] hover:border-[#ffffff7a] duration-150 ease-in-out"
                                    data-id={user._id}
                                    >
                                    <div className="w-[2%]">{index + 1}.</div>

                                    <div className="w-[38%] flex gap-[16px] items-center">
                                        <Image className="rounded-full w-[40px] h-[40px] object-cover border border-[#ffffff71]" src={user.profile_image || "/chromestars-avi.png"} width="36" height="36" alt="" />
                                        {/*<Image className="" src={user.profile_image || "/chromestars-avi.png"} width="36" height="36" alt="" />*/}
                                        <p className="font-bold">{user.username}</p>
                                    </div>

                                    <div className="w-[17%] text-center">{user.score}</div>
                                    <div className="w-[17%] text-center">{user.elo}</div>
                                    <div className="w-[17%] text-center">{user.wins}</div>
                                    <div className="w-[17%] text-center">{user.competitions}</div>
                                    <div className="w-[17%] text-center">
                                        <div className=""></div>
                                    </div>
                                </a>
                            </li>
                        ))}
                    </ol>
                </div>
            </div>
        </>
    )
}