
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import SignInPage from './pages/SignInPage';
import SignUpPage from './pages/SignUpPage';
import { AuthProvider } from './context/AuthContext';
import { PlayerProvider } from './context/PlayerContext';
import Header from './components/Layout/Header';
import Footer from './components/Layout/Footer';
import Player from './components/Player';
import './index.css';



function App() {

  
     

  return (
    <AuthProvider>
      <PlayerProvider>
        <Router>
          <div className="min-h-screen flex flex-col">
            <Header />
            <Player />
            
            <div className="flex-grow">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/signin" element={<SignInPage />} />
                <Route path="/signup" element={<SignUpPage />} />
              </Routes>
            </div>
            
            <Footer />
            
          </div>
        </Router>
      </PlayerProvider>
    </AuthProvider>
  );
}


export default App;

