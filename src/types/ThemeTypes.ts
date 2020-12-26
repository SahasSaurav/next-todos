export interface Theme {
  darkMode: boolean;
}

export interface ThemeContextType {
  darkMode: boolean;
  toggleTheme: (darkMode:boolean) => void;
}

export type ThemeActionType=| {type:'TOGGLE-THEME',payload:boolean}

export interface ThemeContextProps{
  children:React.ReactNode,
  theme:Theme,
}