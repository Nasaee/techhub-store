import { useSelector } from 'react-redux';
import { selectAllProducts } from '../store/products/products.selector';
import { useState, useCallback } from 'react';

const SliderProducts = () => {
  const allProducts = useSelector(selectAllProducts);
  const [index, setIndex] = useState(0);

  const nextSlide = () => {
    setIndex((oldIndex) => {
      let index = oldIndex + 1;
      if (index > allProducts.length - 1) {
        index = 0;
      }
      return index;
    });
  };

  const prevSlide = () => {
    setIndex((oldIndex) => {
      let index = oldIndex - 1;
      if (index < 0) {
        index = allProducts.length - 1;
      }
      return index;
    });
  };

  return <div>SliderProducts</div>;
};
export default SliderProducts;
