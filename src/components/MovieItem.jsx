import React from "react";

const MovieItem = ({ movie, onDelete }) => {
  return (
    <div
      className="card m-2 shadow-sm"
      style={{ width: "180px", borderRadius: "12px" }}
    >
      <img
        src={movie.Poster}
        alt={movie.Title}
        className="card-img-top"
        style={{
          height: "250px",
          objectFit: "cover",
          borderTopLeftRadius: "12px",
          borderTopRightRadius: "12px",
        }}
      />
      <div className="card-body text-center p-2">
        <h6 className="card-title text-truncate">{movie.Title}</h6>
        <button
          className="btn btn-outline-danger btn-sm mt-2"
          onClick={() => onDelete(movie.imdbID)}
        >
          Delete
        </button>
      </div>
    </div>
  );
};
export default MovieItem;