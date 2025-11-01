'use client'
import { useState } from 'react'
import Image from 'next/image'
import { Race } from '../../lib/types/race' 
import { format } from 'date-fns'

interface RaceItemProps {
    race: Race
}

export default function({race}: RaceItemProps) {
    const [isOpen, setIsOpen] = useState(false)

    return (
         <div className="px-6 py-5 border border-[#ffffff38] bg-[#ffffff0c] cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
            <div className="flex justify-between items-center">
                <div className="flex gap-4 items-center">
                    <Image className="race-img" src="/chromestars-star.png" width="24" height="24" alt="star icon" />
                    {race.event && (
                        <span>{race.event.name} | </span>
                    )}
                    <span>{race.name} | {race.time ? format(race.time, 'yyyy/MM/dd HH:mm') : ''}</span>
                    </div>
                <div className={`relative -left-[10px] ${ isOpen ? "rotate-[180deg]" : "rotate-[0deg]"}`}>
                    <div className="absolute h-[1px] w-[12px] -left-[4.5px] bg-white transform -translate-x-1/2 -translate-y-1/2 rotate-[42deg]"></div>
                    <div className="absolute h-[1px] w-[12px] left-[4.5px] bg-white transform -translate-x-1/2 -translate-y-1/2 -rotate-[42deg]"></div>
                </div>
            </div>
            {isOpen && 
                <ol className="mt-4">
                    { race.participants?.map(participant => (
                            <li className="" key={participant._id} data-id={participant._id}>{participant.username}</li>
                    ))}
                </ol>
            }
        </div>
    )
}