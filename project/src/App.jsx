import { useState } from 'react'
import Login from './Components/Login'
import Signup from './Components/Signup'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Signup/>
    </>
  )
}

export default App
