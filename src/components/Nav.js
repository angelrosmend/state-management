import React, {useContext} from 'react';
import { MovieContext } from '../context/MovieContext'
function Nav() {
 const [movies, setMovies] = useContext(MovieContext);
 return (
  <nav>
   <h3 className="nav-link">Dev Ed</h3>
 <p className="nav-link">List of Movies: {movies.length}</p>   
  </nav>
 )
}

export default Nav
