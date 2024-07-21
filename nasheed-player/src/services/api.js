// import axios from 'axios';

// const API_URL = `https://pixabay.com/music/search/muslim/`; // Your API base URL

// export const fetchNasheeds = async () => {
//   try {
//     const response = await axios.get(`${API_URL}/nasheeds`);
//     return response.data;
//   } catch (error) {
//     console.error('Error fetching nasheeds:', error);
//     throw error;
//   }
// };
useEffect(() => {
  const fetchNasheeds = async () => {
    try {
      const response = await axios.get( `https://pixabay.com/music/search/muslim/`);
      setNasheeds(response.data);
    } catch (err) {
      console.error('Failed to fetch nasheeds:', err);
    }
  }
  fetchNasheeds();
}, []);

const playNasheed = (nasheed) => {
  setCurrentNasheed(nasheed);
};

