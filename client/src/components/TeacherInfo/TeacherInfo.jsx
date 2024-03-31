import React from 'react';

const TeacherInfo = ({name, color, observation, subjects, showInfo, closeInfo}) => {
  return (
    <div className='teacher-info' style={{display: showInfo}}>
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
      <button  type='button' onClick={() => closeInfo()}>Cancelar</button>
    </div>
  )
}

export default TeacherInfo;