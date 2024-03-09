import React from 'react';
import '../../css/styles.css';

const Button = ({btnText, btnType, btnOnClick}) => {
  return (
    <button className='button' type={btnType} onClick={btnOnClick}>
        {btnText}
    </button>
  )
}

export default Button;