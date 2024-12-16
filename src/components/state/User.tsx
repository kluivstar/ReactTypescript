import React, { useState } from 'react'

type AuthUser = {
    name: string
    email: string
}

export const User = () => {
    // set state telling TS it can be "null" or AuthUser
    const [user, setUser] = useState<AuthUser | null>(null)
    const handleLogin =() => {
        setUser({
            name: "Sins",
            email: "sins@gmail.com"
        })
    }
    const handleLogout =() => {
        setUser(null)
    }
    return (
        <div>
            <button onClick={handleLogin}>Login</button>
            <button onClick={handleLogout}>Logout</button>
            <div>User name is {user?.name}</div>
        </div>
  )
}
