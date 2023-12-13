import { createSlice } from '@reduxjs/toolkit';

const themes = {
  winter: 'winter',
  dracula: 'dracula',
} as const;

type UserState = {
  theme: (typeof themes)[keyof typeof themes];
};

const initialState: UserState = {
  theme: themes.winter,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    toggleTheme: (state, actions: { payload: boolean }) => {
      state.theme = actions.payload ? themes.dracula : themes.winter;
      document.querySelector('html')?.setAttribute('data-theme', state.theme);
    },
  },
});

export const { toggleTheme } = userSlice.actions;

export default userSlice.reducer;
