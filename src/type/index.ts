export type RouteObj = {
  path: string;
  name: string;
};

export type Routes = {
  home: RouteObj;
  products: RouteObj;
  aboutUs: RouteObj;
  cart: RouteObj;
  signIn: RouteObj;
  signUp: RouteObj;
  checkout: RouteObj;
};

export type Product = {
  id: string;
  name: string;
  brand: string;
  category: string;
  stock: number;
  description: string;
  colors: string;
  price: number[];
  featured: string;
  image: object;
  screen_size: string;
  cpu: string;
  display: string;
  memory: string;
  os: string;
  font_camera: string;
  back_camera: string;
  battety: string;
  weight: string;
  warranty: string;
};

export type Filters = {
  text: string;
  brand: string;
  category: string;
  color: string;
  minPrice: number;
  maxPrice: number;
};

export type ProductsState = {
  isLoading: boolean;
  error: string | null;
  allProducts: Product[];
  filteredProducts: Product[];
  filters: Filters;
};

export type RootState = {
  products: ProductsState;
  // Add other slices if you have more in your store
};
