import React from 'react'
type HorizontalPosition = 'left' | 'center' | 'right'
type VerticalPosition = 'left' | 'top' | 'right'


type ToastProps ={
    position: 
    | Exclude<`${HorizontalPosition}=${VerticalPosition}`, 'center-center'>
    | 'center'
}
export const toast = ({position}: ToastProps) => {
  return (
    <div>Toast - {position}</div>
  )
}
