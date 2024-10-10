import { Joke } from '../../types.d';
import { FC } from 'react';

interface JokesItemProps {
  joke: Joke;
}

const JokesItem: FC<JokesItemProps> = ({ joke }) => {
  return <div className='card'>{joke.salt}</div>;
};

export default JokesItem;
