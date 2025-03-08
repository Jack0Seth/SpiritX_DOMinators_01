import { useState } from 'react'
import Signup from './Components/Login'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Signup/>
    </>
  )
}

export default App
