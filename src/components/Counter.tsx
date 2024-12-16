import React, { useReducer } from 'react'

// define shape of state with count
type CounterState = {
    count: number
}

// Defines the action object with type and payload 
type CounterAction ={
    type: string
    payload: number
}
const initialState = {count: 0}

//The reducer takes state and action as arguments.
//It updates the state based on the action.type "increment and decrement"
function reducer(state: CounterState, action: CounterAction){
    
    switch (action.type){
        case 'increment':
            return {count: state.count + action.payload}
        case 'decrement': 
        return { count: state.count - action.payload}
        default:
            return state
    }
}
export const Counter = () => {
    const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <div>
        Count: {state.count}
        <button onClick={()=> dispatch({ type: 'increment', payload: 10})}>Increment 10</button>
        <button onClick={()=> dispatch({ type: 'decrement', payload: 10})}>Decrement 10</button>
    </div>
  )
}
