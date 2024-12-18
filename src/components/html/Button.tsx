import React from 'react'
type ButtonProps ={
    variant: 'primary' | 'secondary'
} & React.ComponentProps<'button'>

const Button = ({variant, children, ...rest}: ButtonProps) => {
  return (
    <button className={`class-with-${variant}`} {...rest}>{children}</button>
  )
}

export default Button