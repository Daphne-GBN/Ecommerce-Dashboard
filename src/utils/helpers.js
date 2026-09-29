// Utility helper functions

export const formatPrice = (price) => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  }).format(price);
};

export const calculateTotal = (items) => {
  return items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
};

export const calculateDiscount = (
  total,
  discountPercent = 10
) => {
  return total * (discountPercent / 100);
};

export const generateOrderId = () => {
  return `ORD-${Date.now()}-${Math.random()
    .toString(36)
    .substr(2, 9)}`;
};

export const validateEmail = (email) => {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
};

export const validatePhoneNumber = (phone) => {
  const re = /^[\d\s\-\+\(\)]{10,}$/;
  return re.test(phone);
};

export const getStarRating = (rating) => {
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 !== 0;

  let stars = '⭐'.repeat(fullStars);

  if (halfStar) {
    stars += '✨';
  }

  return stars;
};