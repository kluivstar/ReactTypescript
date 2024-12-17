import React, { useContext } from 'react'
import { ThemeContext } from './ThemeContext'

export const Box = () => {
    // consume data using useContext
    const theme = useContext(ThemeContext)
  return (
    // dynamically apply theme obj/style on div
    <div style={{backgroundColor: theme.primary.main, color: theme.primary.text}}>Theme context
    </div>
  )
}
