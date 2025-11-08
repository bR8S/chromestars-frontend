import Image from "next/image";

export default function(){
    const handleEnter = () => {
        window.location.href = '/register';
    }

    return (
        <div className="intro-homescreen-wrapper">
            <div className="intro-homescreen z-0">
                <div className="intro-homescreen-bg">
                    <Image className="object-cover" src="/cinematic.gif" alt="Homescreen Background" fill />
                </div>
                <Image className="intro-big-star" src="/chromestar.png" alt="Big Star" height="944" width="1423" />
                <Image className="intro-little-star" src="/chromestar.png" alt="Little Star" height="944" width="1423" />
                <Image className="intro-big-star" src="/chromestar.png" alt="Big Star" height="944" width="1423" />
                <Image className="intro-little-star" src="/chromestar.png" alt="Little Star" height="944" width="1423" />
            </div>
            <div className="flex flex-col items mx-auto top-[50%] transform -translate-y-1/2 gap-6 w-[900px] justify-center items-center text-center z-10 relative px-4">
                <Image className="homescreen-logo" height="90" width="712" src="/chromestars-stars-logo.png" alt="CHROMESTARS logo" />
                <p> CHROMESTARS™ invites you to the ultimate underground racing circuit—a multi-week battle of speed, skill, and strategy. 
                    This isn’t just about being fast; it’s about proving you have what it takes to rise above the rest. 
                    <br /><br />
                    Do you have what it takes to rule the streets? <b>The crown is waiting.</b>
                </p>
                <div className="button !w-[250px]" onClick={handleEnter}>ENTER</div>
            </div>
        </div>
    )
}