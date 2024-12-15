import React, { useState } from 'react'

export const LoggedIn = () => {
  const [isLoggedIn, SetIsLoggedIn] = useState(false)

  const handleLogin = () => {
    SetIsLoggedIn(true)
  }

  const handleLogout = () => {
    SetIsLoggedIn(false)
  }
  return (
    <div>
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleLogout}>Logout</button>
      <div>User is {isLoggedIn ? "Logged in" : "Logged out"}</div>
    </div>
  )
}
