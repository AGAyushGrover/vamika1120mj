import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Home } from "lucide-react";

import bg1 from "./assets/disaster1.jpg";
import bg2 from "./assets/disaster2.jpg";
import bg3 from "./assets/disaster3.jpg";
import bg4 from "./assets/disaster4.jpg";

export default function SignUp() {
  const [currentBg, setCurrentBg] = useState(0);
  const backgrounds = [bg1, bg2, bg3, bg4];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBg((prev) => (prev + 1) % backgrounds.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-screen flex justify-center items-center overflow-hidden">
      {/* Background Animation */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-all duration-1000"
        style={{ backgroundImage: `url(${backgrounds[currentBg]})` }}
      ></div>

      {/* Home Button */}
      <Link to="/" className="absolute top-6 left-6 bg-white p-3 rounded-full shadow-lg">
        <Home size={28} className="text-gray-800" />
      </Link>

      {/* Sign-Up Form */}
      <div className="relative z-10 bg-white bg-opacity-20 backdrop-blur-md p-8 rounded-2xl shadow-xl w-96">
        <h2 className="text-white text-3xl font-bold text-center mb-6">Create Account</h2>
        
        <input type="text" placeholder="Full Name" className="w-full mb-4 p-3 rounded-lg bg-white bg-opacity-70 placeholder-gray-600" />
        
        <div className="flex space-x-4">
          <input type="email" placeholder="Email" className="w-1/2 p-3 rounded-lg bg-white bg-opacity-70 placeholder-gray-600" />
          <input type="text" placeholder="Phone" className="w-1/2 p-3 rounded-lg bg-white bg-opacity-70 placeholder-gray-600" />
        </div>
        
        <input type="password" placeholder="Password" className="w-full mt-4 p-3 rounded-lg bg-white bg-opacity-70 placeholder-gray-600" />
        
        <button className="w-full mt-6 py-3 bg-red-600 text-white font-bold rounded-lg shadow-md hover:bg-red-700 transition">Sign Up</button>
        
        <p className="text-white text-center mt-4">Already have an account? <Link to="/signin" className="font-bold underline">Sign In</Link></p>
      </div>
    </div>
  );
}
