import { useContext } from "react";
import { ThemeContext, ThemeContextType } from "../context/ThemeContext";

const ToggleButton: React.FC = () => {
  const { darkMode, toggleTheme } = useContext(ThemeContext) as ThemeContextType;
  return (
    <button
      onClick={toggleTheme}
      className="p-1 flex justify-center items-center focus:outline-none focus:ring-2 focus:ring-indigo-500 "
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
