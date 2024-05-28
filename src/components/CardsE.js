import React, { useEffect, useState, useCallback, forwardRef } from 'react';
import './CardsE.css';
import CardItemE from './CardItemE';
import CardData from './CardData.json';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons';

function CardsE() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedFilters, setSelectedFilters] = useState([]);
  const [filteredCardData, setFilteredCardData] = useState(CardData);
  const [selectedDate, setSelectedDate] = useState(null);

  const filters = ["Τέχνη", "Βιβλίο", "Θέατρο", "Σινεμά", "Επιστήμη", "Μουσική"];

  const handleFilterButtonClick = (selectedCategory) => {
    if (selectedFilters.includes(selectedCategory)) {
      const filters = selectedFilters.filter((el) => el !== selectedCategory);
      setSelectedFilters(filters);
    } else {
      setSelectedFilters([...selectedFilters, selectedCategory]);
    }
  };

  const filterCards = useCallback(() => {
    let filteredData = CardData;

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
  
    setFilteredCardData(filteredData);
  }, [searchTerm, selectedFilters, selectedDate]);

  useEffect(() => {
    filterCards();
  }, [searchTerm, selectedFilters, selectedDate, filterCards]);

  const CustomDateInput = forwardRef(({ value, onClick }, ref) => (
    <button className="custom-date-input" onClick={onClick} ref={ref}>
      <FontAwesomeIcon icon={faCalendarAlt} />
    </button>
  ));

  return (
    <>
      <div className="templateContainer">
        <div className="searchInput_Container">
          <input
            id="searchInput"
            type="text"
            placeholder="Search here..."
            value={searchTerm}
            onChange={(event) => setSearchTerm(event.target.value)}
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
            className={`button ${selectedFilters?.includes(category) ? "active" : ""}`}
            key={`filters-${idx}`}
          >
            {category}
          </button>
        ))}
      </div>

      <div className={`cardsE ${searchTerm ? 'search-active' : ''}`}>
        <h1>Welcome to our big Events</h1>
        <div className='cardsE__container'>
          <div className='cardsE__wrapper'>
            <ul className='cardsE__items'>
              {filteredCardData.map((item, key) => (
                <CardItemE
                  key={key}
                  src={item.src}
                  title={item.title}
                  day={item.day}
                  time={item.time}
                  location={item.location}
                  label={item.label}
                  path={item.path}
                  description={item.description}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default CardsE;
