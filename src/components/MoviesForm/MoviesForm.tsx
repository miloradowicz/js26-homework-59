import { MovieMutation } from '../../types.d';
import { ChangeEventHandler, FC, FormEventHandler, useState } from 'react';

interface MoviesFormProps {
  action: (_: MovieMutation) => void;
}

const MoviesForm: FC<MoviesFormProps> = ({ action }) => {
  const [movie, setMovie] = useState<MovieMutation>({ title: '' });

  const onChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setMovie((movie) => ({ ...movie, title: e.target.value }));
  };

  const add: FormEventHandler = (e) => {
    e.preventDefault();

    if (movie.title) {
      action(movie);

      setMovie({ title: '' });
    }
  };

  return (
    <div>
      <form onSubmit={add}>
        <div className='input-group'>
          <input type='text' name='title' className='form-control' placeholder='Movie title' required value={movie.title} onChange={onChange} />
          <button type='submit' className='btn btn-primary'>
            Add
          </button>
        </div>
      </form>
    </div>
  );
};

export default MoviesForm;
