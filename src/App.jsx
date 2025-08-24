import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MovieList from "./components/movielist";
import MovieListHeading from "./components/MovieListHeading";
import SearchBox from "./components/SearchBox";

const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  const getMovieRequest = async (searchValue) => {
    const url = `https://www.omdbapi.com/?s=${searchValue}&apikey=9287f59a`;

    const response = await fetch(url)
    const responseJson =await response.json();
    if(responseJson){
      setMovies(responseJson.Search)
    }

    setMovies(responseJson.Search)


  }

  useEffect(()=>{
    getMovieRequest(searchValue );
  }, [searchValue]);

  return (
    <>
      <div className="container-fluid movie-app">
        <div className="row d-flex align-items-center mt-4 mb-">
          <MovieListHeading heading="Movies"/>
          <SearchBox searchValue={searchValue} setSearchValue={setSearchValue}/>
        </div>
        <div className="row">
          <MovieList movies={movies} />
        </div>
      </div>
    </>
  );
};

export default App;
