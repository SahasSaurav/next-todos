import {Theme} from '../context/ThemeContext';

type ThemeActionType=| {type:'TOGGLE-THEME'}

export const themeReducer = (state:Theme, action:ThemeActionType) => {
  switch (action.type) {
    case "TOGGLE-THEME":
      const darkMode: boolean = state.darkMode;
      const root = document.documentElement;
      if (darkMode === true) {
        root.classList.add('dark')
      } else {
        root.classList.remove('dark');
      }
      localStorage?.setItem('darkMode', JSON.stringify(darkMode))
      return { darkMode: !darkMode }

    default:
      return { state };
  }
};

