import { type Routes } from '../type';

export const routes: Routes = {
  home: { path: '/', name: 'Home' },
  products: { path: 'products', name: 'Products' },
  aboutUs: { path: 'about-us', name: 'About us' },
  cart: { path: 'cart', name: 'Cart' },
  signIn: { path: 'sign-in', name: 'Sign In' },
  signUp: { path: 'sign-up', name: 'Sign Up' },
  checkout: { path: 'checkout', name: 'Checkout' },
};
