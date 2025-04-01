import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./HomePage";
import DisasterHistory from "./DisasterHistory";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import WeatherAlerts from "./WeatherAlerts";
import Support from "./Support";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/history" element={<DisasterHistory />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/weather" element={<WeatherAlerts />} />
        <Route path="/support" element={<Support />} />
      </Routes>
    </Router>
  );
}

export default App;
