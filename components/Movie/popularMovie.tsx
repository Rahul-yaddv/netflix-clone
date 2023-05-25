import { optionsType, popularMovieType } from '@/commonTypes';

export default async function popularMovieHelper(
  options: optionsType
): Promise<popularMovieType> {
  const popularMovieData = await fetch(
    'https://api.themoviedb.org/3/movie/popular?language=en-US&page=1',
    options
  );

  const popularMovie: popularMovieType = await popularMovieData.json();

  return popularMovie;
}
