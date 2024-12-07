type HeadingProps ={
    children: string
}
// Taking children props
export const Heading = (props: HeadingProps) => {
  return (
    <div>{props.children}</div>
  )
}
