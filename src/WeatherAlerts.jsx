// import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import { Home } from "lucide-react";

// export default function WeatherAlerts() {
//   const [isDay, setIsDay] = useState(true);
//   const [temperature, setTemperature] = useState(30);
//   const [windSpeed, setWindSpeed] = useState(10);
//   const [humidity, setHumidity] = useState(60);

//   useEffect(() => {
//     const hour = new Date().getHours();
//     setIsDay(hour >= 6 && hour < 18); // Set day/night based on time
//   }, []);

//   return (
//     <div className={`min-h-screen ${isDay ? "bg-blue-200" : "bg-gray-900"} transition-all duration-1000`}>
//       {/* Header with Background */}
//       <div className={`relative h-screen flex flex-col justify-center items-center text-white ${isDay ? "bg-blue-500" : "bg-black"}`}>
//         {/* Home Button */}
//         <Link to="/" className="absolute top-6 left-6 bg-white p-3 rounded-full shadow-lg">
//           <Home size={28} className="text-gray-800" />
//         </Link>

//         {/* Weather Icon */}
//         <div className="absolute top-10 right-10 text-white text-6xl">
//           {isDay ? "☀️" : "🌙"}
//         </div>

//         {/* Weather Info */}
//         <h1 className="text-5xl font-bold">{isDay ? "Good Morning ☀️" : "Good Evening 🌙"}</h1>
//         <p className="text-2xl mt-2">Current Weather</p>
//         <div className="text-4xl font-bold mt-4">{temperature}°C</div>
//         <p className="text-lg">Wind Speed: {windSpeed} km/h | Humidity: {humidity}%</p>
//       </div>

//       {/* Scroll Sections */}
//       <div className="bg-white text-gray-800 text-center py-20">
//         <h2 className="text-3xl font-bold">Upcoming Weather Forecast</h2>
//         <p className="mt-4 text-lg">🌦️ Expect light showers tomorrow with a high of 28°C.</p>
//       </div>

//       <div className="bg-gray-200 text-gray-800 text-center py-20">
//         <h2 className="text-3xl font-bold">Historical Weather Data</h2>
//         <p className="mt-4 text-lg">🔥 Last year, this week recorded the highest temperature of 42°C.</p>
//       </div>
//     </div>
//   );
// }


// import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import { Home } from "lucide-react";
// import { motion } from "framer-motion";

// export default function WeatherAlerts() {
//   const [isDay, setIsDay] = useState(true);
//   const [temperature, setTemperature] = useState(30);
//   const [windSpeed, setWindSpeed] = useState(10);
//   const [humidity, setHumidity] = useState(60);

//   useEffect(() => {
//     const hour = new Date().getHours();
//     setIsDay(hour >= 6 && hour < 18); // 6 AM to 6 PM is day, otherwise night
//   }, []);

//   return (
//     <div className="min-h-screen overflow-hidden relative">
//       {/* Sky Background */}
//       <div className={`absolute inset-0 transition-all duration-1000 ${isDay ? "bg-blue-400" : "bg-gray-900"}`} />

//       {/* Sun or Moon Animation */}
//       <motion.div
//         animate={{ y: [0, 50, 0] }} // Floating animation
//         transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
//         className={`absolute w-40 h-40 rounded-full ${isDay ? "bg-yellow-400" : "bg-gray-200"} shadow-xl`}
//         style={{
//           top: isDay ? "10%" : "20%",
//           left: isDay ? "70%" : "80%",
//         }}
//       >
//         {isDay ? (
//           <div className="absolute inset-0 flex items-center justify-center">
//             <div className="w-48 h-48 bg-yellow-300 opacity-30 rounded-full blur-2xl"></div>
//           </div>
//         ) : null}
//       </motion.div>

//       {/* Stars at Night */}
//       {!isDay && (
//         <div className="absolute inset-0">
//           {[...Array(50)].map((_, i) => (
//             <motion.div
//               key={i}
//               className="absolute w-1 h-1 bg-white rounded-full"
//               animate={{ opacity: [0, 1, 0] }}
//               transition={{ repeat: Infinity, duration: Math.random() * 3 + 2 }}
//               style={{
//                 top: `${Math.random() * 100}%`,
//                 left: `${Math.random() * 100}%`,
//               }}
//             />
//           ))}
//         </div>
//       )}

//       {/* Landscape (Ground) */}
//       <div className="absolute bottom-0 w-full h-40 bg-green-600 rounded-t-[50%]"></div>

//       {/* Weather Info Box */}
//       <div className="absolute inset-0 flex flex-col justify-center items-center text-white">
//         <h1 className="text-5xl font-bold">{isDay ? "Good Morning ☀️" : "Good Evening 🌙"}</h1>
//         <p className="text-2xl mt-2">Current Weather</p>
//         <div className="text-4xl font-bold mt-4">{temperature}°C</div>
//         <p className="text-lg">Wind Speed: {windSpeed} km/h | Humidity: {humidity}%</p>
//       </div>

//       {/* Home Button */}
//       <Link to="/" className="absolute top-6 left-6 bg-white p-3 rounded-full shadow-lg">
//         <Home size={28} className="text-gray-800" />
//       </Link>

//       {/* Scroll Sections */}
//       <div className="bg-white text-gray-800 text-center py-20 mt-screen">
//         <h2 className="text-3xl font-bold">Upcoming Weather Forecast</h2>
//         <p className="mt-4 text-lg">🌦️ Expect light showers tomorrow with a high of 28°C.</p>
//       </div>

//       <div className="bg-gray-200 text-gray-800 text-center py-20">
//         <h2 className="text-3xl font-bold">Historical Weather Data</h2>
//         <p className="mt-4 text-lg">🔥 Last year, this week recorded the highest temperature of 42°C.</p>
//       </div>
//     </div>
//   );
// }


// import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import { Home } from "lucide-react";
// import { motion } from "framer-motion";

// export default function WeatherAlerts() {
//   const [isDay, setIsDay] = useState(true);
//   const [temperature, setTemperature] = useState(30);
//   const [windSpeed, setWindSpeed] = useState(10);
//   const [humidity, setHumidity] = useState(60);

//   useEffect(() => {
//     const hour = new Date().getHours();
//     setIsDay(hour >= 6 && hour < 18); // 6 AM to 6 PM is day, otherwise night
//   }, []);

//   return (
//     <div className="min-h-screen overflow-hidden relative">
//       {/* Dynamic Background */}
//       <div className={`absolute inset-0 transition-all duration-1000 ${isDay ? "bg-blue-400" : "bg-gray-900"}`} />

//       {/* Sun or Moon Animation */}
//       <motion.div
//         animate={{ y: [0, 50, 0] }} // Floating animation
//         transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
//         className={`absolute w-40 h-40 rounded-full ${isDay ? "bg-yellow-400" : "bg-gray-200"} shadow-xl`}
//         style={{
//           top: isDay ? "10%" : "20%",
//           left: isDay ? "70%" : "80%",
//         }}
//       >
//         {isDay ? (
//           <div className="absolute inset-0 flex items-center justify-center">
//             <div className="w-48 h-48 bg-yellow-300 opacity-30 rounded-full blur-2xl"></div>
//           </div>
//         ) : null}
//       </motion.div>

//       {/* Stars at Night */}
//       {!isDay && (
//         <div className="absolute inset-0">
//           {[...Array(50)].map((_, i) => (
//             <motion.div
//               key={i}
//               className="absolute w-1 h-1 bg-white rounded-full"
//               animate={{ opacity: [0, 1, 0] }}
//               transition={{ repeat: Infinity, duration: Math.random() * 3 + 2 }}
//               style={{
//                 top: `${Math.random() * 100}%`,
//                 left: `${Math.random() * 100}%`,
//               }}
//             />
//           ))}
//         </div>
//       )}

//       {/* Landscape (Ground) */}
//       <div className="absolute bottom-0 w-full h-40 bg-green-600 rounded-t-[50%]"></div>

//       {/* Weather Sections */}
//       <div className="absolute inset-0 flex flex-col justify-center items-center text-white px-4">
//         <h1 className="text-5xl font-bold">{isDay ? "Good Morning ☀️" : "Good Evening 🌙"}</h1>
//         <p className="text-2xl mt-2">Current Weather Conditions</p>

//         {/* Weather Cards */}
//         <div className="flex flex-wrap justify-center gap-6 mt-8">
//           <div className="bg-white/30 backdrop-blur-md p-6 rounded-xl shadow-lg w-72 text-center">
//             <h2 className="text-2xl font-bold">🌡 Temperature</h2>
//             <p className="text-4xl font-bold mt-2">{temperature}°C</p>
//           </div>

//           <div className="bg-white/30 backdrop-blur-md p-6 rounded-xl shadow-lg w-72 text-center">
//             <h2 className="text-2xl font-bold">💨 Wind Speed</h2>
//             <p className="text-4xl font-bold mt-2">{windSpeed} km/h</p>
//           </div>

//           <div className="bg-white/30 backdrop-blur-md p-6 rounded-xl shadow-lg w-72 text-center">
//             <h2 className="text-2xl font-bold">💧 Humidity</h2>
//             <p className="text-4xl font-bold mt-2">{humidity}%</p>
//           </div>
//         </div>
//       </div>

//       {/* Home Button */}
//       <Link to="/" className="absolute top-6 left-6 bg-white p-3 rounded-full shadow-lg">
//         <Home size={28} className="text-gray-800" />
//       </Link>
//     </div>
//   );
// }


import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Home } from "lucide-react";
import { motion } from "framer-motion";

export default function WeatherAlerts() {
  const [isDay, setIsDay] = useState(true);
  const [temperature, setTemperature] = useState(null);
  const [windSpeed, setWindSpeed] = useState(null);
  const [humidity, setHumidity] = useState(null);
  const [warning, setWarning] = useState("");

  useEffect(() => {
    const hour = new Date().getHours();
    setIsDay(hour >= 6 && hour < 18);
  }, []);

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=Delhi&units=metric&appid=17e67142350d395378e84cd26e6d34df`
        );
        const data = await response.json();
        setTemperature(data.main.temp);
        setWindSpeed(data.wind.speed);
        setHumidity(data.main.humidity);

        if (data.wind.speed > 50) {
          setWarning("⚠️ High Wind Alert! Stay Safe.");
        } else if (data.weather[0].main === "Rain") {
          setWarning("☔ Heavy Rain Warning! Carry an Umbrella.");
        } else {
          setWarning("");
        }
      } catch (error) {
        console.error("Error fetching weather data:", error);
      }
    };

    fetchWeather();
  }, []);

  return (
    <div className="min-h-screen overflow-hidden relative flex flex-col items-center">
      {/* Subtle Background Gradient */}
      <div
        className={`absolute inset-0 transition-all duration-1000 ${
          isDay
            ? "bg-gradient-to-b from-blue-300 to-blue-500"
            : "bg-gradient-to-b from-gray-800 to-black"
        }`}
      />

      {/* Sun or Moon Animation */}
      <motion.div
        animate={{ y: [0, 10, 0] }} // Gentle floating animation
        transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
        className={`absolute w-32 h-32 rounded-full ${
          isDay ? "bg-yellow-300" : "bg-gray-300"
        } shadow-xl`}
        style={{
          top: "10%",
          left: "75%",
          filter: isDay ? "blur(2px)" : "blur(3px)",
          opacity: 0.9,
        }}
      />

      {/* Subtle Stars at Night */}
      {!isDay && (
        <div className="absolute inset-0">
          {[...Array(30)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-white rounded-full opacity-80"
              animate={{ opacity: [0.3, 0.8, 0.3] }}
              transition={{ repeat: Infinity, duration: Math.random() * 3 + 3 }}
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
              }}
            />
          ))}
        </div>
      )}

      {/* Weather Sections */}
      <div className="absolute inset-0 flex flex-col justify-center items-center text-white px-4">
        <h1 className="text-7xl font-semibold">
          {isDay ? "Good Morning ☀️" : "Good Evening 🌙"}
        </h1>
        <p className="text-3xl mt-2 opacity-90">Current Weather Conditions</p>

        {/* Weather Warning */}
        {warning && (
          <div className="bg-red-600 text-white text-2xl font-bold p-4 mt-4 rounded-lg">
            {warning}
          </div>
        )}

        {/* Weather Cards */}
        <div className="flex flex-wrap justify-center gap-10 mt-8">
          <div className="bg-white/20 backdrop-blur-md p-10 rounded-xl shadow-lg w-80 text-center">
            <h2 className="text-5xl font-medium">🌡 Temperature</h2>
            <p className="text-6xl font-bold mt-2">{temperature !== null ? `${temperature}°C` : "--"}</p>
          </div>

          <div className="bg-white/20 backdrop-blur-md p-10 rounded-xl shadow-lg w-80 text-center">
            <h2 className="text-5xl font-medium">💨 Wind Speed</h2>
            <p className="text-6xl font-bold mt-2">{windSpeed !== null ? `${windSpeed} km/h` : "--"}</p>
          </div>

          <div className="bg-white/20 backdrop-blur-md p-10 rounded-xl shadow-lg w-80 text-center">
            <h2 className="text-5xl font-medium">💧 Humidity</h2>
            <p className="text-6xl font-bold mt-2">{humidity !== null ? `${humidity}%` : "--"}</p>
          </div>
        </div>
      </div>

      {/* Home Button */}
      <Link to="/" className="absolute top-6 left-6 bg-white p-3 rounded-full shadow-lg">
        <Home size={28} className="text-gray-800" />
      </Link>
    </div>
  );
}