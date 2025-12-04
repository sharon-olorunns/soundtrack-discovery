import { useEffect, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';

function CallbackPage() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [status, setStatus] = useState('Processing...');

  useEffect(() => {
    const code = searchParams.get('code');
    const error = searchParams.get('error');

    if (error) {
      setStatus('Authentication failed. Redirecting...');
      setTimeout(() => navigate('/input'), 3000);
      return;
    }

    if (code) {
      console.log('Spotify code received:', code);
      setStatus('Spotify connected! 🎉');
      sessionStorage.setItem('spotify_code', code);
      // For now, just redirect to home after success
      setTimeout(() => navigate('/'), 2000);
    }
  }, [searchParams, navigate]);

  return (
    <div className="flex items-center justify-center min-h-screen text-white">
      <p className="text-2xl">{status}</p>
    </div>
  );
}

export default CallbackPage;