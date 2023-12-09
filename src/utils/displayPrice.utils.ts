export const discountPice = (
  price: number,
  discountPercentage: number
): number => (price * (100 - discountPercentage)) / 100;

const config = {
  style: 'currency',
  currency: 'THB',
};
const displayPrice = (price: number, discountPercentage?: number) => {
  if (!discountPercentage) {
    return new Intl.NumberFormat('th-TH', config).format(price);
  }
  const lastPrice = discountPice(price, discountPercentage);
  return new Intl.NumberFormat('th-TH', config).format(lastPrice);
};

export default displayPrice;
