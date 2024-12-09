type ButtonProps = {
    handleClick: (event: React.MouseEventHandler<HTMLButtonElement>, id: number) => void
}
export const Button = (props: ButtonProps) => {
  return (
    <button onClick={(event) => props.handleClick}>Click</button>
  )
}
