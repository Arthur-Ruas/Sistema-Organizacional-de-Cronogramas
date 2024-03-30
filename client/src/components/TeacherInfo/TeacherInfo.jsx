import React from 'react';

const TeacherInfo = ({name, color, observation, subjects}) => {
  return (
    <div className='teacher-info'>
      <h1>{name}</h1>
      <h1>{color}</h1>
      <h1>{observation}</h1>
      {
        subjects.map((subject) =>{
          return(
            <p>{subject.Nome}</p>
          )
        })
      }
    </div>
  )
}

export default TeacherInfo;