const config = {
  style: 'currency',
  currency: 'THB',
};
const displayPrice = (price: number, discountPercentage?: number) => {
  if (!discountPercentage) {
    return new Intl.NumberFormat('en-US', config).format(price);
  }

  const discountPice = (price * (100 - discountPercentage)) / 100;
  return new Intl.NumberFormat('th-TH', config).format(discountPice);
};

export default displayPrice;
