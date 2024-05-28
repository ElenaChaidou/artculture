import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Explore the Top City Sights</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='/images/image-8.jpg'
              text='Το Ρωμαϊκό Ωδείο της Πάτρας είναι μεγαλοπρεπές κτίσμα ρωμαϊκών χρόνων που σήμερα έχει ανακατασκευαστεί και χρησιμοποιείται για μουσικές εκδηλώσεις. '
              label='Αρχαίο Ωδείο'
              path='/services'
            />
            <CardItem
              src='/images/image-3.jpg'
              text='Είναι μικρογραφία της Σκάλας του Μιλάνου και αποτελεί το παλαιότερο από τα σωζόμενα κλειστά θέατρα των νεοτέρων χρόνων και το εντυπωσιακότερο αρχιτεκτονικό στολίδι της πόλης της Πάτρας. '
              label='Θέατρο Απόλλων'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='/images/image-5.jpg'
              text='Το Αρχαιολογικό Μουσείο Πάτρας επικεντρώνεται στην έκθεση διαφόρων αρχαιολογικών ευρημάτων, από τη Μυκηναϊκή μέχρι και την Ύστερη Ρωμαϊκή εποχή.'
              label='Αρχαιολογικό Μουσείο'
              path='/services'
            />
            <CardItem
              src='/images/image-7.jpg'
              text='Η Αχάια Κλάους (Achaia Clauss) αποτελεί φημισμένη και ιστορική οινοποιία με έδρα την Πάτρα.'
              label='Αχάια Κλάους'
              path='/products'
            />
            <CardItem
              src='/images/image-6.jpg'
              text='Θεωρείται ο μεγαλύτερος ορθόδοξος ναός στην Ελλάδα[2] και από τους μεγαλύτερους στα Βαλκάνια.'
              label='Ναός Αγίου Ανδρέα'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
