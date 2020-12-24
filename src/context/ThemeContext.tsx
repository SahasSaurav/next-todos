import { createContext, useReducer } from "react";
import { themeReducer } from "../reducer/themeReducer";

interface Theme {
  darkMode: boolean;
}

const themeInitialState: Theme = {
  darkMode: true,
};

export interface ThemeContextType {
  darkMode: boolean;
  toggleTheme: () => void;
}

export const ThemeContext = createContext<ThemeContextType | null>(null);

const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [themeState, themeDispatch] = useReducer(
    themeReducer,
    themeInitialState
  );

  const toggleTheme: () => void = () => {
    themeDispatch({ type: "TOGGLE-THEME" });
  };

  return (
    <ThemeContext.Provider
      value={{ darkMode: themeState.darkMode, toggleTheme }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
