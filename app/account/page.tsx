'use client'
import {useEffect, useState } from 'react'
import * as userApi from '../../lib/api/user'
import { User } from '../../lib/types/user'
import Image from 'next/image'
import { jwtDecode } from 'jwt-decode'
import Notification from '../globals/notification'

export default function(){
    const [userData, setUserData] = useState<User | null>(null)
    const [loading, setLoading] = useState(true)
    const [notification, setNotification] = useState<{ message: string, status: 'success' | 'error' } | null>(null)
    const API_BASE = process.env.NEXT_PUBLIC_API_URL || ''
    const profileImgSrc = `${API_BASE}/file/${userData?.profile_image}`
    const bgImgSrc = `${API_BASE}/file/${userData?.background_image}`

    const handleLogout = () => {
        localStorage.removeItem("token")
        localStorage.removeItem("admin")
        window.location.href = '/login'
    }

    const handleChange = (event : any) => {
        const { name, value } = event.target

        const updatedUserData = { ...userData }
        updatedUserData[name as keyof User] = value
        setUserData(updatedUserData)
    }

    // helper to check token expiry
    const isTokenExpired = (token: string): boolean => {
        try {
            const decoded: { exp: number } = jwtDecode(token)
            return Date.now() >= decoded.exp * 1000
        } catch {
            return true
        }
    }

   const submitUserData = async () => {
        try {
            if(!userData) return

            const token = localStorage.getItem('token')

            if (!token || isTokenExpired(token)) {
                window.location.href = '/login'
                return
            }

            if(token) {
                await userApi.updateMe(token, userData)
                setNotification(null)
                setTimeout(() => {
                    setNotification({ message: 'Account settings updated successfully!', status: 'success' })
                }, 10)
            }
        } catch (error) {
            console.error("Error updating user data:", error)
            setNotification({ message: 'There was an error updating account settings.', status: 'error' })
        }
    }

    useEffect(() => {
        async function fetchUserData() {
            try {
                const token = localStorage.getItem('token')

                if (!token || isTokenExpired(token)) {
                    window.location.href = '/login'
                    return
                }

                if(token) {
                    const userData = await userApi.getMe(token)   
                    setLoading(false)
                    userData && setUserData(userData)
                }
            } catch (error) {
                console.error("Error fetching user data:", error)
            }      
        }

        fetchUserData()
    }, [])

    if (loading) return null

    return (
        <div className="p-8">
            <h1 className="text-3xl font-bold mb-8">ACCOUNT SETTINGS</h1>
            <div className="flex flex-row gap-8">
                <div className="w-1/4 h-fit flex flex-col p-8 rounded-xl border border-[#ffffff38] bg-[#ffffff0c] backdrop-blur-lg">
                    <input className="hidden" type="text" id="id" name="id" value={userData?._id} readOnly required />
                    <form action="/upload" method="POST" encType="multipart/form-data">
                        <h4 className="mb-4">PROFILE IMAGE</h4>
                        <label className="w-full relative block cursor-pointer group">
                            <img className="rounded-full w-full transition-all duration-300 group-hover:brightness-75" src={profileImgSrc} alt="User profile picture" />
                            <input className="hidden" type="file" id="profile_image" name="image" accept="image/*" />
                            <div className="absolute bottom-4 right-3 bg-black bg-opacity-50 rounded-full p-2 group-hover:bg-opacity-75 cursor-pointer">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path className="fill-white" d="M5 5h-3v-1h3v1zm8 5c-1.654 0-3 1.346-3 3s1.346 3 3 3 3-1.346 3-3-1.346-3-3-3zm11-4v15h-24v-15h5.93c.669 0 1.293-.334 1.664-.891l1.406-2.109h8l1.406 2.109c.371.557.995.891 1.664.891h3.93zm-19 4c0-.552-.447-1-1-1-.553 0-1 .448-1 1s.447 1 1 1c.553 0 1-.448 1-1zm13 3c0-2.761-2.239-5-5-5s-5 2.239-5 5 2.239 5 5 5 5-2.239 5-5z"/></svg>
                            </div>
                        </label>
                    </form>
                    <a className="button mt-8" href={`/racer/${userData?.username}`}>VISIT PROFILE</a>
                    <button className="button w-full flex flex-row gap-2 justify-center mt-4" onClick={handleLogout}>
                        LOG OUT 
                        <svg className="w-[16px]" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><g id="logout"><line className="cls-1" x1="15.92" x2="28.92" y1="16" y2="16"/><path className="fill-white" d="M23.93,25v3h-16V4h16V7h2V3a1,1,0,0,0-1-1h-18a1,1,0,0,0-1,1V29a1,1,0,0,0,1,1h18a1,1,0,0,0,1-1V25Z"/><line className="cls-1" x1="28.92" x2="24.92" y1="16" y2="20"/><line className="cls-1" x1="28.92" x2="24.92" y1="16" y2="12"/><line className="cls-1" x1="24.92" x2="24.92" y1="8.09" y2="6.09"/><line className="cls-1" x1="24.92" x2="24.92" y1="26" y2="24"/></g></svg>
                    </button>
                </div>
                <div className="w-3/4 flex flex-col gap-8 p-8 rounded-xl border border-[#ffffff38] bg-[#ffffff0c] backdrop-blur-lg">
                    <div className="flex flex-col gap-4 mb-4">
                        <h4>VISUAL SETTINGS</h4>
                        <form className="" action="/upload" method="POST" encType="multipart/form-data">
                            <div className="form-group"> 
                                <p>Background Image *</p>
                                <label className="w-full relative block cursor-pointer group">
                                    <img className="w-full h-[200px] object-cover transition-all duration-300 group-hover:brightness-75" src={bgImgSrc} alt="User background picture" />
                                    <input className="hidden" type="file" id="background_image" name="image" accept="image/*" />
                                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black bg-opacity-50 rounded-full p-2 group-hover:bg-opacity-75 cursor-pointer">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path className="fill-white" d="M5 5h-3v-1h3v1zm8 5c-1.654 0-3 1.346-3 3s1.346 3 3 3 3-1.346 3-3-1.346-3-3-3zm11-4v15h-24v-15h5.93c.669 0 1.293-.334 1.664-.891l1.406-2.109h8l1.406 2.109c.371.557.995.891 1.664.891h3.93zm-19 4c0-.552-.447-1-1-1-.553 0-1 .448-1 1s.447 1 1 1c.553 0 1-.448 1-1zm13 3c0-2.761-2.239-5-5-5s-5 2.239-5 5 2.239 5 5 5 5-2.239 5-5z"/></svg>
                                    </div>
                                </label>
                            </div>
                        </form>
                    </div>
                    <div className="flex flex-col gap-4 mb-4">
                        <h4>PERSONAL INFO</h4>
                        <div className="form-group"> 
                            <label>Alias *</label>
                            <input type="text" id="account" name="username" value={userData?.username || ''} onChange={handleChange} required />
                        </div>
                        <div className="form-group">
                            <label>First Name *</label>
                            <input type="text" id="first_name" name="first_name" value={userData?.first_name || ''} onChange={handleChange} required />
                        </div>
                        <div className="form-group">
                            <label>Last Name *</label>
                            <input type="text" id="last_name" name="last_name" value={userData?.last_name || ''} onChange={handleChange} required />
                        </div>
                        <div className="form-group">
                            <label>Bio *</label>
                            <input type="textarea" id="bio" name="bio" value={userData?.bio || ''} onChange={handleChange} required />
                        </div>
                    </div>
                    <div className="flex flex-col gap-4 mb-4">
                        <h4>CONTACT INFO</h4>
                        <div className="form-group">
                            <label>Email *</label>
                            <input type="email" id="email" name="email" value={userData?.email || ''} onChange={handleChange} required />
                        </div>
                        <div className="form-group"> 
                            <label>Phone Number *</label>
                            <input type="phone" id="phone" name="phone" value={userData?.phone_number || ''} onChange={handleChange} required />
                        </div>
                    </div>
                    <div className="w-full flex flex-row gap-4 mt-8 justify-end">
                        <button className="button !w-1/3" type="button" onClick={submitUserData}>Apply Changes</button>
                    </div>
                </div>
            </div>
            {/* render notification if set */}
            {notification && (
                <Notification message={notification.message} status={notification.status} />
            )}
        </div>
    )
}