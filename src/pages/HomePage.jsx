import { useNavigate } from 'react-router-dom';

function HomePage() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-white px-4">
      <h1 className="text-6xl font-bold mb-4">🎵 SoundTrack Discovery</h1>
      <p className="text-2xl mb-8 text-center max-w-2xl">
        Discover films based on your music taste
      </p>
      <button
        onClick={() => navigate('/input')}
        className="bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-8 rounded-full text-xl transition"
      >
        Get Started
      </button>
    </div>
  );
}

export default HomePage;