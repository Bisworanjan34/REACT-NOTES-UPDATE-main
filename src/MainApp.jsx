import React, { useEffect, useRef, useState } from 'react'
import App from './App'
import Display from './components/Display'

const MainApp = () => {
    let displayRef=useRef()
    let [display,setDisplay]=useState(false)

    useEffect(()=>{
        displayRef.current.classList.add('active-display')
      // setTimeout(() => {       
      // //  setDisplay(()=>true)
    
      // }, 1700);
    },[])
  return (
    <div>
      <div> 
        {display ?<App/>:<Display displayRef={displayRef} setDisplay={setDisplay}/>}
      </div>
    </div>
  )
}

export default MainApp
