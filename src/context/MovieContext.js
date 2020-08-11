import React, { useState, createContext} from 'react'

export const MovieContext = createContext();
export const MovieProvider = (props) => {
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
 
 return(
  <MovieContext.Provider value={[movies, setMovies]}>
   {props.children}
  </MovieContext.Provider>
 );
}
