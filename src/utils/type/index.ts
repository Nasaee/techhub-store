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
  image: Image;
  screen_size: string;
  cpu: string;
  cpu_details: string;
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
  categories: string;
  processor: string;
  min_price: number;
  max_price: number;
};

export type TSingleProduct = Omit<Product, 'image'> & {
  images: Image[];
};

export type SingleProductState = {
  isLoading: boolean;
  error: string | null;
  product: TSingleProduct | null;
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
