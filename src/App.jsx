import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // const [count, setCount] = useState(0)
  const [selectedColor, setSelectedColor] = useState("")
  const Color = (props) => {
    return <div className={props.Color}>
      <div onClick={() => setSelectedColor(Color)}></div>
    </div>
    
  }

  return (
    <>
    <div id="navbar">
  <div>Currently selected: </div>
  <div className={selectedColor}>{selectedColor}</div>
</div>
    { <div id="colors-list">
  <Color Color="red" setSelectedColor={setSelectedColor} />
  <Color Color="blue" setSelectedColor={setSelectedColor} />
  <Color Color="green" setSelectedColor={setSelectedColor} />
</div> }

    
    </>
  )
}

export default App
