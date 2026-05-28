import { Button } from './components/Button'
import './App.css'
import { useState } from 'react'

function App() {

  const [count, setCount] = useState(0)

  const addToCount = () => {
    setCount(count + 1)
  }

  const removeFromCount = () => {
   count <= 0 ? null : setCount(count - 1)
  }

  return (
    <>
     <Button action={removeFromCount}>Remove</Button>
     <p>Count: {count}</p>
     {count === 0 && <p>Count is zero</p>}
     <Button action={addToCount}>Add</Button>
    </>
  )
}

export default App
