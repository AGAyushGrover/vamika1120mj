import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Home } from "lucide-react";
import { motion } from "framer-motion";

export default function SupportPage() {
  const [email, setEmail] = useState("");
  const [issue, setIssue] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-white p-6">
      {/* Background Animation */}
      <motion.div
        animate={{ opacity: [0.8, 1, 0.8] }}
        transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
        className="absolute inset-0 bg-opacity-40 blur-xl"
      />

      <Link to="/" className="absolute top-6 left-6 bg-white p-3 rounded-full shadow-lg">
        <Home size={28} className="text-gray-800" />
      </Link>

      <div className="bg-white/20 backdrop-blur-md p-10 rounded-xl shadow-lg max-w-lg text-center">
        <h1 className="text-4xl font-bold mb-4">Support & Help</h1>
        <p className="text-lg mb-6"> If you are facing any issues or have any concerns regarding our website, please reach out to us. 
        Fill in the form below and we will get back to you as soon as possible.</p>

        {!submitted ? (
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="email"
              placeholder="Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full p-3 rounded-lg text-gray-900"
            />
            <textarea
              placeholder="Describe your issue..."
              value={issue}
              onChange={(e) => setIssue(e.target.value)}
              required
              className="w-full p-3 rounded-lg text-gray-900"
            ></textarea>
            <button
              type="submit"
              className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 rounded-lg transition duration-300"
            >
              Submit
            </button>
          </form>
        ) : (
          <div className="text-xl font-semibold text-green-300">Thank you! We'll get back to you soon.</div>
        )}
      </div>
    </div>
  );
}