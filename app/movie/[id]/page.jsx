import React from "react";
import Movies from "@/mocks/movies.json";
import MovieContainer from "@/containers/movie";
import {notFound} from "next/navigation"

const MoviePage = ({ params }) => {
  const movieDetail = Movies.results.find((movie) => movie.id === +params.id);
  if(!movieDetail) notFound();
  return <MovieContainer movie={movieDetail}/>;
};

export default MoviePage;
