import { FC } from 'react';
import { Joke } from '../../../types';

interface JokesItemProps {
  joke: Joke;
}

const JokesItem: FC<JokesItemProps> = ({ joke }) => {
  return <div className='card'>{joke.salt}</div>;
};

export default JokesItem;
