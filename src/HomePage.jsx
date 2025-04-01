import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logo from "./assets/vamika-logo.png";

// Import images for background slideshow
import disaster1 from "./assets/disaster1.jpg";
import disaster2 from "./assets/disaster2.jpg";
import disaster3 from "./assets/disaster3.jpg";
import disaster4 from "./assets/disaster4.jpg";

export default function HomePage() {
  const [isOpen, setIsOpen] = useState(false);
  const [weather, setWeather] = useState(null);
  const disasterImages = [disaster1, disaster2, disaster3, disaster4];
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevIndex) => (prevIndex + 1) % disasterImages.length);
    }, 5000); // Change every 5 seconds

    return () => clearInterval(interval);
  }, []);

  // Fetch Weather Data
  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=Delhi&units=metric&appid=17e67142350d395378e84cd26e6d34df`
        );
        setWeather(response.data);
      } catch (error) {
        console.error("Error fetching weather:", error);
      }
    };

    fetchWeather();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 relative">
      {/* Navbar */}
      <nav className="bg-red-600 text-white p-4 shadow-lg fixed w-full top-0 z-20">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <img src={logo} alt="Vamika Logo" className="h-14 w-auto brightness-110 contrast-125" />
            <span className="text-4xl font-bold text-white" style={{ fontFamily: '"Dancing Script", cursive' }}>
              Vamika
            </span>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden focus:outline-none" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={30} /> : <Menu size={30} />}
          </button>

          {/* Navbar Links - Desktop */}
          <ul className="hidden md:flex space-x-6 text-lg">
            <li>
              <Link to="/weather" className="px-4 py-2 rounded transition duration-300 hover:bg-white hover:text-red-600">
                Weather Alerts
              </Link>
            </li>
            <li>
              <Link to="/history" className="px-4 py-2 rounded transition duration-300 hover:bg-white hover:text-red-600">
                Disaster History
              </Link>
            </li>
            <li>
              <Link to="/support" className="px-4 py-2 rounded transition duration-300 hover:bg-white hover:text-red-600">
                Support
              </Link>
            </li>
            <li>
              <Link to="/signin" className="px-4 py-2 rounded transition duration-300 hover:bg-white hover:text-red-600">
                Sign In
              </Link>
            </li>
          </ul>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <ul className="md:hidden flex flex-col items-center bg-red-700 text-white w-full py-4 space-y-3 absolute top-full left-0">
            <li>
              <Link to="/weather" className="block px-4 py-2 hover:bg-white hover:text-red-600 w-full text-center" onClick={() => setIsOpen(false)}>
                Weather Alerts
              </Link>
            </li>
            <li>
              <Link to="/history" className="block px-4 py-2 hover:bg-white hover:text-red-600 w-full text-center" onClick={() => setIsOpen(false)}>
                Disaster History
              </Link>
            </li>
            <li>
              <Link to="/support" className="block px-4 py-2 hover:bg-white hover:text-red-600 w-full text-center" onClick={() => setIsOpen(false)}>
                Support
              </Link>
            </li>
            <li>
              <Link to="/signin" className="block px-4 py-2 hover:bg-white hover:text-red-600 w-full text-center" onClick={() => setIsOpen(false)}>
                Sign In
              </Link>
            </li>
          </ul>
        )}
      </nav>

      {/* Background Slideshow */}
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center transition-all duration-1000"
        style={{
          backgroundImage: `url(${disasterImages[currentImage]})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>

      {/* Hero Section - Centered Text */}
      <section className="absolute inset-0 flex flex-col justify-center items-center text-white text-center z-10 mt-20">
        <h1 className="text-5xl md:text-6xl font-bold transition-all duration-700">
          Stay Alert
        </h1>
        <h1 className="text-5xl md:text-6xl font-bold transition-all duration-700 mt-2">
          Stay Safe
        </h1>

        {/* Weather Section */}
        {weather ? (
          <div className="bg-white/30 backdrop-blur-md p-6 rounded-xl mt-10 shadow-lg">
            <h2 className="text-xl font-bold text-white">Current Weather</h2>
            <p className="text-white text-lg mt-2">{weather.name}</p>
            <p className="text-white text-lg">
              🌡️ {weather.main.temp}°C | 🌬️ {weather.wind.speed} m/s
            </p>
            <p className="text-white text-md">{weather.weather[0].description.toUpperCase()}</p>
          </div>
        ) : (
          <p className="text-white text-lg mt-4">Loading weather data...</p>
        )}
      </section>
    </div>
  );
}


// import { useState, useEffect } from "react";
// import axios from "axios";
// import { Link } from "react-router-dom";
// import { Menu, X } from "lucide-react";
// import logo from "./assets/vamika-logo.png";

// // Import images for background slideshow
// import disaster1 from "./assets/disaster1.jpg";
// import disaster2 from "./assets/disaster2.jpg";
// import disaster3 from "./assets/disaster3.jpg";
// import disaster4 from "./assets/disaster4.jpg";

// export default function HomePage() {
//   const [isOpen, setIsOpen] = useState(false);
//   const [weather, setWeather] = useState(null);
//   const disasterImages = [disaster1, disaster2, disaster3, disaster4];
//   const [currentImage, setCurrentImage] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentImage((prevIndex) => (prevIndex + 1) % disasterImages.length);
//     }, 5000); // Change every 5 seconds

//     return () => clearInterval(interval);
//   }, []);

//   // Fetch Weather Data
//   useEffect(() => {
//     const fetchWeather = async () => {
//       try {
//         const response = await axios.get(
//           `https://api.openweathermap.org/data/2.5/weather?q=Delhi&units=metric&appid=17e67142350d395378e84cd26e6d34df`
//         );
//         setWeather(response.data);
//       } catch (error) {
//         console.error("Error fetching weather:", error);
//       }
//     };

//     fetchWeather();
//   }, []);

//   return (
//     <div className="min-h-screen bg-gray-100 relative">
//       {/* Navbar */}
//       <nav className="bg-red-600 text-white p-4 shadow-lg fixed w-full top-0 z-20">
//         <div className="container mx-auto flex justify-between items-center">
//           <div className="flex items-center space-x-4">
//             <img src={logo} alt="Vamika Logo" className="h-14 w-auto brightness-110 contrast-125" />
//             <span className="text-6xl font-bold text-white" style={{ fontFamily: '"Dancing Script", cursive' }}>
//               Vamika
//             </span>
//           </div>

//           {/* Mobile Menu Button */}
//           <button className="md:hidden focus:outline-none" onClick={() => setIsOpen(!isOpen)}>
//             {isOpen ? <X size={30} /> : <Menu size={30} />}
//           </button>

//           {/* Navbar Links - Desktop */}
//           <ul className="hidden md:flex space-x-6 text-lg">
//             <li>
//               <Link to="/weather" className="text-2xl px-4 py-2 rounded transition duration-300 hover:bg-white hover:text-red-600">
//                 Weather Alerts
//               </Link>
//             </li>
//             <li>
//               <Link to="/history" className="text-2xl px-4 py-2 rounded transition duration-300 hover:bg-white hover:text-red-600">
//                 Disaster History
//               </Link>
//             </li>
//             <li>
//               <Link to="/community" className="text-2xl px-4 py-2 rounded transition duration-300 hover:bg-white hover:text-red-600">
//                 Community
//               </Link>
//             </li>
//             <li>
//               <Link to="/signin" className="text-2xl px-4 py-2 rounded transition duration-300 hover:bg-white hover:text-red-600">
//                 Sign In
//               </Link>
//             </li>
//           </ul>
//         </div>

//         {/* Mobile Menu */}
//         {isOpen && (
//           <ul className="md:hidden flex flex-col items-center bg-red-700 text-white w-full py-4 space-y-3 absolute top-full left-0">
//             <li>
//               <Link to="/weather" className="block px-4 py-2 hover:bg-white hover:text-red-600 w-full text-center" onClick={() => setIsOpen(false)}>
//                 Weather Alerts
//               </Link>
//             </li>
//             <li>
//               <Link to="/history" className="block px-4 py-2 hover:bg-white hover:text-red-600 w-full text-center" onClick={() => setIsOpen(false)}>
//                 Disaster History
//               </Link>
//             </li>
//             <li>
//               <Link to="/community" className="block px-4 py-2 hover:bg-white hover:text-red-600 w-full text-center" onClick={() => setIsOpen(false)}>
//                 Community
//               </Link>
//             </li>
//             <li>
//               <Link to="/signin" className="block px-4 py-2 hover:bg-white hover:text-red-600 w-full text-center" onClick={() => setIsOpen(false)}>
//                 Sign In
//               </Link>
//             </li>
//           </ul>
//         )}
//       </nav>

//       {/* Background Slideshow */}
//       <div
//         className="absolute inset-0 w-full h-full bg-cover bg-center transition-all duration-1000"
//         style={{
//           backgroundImage: `url(${disasterImages[currentImage]})`,
//           backgroundSize: "cover",
//           backgroundPosition: "center",
//         }}
//       ></div>

//       {/* Hero Section - Centered Text */}
//       <section className="absolute inset-0 flex flex-col justify-center items-center text-white text-center z-10 mt-20">
//         <h1 className="text-5xl md:text-6xl font-bold transition-all duration-700">
//           Stay Alert
//         </h1>
//         <h1 className="text-5xl md:text-6xl font-bold transition-all duration-700 mt-2">
//           Stay Safe
//         </h1>

//         {/* Weather Section */}
//         {weather ? (
//           <div className="bg-white/30 backdrop-blur-md p-6 rounded-xl mt-10 shadow-lg">
//             <h2 className="text-xl font-bold text-white">Current Weather</h2>
//             <p className="text-white text-lg mt-2">{weather.name}</p>
//             <p className="text-white text-lg">
//               🌡️ {weather.main.temp}°C | 🌬️ {weather.wind.speed} m/s
//             </p>
//             <p className="text-white text-md">{weather.weather[0].description.toUpperCase()}</p>
//           </div>
//         ) : (
//           <p className="text-white text-lg mt-4">Loading weather data...</p>
//         )}
//       </section>

//       {/* Footer with Support Section */}
//       <footer className="bg-red-700 text-white text-center p-6 mt-20">
//         <p>For any issues, contact us at <a href="mailto:support@vamika.com" className="underline">support@vamika.com</a></p>
//       </footer>
//     </div>
//   );
// }

