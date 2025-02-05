const movies = [
    { title: 'Inception', releaseYear: 2010, genre: 'Sci-Fi', rating: 8.8 },
    { title: 'The Dark Knight', releaseYear: 2008, genre: 'Action', rating: 9.0 },
    { title: 'Titanic', releaseYear: 1997, genre: 'Romance', rating: 7.8 },
    { title: 'The Matrix', releaseYear: 1999, genre: 'Sci-Fi', rating: 8.7 },
    { title: 'The Godfather', releaseYear: 1972, genre: 'Crime', rating: 9.2 },
    { title: 'Avatar', releaseYear: 2009, genre: 'Sci-Fi', rating: 7.8 },
    { title: 'The Shawshank Redemption', releaseYear: 1994, genre: 'Drama', rating: 9.3 }
  ];

const sortedMovies = [...movies].sort((a, b) => b.rating - a.rating);
console.log("Movies sorted by rating:", sortedMovies);


const findMovieByTitle = (title) => {
  const movie = movies.find(movie => movie.title.toLowerCase() === title.toLowerCase());
  return movie || "Movie not found in the catalog(array)";
};
console.log(findMovieByTitle('Inception'));


const highRatedMovies = movies.filter(movie => movie.rating > 8);
console.log("Movies with rating greater than 8:", highRatedMovies);


const movieTitles = movies.map(movie => movie.title);
console.log("All movie titles:", movieTitles);


const countMoviesByGenre = (genre) => {
  return movies.filter(movie => movie.genre.toLowerCase() === genre.toLowerCase()).length;
};
console.log("Number of Sci-Fi movies:", countMoviesByGenre('Sci-Fi'));


const allMoviesAbove7 = movies.every(movie => movie.rating > 7);
console.log("Are all movies rated above 7?", allMoviesAbove7);


const moviesAfter2000 = movies.filter(movie => movie.releaseYear > 2000);
console.log("Movies released after 2000:", moviesAfter2000);
