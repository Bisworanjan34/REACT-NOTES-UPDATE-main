import React from 'react'

const Qna13 = () => {
  return (
    <div>
      <dl>
        <dt className='borange'>what is useMemo()</dt>
        <dd>useMemo is a React hook that allows you to memoize (cache) the result of a function so that it's not recalculated unnecessarily. This helps optimize performance by avoiding expensive computations or redundant work.
     </dd>
       <dt>Why use useMemo?
       </dt>
         <dd>1. Performance optimization: Avoid expensive computations or redundant work.</dd>
           <dd> 2. Prevent unnecessary re-renders: Memoize values to prevent unnecessary component             re-renders.</dd>
        <dd>    3. Cache results: Store results of expensive functions for future use.</dd>
           <dt>When to use useMemo?
           </dt>
          <dd>1. Expensive computations: Use useMemo for complex calculations or data processing.</dd>
                <dd>  2. Data transformation: Memoize transformed data to avoid redundant computations.</dd>
                 <dd> 3. API calls: Cache API response data to reduce network requests.</dd>
                 <dt>key points</dt>
                <dd> 1. The first argument is a function that computes the value.</dd>
               <dd>  2. The second argument is an array of dependencies.</dd>
                <dd> 3. When dependencies change, the function is recalculated.</dd>
             <dt className='borange'>what is useCallback()</dt>
           <dd>  useCallback is a React hook that allows you to memoize a function so that it's not recreated unnecessarily. This helps optimize performance by preventing unnecessary re-renders and ensuring that referenced values are up-to-date.</dd>
           <dt>Why use useCallback?
           </dt>
          <dd> 1. Prevent unnecessary re-renders: Memoize functions to prevent unnecessary component re-renders.</dd>
            <dd>2. Optimize performance: Avoid recreating functions unnecessarily.</dd>
            <dd>3. Ensure referenced values are up-to-date: Memoize functions to ensure referenced values are current.</dd>
            <dt>When to use useCallback?
            </dt>
           <dd> 1. Passing functions as props: Use useCallback to memoize functions passed as props.</dd>
             <dd>2. Using functions in useEffect: Memoize functions used in useEffect hooks.</dd>
             <dd>3. Optimizing performance-critical components: Use useCallback to optimize components with expensive functions.</dd>
             <dt>key points</dt>
          <dd> 1. The first argument is a function.</dd>
         <dd>2. The second argument is an array of dependencies.</dd>
          <dd>3. When dependencies change, the function is recreated.</dd>

          <dt>Difference between useMemo and useCallback
          </dt>
          <dd>- useMemo memoizes values, while useCallback memoizes functions.</dd>
             <dd>- useMemo returns a value, while useCallback returns a function.</dd>
             <dd>By using useCallback, you can optimize your React applications by preventing unnecessary function recreations and ensuring referenced values are up-to-date.</dd>



                 
      </dl>
    </div>
  )
}

export default Qna13
