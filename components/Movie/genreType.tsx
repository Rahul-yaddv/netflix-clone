import { optionsType } from '@/commonTypes';
export const GenreType = async (options: optionsType) => {
  const genreData = await fetch(
    'https://api.themoviedb.org/3/genre/movie/list',
    options
  );
};
