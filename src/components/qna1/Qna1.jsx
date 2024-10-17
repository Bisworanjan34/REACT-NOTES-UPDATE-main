import React from 'react'

const Qna1 = () => {
  return (
    <div>
       <dl>
      <dt className='borange'>What is react ?</dt>
                <dd>1- React is a popular JavaScript library for building user interfaces and single-page applications. Developed by Facebook (now Meta), React allows developers to create reusable UI components and manage the state changes efficiently.
                </dd>
                <dt>React key-fetures</dt>
                <dd>
                    <dd> 1. Components: Reusable UI elements that represent a part of the application.</dd>
                    <dd> 2. JSX: A syntax extension for JavaScript that allows writing HTML-like code in JavaScript files.</dd>
                    <dd>   3. Virtual DOM: A lightweight in-memory representation of the real DOM, enabling faster updates.</dd>
                    <dd> 4. State: Management of application data and its changes.</dd>
                    <dd>  5. Props: Short for "properties," these are immutable values passed from parents to child components.</dd>
                    <dd> 6. Event Handling: Handling user interactions, such as clicks and form submissions.</dd>
                    <dd> 7. Hooks: Functions that provide access to state and lifecycle methods from functional components.</dd>

                </dd>
                <dt>common use cases for react ?</dt>
                <dd>1. <b>Web Applications:</b> Single-page applications, progressive web apps, and responsive websites.
                </dd>
                <dd>2. <b> Mobile Applications:</b> Hybrid mobile apps using React Native.
                </dd>
                <dd>3. <b> Desktop Applications:</b> Electron and desktop apps.
                </dd>
                <dd>4. <b>Server-Side Rendering: </b> Rendering React components on the server.
                </dd>
                <dt>React Ecosystem:</dt>
                <dd>1. React Router: Client-side routing.</dd>
                <dd>2. Redux: State management. </dd>
                <dd>3. React Hooks: Functional component utilities. </dd>
                <dd>4. Webpack: Module bundling and optimization. </dd>
                <dd>5. Babel: JavaScript transpilation.</dd>
      </dl>
    </div>
  )
}

export default Qna1
