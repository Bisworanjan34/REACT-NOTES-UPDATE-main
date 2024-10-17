import React from 'react'

const Qna6 = () => {
  return (
    <div>
        <dt className='borange'>what is useEffect()</dt>
                        <dd>useEffect is a Hook in React that allows you to run side effects in your components. Side effects are actions that affect the outside world, such as:
                        </dd>
                      
                       <dd> 1. API calls</dd>
                    <dd>    2. DOM mutations</dd>
                     <dd>   3. Event listeners</dd>
                    <dd>    4. Timer setup</dd>
                       <dd> 5. Data fetching</dd>
                            <dt>How useEffect works</dt>
                           

                           <dd> 1. useEffect takes two arguments:</dd>
                               <dd>  - A function to run the side effect (first argument)
                               - An array of dependencies (second argument, optional)</dd>
                          <dd>   2. The side effect function runs after rendering, by default.</dd>
                           <dd>  3. If dependencies change, the side effect re-runs.</dd>
                            <dd> 4. If dependencies are empty ([]), the side effect runs only once.</dd>

                          
                     
    </div>
  )
}

export default Qna6
