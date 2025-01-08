import React, { useState } from "react";
import Navbar from "./Components/NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Video from "./Pages/Video";
import Home from "./Pages/Home";

const App = () => {
  const [sidebar, setSidebar] = useState(true);
  const [searchTerm, setSearchTerm] = useState(""); // State to track search term

  const handleSearch = (term) => {
    setSearchTerm(term); // Update the search term
  };
  return (
    <div className="text-[#555]">
      <BrowserRouter>
        <Navbar setSidebar={setSidebar} onSearch={handleSearch}/>
        <Routes>
          <Route path="/" element={<Home sidebar={sidebar} searchTerm={searchTerm}/>} />
          <Route path="/video/:categoryId/:videoId" element={<Video />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
