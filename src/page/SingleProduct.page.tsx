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
