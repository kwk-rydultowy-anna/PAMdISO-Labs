/**
 * Obiekt user z podstawowymi informacjami o użytkowniku aplikacji.
 * Rozszerzono o dodatkowe właściwości, takie jak university, hobbies.
 */
const user = {
  firstName: 'Jan',
  lastName: 'Pawel',
  age: 40,
  city: 'Warszawa',
  country: 'Polska',
  email: 'jpawel@example.com',
  fieldOfStudy: 'Informatyka',
  university: 'Uniwersytet Warszawski',
  hobbies: ['programowanie', 'podróże', 'gotowanie'],
};

console.log(`${user.firstName} ${user.lastName}`);

console.log(
  `Jest ${user.age >= 18 ? 'pełnoletni' : 'niepełnoletni'} i mieszka w ${user.city}, ${user.country}.`,
);

console.log(`Studiuje ${user.fieldOfStudy} na ${user.university}.`);

console.log(`Jego hobby to: ${user.hobbies.join(', ')}.`);
