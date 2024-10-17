import React from 'react'

const Qna15 = () => {
  return (
    <div>
      <dl>
        <dt className='borabge'> what is control component</dt>
        <dd>In React, a Control Component is a type of component that manages user input, such as forms, text inputs, checkboxes, radio buttons, and select boxes.
        </dd>
        <dt>Characteristics:
        </dt>
     <dd>   1. Handles user input.</dd>
<dd>2. Manages state changes.</dd>
<dd>3. Validates user input.</dd>
<dd>4. Provides feedback to the user.</dd>
<dt>Types of Control Components:
</dt>
<dd>
1. Text Input: input element for text entry.</dd>
        <dd>2. Checkbox: input element with type="checkbox" for boolean values.</dd>
              <dd>3. Radio Button: input element with type="radio" for selecting options.</dd>
    <dd>4. Select Box: select element for choosing options.</dd>
<dd>5. Textarea: textarea element for multi-line text input.</dd>
<dd>6. Button: button element for triggering actions.</dd>
<dd>Control components are essential for building interactive and user-friendly React applications.
</dd>
<dt className='borange'>What is uncontroll component ?</dt>
<dd>In React, an Uncontrolled Component is a component that manages its own state internally, without relying on the parent component's state or props.
</dd>
<dt>Characterstic</dt>
                  <dd>   1. Manages its own state internally.</dd>
                    <dd> 2. Does not use useState or useReducer hooks.</dd>
                <dd>     3. Uses the DOM's built-in state management (e.g., input value).</dd>
                    <dd> 4. Parent component does not control its state.
                    </dd>
                    <dt>When to use Uncontrolled Components:
                    </dt>
                <dd>    1. Simple forms with minimal validation.</dd>
                <dd>    2. Legacy codebases.</dd>
              <dd>      3. Third-party libraries that manage state internally.</dd>
              <dt>When to avoid Uncontrolled Components:
              </dt>
           <dd>   1. Complex forms with multiple validation rules.</dd>
                     <dd>    2. Dynamic state changes.</dd>
             <dd>  3. Requiring precise control over state.</dd>






      </dl>
    </div>
  )
}

export default Qna15
