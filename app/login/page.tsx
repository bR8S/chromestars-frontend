'use client'
import { useState } from 'react'

export default function(){
    const API_BASE = process.env.NEXT_PUBLIC_API_URL || "http://localhost:4000"
    const action = `${API_BASE}/auth/login`
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        try {
            event.preventDefault()
            console.log('Submitting login form')
            const res = await fetch(action, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
            })

            const data = await res.json()

            if (res.ok) {
                // Login successful, redirect or show success message
                console.log('Login successful')
                localStorage.setItem("token", data.token)
                window.location.href = '/'
            } else {
                // Handle errors
                console.error('Login failed', data.message || 'Unknown error')
            }
        } catch (error) {
            console.error('An error occurred:', error)
        }
    }

    return (
        <div className="px-8 py-8 flex flex-col max-w-xl gap-4 mt-20 mx-auto border border-[#ffffff38] bg-[#ffffff0c] rounded-md">
            <h1 className="text-3xl font-bold mb-4 text-center">LOGIN</h1>
            <form className="" onSubmit={handleSubmit} method="POST">
                <div className="flex flex-col gap-4 mb-8">
                    <input type="email" id="email" name="email" placeholder="Email address" value={email} onChange={(e) => setEmail(e.target.value)} autoComplete="true" required />
                    <input type="password" id="password" name="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                    <div className="relative flex justify-end">
                        <a className="text-[14px] underline" href="/forgot-password">Forgot password?</a>
                    </div>
                </div>
                <button className="button" type="submit">Login</button>
            </form>
            <a className="button" href="/register">Register</a>
            <p className=""></p>
        </div>
    )
}