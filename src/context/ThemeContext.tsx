import { createContext, useReducer } from "react";
import { themeReducer } from "../reducer/themeReducer";

interface Theme {
  darkMode: boolean;
}

const themeInitialState: Theme = {
  darkMode: true,
};

export const ThemeContext = createContext(themeInitialState);


const ThemeProvider: React.FC = ({ children }) => {
  const [themeState, themeDispatch] = useReducer(
    themeReducer,
    themeInitialState,
    // () => JSON.parse(localStorage?.getItem("darkMode")) 
  );

  const toggleTheme = () => {
    themeDispatch({ type: "TOGGLE-THEME" });
  };

  return (
    <ThemeContext.Provider value={{ ...themeState, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
