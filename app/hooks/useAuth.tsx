'use client'
import { useState, useEffect } from "react"

export function useAuth() {
  const [isSignedIn, setIsSignedIn] = useState(false)

  useEffect(() => {
    const token = localStorage.getItem("token")
    setIsSignedIn(!!token)
  }, [])

  return { isSignedIn, setIsSignedIn }
}