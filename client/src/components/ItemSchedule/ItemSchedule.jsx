import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const ItemSchedule = ({ id, nome, divisao, modulo, estado }) => {
    
    const navigate = useNavigate()
    
    function openProgressSchedule(ID){
      navigate('/viewSchedule', {state: ID})
    }

    function editSchedule(ID){
      navigate('/editSchedule', {state: ID})
    }

  return (
    <div className='item-schedule'>
        <div className='item-schedule__info'>
            <h1>{nome}</h1>
            <h4>Divisão: {divisao}</h4>
            <h4>Módulo: {modulo}º</h4>
            <h4 className={`item-schedule__info__${estado}`}>{estado}</h4>
        </div> 
        {
          estado == "Finalizado" &&(
            <button className='item-schedule__button-see-more' onClick={() =>{openProgressSchedule(id)}}>Ver horário</button>
          )
        }
        {
          estado == "Andamento" && (
            <button className='item-schedule__button-see-more' onClick={() =>{editSchedule(id)}}>Editar horário</button>
          )
        }
    </div>
  )
}

export default ItemSchedule;