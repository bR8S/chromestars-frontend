import { Event } from '../types/event';

const API_BASE = process.env.NEXT_PUBLIC_API_URL || "http://localhost:4000"

// Get all events

export async function getEvents() {
    const res = await fetch(`${API_BASE}/event`);
    
    if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.message || "Unknown server error");
    }
    const data = await res.json()
    console.log('events: ' + data.events)

    return data.events
}