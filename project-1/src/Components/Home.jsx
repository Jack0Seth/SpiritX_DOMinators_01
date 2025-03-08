import { Button } from "@/components/ui/button";
import { LogOut } from "lucide-react";

export default function WelcomePage({ username }) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#1a1325] text-white">
      <h2 className="text-lg font-semibold">WELCOME {username}!</h2>
      <img src="./Assets/spiritx-logo.png" alt="SpiritX Logo" className="mt-4 h-16" />
      <Button className="mt-6 px-6 py-3 text-lg bg-pink-300 text-black flex items-center space-x-2 hover:bg-pink-400">
        <LogOut className="w-5 h-5 mr-2" /> Logout
      </Button>
      <img src="./Assets/dominators-logo.png" alt="Dominators Logo" className="mt-10 h-12" />
    </div>
  );
}