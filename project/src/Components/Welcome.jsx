import { FaSignOutAlt } from "react-icons/fa";
import spiritXLogo from "../assets/spiritXLogo.png"; 
import dominatorsLogo from "../assets/dominatorsLogo.png"; 

const Welcome = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#221E31] text-white">
      <h2 className="text-lg font-medium mb-4">WELCOME UserName!</h2>

      {/* SpiritX Logo*/}
      <img src={spiritXLogo} alt="SpiritX Logo" className="w-60 mb-6" />

      {/* Logout Button */}
      <button className="mt-6 flex items-center gap-2 bg-[#FEEFFF] text-[#221E31] px-6 py-2 rounded-lg shadow-md hover:bg-[#D9D9D9] transition duration-200">
        <FaSignOutAlt />
        Logout
      </button>

      {/* Dominators Logo */}
      <div className="mt-10 flex flex-col items-center">
        <img src={dominatorsLogo} alt="Dominators Logo" className="h-20 " />
        <p className="text-sm font-medium tracking-wider">DOMINATORS</p>
      </div>
    </div>
  );
};

export default Welcome;
