export default async function DiscoverMovie(options: options) {
  const discoverMovieData = await fetch(
    'https://api.themoviedb.org/3/movie/popular?language=en-US&page=1',
    options
  );
}
interface options {
  method: string;
  headers: Headers;
}
