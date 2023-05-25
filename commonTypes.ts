export interface optionsType {
  method: string;
  headers: Headers;
}

export interface popularMovieType {
  results: {
    original_title: string;
    vote_average: number;
    runtime: number;
    id: number;
    genre_ids: number[];
  }[];
}

export interface genresType {
  genres: { id: number; name: string }[];
}

export interface propsType {
  popularMovie: {
    results: [
      {
        original_title: string;
        vote_average: number;
        runtime: number;
        id: number;
        genre_ids: number[];
      }
    ];
  };
  genresData: { genres: { id: number; name: string }[] };
  config: {};
}

export interface genresType {
  genres: { id: number; name: string }[];
}
