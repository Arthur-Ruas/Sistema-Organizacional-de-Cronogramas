import React from 'react';

const Button = ({btnText, btnOnClick}) => {
  return (
    <button className='button' onClick={btnOnClick}>
        {btnText}
    </button>
  )
}

export default Button;