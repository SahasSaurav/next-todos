import { Theme, ThemeActionType } from '../types/ThemeTypes';

export const themeReducer = (state: Theme, action: ThemeActionType) => {
  
  switch (action.type) {
    case "TOGGLE-THEME":
      const darkMode: boolean = action.payload;
      const root = document.documentElement;
      if (darkMode === true) {
        root.classList.remove('dark')
      } else {
        root.classList.add('dark');
      }
      return { darkMode: !action.payload }
    case 'PERSIST-THEME':
      const isDark=action.payload
      const html = document.documentElement;
      if (isDark === true) {
        html.classList.add('dark')
      } else {
        html.classList.remove('dark');
      }
      state.darkMode=action.payload
      return state
    default:
      return { state };
  }
};

