import { genresType, optionsType, popularMovieType } from '@/commonTypes';

export default async function popularMovieFetch(
  options: optionsType,
  genres: genres
): Promise<popularMovieDetails> {
  const popularMovieData = await fetch(
    'https://api.themoviedb.org/3/movie/popular?language=en-US&page=1',
    options
  );

  const { results }: result = await popularMovieData.json();
  const genrePopular = results.map(movie => movie.genre_ids);
    const Genreid = genrePopular.map(genre => {
    const matchedId = genres.map(id => console.log(id));
  });

  return results;
}
interface result {
  results: {
    // original_title: string;
    // vote_average: number;
    // runtime: number;
    id: number;
    genre_ids: number[];
    genre_name: string[];
  }[];
}
[];
type popularMovieDetails = {
  // original_title: string;
  // vote_average: number;
  // runtime: number;
  id: number;
  genre_ids: number[];
  genre_name: string[];
}[];

type genres = { id: number; name: string }[];
