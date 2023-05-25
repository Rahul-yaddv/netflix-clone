import { optionsType } from '@/commonTypes';

const apiHeaders = (apiKey: string | undefined) => {
  const headers = new Headers();
  headers.append('accept', 'application/json');
  headers.append('Authorization', `Bearer ${apiKey}`);

  const options = {
    method: 'GET',
    headers: headers,
  };
  return options;
};
export const configApi = async (options: optionsType) => {
  const configData = await fetch(
    'https://api.themoviedb.org/3/configuration',
    options
  );
  const config = await configData.json();
  return config;
};

export { apiHeaders };
