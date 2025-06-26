import React, { useEffect, useState } from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth';

import { auth } from './firebase';

import Nav from './components/pages/Nav';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Quote from './components/pages/Quote';
import Book1 from './components/pages/Book1';
import Welcome from './components/pages/Welcome';
import Login from './components/pages/Login';
import Counter from './components/pages/Counter';

const App = () => {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);
  const [showWelcome,setShowWelcome] = useState(false);
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);

      if (currentUser && !showWelcome) {
        setTimeout(() => setShowWelcome(false), 1500); // Hide after 2 seconds
      setShowWelcome(true);
    }
    });
    return () => unsubscribe();
  }, []);

  if (loading) return <Counter />;
  if (!user) return <Login />;


  return (
    <div className="min-h-screen bg-[#F3F2EF] dark:bg-[#232321] dark:text-white transition-all">
      {showWelcome && <Welcome />}
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Quote" element={<Quote />} />
        <Route path="/Book1" element={<Book1 />} />
      </Routes>
    </div>
  );
};

export default App;
