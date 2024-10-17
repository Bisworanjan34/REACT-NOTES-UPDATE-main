import React from 'react'

const Qna5 = () => {
  return (
    <div>
        <dt className='borange'>what is useRef()</dt>
                <dd>useRef is a Hook in React that allows you to create a reference to a DOM element or a value that persists across renders. It's useful when you need to:
                </dd>
                <dd>1. Access DOM elements directly
                 <dd>   2. Store values that don't affect rendering</dd>
                 <dd>   3. Create a mutable reference</dd>
                    </dd>
                    <dt>How useRef works
                    </dt>
                    <dd>
                    1. useRef takes an initial value as an argument.
                  <dd>  2. It returns a mutable ref object with a current property.</dd>
                  <dd>3. The current property is initialized with the initial value.</dd>
                  <dd>  4. The ref object persists across renders.</dd>
                        <dt>Key differences from useState
                        </dt>
                        <dd>
                        1. Persistence: useRef values persist across renders, whereas useState values trigger re-renders.
                        <dd>  2. Mutability: useRef returns a mutable ref object, whereas useState returns an immutable state value.</dd>
                        <dd>  3. Rendering: Changes to useRef values don't trigger re-renders, whereas changes to useState values do.</dd>
                 
                        </dd>
                    </dd>
    </div>
  )
}

export default Qna5
