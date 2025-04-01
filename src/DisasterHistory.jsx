import React, { useState } from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Home } from "lucide-react";

const disasterData = [
  { name: "Earthquake", occurrences: 150 },
  { name: "Flood", occurrences: 220 },
  { name: "Hurricane", occurrences: 90 },
  { name: "Tsunami", occurrences: 40 },
  { name: "Wildfire", occurrences: 120 },
  { name: "Tornado", occurrences: 85 },
];

const countryDisasterData = [
  { country: "USA", disasters: 120 },
  { country: "India", disasters: 180 },
  { country: "Japan", disasters: 95 },
  { country: "Australia", disasters: 75 },
  { country: "Brazil", disasters: 60 },
];

const disasterAnalysis = {
  India: [
    { type: "Earthquake", count: 40 },
    { type: "Flood", count: 80 },
    { type: "Cyclone", count: 30 },
    { type: "Wildfire", count: 30 },
  ],
  USA: [
    { type: "Earthquake", count: 30 },
    { type: "Flood", count: 50 },
    { type: "Hurricane", count: 20 },
    { type: "Tornado", count: 20 },
  ],
  Japan: [
    { type: "Earthquake", count: 50 },
    { type: "Tsunami", count: 30 },
    { type: "Flood", count: 10 },
    { type: "Typhoon", count: 5 },
  ],
  Australia: [
    { type: "Wildfire", count: 40 },
    { type: "Flood", count: 20 },
    { type: "Cyclone", count: 10 },
    { type: "Earthquake", count: 5 },
  ],
  Brazil: [
    { type: "Flood", count: 30 },
    { type: "Landslide", count: 15 },
    { type: "Wildfire", count: 10 },
    { type: "Tornado", count: 5 },
  ],
};

const colors = ["#FF5733", "#33FF57", "#3357FF", "#FF33A5", "#FFAA33", "#AA33FF"];

export default function DisasterHistory() {
  const [selectedCountry, setSelectedCountry] = useState("USA");

  return (
        <div className="min-h-screen bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 p-10 text-white">
      {/* Navigation Bar */}
      <nav className="bg-opacity-90 backdrop-blur-md p-4 rounded-lg flex justify-between items-center shadow-lg">
        <div className="flex items-center space-x-6">
          <h1 className="text-5xl font-extrabold tracking-wide">Disasters So Far</h1>
          <a
            href="https://www.emdat.be/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl text-white-300 hover:text-white-500 transition underline"
          >
            Data Source: EM-DAT 🌍
          </a>
        </div>
        <Link 
          to="/" className="p-3 rounded-full bg-white text-blue-600 hover:bg-gray-200 transition shadow-md">
          <Home size={28} className="text-red-600" />
        </Link>
      </nav>
      {/* Bar Chart - Disaster Occurrences */}
      <motion.div
        className="bg-white p-6 shadow-lg rounded-lg mt-10 text-gray-900"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-2xl font-bold mb-4 text-center">Disaster Occurrences Worldwide</h2>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={disasterData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="occurrences" fill="#980505" />
          </BarChart>
        </ResponsiveContainer>
      </motion.div>

      {/* Pie Chart - Disasters by Country */}
      <motion.div
        className="bg-white p-6 shadow-lg rounded-lg mt-10 text-gray-900"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-2xl font-bold mb-4 text-center">Disasters by Country</h2>
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie data={countryDisasterData} dataKey="disasters" nameKey="country" cx="50%" cy="50%" outerRadius={120} label>
              {countryDisasterData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </motion.div>

      {/* Country-wise Disaster Analysis */}
      <motion.div
        className="bg-white p-6 shadow-lg rounded-lg mt-10 text-gray-900"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-2xl font-bold mb-4 text-center">Country-wise Disaster Analysis</h2>
        <div className="flex justify-center mb-4">
          <select
            className="border p-2 rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-red-500 shadow-lg"
            value={selectedCountry}
            onChange={(e) => setSelectedCountry(e.target.value)}
          >
            {Object.keys(disasterAnalysis).map((country) => (
              <option key={country} value={country}>
                {country}
              </option>
            ))}
          </select>
        </div>

        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={disasterAnalysis[selectedCountry]} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
            <XAxis dataKey="type" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="count" fill="#FFC300" />
          </BarChart>
        </ResponsiveContainer>
      </motion.div>

      {/* Data Source Reference */}
      <div className="text-center mt-10">
        <p>
          Data sourced from{" "}
          <a href="https://www.emdat.be/" target="_blank" rel="noopener noreferrer" className="text-yellow-400 underline hover:text-yellow-600">
            EM-DAT (The International Disaster Database)
          </a>
        </p>
      </div>
    </div>
  );
}
