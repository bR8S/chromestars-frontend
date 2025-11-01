import * as eventApi from '../../lib/api/event'
import { Event } from '../../lib/types/event' 
import EventList from '../components/EventList'

export default async function (){
    const data = await eventApi.getEvents()
    const events : Event[] = data

    return (
        <EventList events={events}/>
    )
}