import React from 'react'
import './Display.css'
import men from '../assets/men.png'
const Display = ({displayRef,setDisplay}) => {
  return (
    <div>
       <div className="display " ref={displayRef}>
      <div className="sub-display">
        <img src={men} alt="" height={150} />
      <h1>Welcome To React-Notes</h1>
      <p>welcome user your <b>react</b> all important notes are available in this page this is for you learn and mastery in react good luck</p>
      <button onClick={()=>setDisplay(true)}>Ract-Notes</button>
      <p className='made-by'>Made by <b>Bisworanjan</b></p>
      <p className='deve'>Developer <b>Biswo</b></p>
      <p className='design'>Designer Biswo</p>
     </div>
     </div>
    </div>
  )
}

export default Display
