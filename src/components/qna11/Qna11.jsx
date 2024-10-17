import React from 'react'

const Qna11 = () => {
  return (
    <div>
       <dt className='borange'>what is redux?</dt>
                           <dd>Redux is a popular state management library for JavaScript applications, particularly React. It helps manage global state by providing a single source of truth for state and a predictable way to update it.
                           </dd>
                           <dt>installation :</dt>
                           <dd>1- npm install redux</dd>
                           <dd>2- npm install react-redux</dd>
                           <dt>key features ::</dt>
                           <dd>1. Store: The central location for the application's state.
                            <dd>    2. State: The current state of the application.</dd>
                            <dd>    3. Actions: Payloads sent to the store to update the state.</dd>
                              <dd>  4. Reducers: Pure functions that handle actions and update the state.</dd>
                             <dd>   5. Dispatch: Sends actions to the store.</dd>
                             <dt>redux work flow :</dt>
                             <dd>1. Dispatch: Send an action to the store.
                                 <dd>    2. Reducer: Handle the action and update the state.</dd>
                                   <dd>  3. Store: Update the state and notify subscribed components.</dd>
                                     <dd>4. Component: Re-render with the new state.
                                     </dd>                                     
                                     </dd>
                                     <dt>benifits:</dt>
                                     <dd>1. Predictable State: State is managed predictably and consistently.
                                        <dd>  2. Scalability: Suitable for large-scale applications.</dd>
                                         <dd> 3. Debugging: Easy to debug with tools like Redux DevTools.</dd>
                                         <dd> 4. Decoupling: Components are decoupled from state management.</dd>
                                          </dd>
                                          <dt>redux tools :</dt>
                                          <dd>1. Redux DevTools: Visualize and debug state changes.
                                            <dd>  2. Redux Saga: Handle side effects and async actions.</dd>
                                             <dd> 3. Redux Thunk: Handle async actions.</dd>
                                           <dd>   4. Redux Persist: Persist state across page reloads.</dd>
                                              </dd>
                                              <dt>best practice:</dt>
                                              1. Keep reducers simple: Avoid complex logic in reducers.
                                             <dd> 2. Use action creators: Encapsulate action creation logic.</dd>
                                            <dd>  3. Use middleware: Handle side effects and async actions.</dd>
                                            <dd>  4. Normalize state: Use standardized state structures.</dd>
                                            <dt>flow :</dt>
                                            <dd>create store like import {'legacy_createStore'} from 'redux'</dd>
                                            <dd>after that go to main jsx and wrap {'<App/>'}component inside the Provider component and pass store as an argument in provider component we have predefined prop call store={'{yourStareName}'}</dd>
                                            <dd>like that  {'<Provider store={mystore}><App/></Provider>'}</dd>
                                            <dd>create reducer function and export that function </dd>
                                            <dd>after that import reducer function in store file and pass as an argument in createStore function</dd>
                                            <dd>create component </dd>
                                            <dd>create action creator</dd>
                                            <dd>action creator always return action objects in that object we have one madetory property called</dd>
                                            <dd>type:'your type'</dd>
                                            <dd>second properties pass the data any type of data</dd>
                                            <dd>go to component and first eventHandler </dd>
                                            <dd>call actioncreator function and pass the data return and hold in a variable </dd>
                                            <dd>after that in redux we have predefined hook called useDispatch()</dd>
                                            <dd>call useDispatch() and hold in a viriable</dd>
                                            <dd>after that call useDispatch inside the eventHandler and pass action creator as an argument</dd>
                                            <dd>dispatch will call reducer </dd>
                                            <dd>reducer have all action objects</dd>
                                            <dd>check the action type based on action type type your logic</dd>
                                            <dd>then showing of result or output for that </dd>
                                            <dd>we have predefined hook called useSelector() from react-redux</dd>
                                            <dd>it will take one argument is callback function and return the state </dd>
                                            <dd>hold in a variable after that use the variable to showing output</dd>
                                            <dd>that's the flow of redux</dd>
                                            <dd>it's complex but easy once you learn 10 time it will easy for you it will help you more </dd>
                                            <dd>without redux no application is create</dd>

                                              
                                              
                                </dd>
    </div>
  )
}

export default Qna11
