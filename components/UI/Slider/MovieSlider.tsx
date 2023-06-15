import { configType, popularMovieDetailsType, propsType } from '@/commonTypes';
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import PageHeader from '../PageHeader';

function MovieSlider(props: propsType) {
  const { popularMovie, movieImages } = props;
  const sliderData = popularMovie.slice(0, 10);
  const imageFinal = movieImages.secure_base_url + movieImages.poster_sizes[6];
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
  };

  return (
    <div>
      <Slider {...settings}>
        {sliderData.map(movie => (
          <div
            key={movie.id}
            className='h-[800px] w-full relative  border-solid border-black border-2 cursor-grab active:cursor-g brightness-80 '
          >
            <div
              className='relative w-full h-full bg-no-repeat bg-cover bg-center'
              style={{
                backgroundImage: `url(${imageFinal + movie.backdrop_path})`,
              }}
            >
              <div className='flex w-full h-full flex-col justify-center'>
                <h2 className='text-white text-3xl ml-8'>
                  {movie.original_title}
                </h2>
                <div className='w-full block ml-8 text-white'>
                  <span className='text-'>{movie.runtime}</span>
                  <span>
                    {movie.genres?.join(' ')}
                    {/* {movie.genres?.map(genre => (
                      <span key={movie.id}>{genre} </span>
                    ))} */}
                  </span>
                  <span>⭐{movie.vote_average}</span>
                  <span>
                    {movie.adult ? <span> adult</span> : <span> pg-13</span>}
                  </span>
                  <div className='max-w-xl text-white font-extrabold mt-5'>
                    <p>{movie.overview}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default MovieSlider;
