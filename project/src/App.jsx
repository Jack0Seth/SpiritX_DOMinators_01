import { useState } from 'react'
import Signup from './Components/Signup'
import Login from './Components/Login'

function App() {
  const [authPage, setAuthPage] = useState("login"); // Default is Login page

  return (
    <div>
      {authPage === "login" ? (
        <Login navigateToSignup={() => setAuthPage("signup")} />
      ) : (
        <Signup navigateToLogin={() => setAuthPage("login")} />
      )}
    </div>
  );
}


export default App
