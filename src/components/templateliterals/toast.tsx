import React from 'react'
type HorizontalPosition = 'left' | 'center' | 'right'
type VerticalPosition = 'left' | 'top' | 'right'

// Template literal types and Exclude for Toast component
type ToastProps ={
    position: 
    | Exclude<`${HorizontalPosition}=${VerticalPosition}`, 'center-center'>
    | 'center'
}
export const Toast = ({position}: ToastProps) => {
  return (
    <div>Toast - {position}</div>
  )
}
