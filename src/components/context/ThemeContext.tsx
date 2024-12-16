import { createContext } from "react"
import { theme } from "./theme"

type ThemeContextProviderProps = {
    children: React.ReactNode
}

// create "ThemeContext" with "theme" data
export const ThemeContext = createContext(theme)

// provides context to component tree with TCP
export const ThemeContextProvider = ({
    children,
}: ThemeContextProviderProps) => {
    return <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
}