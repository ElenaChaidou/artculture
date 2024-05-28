import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home';
import Events from './components/pages/Events';
import Favorites from './components/pages/Favorites';
import PastEvents from './components/pages/PastEvents';
import { FavoritesProvider } from './components/FavoritesContext';
import SignUp from './components/pages/SignUp';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Router basename={process.env.PUBLIC_URL}>
        <Navbar />
        <FavoritesProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/events" element={<Events />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/past-events" element={<PastEvents />} />
          <Route path="/sign-up" element={<SignUp />} />
        </Routes>
        </FavoritesProvider>
        <Footer />
      </Router>
    </>
  );
}

export default App;
