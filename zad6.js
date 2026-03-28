/**
 * Lista filmów - rozszerzona o zmienną informującą czy film jest aktualnie puszczany w kinach
 */
const movies = [
  {
    title: 'Arrival',
    category: 'sci-fi',
    rating: 8.1,
    watched: true,
    inCinema: true,
  },
  {
    title: 'Whiplash',
    category: 'drama',
    rating: 8.5,
    watched: false,
    inCinema: false,
  },
  {
    title: 'Dune',
    category: 'sci-fi',
    rating: 8.0,
    watched: false,
    inCinema: true,
  },
  {
    title: 'Inside Out',
    category: 'animation',
    rating: 8.1,
    watched: true,
    inCinema: false,
  },
];

/**
 * Funkcja pomocnicza do pozyskiwania tytułów filmów
 */
const getMovieTitles = (moviesList = movies) =>
  moviesList.map((movie) => `\n${movie.title}`);

/**
 * Lista z nieobejrzanymi filmami
 */
const unwatchedMovies = movies.filter(({ watched }) => !watched);

console.log(
  `Nieobejrzane filmy: ${getMovieTitles(unwatchedMovies).join(',')}\n`,
);

/**
 * Lista filmów z wysoką oceną
 */
const bestMovies = movies.filter((el) => el.rating > 8.0);

console.log(`Najlepsze filmy: ${getMovieTitles(bestMovies).join(',')}\n`);

/*
 * Lista zawierająca same nazwy filmów
 */
const onlyTitles = getMovieTitles();

console.log(`Wszystkie filmy: ${onlyTitles.join(',')}`);
