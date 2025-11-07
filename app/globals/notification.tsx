import { useState } from 'react'

interface NotificationProps {
    // Define props if needed in the future
    message?: string
    status?: 'success' | 'error'
}

export default function({message, status}: NotificationProps){ 
    const [visible, setVisible] = useState(true)

    if (!visible) return null

    const handleClose = () => setVisible(false)

    return (
        <>
        {status === 'error' ? (   
            <div className="p-4 rounded-[10px] border bg-red-500/10 border-red-500/60 text-red-300 fixed top-4 right-4 flex items-center justify-center gap-2 shadow-xl backdrop-blur-lg backdrop-saturate-150 cursor-pointer" onClick={handleClose} role="alert">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
                <p>{message}</p>
            </div>
        ) : (
            <div className="p-4 rounded-[10px] border bg-green-500/10 border-green-500/60 text-green-300 fixed top-4 right-4 flex items-center justify-center gap-2 shadow-xl backdrop-blur-lg backdrop-saturate-150 cursor-pointer" onClick={handleClose} role="alert">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <p>{message}</p>
            </div>
            )
        }      
    </>
    )
}