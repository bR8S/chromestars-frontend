import Image from "next/image"

export default function(){
    return (
        <> 
            <header>
                <nav className="flex">
                    <a href="/" className="logo">
                        <Image src="/chromestars-stars-logo.png" height="32" width="272" alt="Chromestars logo" />
                    </a>
                    <div className="nav__right">
                        <a className="nav__hover" href="/events">EVENTS</a>
                        <a className="nav__hover" href="/history">HISTORY</a>
                        <a className="nav__hover" href="/">LEADERBOARD</a>
                        <div className="nav-right__search nav__hover">SEARCH</div>
                        <a href="/account">
                            <Image className="account" src="/chromestars-badge-account.png" height="40" width="40" alt="Account page logo" />
                        </a>
                    </div>
                </nav>
            </header>
        </>
    )
}