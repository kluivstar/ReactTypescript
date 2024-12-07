type ClarkProps ={
    children: React.ReactNode
}
// Taking/consuming children props
export const Clark = (props: ClarkProps) => {
    return (
        <div>{props.children}</div>
    )
}
