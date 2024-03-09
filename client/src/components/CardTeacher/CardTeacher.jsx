import React from 'react';
import image from '../../assets/profile.png';

const CardTeacher = () => {
  return (
    <div>
        <div className='card-prof' style={{backgroundColor: `${props.corCard}`}}>
            <div className='card-prof__esquerdo'>
                <img className="card-prof__esquerdo__foto" src={image} alt={`Foto do(a) professor(a) ${props.nome}`}/>
                <h4 className='card-prof__esquerdo__nome'>{props.nome}</h4>
            </div>    
        </div>
    </div>
  )
}

export default CardTeacher;