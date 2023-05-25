import { options } from '@/commonTypes';

export const GenreType = async (options: options) => {
  const genreData = await fetch(
    'https://api.themoviedb.org/3/genre/movie/list',
    options
  );
};
