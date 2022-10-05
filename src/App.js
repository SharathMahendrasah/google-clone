import React from "react";
import "./App.css";
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SearchPage from "./pages/SearchPage";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/search" exact element={<SearchPage />} />
          <Route path="/" exact element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
