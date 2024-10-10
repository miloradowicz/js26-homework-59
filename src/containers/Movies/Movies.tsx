import { MovieInfo, MovieMutation } from '../../types.d';
import { useState } from 'react';
import MoviesForm from '../../components/MoviesForm/MoviesForm';
import MoviesList from '../../components/MoviesList/MoviesList';

const Movies = () => {
  const [list, setList] = useState<MovieInfo[]>([]);

  const addMovie = (movie: MovieMutation) => {
    if (movie.title && !list.find((x) => x.title === movie.title)) {
      setList([...list, { ...movie, id: Date.now() }]);
    } else {
      alert('Invalid movie name or movie already exists.');
    }
  };

  const updateMovie = (id: number, movie: MovieMutation) => {
    if (movie.title && !list.find((x) => x.title === movie.title)) {
      const index = list.findIndex((x) => x.id === id);

      if (index >= 0 && movie.title !== list[index].title) {
        const _list = [...list];

        const _movie = { ..._list[index] };
        _list.splice(index, 1, { ..._movie, title: movie.title });

        setList(_list);
      }
    } else {
      alert('Invalid movie name or movie already exists.');
    }
  };

  const deleteMovie = (id: number) => {
    setList((list) => list.filter((x) => x.id !== id));
  };

  return (
    <div>
      <h2>Task 1: Movies</h2>
      <MoviesForm action={addMovie} />
      <MoviesList list={list} onUpdate={updateMovie} onDelete={deleteMovie} />
    </div>
  );
};

export default Movies;
