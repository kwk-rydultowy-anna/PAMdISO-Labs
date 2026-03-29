const activities = [
  { type: 'bieg', minutes: 35, calories: 320 },
  { type: 'rower', minutes: 50, calories: 410 },
  { type: 'spacer', minutes: 20, calories: 90 },
  { type: 'siłownia', minutes: 60, calories: 450 },
];

/**
 * Funkcja do liczenia czasu wszystkich aktywności
 */
const calculateActivityTime = () => {
  const activityTime = activities.reduce(
    (accumulator, current) => accumulator + current.minutes,
    0,
  );
  return activityTime;
};

/**
 * Funkcja do liczenia łącznej liczby spalonych kalorii
 */
const calculateBurnedCalories = () => {
  const burnedCalories = activities.reduce(
    (accumulator, current) => accumulator + current.calories,
    0,
  );
  return burnedCalories;
};

/**
 * Funkcja do filtrowania długich aktywności
 */
const filterLongActivities = () => activities.filter((a) => a.minutes > 30);

/**
 * Funkcja do wyszukiwania najbardziej kalorycznego treningu
 */
const getMostEffectiveWorkout = () =>
  activities.sort((a, b) => b.calories - a.calories)[0];

console.log(`Całkowity czas aktywności: ${calculateActivityTime()} minut.`);
console.log(
  `Łączna ilość spalonych kalorii: ${calculateBurnedCalories()} kcal.`,
);

const bestWorkout = getMostEffectiveWorkout();
console.log(
  `Najbardziej efektywna aktywność: ${bestWorkout.type} - ${bestWorkout.minutes} min - ${bestWorkout.calories} kcal`,
);
