import React from 'react'

const Qna12 = () => {
  return (
    <div>
        <dt className='borange'> what is redux toolkit ?</dt>
                                <dd>Redux Toolkit (RTK) is the official, opinionated, and simplified way to use Redux, introduced by the Redux team in 2019. It provides a set of tools and best practices to make Redux more efficient and easier to use.
                                </dd>
                                <dt>installation :</dt>
                                <dd> npm install @reduxjs/toolkit</dd>
                                <dd>npm install react-redux</dd>
                                <dt>key features :</dt>
                                <dd>1. Simplified Store Setup
                                     <dd> 2. Automatic Redux Store Creation</dd>
                               <dd>       3. Built-in Middleware</dd>
                                    <dd>  4. Immutable State Management</dd>
                                   <dd>   5. Easy Debugging</dd>
                                    <dd>  6. Integrated Support for Redux DevTools</dd>
                                    <dt>main components :</dt>
                                    <dd>1. configureStore(): Simplifies store setup.
                                    <dd>   2. createReducer(): Creates reducers with immer.</dd>
                                     <dd>  3. createAction(): Creates actions with type and payload.</dd>
                                   <dd>    4. createAsyncThunk(): Handles async actions and side effects.</dd>
                                       </dd>
                                       <dt>benifits :</dt>
                                       <dd>1. Reduced Boilerplate Code
                                          <dd>  2. Simplified Redux Setup</dd>
                                           <dd> 3. Improved Performance</dd>
                                           <dd> 4. Better Debugging Experience</dd>
                                         <dd>   5. Easier Error Handling</dd>
                                            </dd>
                                            <dt>best practice :</dt>
                                            <dd>1. Use configureStore() for store setup.
                                            <dd>    2. Use createReducer() for reducer creation.</dd>
                                              <dd>  3. Use createAction() for action creation.</dd>
                                             <dd>   4. Use createAsyncThunk() for async actions.</dd>
                                              <dd>  5. Use Redux DevTools for debugging.</dd>
                                                </dd>
                                                <dt>flow of redux-toolkit</dt>
                                                <dd>almose same as redux concept</dd>
                                                <dd>first create store like import {'{configureStore } from "@reduxjs/toolkit"' }</dd>
                                                <dd>then call that function pass one object predefined properties call reducer </dd>
                                                <dd>thaat reducer take one object write any keyname then pass your reducer as a value</dd>
                                                <dd>createSlice like that import {'{createSlice} from "@reduxjs/toolkit"'}</dd>
                                                <dd>call createSlice and hold in a variable </dd>
                                                <dd>it will take one object some predefined properties called</dd>
                                                <dd>name:'name'</dd>
                                                <dd>initialState:{'{value:"value"}'}</dd>
                                                <dd>then one more is reducers:{'{actions}'}</dd>
                                                <dd>action1:{"()=>{'upadate state'}"}</dd>
                                                <dd>export const {'{actions}=yourSlice.actions'}</dd>
                                                <dd>export default yourSlice.reducer</dd>
                                                <dd>yourSlice.actions / yourSlice.reducer </dd>
                                                <dd>those are preDefined no need change the name </dd>
                                                <dd> you changes in any name then showing error</dd>
                                                <dd>no need to create extra files</dd>
                                                <dd>on sowing of result or output it's same as redux concept</dd>
                                                <dd>but little bit diffrent like this</dd>
                                                <dd>call eventHandler and pass direct dispatch and pass action function in that action function pass data</dd>
                                                <dd>then same using useSelector to show outout</dd>
                                                <dd>let value=useSelector{'((s))=>s.keyname.value'}</dd>
                                                <dd>that's it this is redux toolkit </dd>
                                                <dd>easy little bit diffrent from redux</dd>
                                                <dd>write now developer using reduxtoolkit more than of redux</dd>


</dd>
    </div>
  )
}

export default Qna12
