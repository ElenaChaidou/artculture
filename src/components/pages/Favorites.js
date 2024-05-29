import React, { useState, useEffect, forwardRef } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useFavorites } from '../FavoritesContext';
import CardItemE from '../CardItemE';
import '../CardsE.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons';

function Favorites() {
  const { favorites, removeFavorite } = useFavorites();
  const [filteredFavorites, setFilteredFavorites] = useState(favorites);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedFilters, setSelectedFilters] = useState([]);
  const [selectedDate, setSelectedDate] = useState(null);
  const [cardToRemove, setCardToRemove] = useState(null);

  const filters = ["Τέχνη", "Βιβλίο", "Θέατρο", "Σινεμά", "Επιστήμη", "Μουσική"];

  const handleFilterButtonClick = (selectedCategory) => {
    if (selectedFilters.includes(selectedCategory)) {
      const filters = selectedFilters.filter((el) => el !== selectedCategory);
      setSelectedFilters(filters);
    } else {
      setSelectedFilters([...selectedFilters, selectedCategory]);
    }
  };

  const handleRemoveFavorite = () => {
    if (cardToRemove !== null) {
      removeFavorite(cardToRemove);
      setCardToRemove(null);
    }
  };

  useEffect(() => {
    let filteredData = favorites;

    if (selectedFilters.length > 0) {
      filteredData = selectedFilters.flatMap((selectedCategory) => {
        return filteredData.filter((item) => item.label === selectedCategory);
      });
    }

    if (searchTerm !== "") {
      filteredData = filteredData.filter((val) => {
        return (
          val.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          val.day.toLowerCase().includes(searchTerm.toLowerCase()) ||
          val.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
          val.label.toLowerCase().includes(searchTerm.toLowerCase())
        );
      });
    }

    if (selectedDate) {
      filteredData = filteredData.filter((val) => {
        const eventDate = new Date(val.day);
        return eventDate.toDateString() === selectedDate.toDateString();
      });
    }

    setFilteredFavorites(filteredData);
  }, [favorites, searchTerm, selectedFilters, selectedDate]);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const resetFilters = () => {
    setSelectedFilters([]);
    setSearchTerm("");
    setSelectedDate(null);
  };

  const CustomDateInput = forwardRef(({ value, onClick }, ref) => (
    <button className="custom-date-input" onClick={onClick} ref={ref}>
      <FontAwesomeIcon icon={faCalendarAlt} />
    </button>
  ));

  return (
    <div className="favorites-page">
      <div className="templateContainer">
        <div className="searchInput_Container">
          <input
            id="searchInput"
            type="text"
            placeholder="Search here..."
            value={searchTerm}
            onChange={handleSearch}
          />
          <DatePicker
            selected={selectedDate}
            onChange={(date) => setSelectedDate(date)}
            customInput={<CustomDateInput />}
            dateFormat="yyyy/MM/dd"
          />
        </div>
      </div>

      <div className="buttons-container">
        {filters.map((category, idx) => (
          <button
            onClick={() => handleFilterButtonClick(category)}
            className={`button ${selectedFilters.includes(category) ? "active" : ""}`}
            key={`filters-${idx}`}
          >
            {category}
          </button>
        ))}
        <button className="button reset-button" onClick={resetFilters}>Reset Filters</button>
      </div>

      <div className="cardsE">
        <h1>Welcome to your Favorites Events</h1>
        <div className='cardsE__container'>
          <div className='cardsE__wrapper'>
            <ul className='cardsE__items'>
              {filteredFavorites.length > 0 ? (
                filteredFavorites.map((item) => (
                  <CardItemE
                    key={item.id}
                    id={item.id}
                    src={item.src}
                    title={item.title}
                    day={item.day}
                    time={item.time}
                    location={item.location}
                    label={item.label}
                    path={item.path}
                    description={item.description}
                    initialHeartRed={true}
                    isFavorite={true}
                    onRemove={() => setCardToRemove(item.id)}
                    showRemoveButton={true}
                  />
                ))
              ) : (
                <p className="no-events-message">No favorite events found</p>
              )}
            </ul>
          </div>
        </div>
      </div>
      <button className="past-events-button">Past Events</button>

      {cardToRemove !== null && (
        <div className="confirmation-modal">
          <div className="modal-content">
            <p>Are you sure you want to remove this card from favorites?</p>
            <button className="button" onClick={handleRemoveFavorite}>Yes</button>
            <button className="button" onClick={() => setCardToRemove(null)}>No</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Favorites;
