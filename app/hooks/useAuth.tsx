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

export function adminAuth(){
    const [isAdmin, setIsAdmin] = useState(false)
    
    useEffect(() => {
      console.log('admin perms? : ' + localStorage.getItem("admin"))
      const isAdmin = localStorage.getItem("admin")
      setIsAdmin(!!isAdmin)
    }, [])

    return { isAdmin, setIsAdmin }
}