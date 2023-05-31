import { optionsType, genresPromise, genresType } from '@/commonTypes';

export const GenreFetch = async (options: optionsType): Promise<genresType> => {
  const genreData = await fetch(
    'https://api.themoviedb.org/3/genre/movie/list',
    options
  );
  const { genres }: { genres: genresType } = await genreData.json();
  return genres;
};

//export interface genresType {
// genres: { id: number; name: string }[] }
// export type genresType = [{ id: number; name: string }];
