// PastEvents.js
import React, { useState, useEffect } from 'react';
import CardItemE from '../CardItemE';
import PastEvData from '../PastEvData.json';
import '../CardsE.css';

function PastEvents() {
  const [pastEvents, setPastEvents] = useState([]);

  useEffect(() => {
    const today = new Date();
    const pastEvents = PastEvData.filter(event => new Date(event.day) < today);
    setPastEvents(pastEvents);
  }, []);

  return (
    <div className="cardsE">
      <h1>Past Events</h1>
      <div className='cardsE__container'>
        <div className='cardsE__wrapper'>
          <ul className='cardsE__items'>
            {pastEvents.length > 0 ? (
              pastEvents.map((item, key) => (
                <CardItemE
                  key={key}
                  src={process.env.PUBLIC_URL + item.src}
                  title={item.title}
                  day={item.day}
                  time={item.time}
                  location={item.location}
                  label={item.label}
                  path={item.path}
                  description={item.description}
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
