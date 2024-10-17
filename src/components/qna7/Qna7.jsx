import React from 'react'

const Qna7 = () => {
  return (
    <div>
       <dt className='borange'>what is useReducer()</dt>
                        <dd>useReducer is a Hook in React that allows you to manage state with a reducer function. It's an alternative to useState when you need to:</dd>
                                <dd>
                                1. Handle complex state logic</dd>
                       <dd>   2. Manage global state</dd>
                      <dd>    3. Optimize performance</dd>
                          <dt>How useReducer works
                          </dt>
                         <dd>1. useReducer takes two arguments:</dd>
                              <dd> - reducer: a function that updates state based on actions
                              - initialState: the initial state value</dd>
                              <dd> 2. useReducer returns an array with two elements:
                              - state: the current state value</dd>
                        <dd>  
                               - dispatch: a function to dispatch actions</dd>
                        <dd>   3. When dispatch is called with an action, the reducer function updates the state.</dd>
                        <dt>Key Concepts
                        </dt>
                        <dd>1. Reducer: a function that updates state based on actions</dd>
                            <dd> 2. Action: an object with a type property that triggers state updates</dd>
                        <dd>     3. Dispatch: a function to send actions to the reducer</dd>
                         <dd>    4. State: the current state value managed by the reducer</dd>
                                                        
                         
                         
                      
    </div>
  )
}

export default Qna7
