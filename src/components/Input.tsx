// specifics: a value as a string representing the current value of the input an a handleChange a function triggerd on input value change, that accepts HTMLButtonElement change event
type InputProps = {
    value: string
    handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}
export const Input = (props: InputProps) => {
    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        console.log(event)
    }
  return (
    <input type='text' value={props.value} onChange={handleInputChange}/>
  )
}
