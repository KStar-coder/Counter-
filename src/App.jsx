import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  // hook to change the state : useState. it returns 2 values, a variable and a function
  //   we can name these 2 anything we want 
  let [counter, setCounter] = useState(0) // 0 will be the default value

  //let counter = 5
  const addValue = () => {
    console.log("working")
    // counter = counter + 1
    setCounter(counter + 1)
  }

  const subtractValue = () => {
    if (counter >= 1)
      setCounter(counter - 1)
  }

  return (
    <>
      <h1>Chai aur React</h1>
      <h2>Counter Value : {counter}</h2>
      <button
        onClick={addValue}
      >Add Value</button>
      <br />
      <button
        onClick={subtractValue}
      >Decrease Value</button>
    </>
  )
}

export default App
