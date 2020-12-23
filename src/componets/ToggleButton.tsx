import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const ToggleButton: React.FC = () => {
  const { darkMode, toggleTheme } = useContext(ThemeContext);
  return (
    <button
      onClick={toggleTheme}
      className="p-1 flex justify-center items-center "
    >
      {darkMode && (
        <img
          src="./images/icon-moon.svg"
          alt="Switch to dark mode"
          className=" h-6 w-6"
        />
      )}
      {!darkMode && (
        <img
          src="./images/icon-sun.svg"
          alt="Switch to Light Mode"
          className=" h-6 w-6"
        />
      )}
    </button>
  );
};

export default ToggleButton;
