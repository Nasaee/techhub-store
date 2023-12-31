import { createSlice } from '@reduxjs/toolkit';

const themes = {
  winter: 'winter',
  dracula: 'dracula',
} as const;

type DefaultState = {
  theme: (typeof themes)[keyof typeof themes];
};

const getThemeFromLocalStorage = (): DefaultState['theme'] => {
  const themeFromLocalStorage = localStorage.getItem('techhub-theme');
  const theme = themeFromLocalStorage
    ? JSON.parse(themeFromLocalStorage)
    : themes.winter;
  document.querySelector('html')?.setAttribute('data-theme', theme);
  return theme;
};

const initialState: DefaultState = {
  theme: getThemeFromLocalStorage(),
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    toggleTheme: (state, actions: { payload: boolean }) => {
      const theme = actions.payload ? themes.dracula : themes.winter;
      state.theme = theme;
      document.querySelector('html')?.setAttribute('data-theme', theme);
      localStorage.setItem('techhub-theme', JSON.stringify(theme));
    },
  },
});

export const { toggleTheme } = userSlice.actions;

export default userSlice.reducer;
