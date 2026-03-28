const expenses = [18.5, 42, 9.99, 27, 61.3, 15, 33.5];
const initialExpenses = 0;

/**
 * Funkcja licząca średnią wydatków
 */
const countAverage = () => {
  const sum = expenses.reduce((accumulator, current) => {
    return accumulator + current;
  }, initialExpenses);
  return sum / expenses.length;
};

/**
 * Funkcja obliczająca maksymalny wydatek
 * Użytko funkcji max z biblioteki Math do wyznaczenia największej liczby z tablicy z pomocą operatora rozpakowania
 */
const countMaximum = () => Math.max(...expenses);

/**
 * Funkcja sortująca wydatki w zależności od przekazanego kierunku
 * @param direction asc - rosnąco / desc - malejąco
 */
const sortExpenses = (direction) =>
  expenses.sort((a, b) => (direction === 'desc' ? b - a : a - b));

console.log(`Średnia wydatków: ${countAverage().toFixed(2)}`);
console.log(`Największy wydatek: ${countMaximum()}`);
console.log(
  `Wydatki w kolejności od największych: ${sortExpenses('desc')
    .map((el) => `\n${el}`)
    .join(',')}`,
);
