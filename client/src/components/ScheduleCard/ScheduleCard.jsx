import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const ScheduleCard = ({scheduleName, classDivision, classModule, scheduleID}) => {

  const navigate = useNavigate()

  function openProgressSchedule(ID){
    navigate('/viewSchedule', {state: scheduleID})
  }

  return (
    <div className='card-schedule'>
        <h1 className='card-schedule__name'>{scheduleName}</h1>
        <h4 className='card-schedule__divison'>Divisão de turma: {classDivision}</h4>
        <h4 className='card-schedule__module'>{classModule}</h4>
        <button className='card-schedule__button-see-more' onClick={() =>{openProgressSchedule(scheduleID)}}>Ver horário</button>
    </div>
  )
}

export default ScheduleCard;