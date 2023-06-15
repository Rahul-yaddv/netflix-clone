//---------------------- Headers.tsx types --------------
export interface optionsType {
  method: string;
  headers: Headers;
}

export interface configType {
  images: {
    base_url: string;
    backdrop_sizes: string[];
    poster_sizes: string[];
  };
}

// ------------------popularMovie function types -------------

export type popularMovieDetailsType = {
  poster_path: string;
  backdrop_path: string;
  original_title: string;
  vote_average: number;
  runtime: number;
  id: number;
  genre_ids?: number[];
  genres: (string | undefined)[] | undefined;
  adult: boolean;
  overview: string;
}[];
// ----------------------------genreType types --------------

export interface genresPromise {
  genres: { id: number; name: string }[];
}

export type genresType = genresPromise['genres'];
// export type genresType = { id: number; name: string }[];

export interface propsType {
  popularMovie: popularMovieDetailsType;
  movieImages: configType['images'];
  // movieImages: Pick<configType, 'images'>;
}
