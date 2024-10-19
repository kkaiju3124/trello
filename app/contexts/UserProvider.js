"use client"
import React, { createContext, useEffect, useState } from "react"
import { getUserByToken } from "@/app/backend_fake/be"
import { useRouter } from "next/navigation"
export const UserContext = createContext(null)
function UserProvider({ children }) {
    const router = useRouter()
    const [user, setUser] = useState(null)
    const [userLoaded, setUserLoaded] = useState(false)
    useEffect(() => {
        const token = localStorage.getItem("token")
        const res = getUserByToken(token)
        setUser(res.user)
        setUserLoaded(true)
    }, [])
    if (!user && userLoaded) {
        router.push("/login")
    }
    return (
        <UserContext.Provider
            value={{ user }}>
            {children}
        </UserContext.Provider>
    )
}
export default UserProvider