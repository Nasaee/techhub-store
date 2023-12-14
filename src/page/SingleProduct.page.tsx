import axios from 'axios';
import { SINGLE_PRODUCT_URL } from '../utils/productsAPI.utils';
import { useLoaderData, useNavigation } from 'react-router-dom';
import { QueryClient } from '@tanstack/react-query';
import { Image, Product } from '../utils/type';
import Loading from '../components/Loading';

type SingleProductData = Omit<Product, 'image'> & { images: Image[] };

const singleProductQuery = (id: string) => {
  return {
    queryKey: ['singleProduct', id],
    queryFn: async () => {
      const response = await axios.get(`${SINGLE_PRODUCT_URL}${id}`);
      console.log(response.data);
      return { product: response.data };
    },
  };
};

export const loader =
  (queryClient: QueryClient) =>
  async ({ params }: { params: { id: string } }) => {
    const response = await queryClient.ensureQueryData(
      singleProductQuery(params.id)
    );
    return response;
  };

const SingleProduct = () => {
  const { product }: { product: SingleProductData } = useLoaderData() as {
    product: SingleProductData;
  };

  const {
    name,
    brand,
    category,
    stock,
    description,
    colors,
    price,
    featured,
    images,
    screen_size,
    cpu,
    cpu_details,
    display,
    memory,
    os,
    font_camera,
    back_camera,
    battety,
    weight,
    warranty,
  } = product;

  return <div>{product?.name}</div>;
};
export default SingleProduct;
