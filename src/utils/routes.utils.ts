export type RouteObj = {
  path: string;
  name: string;
};

export type Routes = {
  home: RouteObj;
  products: RouteObj;
  aboutUs: RouteObj;
  cart: RouteObj;
  checkout: RouteObj;
};

export const routes: Routes = {
  home: { path: '/', name: 'Home' },
  products: { path: 'products', name: 'Products' },
  aboutUs: { path: 'about-us', name: 'About us' },
  cart: { path: 'cart', name: 'Cart' },
  checkout: { path: 'checkout', name: 'Checkout' },
};
