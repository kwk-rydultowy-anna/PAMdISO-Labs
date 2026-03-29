const contacts = [
  {
    name: 'Anna Nowak',
    phone: '500-100-200',
    city: 'Katowice',
    favorite: true,
  },
  {
    name: 'Piotr Lis',
    phone: '501-300-700',
    city: 'Sosnowiec',
    favorite: false,
  },
  { name: 'Ola Marek', phone: '502-400-900', city: 'Katowice', favorite: true },
];

/**
 * Funkcja zwracająca kontakty z wybranego miasta
 */
const getContactsFromCity = (searchCity) =>
  contacts.filter((el) => el.city === searchCity);

/**
 * Funkcja zwracająca tylko ulubione kontakty
 */
const getFavouriteContacts = () => contacts.filter((el) => el.favorite);

/**
 * Funkcja formatująca wynik do postaci imię - telefon
 */
const getFormattedContacts = (list) =>
  list.map((el) => `\n${el.name} - ${el.phone}`).join('');

/**
 * Funkcja wyszukująca po fragmencie nazwy kontaktu
 */
const getContact = (contactName) =>
  contacts.filter((el) => el.name.includes(contactName));

console.log(
  `Lista twoich ulubionych kontaktów: ${getFormattedContacts(getFavouriteContacts())}`,
);

console.log(
  `Lista kontaktów z miasta Sosnowiec: ${getFormattedContacts(getContactsFromCity('Sosnowiec'))}`,
);

console.log(
  `Wynik dla wyszukania Ola: ${getFormattedContacts(getContact('Ola'))}`,
);
