import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import CardItemE from '../CardItemE';
import PastEvData from '../PastEvData.json';
import '../CardsE.css';

function PastEvents() {
  const [pastEvents, setPastEvents] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const today = new Date();
    const pastEvents = PastEvData.filter(event => new Date(event.day) < today);
    setPastEvents(pastEvents);
  }, []);

  const handleBack = () => {
    navigate('/events'); 
  };

  return (
    <div className="cardsE">
      <h1>Past Events</h1>
      <div className='back-button-container'>
        <button className='back-button' onClick={handleBack}>
          <FontAwesomeIcon icon={faArrowLeft} /> 
        </button>
      </div>
      <div className='cardsE__container'>
        <div className='cardsE__wrapper'>
          <ul className='cardsE__items'>
            {pastEvents.length > 0 ? (
              pastEvents.map((item) => (
                <CardItemE
                  key={item.id}
                  src={process.env.PUBLIC_URL + item.src}
                  title={item.title}
                  day={item.day}
                  time={item.time}
                  location={item.location}
                  label={item.label}
                  path={item.path}
                  description={item.description}
                  showHeart={false} // Ensure the heart button is hidden
                />
              ))
            ) : (
              <p className="no-events-message">No past events found</p>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default PastEvents;
