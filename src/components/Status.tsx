type StatusProps = {
    status: 'loading' | 'success' | 'error'
}

export const Status = (props: StatusProps) => {
    // "message variable" serves as state for plain Js
    let message
    if(props.status === 'loading'){
        message= "Loading..."
    } else if (props.status === 'success'){
        message= "Success"
    } else if (props.status === "error") {
        message = "Error loading data"
    }
  return (
    <div>Status: {message}</div>
  )
}
