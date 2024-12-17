import React from 'react'

// Define prop type for profile
export type ProfileProps = {
    name: string // name prop
}
// name prop destructed in function parameter
export const Profile = ({name}: ProfileProps) => {
  return (
    <div>Name is {name}</div>
  )
}
