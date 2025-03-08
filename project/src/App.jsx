import { useState } from 'react'
import Login from './Components/Login'
import Signup from './Components/Signup'
import Welcome from './Components/Welcome'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Welcome/>
    </>
  )
}

export default App
