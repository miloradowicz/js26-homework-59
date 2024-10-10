import { FC } from 'react';
import { MovieInfo, MovieMutation } from '../../types.d';
import MoviesItem from './MoviesItem/MoviesItem';

interface MoviesListProps {
  list: MovieInfo[];
  onUpdate: (_0: number, _1: MovieMutation) => void;
  onDelete: (_: number) => void;
}

const MoviesList: FC<MoviesListProps> = ({ list, onUpdate, onDelete }) => {
  return (
    <div>
      <h3 className='mb-3'>Watch list:</h3>
      {list.length === 0 ? (
        <div>
          <p>Nothing to watch</p>
        </div>
      ) : (
        <ul className='list-group'>
          {list.map((x) => (
            <MoviesItem key={x.id} title={x.title} onUpdate={(movie: MovieMutation) => onUpdate(x.id, movie)} onDelete={() => onDelete(x.id)} />
          ))}
        </ul>
      )}
    </div>
  );
};

export default MoviesList;
