import MovieItem from "./MovieItem";

const MovieList = ({ movies, onDelete }) => {
  return (
    <>
      {movies.map((movie) => (
        <div
          key={movie.imdbID}
          className="d-flex flex-column align-items-center m-3"
          style={{ width: "150px" }}
        >
          <img
            src={movie.Poster}
            alt={movie.Title}
            style={{ width: "100%", borderRadius: "8px" }}
          />
          
          <button
            className="btn btn-danger btn-sm mt-2"
            onClick={() => onDelete(movie.imdbID)}
          >
            Delete
          </button>
        </div>
      ))}
    </>
  );
};

export default MovieList;