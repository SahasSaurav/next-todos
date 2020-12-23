export const themeReducer = (state, action) => {
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

