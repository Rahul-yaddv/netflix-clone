import {
  genresType,
  optionsType,
  popularMovieDetailsType,
} from '@/commonTypes';

export default async function popularMovieFetch(
  options: optionsType,
  genres: genresType
): Promise<popularMovieDetailsType> {
  const popularMovieData = await fetch(
    'https://api.themoviedb.org/3/movie/popular?language=en-US&page=1',
    options
  );

  const { results }: { results: popularMovieDetailsType } =
    await popularMovieData.json();

  results.forEach(movie => {
    movie.genres = movie.genre_ids?.map(id => {
      return genres.find(genre => {
        return id === genre.id;
      })?.name;
    });
    delete movie.genre_ids;
  });
  return results;
}
