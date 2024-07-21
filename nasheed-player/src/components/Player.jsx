import React, { useContext, useEffect, useRef } from 'react';
import { PlayerContext } from '../context/PlayerContext';

const Player = () => {
  const { currentNasheed } = useContext(PlayerContext);
  const audioRef = useRef(null);

  useEffect(() => {
    if (currentNasheed && audioRef.current) {
      audioRef.current.src = currentNasheed.path;
      audioRef.current.play();
    }
  }, [currentNasheed]);

  const handlePlayPause = () => {
    if (audioRef.current.paused) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-gray-800 text-white p-4">
      {currentNasheed ? (
        <>
          <div className="flex justify-between items-center">
            <div>
              <h3 className="text-lg font-bold">{currentNasheed.title}</h3>
            </div>
            <button
              onClick={handlePlayPause}
              className="bg-blue-500 p-2 rounded text-white"
            >
              Play/Pause
            </button>
          </div>
          <audio ref={audioRef} controls />
        </>
      ) : (
        <p>No nasheed playing currently.</p>
      )}
    </div>
  );
};

export default Player;
