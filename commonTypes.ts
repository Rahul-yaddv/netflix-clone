//---------------------- Headers.tsx types --------------
export interface optionsType {
  method: string;
  headers: Headers;
}

// ------------------popularMovie function types -------------
export interface popularMovieType {
  results: {
    original_title: string;
    vote_average: number;
    runtime: number;
    id: number;
    genre_ids: number[];
    genre_name: string[];
  }[];
}

// ----------------------------genreType types --------------

export interface genresPromise {
  genres: { id: number; name: string }[];
}

export type genresType = { id: number; name: string }[];

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
