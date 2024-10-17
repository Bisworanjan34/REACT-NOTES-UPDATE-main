import { useEffect, useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ReactNotes from './components/ReactNotes'
import { Route, Routes } from 'react-router-dom'
import Qna1 from './components/qna1/Qna1'
import Qna12 from './components/qna12/Qna12'
import Qna11 from './components/qna11/Qna11'
import Qna10 from './components/qna10/Qna10'
import Qna9 from './components/qna9/Qna9'
import Qna8 from './components/qna8/Qna8'
import Qna7 from './components/qna7/Qna7'
import Qna6 from './components/qna6/Qna6'
import Qna5 from './components/qna5/Qna5'
import Qna4 from './components/qna4/Qna4'
import Qna3 from './components/qna3/Qna3'
import Qna2 from './components/qna2/Qna2'
import Qna13 from './components/qna13/Qna13'
import Qna14 from './components/qna14/Qna14'
import Qna15 from './components/qna15/Qna15'

function App() {
  // let displayRef=useRef()

  // useEffect(()=>{
  //   setTimeout(() => {
  //     displayRef.current.classList.add('active-display')
  //   }, 1500);
  // },[])

  return (
    <>
    <div className="app">
     
      <Routes>
        <Route path='/' element={<ReactNotes/>}>
           <Route path='/' element={<Qna1/>}/>
           <Route path='qna1' element={<Qna1/>}/>
           <Route path='qna2' element={<Qna2/>}/>
           <Route path='qna3' element={<Qna3/>}/>
           <Route path='qna4' element={<Qna4/>}/>
           <Route path='qna5' element={<Qna5/>}/>
           <Route path='qna6' element={<Qna6/>}/>
           <Route path='qna7' element={<Qna7/>}/>
           <Route path='qna8' element={<Qna8/>}/>
           <Route path='qna9' element={<Qna9/>}/>
           <Route path='qna10' element={<Qna10/>}/>
           <Route path='qna11' element={<Qna11/>}/>
           <Route path='qna12' element={<Qna12/>}/>
           <Route path='qna13' element={<Qna13/>}/>
           <Route path='qna14' element={<Qna14/>}/>
           <Route path='qna15' element={<Qna15/>}/>
        </Route>
      </Routes>
     {/* <div className="display " ref={displayRef}>
      <div className="sub-display">
      <h1>Welcome to React-Notes</h1>
      <p>welcome user your react notes are here just read have a good day</p>
      <h4>Ract-Notes</h4>
     </div>
     </div> */}
    </div>
    </>
  )
}

export default App
