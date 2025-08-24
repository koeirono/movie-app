import React, { useState } from "react";


const AddMovie = ({ onAdd }) => {
    const [title, setTitle] = useState("");
    const [poster, setPoster] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!title.trim() || !poster.trim()) return;

        const newMovie = {
            imdbID: Date.now().toString(),
            Title: title,
            Poster: poster,
        };

        onAdd(newMovie);
        setTitle("");
        setPoster("");
    };
    return (
        <form
            className="d-flex flex-column align-items-start gap-2 mt-3"
            onSubmit={handleSubmit}
            style={{ maxWidth: "300px" }}
        >
            <input
                type="text"
                className="form-control"
                placeholder="Movie title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <input
                type="text"
                className="form-control"
                placeholder="Poster URL"
                value={poster}
                onChange={(e) => setPoster(e.target.value)}
            />
            <button type="submit" className="btn btn-primary btn-sm mt-2">
                Add Movie
            </button>
        </form>
    );
};

export default AddMovie;