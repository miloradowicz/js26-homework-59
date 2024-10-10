import { FC, memo } from 'react';
import { Joke } from '../../types.d';
import JokesItem from './JokesItem/JokesItem';

interface JokesListProps {
  jokes: Joke[];
}

const JokesList: FC<JokesListProps> = memo(({ jokes }) => {
  return (
    <div>
      <h3>Jokes list</h3>
      <ul className='list-group'>
        {jokes.map((x) => (
          <JokesItem key={x.id} joke={x} />
        ))}
      </ul>
    </div>
  );
});

export default JokesList;
