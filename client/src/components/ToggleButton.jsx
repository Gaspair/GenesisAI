import { useState } from "react";

function ToggleButton() {
  const [isToggled, setIsToggled] = useState(false);

  const handleToggle = () => {
    setIsToggled(!isToggled);
  };

  return (
    <label
      htmlFor="toggleButton"
      className="flex items-center cursor-pointer absolute right-20 px-10"
    >
      <div className="relative">
        <input
          type="checkbox"
          id="toggleButton"
          className="sr-only"
          checked={isToggled}
          onChange={handleToggle}
        />

        <div
          className={`block  w-14 h-8 rounded-full ${
            isToggled ? "bg-[#000000]" : "bg-[#CCCCCE]"
          }`}
        ></div>

        <div
          className={`dot absolute left-1 top-1 bg-white w-6 h-6 rounded-full transition transform ${
            isToggled ? "translate-x-6" : "translate-x-0"
          }`}
        ></div>
      </div>
    </label>
  );
}

export default ToggleButton;
