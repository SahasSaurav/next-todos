import { createContext, useReducer, useEffect, useState } from "react";
import withLocalStorage from "../hoc/withLocalStorage";
import { themeReducer } from "../reducer/themeReducer";
import {
  Theme,
  ThemeContextType,
  ThemeContextProps,
} from "../types/ThemeTypes";

const themeInitialState: Theme = {
  darkMode: false,
};

export const ThemeContext = createContext<ThemeContextType | null>(null);

const ThemeProvider: React.FC<ThemeContextProps> = ({ children}) => {
  // console.log(theme);
  const [themeState, themeDispatch] = useReducer(
    themeReducer,
    themeInitialState,
  );
  const [mount, setMount] = useState<boolean>(false);

  useEffect(() => {
    if (themeState && mount) {
      window.localStorage.setItem("theme", JSON.stringify(themeState));
    }
  }, [themeState]);
  useEffect(() => {
    setMount(true)
    const theme = window.localStorage.getItem("theme");
    if (theme) {
      const { darkMode: isDarkMode } = JSON.parse(theme);
      persistTheme(isDarkMode);
    }
  }, []);

  const toggleTheme = (darkMode: boolean) => {
    themeDispatch({ type: "TOGGLE-THEME", payload: darkMode });
  };

  const persistTheme = (isDarkMode) => {
    themeDispatch({ type: "PERSIST-THEME", payload: isDarkMode });
  };
  const {darkMode} = themeState as Theme

  return (
    <ThemeContext.Provider
      value={{ darkMode, toggleTheme, persistTheme }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
