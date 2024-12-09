// ButtonProps specifies that the handleClick prop is a function that accepts: a mouse event for an HTMLButtonElement(event triggered by button click) and a number
type ButtonProps = {
    handleClick: (event: React.MouseEvent<HTMLButtonElement>, id: number) => void
}
export const Button = (props: ButtonProps) => {
  // The <button> element's onClick handler calls the props.handleClick passing the "event" obj from click event and value "1" as the id 
  return (
    <button onClick={(event) => props.handleClick(event, 1)}>Click</button>
  )
}
