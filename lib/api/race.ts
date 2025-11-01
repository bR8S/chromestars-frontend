import { Race } from '../types/race';

const API_BASE = process.env.NEXT_PUBLIC_API_URL || "http://localhost:4000"

// Get all races

export async function getRaces() {
    const res = await fetch(`${API_BASE}/race`);
    
    if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.message || "Unknown server error");
    }
    const data = await res.json()

    return data.races
}