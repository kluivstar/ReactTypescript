import React from 'react'
// type construction for different positions with template literal string
type HorizontalPosition = 'left' | 'center' | 'right'
type VerticalPosition = 'left' | 'top' | 'right'

// Template literal types and Exclude for Toast component
type ToastProps ={
    position: 
    // construction a combo of both alignment using template literal types
    | Exclude<`${HorizontalPosition}=${VerticalPosition}`, 'center-center'>
    | 'center'
}
export const Toast = ({position}: ToastProps) => {
  return (
    // displays toast position as a string
    <div>Toast - {position}</div>
  )
}
