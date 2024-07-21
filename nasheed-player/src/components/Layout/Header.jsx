import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';


const Header = () => {
  const { user, signOut } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSignOut = () => {
    signOut();
    navigate('/signin');
  };

  return (
    <header className="bg-purple-500 text-white p-4 flex justify-between items-center">
      <h1 className="text-xl font-bold">
        <Link to="/">Nasheed Player</Link>
      </h1>
      <nav>
        {user ? (
          <>
            <span className="mr-4">Welcome, {user.email}</span>
            <button className="bg-red-500 p-2 rounded" onClick={handleSignOut}>Sign Out</button>
            
          </>
        ) : (
          <>
             <Link className="mr-4" to="/home">Home</Link>
            <Link className="mr-4" to="/signin">Sign In</Link>
            <Link to="/signup">Sign Up</Link>
          </>
        )}
      </nav>

    </header>
  );
};

export default Header;
