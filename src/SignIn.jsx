import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Home } from "lucide-react";

// Import images for background slideshow
import bg1 from "./assets/disaster1.jpg";
import bg2 from "./assets/disaster2.jpg";
import bg3 from "./assets/disaster3.jpg";
import bg4 from "./assets/disaster4.jpg";

export default function SignIn() {
  const images = [bg1, bg2, bg3, bg4];
  const [currentImage, setCurrentImage] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setCurrentImage((prev) => (prev + 1) % images.length);
        setFade(true);
      }, 500);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Background Image with Transition */}
      <div
        className={`absolute inset-0 bg-cover bg-center transition-all duration-1000 ease-in-out ${fade ? "opacity-100" : "opacity-0"}`}
        style={{ backgroundImage: `url(${images[currentImage]})` }}
      ></div>

      {/* Home Button */}
      <Link
        to='/'
        className="absolute top-6 left-6 z-10 bg-white p-3 rounded-full shadow-lg hover:bg-gray-300 transition"
      >
        <Home size={28} className="text-gray-800" />
      </Link>

      {/* Sign In Box */}
      <div className="absolute inset-0 flex justify-center items-center">
        <div className="bg-white/30 backdrop-blur-lg p-8 rounded-2xl shadow-lg w-96 text-center animate-slide-in z-10">
          <h2 className="text-2xl font-bold text-white mb-4">Sign In</h2>
          <input
            type="email"
            placeholder="Email"
            className="w-full p-3 mb-3 bg-white/50 rounded-lg text-gray-900 focus:outline-none"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full p-3 mb-4 bg-white/50 rounded-lg text-gray-900 focus:outline-none"
          />
          <button className="w-full bg-red-600 text-white py-3 rounded-lg font-semibold hover:bg-red-700 transition">Sign In</button>
          <p className="mt-4 text-white">
            Don't have an account? <Link to="/signup" className="font-semibold underline">Sign Up</Link>
          </p>
        </div>
      </div>

      {/* Animation for Slide-in Effect */}
      <style>{`
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateX(-50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        .animate-slide-in {
          animation: slideIn 1s ease-in-out forwards;
        }
      `}</style>
    </div>
  );
}
