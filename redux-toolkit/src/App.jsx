import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increaseBy5, increment } from './redux/slices/counterSlice'
import Navbar from './component/Navbar'

const App = () => {

  const num = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()

  return (
    <div>
      <h1>Count: {num}</h1>
      <button
        onClick={() => {
          dispatch(increment())
        }}
      >Increment</button>
      <button
        onClick={() => {
          dispatch(decrement())
        }}
      >Decrement</button>
      <button
        onClick={() => {
          dispatch(increaseBy5())
        }}
      >Increase By 5</button>
      <Navbar />
    </div>
  )
}

export default App
