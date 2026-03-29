let todos = [
  { id: 1, title: 'Oddać projekt', done: false, important: true },
  { id: 2, title: 'Przeczytać rozdział', done: true, important: false },
  { id: 3, title: 'Przygotować prezentację', done: false, important: true },
];

/**
 * Funkcja dodająca nowe zadanie do listy
 */
const addTodo = (title, important = false) => {
  const newId = Math.max(...todos.map((el) => el.id)) + 1;
  const copy = [...todos];
  copy.push({ id: newId, title, done: false, important });
  return copy;
};

/**
 * Funkcja oznaczająca wybrane zadanie jako wykonane
 */
const markTaskAsDone = (id) => {
  const copy = todos.map((el) => {
    if (el.id === id) {
      return { ...el, done: true };
    }
    return el;
  });
  return copy;
};

/**
 * Funkcja zwracająca tylko zadania niewykonane
 */
const getUndoneTasks = () => todos.filter((task) => !task.done);

/**
 * Funkcja zwracająca tylko istotne zadania
 */
const getImportantTasks = () => todos.filter((task) => task.important);

const getText = (list) => {
  const yesNo = (bool) => (bool ? 'tak' : 'nie');
  return list
    .map(
      (el) =>
        `\ntytuł: ${el.title}; wykonane: ${yesNo(el.done)}; ważne: ${yesNo(el.important)}`,
    )
    .join(',');
};

console.log(`Stan oryginalnej tablicy: ${getText(todos)}`);

console.log(
  'Stan zadań pod dodaniu nowego zadania:',
  getText(addTodo('Posprzątać')),
);
console.log('Stan oryginalnej tablicy po dodaniu zadania', getText(todos));

console.log(
  'Stan zadań po oznaczeniu zadania jako wykonane',
  getText(markTaskAsDone(1)),
);
console.log(
  'Stan oryginalnej tablicy po oznaczeniu zadania jako wykonane',
  getText(todos),
);

console.log(`Zadania niewykonane: ${getText(getUndoneTasks())}`);
console.log(`Zadania ważne: ${getText(getImportantTasks())}`);
