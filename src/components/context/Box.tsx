import React, { useContext } from 'react'
import { ThemeContext } from './ThemeContext'

export const Box = () => {
    // consume data using useContext
    const theme = useContext(ThemeContext)
  return (
    <div style={{backgroundColor: theme.primary.main, color: theme.primary.text}}>Theme context
    </div>
  )
}
