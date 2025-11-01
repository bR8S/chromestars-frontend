import { Event } from '../../lib/types/event'
import EventItem from './EventItem'

interface EventProps {
    events: Event[]
}

export default async function({ events }: EventProps){
    return (
        <div className="px-8 py-8">
            <h1 className="text-3xl font-bold mb-8">EVENTS</h1>
            <div className="flex flex-col gap-[20px]">
                {events.map((event) => (
                    <EventItem key={event._id} event={event} />
                ))}
            </div>
        </div>
    )
}