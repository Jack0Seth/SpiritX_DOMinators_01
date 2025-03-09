import { useEffect, useState } from "react";
import { FaSignOutAlt } from "react-icons/fa";
import spiritXLogo from "../assets/spiritXLogo.png"; 
import dominatorsLogo from "../assets/dominatorsLogo.png"; 

const Welcome = () => {
  const [username, setUsername] = useState("");

  useEffect(() => {
    // Fetch session user
    const loggedInUser = sessionStorage.getItem('username');
    if (!loggedInUser) {
      // If no username is found in sessionStorage, redirect to login page
      window.location.href = "/login"; // Adjust to your app's routing
    } else {
      setUsername(loggedInUser);
    }
  }, []);

  const handleLogout = () => {
    fetch("http://localhost:5000/logout", {
      method: "POST",
      credentials: "include",
    }).then(() => {
      window.location.href = "/login";
    });
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#221E31] text-white">
      <h2 className="text-lg font-medium mb-10">WELCOME {username}!</h2>

      {/* SpiritX Logo */}
      <img src={spiritXLogo} alt="SpiritX Logo" className="w-86 mb-6" />

      {/* Logout Button */}
      <button
        className="mt-6 flex items-center gap-2 bg-[#FEEFFF] text-[#221E31] px-6 py-2 rounded-lg shadow-md hover:bg-[#D9D9D9] transition duration-200"
        onClick={handleLogout}
      >
        <FaSignOutAlt />
        Logout
      </button>

      {/* Dominators Logo */}
      <div className="mt-10 flex flex-col items-center">
        <img src={dominatorsLogo} alt="Dominators Logo" className="h-28" />
      </div>
    </div>
  );
};

export default Welcome;
