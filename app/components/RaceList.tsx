'use client'
import { useState } from 'react'
import Image from 'next/image'
import { Race } from '../../lib/types/race' 
import { format } from 'date-fns'
import RaceItem from './RaceItem'

interface RaceListProps {
    races: Race[]
}

export default function({races}: RaceListProps) {
    return (
        <div className="px-8 py-8">
            <h1 className="text-3xl font-bold mb-8">RACES</h1>
            <div className="flex flex-col gap-[20px]">
                {races.map(race => (
                        <RaceItem key={race._id} race={race}/>
                ))}
            </div>
        </div>
    )
}