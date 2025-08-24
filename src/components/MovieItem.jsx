const MovieItem = ({ movie }) => {
  return (
    <div className="m-2" style={{ flex: "0 0 auto" }}>
      <img src={movie.Poster} alt={movie.Title} style={{ width: "200px" }} />
      <p className="text-center text-light">{movie.Title}</p>
    </div>
  );
};

export default MovieItem;