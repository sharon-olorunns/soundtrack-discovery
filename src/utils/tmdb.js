const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
const BASE_URL = 'https://api.themoviedb.org/3';
const DEFAULT_REGION = 'GB';

export const getFilmDetails = async (filmId) => {
  const response = await fetch(
    `${BASE_URL}/movie/${filmId}?api_key=${API_KEY}&append_to_response=credits,watch/providers,videos`
  );
  return response.json();
};

export const searchFilms = async (query) => {
  const response = await fetch(
    `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(query)}`
  );
  return response.json();
};

export const getStreamingProviders = (film) => {
  const providers = film['watch/providers']?.results?.[DEFAULT_REGION];
  return providers || null;
};

export const testTMDB = async () => {
  const film = await getFilmDetails(550);
  console.log('Film:', film.title);
  console.log('Director:', film.credits?.crew?.find(c => c.job === 'Director')?.name);
  console.log('UK Streaming:', getStreamingProviders(film));
  return film;
};