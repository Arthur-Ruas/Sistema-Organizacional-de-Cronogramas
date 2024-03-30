import React from 'react';

const ScheduleCard = ({scheduleName, classDivision, classModule}) => {
  return (
    <div className='card-schedule'>
        <h1 className='card-schedule__name'>{scheduleName}</h1>
        <h4 className='card-schedule__divison'>Divisão de turma: {classDivision}</h4>
        <h4 className='card-schedule__module'>{classModule}</h4>
    </div>
  )
}

export default ScheduleCard;