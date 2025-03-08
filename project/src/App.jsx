import { useState } from 'react'
import Login from './Components/Login'
import Signup from './Components/Signup'
import Welcome from './Components/Welcome'

function App() {
  const [currentPage, setCurrentPage] = useState("login"); // Default page

  return (
    <>
      {currentPage === "login" && <Login onNavigate={setCurrentPage} />}
      {currentPage === "signup" && <Signup onNavigate={setCurrentPage} />}
      {currentPage === "welcome" && <Welcome />}
    </>
  );
}

export default App
