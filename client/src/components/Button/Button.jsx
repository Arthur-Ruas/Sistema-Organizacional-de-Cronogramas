import React from 'react';

const Button = ({btnText, btnType, btnOnClick}) => {
  return (
    <button className='button' type={btnType} onClick={btnOnClick}>
        {btnText}
    </button>
  )
}

export default Button;