import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const ItemSchedule = ({ id, nome, divisao, modulo, estado }) => {

    const navigate = useNavigate()

    function openProgressSchedule(ID){
        navigate('/viewSchedule', {state: ID})
    }

  return (
    <div className='item-schedule'>
        <div className='item-schedule__info'>
            <h1>{nome}</h1>
            <h4>{divisao}</h4>
            <h4>{modulo}</h4>
            <h4>{estado}</h4>
        </div> 
        <button className='item-schedule__button-see-more' onClick={() =>{openProgressSchedule(id)}}>Ver horário</button>
    </div>
  )
}

export default ItemSchedule;