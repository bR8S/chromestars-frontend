import { User } from '../../../lib/types/user'
import * as userApi from '../../../lib/api/user'
import Image from 'next/image'

export default async function({ params }: any){
    const { username } = await params
    const user: User = await userApi.getUser(username)

    const API_BASE = process.env.NEXT_PUBLIC_API_URL || "http://localhost:4000";

    const bgImgSrc = `${API_BASE}/file/${user.background_image?.split("/").pop()}` // extract filename

    const profileImgSrc = user.profile_image
    ? `${API_BASE}/file/${user.profile_image.split("/").pop()}` // extract filename
    : "/chromestars-avi.png";

    return (
        <>
            <div className="flex relative">
                <img className="w-full h-[260px] object-cover" src={bgImgSrc} alt=""></img>
                <img className="absolute left-8 top-[50%] rounded-full w-[270px] h-[270px] object-cover" src={profileImgSrc} width="270" height="270" alt="" />
            </div>

            <div className="flex pl-[324px] pr-8 mt-[20px] relative items-center justify-between w-auto">
                <div className="flex flex-col gap-2">
                    <h4 className="font-bold text-l">ALIAS</h4>
                    <h2 className="font-bold text-6xl">{user.username}</h2>
                    <p className="">{user.bio}</p>
                </div>
                <div className="right-[356px] font-bold text-5xl">
                    {user.elo}SR
                </div>
            </div>

            <div className="flex flex-row px-[32px] gap-8 mt-8">
                <div className="w-[260px] p-6 rounded-xl border border-[#ffffff38] bg-[#ffffff0c]">
                    <h3 className="font-bold text-xl mb-4">ACHIEVEMENTS</h3>
                    <div className="">
                        <p>* COMING SOON ...</p>
                    </div>
                </div>

                <div className="w-1/2 flex flex-col gap-2 p-6 rounded-xl border border-[#ffffff38] bg-[#ffffff0c]">
                    <h3 className="font-bold text-xl mb-2">STATISTICS</h3>
                    <p className="w-full flex justify-between">TOTAL NUMBER OF RACES: <span>{user.competitions}</span></p>
                    <p className="w-full flex justify-between">TOTAL NUMBER OF WINS: <span>{user.wins}</span></p>
                    <p className="w-full flex justify-between">TOTAL NUMBER OF LOSSES: <span>{user.losses}</span></p>
                    <p className="w-full flex justify-between">TOTAL NUMBER OF PODIUM FINISHES: <span>{user.podium_count}</span></p>
                    <p className="w-full flex justify-between">BEST WIN STREAK: <span>{user.streak}</span></p>
                    <p className="w-full flex justify-between">OVERALL W/L RATIO: <span>{}</span></p>
                    <p className="w-full flex justify-between">AVERAGE POSITION: <span>{}</span></p>
                </div>
                <div className="gap-8 flex flex-1 flex-col">
                    <div className="p-6 rounded-xl border border-[#ffffff38] bg-[#ffffff0c]">
                        <h4 className="font-bold text-xl mb-4">BEST TRACKS</h4>
                        <ol>
                            {user.top_tracks?.map(track => (
                                <li></li>
                            ))}
                        </ol>
                    </div>
                    <div className="p-6 rounded-xl border border-[#ffffff38] bg-[#ffffff0c]">
                        <h4 className="font-bold text-xl mb-4">ALL TIME RIVALS</h4>
                        <ol>
                            {user.top_rivals?.map(rival => (
                                <li></li>
                            ))}
                        </ol>
                    </div>
                </div>
            </div>
        </>
    )
}