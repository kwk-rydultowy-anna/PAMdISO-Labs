const grades = [3.0, 4.0, 5.0, 3.5, 4.5];
const initial = 0;

/**
 * Funkcja do liczenia średniej ocen
 */
const countAverage = (gradesList) => {
  const sum = gradesList.reduce((accumulator, current) => {
    return accumulator + current;
  }, initial);
  return sum / gradesList.length;
};

/**
 * Funkcja przygotowywująca wypis informacji ogólnych studenta
 */
const checkStudent = (gradesList) => {
  const avg = countAverage(gradesList);
  const hasPassed = avg >= 3.0;
  const gradeNames = {
    5: 'Bardzo dobry',
    4: 'Dobry',
    3: 'Dostateczny',
    2: 'Niedostateczny',
  };
  return {
    gradeNames: gradesList.map((grade) => {
      const floorGrade = Math.floor(grade);
      return `\n${gradeNames[floorGrade]}`;
    }),
    hasPassed,
    avg,
  };
};

const { hasPassed, gradeNames, avg } = checkStudent(grades);
console.log(`Średnia ucznia wynosi: ${avg}`);

console.log(
  `Uczeń ${hasPassed ? 'zaliczył' : 'nie zaliczył'} ${hasPassed ? 'przedmiot' : 'przedmiotu'}.`,
);

console.log(`Wypis ocen: ${gradeNames.join(',')}`);
