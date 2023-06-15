import { apiHeaders, configApi } from '@/components/MovieData/apiHeaders';
import popularMovieFetch from '@/components/MovieData/popularMovieFetch';
import { GenreFetch } from '@/components/MovieData/genreOptions';
import MovieSlider from '@/components/UI/Slider/MovieSlider';
import PageHeader from '@/components/UI/PageHeader';
import { configType, genresType, propsType } from '@/commonTypes';

export default function GuestLogin(props: propsType) {
  const { popularMovie, movieImages } = props;

  return (
    <div>
      <PageHeader />
      <MovieSlider movieImages={movieImages} popularMovie={popularMovie} />
    </div>
  );
}

export const getStaticProps = async () => {
  const apiKey = process.env.REACT_APP_TMDB_ACCESS_TOKEN;
  const options = apiHeaders(apiKey);
  const genre = await GenreFetch(options);
  const popularMovie = await popularMovieFetch(options, genre);
  const movieImages: Pick<configType, 'images'> = await configApi(options);
  const popularMovieList = await popularMovieFetch(options, genre);

  return {
    props: {
      popularMovie: popularMovie,
      movieImages: movieImages,
    },
  };
};
