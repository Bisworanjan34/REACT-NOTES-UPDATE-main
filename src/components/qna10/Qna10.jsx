import React from 'react'

const Qna10 = () => {
  return (
    <div>
         <dt className='borange'>what is context Api ?</dt>
                      <dd>The Context API is a state management system in React that allows you to share data between components without passing props down manually.
                      </dd>
                      <dt>key features</dt>
                      <dd>1. Global State: Share data globally across components.
                         <dd>  2. Decoupling: Components don't need to know about each other.</dd>
                         <dd>  3. Easy Data Sharing: Share data without prop drilling.</dd>
                         <dd>  4. Scalable: Suitable for large-scale applications.</dd>
                         <dt>how it works?</dt>
                         <dd>1. Create a Context: const ThemeContext = React.createContext()
                          <dd>   2. Create a Provider:{" <ThemeContext.Provider value={{ theme: 'dark' }}>"}</dd>
                          <dd>   3. Wrap the app:{" <ThemeContext.Provider>...</ThemeContext.Provider>"}</dd>
                            <dd> 4. Consume the Context: const theme = useContext(ThemeContext)</dd>

                          </dd>
                          <dt>benifits::</dt>
                          <dd>1. Easy data sharing: Share data without prop drilling.
                             <dd> 2. Decoupling: Components don't need to know about each other.</dd>
                        <dd>      3. Scalable: Suitable for large-scale applications.</dd>
                           <dd>   4. Improved performance: Reduces unnecessary re-renders.</dd>
                              </dd>
                           </dd>
    </div>
  )
}

export default Qna10
