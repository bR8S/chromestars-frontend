import Image from "next/image";

export default function(){
    return (
        <div className="background">
            <Image className="large-star" src="/chromestar.png" alt="Big Star" height="944" width="1423" />
            <Image className="mid-star" src="/chromestar.png" alt="Big Star" height="944" width="1423" />
            <Image className="small-star" src="/chromestar.png" alt="Little Star" height="944" width="1423" />
        </div>
    )
}