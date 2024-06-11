import React from 'react';

const ScheduleField = ({ block, teacherName, color, subjectName, classRoomsName }) => {
  return (
    <div className='schedule-field'>
        {/* <h6>{block}</h6> */}
        <div className='schedule-field__color' style={{backgroundColor: color}}></div>
        <div className='schedule-field__content'>
          <h1>{teacherName}</h1>
          <h4>{subjectName}</h4>
          <h4>{classRoomsName}</h4>
        </div>
    </div>
  )
}

export default ScheduleField;