import { useState } from 'react'
import Login from './Components/Login'
import Signup from './Components/Signup'
import Welcome from './Components/Welcome'

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
