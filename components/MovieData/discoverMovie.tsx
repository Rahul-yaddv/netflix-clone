import { optionsType } from '@/commonTypes';

export default async function DiscoverMovie(options: optionsType) {
  const discoverMovieData = await fetch(
    'https://api.themoviedb.org/3/movie/popular?language=en-US&page=1',
    options
  );
}
