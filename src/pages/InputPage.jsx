import { getSpotifyAuthUrl } from '../utils/spotify';

function InputPage() {
  const handleSpotifyConnect = () => {
    window.location.href = getSpotifyAuthUrl();
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-white px-4">
      <h2 className="text-4xl font-bold mb-8">How would you like to share your music taste?</h2>
      <div className="flex gap-4">
        <button
          onClick={handleSpotifyConnect}
          className="bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-8 rounded-lg"
        >
          Connect Spotify
        </button>
        <button className="bg-gray-700 hover:bg-gray-600 text-white font-bold py-4 px-8 rounded-lg">
          Enter Artists Manually
        </button>
      </div>
    </div>
  );
}

export default InputPage;