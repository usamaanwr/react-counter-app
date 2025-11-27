import { useState } from 'react'
import "./component/styleCss/App.css"

function App() {
  const [count, setCount] = useState(0)
const increase = () =>{
  setCount(count + 1);
}
const decrease = () =>{
  setCount(count - 1);
}
const reset = () =>{
  setCount(0);
}
  return (
    <div className='main_container'>
      <h1>Counter App</h1>
      <p>{count}</p>
      <div className='count_btn'>
      <div className='btn'><button   onClick={increase}>increase</button></div>
      <div className='btn'><button onClick={decrease}>Decrease</button></div>
      <div className='btn'><button   onClick={reset}>Reset</button></div>

      </div>

    </div>
  )
}

export default App
