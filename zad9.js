const cart = [
  { name: 'Chleb', price: 4.5, quantity: 2 },
  { name: 'Ser', price: 9.9, quantity: 1 },
  { name: 'Sok', price: 6.2, quantity: 3 },
];

const discountThreshold = 30;
const discountPercent = 10;
const initialPrice = 0;

/**
 * Funkcja licząca cenę za produkt z uwzględnieniem ilości
 */
const calculateProductPrices = () =>
  cart.map((el) => {
    return { ...el, price: el.price * el.quantity };
  });

/**
 * Funkcja sumująca łączny koszt produktów w koszyku
 */
const sumCart = (applyDiscount) => {
  const total = calculateProductPrices().reduce(
    (accumulator, curr) => accumulator + curr.price,
    initialPrice,
  );

  return applyDiscount ? total * ((100 - discountPercent) / 100) : total;
};

/**
 * Funkcja zwracająca listę tekstową opisów pozycji
 */
const listCartItems = () => cart.map((el) => `\n${el.quantity} x ${el.name}`);

console.log(`Aktualny stan koszyka: ${listCartItems().join(',')}`);

const cartFullPrice = sumCart();
const shouldApplyDiscount = cartFullPrice > discountThreshold;

console.log(`Łączny koszt produktów przed rabatem: ${cartFullPrice}`);

console.log('Czy przyznano rabat?: ', shouldApplyDiscount ? 'tak' : 'nie');

console.log(
  `Łączny koszt produktów po rabacie: ${sumCart(shouldApplyDiscount)}`,
);
