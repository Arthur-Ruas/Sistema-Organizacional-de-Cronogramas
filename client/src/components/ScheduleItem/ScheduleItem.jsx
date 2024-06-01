import React from 'react';

const ScheduleItem = ({ teacherName, color, subjectName, classRoomsName }) => {
  return (
    <div>
        <h1>{teacherName}</h1>
        <h4>{subjectName}</h4>
        <h4>{classRoomsName}</h4>
    </div>
  )
}

export default ScheduleItem;