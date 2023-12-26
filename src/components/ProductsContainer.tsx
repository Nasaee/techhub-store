import { BsFillGridFill, BsList } from 'react-icons/bs';
import { useDispatch, useSelector } from 'react-redux';
import { selectFilteredProducts } from '../store/products/products.selector';
import { FaArrowUp } from 'react-icons/fa6';
import { useState } from 'react';
import ProductsGrid from './ProductsGrid';
import ProductsList from './ProductsList';
import { sortProducts } from '../store/products/productsSlice';
import { FaArrowDown } from 'react-icons/fa';
import { Pagination } from 'flowbite-react';
import { countPages, getPageResult } from '../utils/pageResult.utils';
import { scrollToTopSmooth } from '../utils/helper.utils';

const ProductsContainer = () => {
  const dispath = useDispatch();

  const [layout, setLayout] = useState('grid');
  const [sort, setSort] = useState<'lowest' | 'highest'>('lowest');

  const filteredProducts = useSelector(selectFilteredProducts);

  // PAGINATION and reder page result
  const [currentPage, setCurrentPage] = useState(1);
  const onPageChange = (page: number) => setCurrentPage(page);
  const totalPages = countPages(filteredProducts);
  const pageResult = getPageResult(currentPage, filteredProducts);

  const handleSort = () => {
    const toggleSort = sort === 'lowest' ? 'highest' : 'lowest';
    setSort(toggleSort);
    dispath(sortProducts(toggleSort));
  };

  const setActiveStyles = (pattern: 'grid' | 'list') => {
    return `text-xl btn btn-circle btn-sm ${
      pattern === layout
        ? 'btn-primary text-primary-content border-primary'
        : 'btn-ghost text-base-content border-base-content'
    }`;
  };

  return (
    <section className='lg:px-6 flex flex-col border-b border-r'>
      {/* HEADER */}
      <div className='grid grid-cols-[auto_auto_1fr_auto] items-center gap-8 my-8 pb-5'>
        <div className='flex gap-x-4'>
          <button
            onClick={() => setLayout('grid')}
            className={setActiveStyles('grid')}
          >
            <BsFillGridFill />
          </button>

          <button
            onClick={() => setLayout('list')}
            className={setActiveStyles('list')}
          >
            <BsList />
          </button>
        </div>

        <h4 className='font-medium text-md'>
          {filteredProducts.length} product{filteredProducts.length > 1 && 's'}{' '}
          found
        </h4>
        <hr />
        <button
          onClick={handleSort}
          className='flex gap-x-2 items-center tracking-wider'
        >
          Price
          <span>{sort === 'lowest' ? <FaArrowUp /> : <FaArrowDown />}</span>
        </button>
      </div>
      {/* PRODUCTS */}
      <div className='grid place-items-center mb-12'>
        {filteredProducts.length === 0 ? (
          <h5 className='text-2xl mt-16'>
            Sorry, no products matched your search...
          </h5>
        ) : layout === 'grid' ? (
          <ProductsGrid products={pageResult} />
        ) : (
          <ProductsList products={pageResult} />
        )}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div
          className='flex overflow-x-auto sm:self-center mb-20'
          onClick={scrollToTopSmooth}
        >
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={onPageChange}
            showIcons
          />
        </div>
      )}
    </section>
  );
};
export default ProductsContainer;
