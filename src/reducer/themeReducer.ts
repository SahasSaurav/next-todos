import { Theme, ThemeActionType } from '../types/ThemeTypes';

export const themeReducer = (state: Theme, action: ThemeActionType) => {
  switch (action.type) {
    case "TOGGLE-THEME":
      const darkMode: boolean = action.payload;
      const root = document.documentElement;
      if (darkMode === true) {
        root.classList.add('dark')
      } else {
        root.classList.remove('dark');
      }
      return { darkMode: !action.payload }

    default:
      return { state };
  }
};

