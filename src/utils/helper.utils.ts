import toast from 'react-hot-toast';

export const scrollToTop = () => window.scrollTo({ top: 0 });

export const scrollToTopSmooth = () =>
  window.scrollTo({ top: 0, behavior: 'smooth' });

export const cardStyle = {
  style: {
    base: {
      color: '#32325d',
      fontFamily: 'Arial, sans-serif',
      fontSmoothing: 'antialiased',
      fontSize: '16px',
      '::placeholder': {
        color: '#32325d',
      },
    },
    invalid: {
      color: '#fa755a',
      iconColor: '#fa755a',
    },
  },
};

export const TEST_CREDIT_CARD_NUMBER = '4242 4242 4242 4242';

export const amountToPay = (amount: number) => amount * 100; // must multiply by 100 for convert to สตางค์

export const saveToClipboard = async (text: string) => {
  if (navigator.clipboard) {
    try {
      await navigator.clipboard.writeText(text);
      toast.success('copied');
    } catch (error) {
      toast.error('failed to copy');
    }
  } else {
    toast.error('clipboard access not available');
  }
};
