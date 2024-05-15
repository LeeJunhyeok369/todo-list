import { useState } from "react";
import { MdNightlight, MdOutlineLightMode } from "react-icons/md";

export default function ModeBtn({ setLocalStorege, modeChange }) {
  const [mode, setMode] = useState(false);

  const handleModeChange = () => {
    setMode(!mode);
    setLocalStorege("mode", mode);
    modeChange();
  };

  return (
    <div className="min-w-[3rem] h-[3rem] ml-3 rounded-full dark:bg-light-bg bg-dark-bg-1 overflow-hidden">
      <button
        onClick={() => handleModeChange()}
        className="text-[2rem] dark:text-black text-white w-full h-full flex justify-center items-center cursor-pointer"
      >
        <MdOutlineLightMode className="hidden dark:block" />
        <MdNightlight className="dark:hidden" />
      </button>
    </div>
  );
}
