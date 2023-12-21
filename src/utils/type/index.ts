export type Image = {
  filname: string;
  width: number;
  height: number;
  id: string;
  size: number;
  thumbnail: object;
  type: string;
  url: string;
};

export type TProduct = {
  id: string;
  name: string;
  brand: string;
  category: string;
  stock: number;
  description: string;
  colors: string[];
  price: number[];
  featured: string;
  images: Image[];
  screen_size: string;
  cpu: string;
  cpu_details: string;
  display: string;
  memory: string[];
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
  categories: string;
  processor: string;
  min_price: number;
  max_price: number;
};

export type TCartItem = {
  id: string;
  name: string;
  price: number;
  color: string;
  quantity: number;
  brand: string;
  storage: string;
  image: string;
};

export type ProductsState = {
  isLoading: boolean;
  error: string | null;
  allProducts: TProduct[];
  filteredProducts: TProduct[];
  filters: Filters;
};

export type RootState = {
  products: ProductsState;
};
