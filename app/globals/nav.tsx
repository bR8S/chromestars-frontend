import Image from "next/image"

export default function(){
    return (
        <> 
            <header>
                <nav className="flex items-center justify-between px-8">
                    <a href="/">
                        <Image className="absolute top-[14px]" src="/chromestars-triple-star.png" height="36" width="320" alt="Chromestars logo" />
                    </a>
                    <div className="flex items-center gap-2">
                        <a className="px-4 py-6 font-bold" href="/race">RACES</a>
                        <a className="px-4 py-6 font-bold" href="/events">EVENTS</a>
                        <a className="px-4 py-6 font-bold" href="/history">HISTORY</a>
                        <a className="px-4 py-6 font-bold" href="/">LEADERBOARD</a>
                        <div className="px-4 py-6 font-bold">SEARCH</div>
                        <a href="/account" className="pl-4">
                            <Image src="/chromestars-badge-account.png" height="40" width="40" alt="Account page logo" />
                        </a>
                    </div>
                </nav>
            </header>
        </>
    )
}