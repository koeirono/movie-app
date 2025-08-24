import React from "react";

const MovieItem = ({ movie, onDelete }) => {
  return (
    <div
      className="d-flex flex-column align-items-center m-3"
      style={{ width: "150px" }}
    >
      <img
        src={movie.Poster}
        alt={movie.Title}
        style={{ width: "100%", borderRadius: "8px" }}
      />
      <p className="mt-2 text-center">{movie.Title}</p>
      <button
        className="btn btn-danger btn-sm mt-2"
        onClick={() => onDelete(movie.imdbID)}
      >
        Delete
      </button>
    </div>
  );
};

export default MovieItem;