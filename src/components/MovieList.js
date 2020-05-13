import React, { useState } from 'react'
import Movie from './Movie'

const MovieList = () => {
  const [movies, setMovies] = useState([
 {
  name: 'Inception',
  price: '$10',
  id: 1
 },
 {
  name: 'Arrival',
  price: '$11',
  id: 2
 },
 {
  name: 'Donnie Darko',
  price: '$13',
  id: 3
 }
]);

 return (
  <div>
   {movies.map(movie => (
       <Movie name={movie.name} price={movie.price} key={movie.id}/>
   ))}
  </div>
 );
};
export default MovieList