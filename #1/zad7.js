const repairs = [
  { id: 1, client: 'Anna', device: 'laptop', status: 'nowe' },
  { id: 2, client: 'Piotr', device: 'telefon', status: 'w trakcie' },
  { id: 3, client: 'Ola', device: 'tablet', status: 'zakończone' },
];

/**
 * Funkcja do aktualizowania stanu napraw bez modyfikacji oryginalnego stanu
 * @param idToUpdate id naprawy do aktualizacji
 * @param state status który chcemy ustawić naprawie
 */
const updateRepairs = (idToUpdate, state) => {
  const updatedRepairs = repairs.map((repair) => {
    if (repair.id === parseInt(idToUpdate, 10)) {
      return { ...repair, status: state || 'zakończone' };
    }
    return repair;
  });
  return updatedRepairs;
};

/**
 * Funkcja do dodawania nowej naprawy
 */
const addRepair = (client, device) => {
  const newId = Math.max(...repairs.map((el) => el.id)) + 1;
  const copy = [...repairs];
  copy.push({ id: newId, client, device, status: 'nowe' });
  return copy;
};

console.log(
  `Oryginalna ilość napraw w trakcie: ${repairs.filter((el) => el.status === 'w trakcie').length}`,
);

console.log('Oryginalna tablica: ', repairs);

const updatedRepairs = updateRepairs(1, 'w trakcie');

console.log('Zmodyfikowana tablica: ', updatedRepairs);

console.log(
  `Zmodyfikowana ilość napraw w trakcie: ${updatedRepairs.filter((el) => el.status === 'w trakcie').length}`,
);

const newRepairs = addRepair('Oliwia', 'PC');
console.log('Oryginalna tablica po dodaniu naprawy:', newRepairs);
