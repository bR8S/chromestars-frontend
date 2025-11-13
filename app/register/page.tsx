// Server components can’t access the DOM or handle browser events — they only render HTML on the server.
'use client'

import { useState } from "react"
import { User } from '../../lib/types/user'

export default function(){
    const [userData, setUserData] = useState<User | null>(null) // can be either type User or null, on first initiation can be null (null)

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        //console.log(event)
        const { name, value } = event.target // gives us the name and value of the current form field

        setUserData((prev) => ({
            ...prev,      // if prev null, spreading just creates an empty object
            [name]: value, // else sets user param w/ name key with given value
        }))
    }

    const handleRegister = async (event : any) => {
        try {
            // You can add custom validation or actions here before form submission
            event.preventDefault()

            // Submit the form programmatically
            const res = await fetch('http://localhost:4000/auth/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(userData)
            })

            const data = await res.json()
            console.log(data)

            if(res.ok){
                // Registration successful, redirect or show success message
                window.location.href = '/login'
            } else {
                // Handle errors
                console.error('Registration failed')
            }
        } catch (error) {
            console.error('An error occurred:', error)
        }
    }
    return (
        <div className="px-8 py-8 flex flex-col max-w-xl gap-4 mt-20 mx-auto border border-[#ffffff38] bg-[#ffffff0c] rounded-md backdrop-blur-lg">
            <h1 className="text-3xl font-bold mb-4 text-center">REGISTER</h1>
            <div className="form">
                {/*<p className="mb-8"><span className="underline">Note:</span> Please make sure to use your character's info to complete the following fields: Phone Number, Alias, First Name, and Last Name</p>*/}
                <form className="flex flex-col gap-4" action="/register" method="POST">
                    <div className="form-group">
                        <label>Alias *</label>
                        <input type="text" id="username" name="username" placeholder="Enter alias" onChange={handleChange} required />
                    </div>
                    <div className="form-group"> 
                        <label>Phone Number *</label>
                        <input type="phone" id="phone_number" name="phone_number" placeholder="Enter phone number" onChange={handleChange} required />
                    </div>
                    <div className="form-group">
                        <label>Email *</label>
                        <input type="email" id="email" name="email" placeholder="Enter email" onChange={handleChange} required />
                    </div>
                    <div className="form-group">
                        <label>Password *</label>
                        <input type="password" id="password" name="password" placeholder="Enter password" onChange={handleChange} required />
                    </div>
                    <button className="button mt-4" type="submit" onClick={handleRegister}>Sign up</button>
                </form>
            </div>
        </div>
    )
}