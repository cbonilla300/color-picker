import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const color = (prop) => {

  }

  return (
    <>
     <div id="container">
      <div id="navbar">
        <div>Currently selected: </div>
        <div className="red">red</div>
      </div>
      <div id="colors-list">{/* colors go here */}</div>
    </div>
      <div className={color}></div>
      <div id="color-list">
        <Color color="red" />
        <Color color="blue"  />
        <Color color="green" />
      </div>
    </>
  )
}

export default App
