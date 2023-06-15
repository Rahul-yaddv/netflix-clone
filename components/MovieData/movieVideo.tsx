import { optionsType } from '@/commonTypes';
import React from 'react';

export default async function movieVideo(options: optionsType) {
  const videoData = await fetch(
    'https://api.themoviedb.org/3/movie/603692/videos?language=en-US',
    options
  );
}
