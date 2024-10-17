import React from 'react'

const Qna4 = () => {
  return (
    <div>
       <dt className='borange'>what is useState ?</dt>
                <dd>useState is a Hook in React that allows you to add state to functional components. It was introduced in React 16.8 as a way to manage state in functional components, making them more powerful and flexible.
                </dd>
                <dt className='bgreen'>What does useState do?
                </dt>
                <dd>useState allows you to:</dd>

                <dd> 1. Initialize state variables</dd>
                <dd> 2. Update state variables</dd>
                <dd> 3. Use state variables in your component</dd>
                <dt className='bgreen'>Example</dt>
                <dd className='bl bwht'>
                    {' jsx' }
                 { "  import {useState} from 'react';"} <br />

                   {' function Counter() { '} <br />
                   {' const [count, setCount] = useState(0) '} <br />

                 { '  return ('} <br />
                  { ' <div>'} <br />
                      { ' <p>Count: {count}</p>' } <br />
                      { ' <button onClick={() => setCount(count + 1)}>Increment</button>'} <br />
                  { ' </div>' } <br />
                 {'  )'} <br />
              { ' }'}
               
                </dd>
                <dd>1. Use useState for simple, local state management.
                </dd>
                <dd>2. Use useReducer for complex, global state management.
                </dd>
                <dd>3. Keep state variables concise and focused.
                </dd>
                <dd>4. Avoid unnecessary state updates.
                </dd>
    </div>
  )
}

export default Qna4
