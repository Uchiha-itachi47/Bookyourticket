import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./Login";
import Booking from "./Booking"; // replace with the actual file name of your Index component

function App() {
  return (
    <Router>
      <Routes>
        <Route index element={<Login/>} />
        <Route path="/bookings" element={<Booking/>} />
      </Routes>
    </Router>
  );
}

export default App;