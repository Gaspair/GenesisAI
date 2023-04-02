import React from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";

import ToggleButton from "./components/ToggleButton";

import { logo } from "./assets";
import { Home, CreatePost } from "./pages/index";
function App() {
  return (
    <BrowserRouter>
      <header className="w-full flex item-center bg-white sm:px-8 py-4 border-b border-b-[#e6ebf4] px-2">
        <Link to="/">
          <img src={logo} alt="logo" className="w-28 object-contain" />
        </Link>

        <ToggleButton />

        <Link
          to="create-post"
          className="font-inter font-medium bg-[#6469ff] text-white px-4 py-2 rounded-md absolute right-2 top-2  "
        >
          Create
        </Link>
      </header>

      <main className="sm:p-8 px-4 py-8 w-full bg-[#f9fafe] min-h-[calc(100vh-73px)]">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create-post" element={<CreatePost />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
