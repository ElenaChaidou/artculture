// FavoritesContext.js
import React, { createContext, useState, useContext } from 'react';

const FavoritesContext = createContext();

export const useFavorites = () => useContext(FavoritesContext);

export const FavoritesProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);

  const addFavorite = (item) => {
    setFavorites((prevFavorites) => [...prevFavorites, item]);
  };

  const isFavorite = (item) => {
    return favorites.some(fav => fav.id === item.id);
  };

  return (
    <FavoritesContext.Provider value={{ favorites, addFavorite, isFavorite }}>
      {children}
    </FavoritesContext.Provider>
  );
};
