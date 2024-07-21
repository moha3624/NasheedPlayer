import React, { useContext } from 'react';
import { PlayerContext } from '../context/PlayerContext';

const Home = () => {
  const { currentNasheed, setCurrentNasheed } = useContext(PlayerContext);
  const nasheeds = [
    
    { id: 2, title: 'baba telephone', path: '/nasheeds/baba_telephone.mp3' },
    { id: 3, title: 'saunadi saunadi', path: '/nasheeds/saunadi_saunadi.mp3' },
    { id: 1, title: 'YA HABIBI YA MOHD', path: '/nasheeds/YA_HABIBI_YA_MOHD.mp3' }
  ];

  const playNasheed = (nasheed) => {
    setCurrentNasheed(nasheed);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Nasheed Player</h1>
      {currentNasheed ? (
        <div className="mb-4">
          <h2 className="text-xl">Playing: {currentNasheed.title}</h2>
        </div>
      ) : (
        <p className="mb-4">No nasheed playing currently.</p>
      )}
      <ul className="mb-4">
        {nasheeds.map(nasheed => (
          <li key={nasheed.id} className="mb-2">
            <button
              className="bg-blue-500 text-white p-2 rounded w-full text-left"
              onClick={() => playNasheed(nasheed)}
            >
              {nasheed.title}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
