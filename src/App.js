import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import Alert from "./Components/Alert/Alert";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/alert" element={<Alert />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
