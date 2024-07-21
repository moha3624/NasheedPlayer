import React, { createContext, useState } from 'react';

export const PlayerContext = createContext();

export const PlayerProvider = ({ children }) => {
  const [currentNasheed, setCurrentNasheed] = useState(null);

  return (
    <PlayerContext.Provider value={{ currentNasheed, setCurrentNasheed }}>
      {children}
    </PlayerContext.Provider>
  );
};
