type GreetProps = {
    name: string,
    messageCount: number,
    isLoggedIn: boolean
}
const Greet = (props: GreetProps) => {
  return (
    <div>
        {
            props.isLoggedIn ? `Welcome ${props.name} you have ${props.messageCount} unread messages ` : `Login`
        }
    </div>
  )
}

export default Greet