export interface MovieInfo {
  get id(): number;
  get title(): string;
}

export interface MovieMutation {
  get title(): string;
}

export interface Joke {
  get id(): string;
  get salt(): string;
}
