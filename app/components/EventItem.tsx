'use client'
import { Event } from '../../lib/types/event' 
import { useState } from 'react'
import Image from 'next/image'
import { format } from 'date-fns'

interface EventItemProps {
    event: Event
}

export default function({ event }: EventItemProps){
    return (
        <div className="px-6 py-5 border border-[#ffffff38] bg-[#ffffff0c] cursor-pointer">
            <div className="flex justify-between items-center">
                <div className="flex gap-4 items-center">
                    <Image className="event-img" src="/chromestars-star.png" width="24" height="24" alt="star icon" />
                    <span>{event.name}</span>
                </div>
            </div>
        </div>
    )
}