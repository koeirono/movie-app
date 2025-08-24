import MovieItem from "./MovieItem";

const MovieList = ({ movies }) => {
  if (!movies || movies.length === 0) {
    return <p className="text-light">No movies found.</p>;
  }

  return (
    <div className="d-flex overflow-auto">
      {movies.map((movie) => (
        <MovieItem key={movie.imdbID} movie={movie} />
      ))}
    </div>
  );
};

export default MovieList;