import { createContext, useReducer,useEffect } from "react";
import withLocalStorage from "../hoc/withLocalStorage";
import { themeReducer } from "../reducer/themeReducer";
import {Todo} from '../types/TodoTypes'
import {Theme,ThemeContextType,ThemeContextProps} from '../types/ThemeTypes'

const themeInitialState: Theme = {
  darkMode: true,
};

export const ThemeContext = createContext<ThemeContextType | null>(null);

const ThemeProvider: React.FC<ThemeContextProps> = ({children,theme,}) => {
  console.log(theme);
  const [themeState, themeDispatch] = useReducer(
    themeReducer,
    themeInitialState,
    // ()=> themetheme:themeInitialState,
  );

  useEffect(() => {
      localStorage.setItem('theme',JSON.stringify(themeState))
  }, [themeState])

  const toggleTheme = (darkMode:boolean) => {
    themeDispatch({ type: "TOGGLE-THEME",payload:darkMode });
  };

  return (
    <ThemeContext.Provider
      value={{ darkMode: themeState.darkMode, toggleTheme }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export default withLocalStorage(ThemeProvider);
