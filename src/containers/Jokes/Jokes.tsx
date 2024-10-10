import { Joke } from '../../types.d';
import { getJoke } from '../../lib/JokesApi';
import { useEffect, useState } from 'react';
import JokesList from '../../components/JokesList/JokesList';

const Jokes = () => {
  const [list, setList] = useState<Joke[]>([]);

  useEffect(() => {
    addJoke();
  }, []);

  const clearJokes = () => {
    setList([]);
  };

  const addJoke = () => {
    try {
      getJoke().then((blob) => setList((list) => [...list, { id: blob.id, salt: blob.value }]));
    } catch {
      alert("I'm so not funny.");
    }
  };

  const getJokes = () => {
    try {
      clearJokes();

      for (let i = 0; i < 5; i++) {
        addJoke();
      }
    } catch {
      alert("I'm so not funny.");
    }
  };

  return (
    <div>
      <h2>Task 2: Jokes</h2>
      <div className='row'>
        <button type='button' className='btn btn-primary' onClick={getJokes}>
          Get 5 jokes
        </button>
        <JokesList jokes={list} />
      </div>
    </div>
  );
};

export default Jokes;
