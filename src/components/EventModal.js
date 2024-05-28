import React from 'react';
import './EventModal.css';

function EventModal({ show, onClose, event }) {
  if (!show) {
    return null;
  }

  return (
    <div className="modal-overlay">
      <div className="modal">
        <button className="close-button" onClick={onClose}>
          &times;
        </button>
        <figure className='modal__pic-wrap' data-category={event.label}>
          <img className='modal__img' alt={event.label} src={event.src} />
        </figure>
        <div className='modal__info'>
          <h2 className='modal__title'>{event.title}</h2>
          <p className='modal__text'>Ημέρα: {event.day}</p>
          <p className='modal__text'>time: {event.time}</p>
          <p className='modal__text'>Τοποθεσία: {event.location}</p>
          <p className='modal__text'>Πληροφορίες: {event.description}</p>
        </div>
      </div>
    </div>
  );
}

export default EventModal;
