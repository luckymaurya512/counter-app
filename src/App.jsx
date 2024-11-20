
import { useDispatch, useSelector } from 'react-redux'
import './App.css'
import { increment, decrement, reset, incrementByAmount } from './assets/features/counterSlice';
import { useState } from 'react';


function App() {

  const [amount, setAmount]=useState(0);

  const count = useSelector((state)=>state.counter.value);

  const dispatch=useDispatch();

  const handleIncrement =()=>{
    dispatch(increment());
  }

  const handleDecrement = () => {
    dispatch(decrement());
  }

  const handleReset = () => {
    dispatch(reset());
  }

  const handleIncByAmount = () => {
    dispatch(incrementByAmount(amount));
    }

  return (
    <div>
      <button  onClick={handleDecrement} >-</button>
      {count}
      <button onClick={handleIncrement} >+</button>
      <br></br>
      <button onClick={handleReset} >Reset</button>
      <br></br>
      <input
      type='number'
      value={amount}
      placeholder='enter amount'
      onChange={(e)=>setAmount(e.target.value)}
      />
      <br/>
      <button onClick={handleIncByAmount} >Inc by {amount}</button>
    </div>
  )
}

export default App
