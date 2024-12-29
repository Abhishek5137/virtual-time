// NavbarLogout.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';

const NavbarLogout = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Clear any session data if necessary
    alert('You have been logged out.');
    navigate('/'); // Redirect to the main page
  };

  return (
    <nav className="bg-slate-800 p-4 flex justify-end">
      <button
        className="bg-red-500 text-white px-4 py-2 rounded-full"
        onClick={handleLogout}
      >
        Logout
      </button>
    </nav>
  );
};

export default NavbarLogout;
