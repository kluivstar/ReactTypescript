import { useState, createContext } from "react"

type AuthUser = {
    name: string
    email: string
}
type UserContextType = {
    user: AuthUser | null
    setUser: React.Dispatch<React.SetStateAction<AuthUser | null>>
}

type UserContextProviderProps = {
    children: React.ReactNode
}

// Context Creation with initial value {} for typescript matching "UserContextType" shape
export const UserContext = createContext({} as UserContextType)

// Providing Context
export const UserContextProvider = ({children}: UserContextProviderProps) => {
    const [user, setUser] = useState<AuthUser | null>(null)

    return (
        // Wrap component tree with Provider and pass state
        <UserContext.Provider value={{user, setUser}}>
            {children}
        </UserContext.Provider>
    )
}