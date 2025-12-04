import { useState, useEffect } from 'react';
import { getFilmDetails, getStreamingProviders } from '../utils/tmdb';

function ResultsPage() {
  const [film, setFilm] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTestFilm = async () => {
      try {
        const data = await getFilmDetails(550); // Fight Club
        setFilm(data);
      } catch (error) {
        console.error('Error fetching film:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchTestFilm();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen text-white">
        <p className="text-2xl">Loading...</p>
      </div>
    );
  }

  const streaming = getStreamingProviders(film);

  return (
    <div className="min-h-screen text-white p-8">
      <h1 className="text-4xl font-bold mb-8">Test Results</h1>
      {film && (
        <div className="bg-gray-800 rounded-lg p-6 max-w-2xl">
          <img
            src={`https://image.tmdb.org/t/p/w500${film.poster_path}`}
            alt={film.title}
            className="w-48 rounded mb-4"
          />
          <h2 className="text-2xl font-bold">{film.title}</h2>
          <p className="text-gray-400">{film.release_date?.slice(0, 4)}</p>
          <p className="mt-4">{film.overview}</p>
          
          {streaming?.flatrate && (
            <div className="mt-4">
              <p className="font-bold">Stream on:</p>
              <div className="flex gap-2 mt-2">
                {streaming.flatrate.map(provider => (
                  <img
                    key={provider.provider_id}
                    src={`https://image.tmdb.org/t/p/original${provider.logo_path}`}
                    alt={provider.provider_name}
                    className="w-10 h-10 rounded"
                    title={provider.provider_name}
                  />
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default ResultsPage;