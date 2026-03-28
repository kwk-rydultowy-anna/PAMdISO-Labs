/**
 * Lista zakupów z produktami. Rozszerzono o jednostki oraz ilość w tych jednostkach (opcjonalne).
 */
const shoppingList = [
  { name: 'chleb', quantity: 1, urgent: true, units: 'gram', unitAmount: 1000 },
  { name: 'mleko', quantity: 4, urgent: false, units: 'ml', unitAmount: 2000 },
  { name: 'jajka', quantity: 5, urgent: true },
  {
    name: 'makaron',
    quantity: 2,
    urgent: true,
    units: 'gram',
    unitAmount: 1000,
  },
];

/**
 * Funkcja pomocnicza do pobierania listy nazw produktów
 */
const getProductNames = (list) => list.map((el) => el.name);

console.log(
  `Lista nazw produktów: ${getProductNames(shoppingList).join(', ')}`,
);
console.log(
  `Produkty pilne: ${getProductNames(shoppingList.filter((prod) => prod.urgent))}`,
);
console.log(
  `Produkty z opisem dodatkowym: ${shoppingList
    .map((el) => {
      if (!el.unitAmount || !el.units) {
        return '';
      }
      return `\n${el.unitAmount} ${el.units} produktu ${el.name}`;
    })
    .join(',')}`,
);

/**
 * Tablica zawierająca tylko nazwy produktów dużymi literami.
 */
const shoppingOnlyNames = shoppingList.map((el) => el.name.toUpperCase());
console.log(`Nazwy produktów po transformacji ${shoppingOnlyNames}`);
