const hasLaptop = true;
const hasCharger = false;
const hasNotebook = true;
const hasPencil = false;
const dayType = 'labolatorium';

/**
 * Zmienne pozwalające na łatwiejszą kontrole stanu
 */
const canWrite = hasNotebook && hasPencil;
const canNote = hasLaptop || canWrite;
const hasOnlyLaptop = hasLaptop && !canWrite;

/**
 * Dodajemy kontrolkę, która mówi o tym czy student jest przygotowany.
 * Z góry zakładamy że nie jest.
 */
let isPrepared = false;

if (!canNote) {
  console.log('Uczeń nie posiada możliwości prowadzenia notatek.');
  isPrepared = false;
} else if (hasOnlyLaptop && !hasCharger) {
  console.log('Uczeń posiada laptop natomiast nie ma ładowarki');
  isPrepared = dayType === 'labolatorium' ? false : true;
} else {
  isPrepared = true;
}

console.log(
  `Uczeń jest ${isPrepared ? 'przygotowany' : 'nieprzygotowany'} do zajęć.`,
);
