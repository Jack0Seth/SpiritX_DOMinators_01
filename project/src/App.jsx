import { useState } from 'react'
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
