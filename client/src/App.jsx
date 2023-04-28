import { useState } from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";

import { ToggleButton } from "./components/index";

import { logo, darkLogo } from "./assets";
import { Home, CreatePost } from "./pages/index";
function App() {
  const [isToggled, setIsToggled] = useState(false);

  const handleToggle = () => {
    setIsToggled(!isToggled);
  };

  return (
    <BrowserRouter>
      <header
        className={`w-full flex item-center  sm:px-8 py-4 border-b border-b-[#ff8a36] px-2 ${
          isToggled ? " bg-[#262626]" : "bg-[#f9fafe]"
        }`}
      >
        <Link to="/">
          <img
            src={`${isToggled ? darkLogo : logo}`}
            alt="logo"
            className="w-28 object-contain"
          />
        </Link>

        <ToggleButton isToggled={isToggled} handleToggle={handleToggle} />

        <Link
          to="create-post"
          className="font-inter font-medium bg-[#864eff] text-white px-4 py-2 rounded-md absolute right-2 top-2  "
        >
          Create
        </Link>
      </header>

      <main
        className={`sm:p-8 px-4 py-8 w-full  min-h-[calc(100vh-73px)] ${
          isToggled ? " bg-[#1e1e1e]" : "bg-[#f9fafe]"
        }`}
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create-post" element={<CreatePost />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
