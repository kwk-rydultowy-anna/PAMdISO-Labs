/**
 * Lista zadań - zmieniono na obiekty, aby uwzględnić godzinę.
 */
const tasks1 = [
  { task: 'zajęcia', hour: '8:00' },
  { task: 'zakupy', hour: '14:00' },
  { task: 'trening', hour: '19:00' },
];

const tasks2 = [
  { task: 'śniadanie', hour: '9:00' },
  { task: 'praca', hour: '10:00' },
];

const createDayPlan = (name, tasks = tasks1) => {
  return `Cześć ${name}! Oto twój plan dnia: ${tasks.map(({ task, hour }) => `\n${task} o godzinie ${hour}`).join(', ')}.\n ${tasks.length > 2 ? 'Obfity dzień. Powodzenia!' : 'Może dorzucisz coś jeszcze?'}`;
};

console.log(createDayPlan('Jakub'));

console.log(createDayPlan('Arnold', tasks2));
