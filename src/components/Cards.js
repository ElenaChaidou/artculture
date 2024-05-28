import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  const images = [
    '/images/image-8.jpg',
    '/images/image-3.jpg',
    '/images/image-5.jpg',
    '/images/image-7.jpg',
    '/images/image-6.jpg',
  ];

  images.forEach(image => console.log('Image path:', process.env.PUBLIC_URL + image));

  return (
    <div className='cards'>
      <h1>Explore the Top City Sights</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src={process.env.PUBLIC_URL + '/images/image-8.jpg'}
              text='Το Ρωμαϊκό Ωδείο της Πάτρας είναι μεγαλοπρεπές κτίσμα ρωμαϊκών χρόνων που σήμερα έχει ανακατασκευαστεί και χρησιμοποιείται για μουσικές εκδηλώσεις. '
              label='Αρχαίο Ωδείο'
            />
            <CardItem
              src={process.env.PUBLIC_URL + '/images/image-3.jpg'}
              text='Είναι μικρογραφία της Σκάλας του Μιλάνου και αποτελεί το παλαιότερο από τα σωζόμενα κλειστά θέατρα των νεοτέρων χρόνων και το εντυπωσιακότερο αρχιτεκτονικό στολίδι της πόλης της Πάτρας. '
              label='Θέατρο Απόλλων'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src={process.env.PUBLIC_URL + '/images/image-5.jpg'}
              text='Το Αρχαιολογικό Μουσείο Πάτρας επικεντρώνεται στην έκθεση διαφόρων αρχαιολογικών ευρημάτων, από τη Μυκηναϊκή μέχρι και την Ύστερη Ρωμαϊκή εποχή.'
              label='Αρχαιολογικό Μουσείο'
            />
            <CardItem
              src={process.env.PUBLIC_URL + '/images/image-7.jpg'}
              text='Η Αχάια Κλάους (Achaia Clauss) αποτελεί φημισμένη και ιστορική οινοποιία με έδρα την Πάτρα.'
              label='Αχάια Κλάους'
            />
            <CardItem
              src={process.env.PUBLIC_URL + '/images/image-6.jpg'}
              text='Θεωρείται ο μεγαλύτερος ορθόδοξος ναός στην Ελλάδα και από τους μεγαλύτερους στα Βαλκάνια.'
              label='Ναός Αγίου Ανδρέα'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
