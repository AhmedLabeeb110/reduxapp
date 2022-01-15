import React from 'react'
import '../src/App.css'
import { useSelector, useDispatch } from 'react-redux'
import {incNumber, decNumber} from "./actions/index" 

const App = () => {
  const myState = useSelector((state) => state.changeTheNumber)
  const dispatch = useDispatch();
  
  return (
    <div>
      <div className="container">
         <h1>Increment/Decrement counter</h1>
         <h4>Using React and Redux</h4>

         <div className="quantity">
           <a href className="quantity_minus" title="Decrement"> <span onClick={ () => dispatch(decNumber()) }>-</span> </a>
           <input name="quantity" type="text" className="quantity_input" value={myState}/>
           <a href className="quantity_plus" title="Increment"> <span onClick={ () => dispatch(incNumber()) }>+</span> </a> 
        </div>
      </div>
    </div>
  )
}

export default App
