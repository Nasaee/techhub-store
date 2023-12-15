import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchSingleProductStart } from '../store/single-product/single-productSlice';
import { useDispatch } from 'react-redux';

const SingleProduct = () => {
  const dispath = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispath(fetchSingleProductStart(id as string));
  }, [id]);

  return <div>Singleproduct</div>;
};
export default SingleProduct;
