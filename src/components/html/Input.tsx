import React from 'react'
type InputProps = React.HTMLProps<HTMLInputElement>

export const Input = (props: InputProps) => {
  return (
    <input {...props}/>
  )
}
