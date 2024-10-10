const url = 'https://api.chucknorris.io/jokes/random';

export interface JokeBlob {
  id: string;
  value: string;
}

export const getJoke = async () => {
  const response = await fetch(url);

  if (response.ok) {
    const json = (await response.json()) as JokeBlob;

    return json;
  } else {
    throw new Error('Request failed.');
  }
};
