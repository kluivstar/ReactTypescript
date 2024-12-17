import React, { useContext } from 'react'
import { UserContext } from './UserContext'

export const User = () => {
    //Consuming Context
    const userContext = useContext(UserContext)

    // Login and Logout Handlers
    const handleLogin = () => {
        userContext.setUser({
            name: 'Sins',
            email: 'sinsin@text.com'
        })
    }
    const handleLogout = () => {
        userContext.setUser(null)
    }

  return (
    <div>
        <button onClick={handleLogin}>Login</button>
        <button onClick={handleLogout}>Logout</button>
        {/* Rendering the State */}
        <div>User is {userContext.user?.name}</div>
    </div>
  )
}
