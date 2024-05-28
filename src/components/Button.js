import React from 'react';
import './Button.css'; // Corrected import statement
import { Link } from 'react-router-dom';

const STYLES = ['btn--primary', 'btn--outline'];
const SIZES = ['btn--medium', 'btn--large'];

export const Button = ({
  children,
  type,
  onClick,
  buttonStyle,
  buttonSize
}) => {
  const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0]; // Corrected SYLES to STYLES
  const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0]; // Corrected ButtonSize to buttonSize

  return (
    <Link to='/sign-up' className='btn-mobile'>
      <button
        className={`btn ${checkButtonStyle} ${checkButtonSize}`} // Used backticks for string interpolation
        onClick={onClick}
        type={type}
      >
        {children}
      </button>
      
    </Link>
  );
};

export default Button;
