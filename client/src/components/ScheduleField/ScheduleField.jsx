import React from 'react';

const ScheduleField = ({ block, teacherName, color, subjectName, classRoomsName }) => {
  return (
    <div>
        <h6>{block}</h6>
        <h1>{teacherName}</h1>
        <h4>{subjectName}</h4>
        <h4>{classRoomsName}</h4>
    </div>
  )
}

export default ScheduleField;