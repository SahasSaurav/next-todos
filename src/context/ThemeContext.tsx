import { createContext, useReducer } from "react";
import { themeReducer } from "../reducer/themeReducer";

interface Theme {
  darkMode: boolean;
}

const themeInitialState: Theme = {
  darkMode: true,
};

export interface ThemeContextType{
  darkMode:boolean,
  toggleTheme:()=>void
}

export const ThemeContext = createContext(themeInitialState);



const ThemeProvider: React.FC<{children:React.ReactNode}> = ({ children }) => {
  const [themeState, themeDispatch] = useReducer(
    themeReducer,
    themeInitialState,
  );

  

  const toggleTheme = () => {
    themeDispatch({ type: "TOGGLE-THEME" });
  };

  return (
    <ThemeContext.Provider value={{ ...themeState, toggleTheme  }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
