import React from 'react';

const ScheduleCard = ({scheduleName, classDivision, classModule}) => {
  return (
    <div>
        <h1>{scheduleName}</h1>
        <h1>{classDivision}</h1>
        <h1>{classModule}</h1>
    </div>
  )
}

export default ScheduleCard;