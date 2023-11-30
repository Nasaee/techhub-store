import { useSelector } from 'react-redux';
import { selectAllProducts } from '../store/products/products.selector';
import { useState, useCallback, useEffect } from 'react';
import { Product } from '../type';
import ProductCard from './ProductCard';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

type Position = 'activeSlide' | 'nextSlide' | 'prevSlide';

const SliderProducts = () => {
  const allProducts = useSelector(selectAllProducts);
  const [index, setIndex] = useState(0);

  console.log(index);
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

  useEffect(() => {
    const lastIndex = allProducts.length - 1;
    if (index < 0) setIndex(lastIndex);
    if (index > lastIndex) setIndex(0);
  }, [index, allProducts]);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  });

  return (
    <div className='relative w-full h-full hidden lg:block'>
      {allProducts.map((product: Product, productIndex) => {
        let position: Position = 'nextSlide';
        if (productIndex === index) {
          position = 'activeSlide';
        }
        if (
          productIndex === index - 1 ||
          (index === 0 && productIndex === allProducts.length - 1)
        ) {
          position = 'prevSlide';
        }
        return (
          <div
            key={product.id}
            className={`absolute top-0 left-1/2 translate-x-[-50%] transition ease-linear duration-300 ${position}`}
          >
            <ProductCard product={product} />
          </div>
        );
      })}
      <button className='prev' onClick={() => prevSlide()}>
        <FiChevronLeft className='w-10 h-10' />
      </button>
      <button className='next' onClick={() => nextSlide()}>
        <FiChevronRight className='w-10 h-10' />
      </button>
    </div>
  );
};
export default SliderProducts;
