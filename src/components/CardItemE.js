import React, { useState } from 'react';
import EventModal from './EventModal';
import { useFavorites } from './FavoritesContext';
import './CardsE.css';

function CardItemE(props) {
  const favoritesContext = useFavorites();
  const addFavorite = favoritesContext ? favoritesContext.addFavorite : null;
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [isHeartRed, setIsHeartRed] = useState(props.initialHeartRed || false);

  const handleRating = (rate) => {
    setRating(rate);
  };

  const handleCardClick = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleHeartClick = (e) => {
    e.stopPropagation();
    if (addFavorite && !props.isFavorite && !isHeartRed) {
      addFavorite(props);
      setIsHeartRed(true);
    }
  };

  const handleRemoveClick = (e) => {
    e.stopPropagation();
    props.onRemove();
  };

  return (
    <>
      <li className={`cardsE__item ${props.isSelected ? 'selected' : ''}`} onClick={handleCardClick}>
        <div className='cardsE__item__link'>
          <figure className='cardsE__item__pic-wrap' data-category={props.label}>
            <img
              className='cardsE__item__img'
              alt={props.label}
              src={props.src}
            />
          </figure>
          <div className='cardsE__item__info'>
            <h5 className='cardsE__item__text'>{props.title}</h5>
            <p className='cardsE__item__text'><strong>Ημέρα:</strong> {props.day}</p>
            <p className='cardsE__item__text'><strong>Τοποθεσία:</strong> {props.location}</p>
            <div className='rating'>
              {[...Array(5)].map((star, index) => {
                index += 1;
                return (
                  <button
                    type='button'
                    key={index}
                    className={index <= (hover || rating) ? 'on' : 'off'}
                    onClick={(e) => {
                      e.stopPropagation();
                      handleRating(index);
                    }}
                    onMouseEnter={() => setHover(index)}
                    onMouseLeave={() => setHover(rating)}
                  >
                    <span className='star'>&#9733;</span>
                  </button>
                );
              })}
            </div>
          </div>
          {addFavorite && (
            <button
              className={`heart-icon ${isHeartRed || props.isFavorite ? 'red' : ''}`}
              onClick={handleHeartClick}
              disabled={props.isFavorite}
            >
              <span role="img" aria-label="heart">&#9829;</span>
            </button>
          )}
          {props.showRemoveButton && (
            <button className="remove-button" onClick={handleRemoveClick}>
              Remove
            </button>
          )}
        </div>
      </li>
      <EventModal show={showModal} onClose={handleCloseModal} event={props} />
    </>
  );
}

export default CardItemE;
