const MovieList = (props) => {
  return (
    <div className="d-flex flex-row overflow-auto">
      {props.movies.map((movie) => (
        <div key={movie.imdbID} className="m-2">
          <img src={movie.Poster} alt={movie.Title} style={{ width: "200px" }} />
        </div>
      ))}
    </div>
  );
};

export default MovieList;