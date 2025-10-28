import { User } from "../types/user";

const API_BASE = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000"

// Get all users
export async function getUsers() {
  const res = await fetch(`${API_BASE}/users/all-users`)

  if (!res.ok) {
    const errorData = await res.json()
    throw new Error(errorData.message || "Unknown server error")
  }

  const data = await res.json()

  return data.users
}

export async function getUser(username: string) {
  const res = await fetch(`${API_BASE}/racer/${username}`)

  if (!res.ok) {
    const errorData = await res.json()
    throw new Error(errorData.message || "Unknown server error")
  }

  const data = await res.json()

  return data.user
}