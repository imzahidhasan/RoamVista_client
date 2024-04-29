import React, { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    const savedMode = localStorage.getItem('darkMode');
    return savedMode ? JSON.parse(savedMode) : false;
  });

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  useEffect(() => {
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
  }, [darkMode]);

  return (
    <div className={darkMode ? 'dark bg-[#153448] ' : 'bg-gray-200'}>
      <Navbar  toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
      <div className='min-h-96'>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default App;
