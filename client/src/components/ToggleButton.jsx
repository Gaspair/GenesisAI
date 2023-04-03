import { useState } from "react";

function ToggleButton(props) {
  const handleButtonClick = () => {
    props.handleToggle();
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
          checked={props.isToggled}
          onChange={handleButtonClick}
        />

        <div
          className={`block  w-14 h-8 rounded-full ${
            props.isToggled ? "bg-[#9d4eff]" : "bg-[#CCCCCE]"
          }`}
        ></div>

        <div
          className={`dot absolute left-1 top-1 bg-white w-6 h-6 rounded-full transition transform ${
            props.isToggled ? "translate-x-6" : "translate-x-0"
          }`}
        ></div>
      </div>
    </label>
  );
}

export default ToggleButton;
