import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SavedList from './Movies/SavedList';
import { Route, Link, Switch } from 'react-router-dom'
import MovieList from './Movies/MovieList'
import Movie from './Movies/Movie'


const App = () => {
  const [saved, setSaved] = useState([]); // Stretch: the ids of "saved" movies
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    const getMovies = () => {
      axios
        .get('http://localhost:5000/api/movies')
        .then(response => {
          setMovieList(response.data);
        })
        .catch(error => {
          console.error('Server Error', error);
        });
    }
    getMovies();
  }, []);

  const addToSavedList = id => {
    // This is stretch. Prevent the same movie from being "saved" more than once
  };

  return (
    <div>
        <SavedList list={[ /* This is stretch */]} />
        <div>
          <Link to='/'>Movie List</Link>
        </div>
      <Switch>
        
        <Route path='/movies/:id'>
          <Movie />
        </Route>

        <Route path='/'>
          <MovieList movies={movieList}/>
        </Route>
      </Switch>
    </div>
  );
};

export default App;


//[ ] one route for `/` that loads the `MovieList` component. **This component will need the movies injected into it via props**.
//* [ ] one route that will take an `id` parameter after`/movies/` (ex: `/movies/2`, `/movies/3` where the id is dynamic). This route should load the `Movie` component.
