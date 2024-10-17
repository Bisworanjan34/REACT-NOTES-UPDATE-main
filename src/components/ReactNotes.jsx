import React from 'react'
import './ReactNotes.css'
import { Link, Outlet } from 'react-router-dom'
const ReactNotes = () => {


    return (
        <div>
           <div className='developer'>
            <h1> REACT-NOTES</h1>
            <p>Developer- <b>Bisworanjan</b></p>
           </div>
          
<div className='nested-main'>
  <div className="quastion">
     <Link to={'qna1'}> <p>what is react ?</p> </Link>
     <Link to={'qna2'}> <p>what is props ?</p> </Link>
     <Link to={'qna3'}> <p>what is functional component ?</p> </Link>
     <Link to={'qna4'}> <p>what is useState ?</p> </Link>
     <Link to={'qna5'}> <p>what is useRef ?</p> </Link>
     <Link to={'qna6'}> <p>what is useEffect ?</p> </Link>
     <Link to={'qna7'}> <p>what is reducer ?</p> </Link>
     <Link to={'qna8'}> <p>what is react-router ?</p> </Link>
     <Link to={'qna9'}> <p>what is Axios ?</p> </Link>
     <Link to={'qna10'}> <p>what is context-Api ?</p> </Link>
     <Link to={'qna11'}> <p>what is Redux ?</p> </Link>
     <Link to={'qna12'}> <p>what is Redux-toolkit ?</p> </Link>
     <Link to={'qna13'}> <p>what is useMemo&Callback() ?</p> </Link>
     <Link to={'qna14'}> <p>what is Lazy loading ?</p> </Link>
     <Link to={'qna15'}> <p>what is control&uncontroll component ?</p> </Link>
   
  </div>
  <div className="answer">
    <Outlet/>
  </div>

 
</div>
        </div>
    )
}

export default ReactNotes
