const tripCosts = [
  { label: 'nocleg', amount: 420, paidBy: 'Anna' },
  { label: 'paliwo', amount: 260, paidBy: 'Piotr' },
  { label: 'jedzenie', amount: 180, paidBy: 'Anna' },
  { label: 'bilety', amount: 140, paidBy: 'Ola' },
];

/**
 * Funkcja licząca całkowity koszt wyjazdu
 */
const calculateTripCost = () =>
  tripCosts.reduce((accumulator, current) => accumulator + current.amount, 0);

/**
 * Funkcja sumująca ilość wydatków każdej osoby
 */
const calculatePersonCost = () => {
  const personsCost = [];
  for (const { paidBy, amount } of tripCosts) {
    const possiblePerson = personsCost.find((el) => el.paidBy === paidBy);
    if (possiblePerson) {
      possiblePerson.amount += amount;
    } else {
      personsCost.push({ paidBy, amount });
    }
  }
  return personsCost;
};

/**
 * Funkcja zwracająca osobę, która wydała najwięcej
 */
const getTopAmountPaid = () => {
  const personsCost = calculatePersonCost();
  personsCost.sort((a, b) => b.amount - a.amount);
  return personsCost[0];
};

const countAverage = () => {
  const personsCost = calculatePersonCost();
  const sum = personsCost.reduce((accumulator, current) => {
    return accumulator + current.amount;
  }, 0);
  return sum / personsCost.length;
};

/**
 * Funkcja obliczająca kto ile powinien oddać / otrzymać bazując na średnich wydatkach każdej z osób
 */
const equalEveryonesAmount = () => {
  const avg = countAverage();
  const giveOrTakeMap = new Map();
  const personsCost = calculatePersonCost();
  for (const { amount, paidBy } of personsCost) {
    const rest = amount - avg;
    giveOrTakeMap.set(paidBy, rest);
  }
  return giveOrTakeMap;
};

console.log(
  `Wydatki każdego uczestnika: ${calculatePersonCost()
    .map((el) => `\n${el.paidBy} - ${el.amount}`)
    .join(',')}`,
);

const { amount, paidBy } = getTopAmountPaid();
console.log(`Najwięcej wydała: ${paidBy} - ${amount}`);

console.log(
  `Kto ile jest winny lub powinien otrzymać po uśrednieniu wydatków: ${Array.from(
    equalEveryonesAmount().entries(),
  )
    .map(([person, cost]) => `\n${person} = ${cost.toFixed(2)}`)
    .join(',')}`,
);
