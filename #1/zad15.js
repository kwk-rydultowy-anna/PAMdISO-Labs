const schedule = [
  { day: 'poniedziałek', subject: 'Programowanie', room: 'A12', online: false },
  { day: 'poniedziałek', subject: 'Projektowanie', room: 'A12', online: false },
  { day: 'wtorek', subject: 'Bazy danych', room: 'online', online: true },
  { day: 'wtorek', subject: 'Programowanie', room: 'online', online: true },
  { day: 'czwartek', subject: 'Grafika', room: 'B03', online: false },
  { day: 'piątek', subject: 'UX', room: 'online', online: true },
];

/**
 * Funkcja zwracająca przedmioty w danym dniu tygodnia
 */
const getSubjectForDay = (day) => schedule.filter((el) => el.day === day);

/**
 * Funkcja zwracająca czytelny spis zajęć
 */
const getScheduleText = (list) => {
  let currDay;

  const text = (list || schedule).map((el) => {
    if (currDay === el.day) {
      return `\n${' '.repeat(el.day.length + 1)} - ${el.subject}`;
    } else {
      currDay = el.day;
      return `\nIlość zajęć: ${getSubjectCount(el.day)}\n ${el.day} - ${el.subject}`;
    }
  });

  return text.join('');
};
/**
 * Funkcja do zwracania ilości przedmiotów (zakładam że schedule w zamyśle jest planem tylko jednego tygodnia)
 */
const getSubjectCount = (day) =>
  day ? schedule.filter((sub) => sub.day === day).length : schedule.length;

/**
 * Funkcja, która zwraca tylko zajęcia online
 */
const getOnlyOnline = () => schedule.filter((el) => el.online);
/**
 * Funkcja, która zwraca tylko zajęcia stacjonarne
 */
const getOnlyStationary = () => schedule.filter((el) => !el.online);

console.log(getScheduleText());

console.log(
  `Zajęcia tylko niestacjonarne: ${getScheduleText(getOnlyOnline())}`,
);
console.log(
  `Zajęcia tylko stacjonarne: ${getScheduleText(getOnlyStationary())}`,
);

console.log(
  `Zajęcia tylko w poniedziałek ${getScheduleText(getSubjectForDay('poniedziałek'))}`,
);
