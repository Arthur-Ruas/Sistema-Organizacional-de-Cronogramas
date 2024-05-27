import React from 'react';
import image from '../../assets/profile.png'

const TeacherInfo = ({name, color, observation, days, subjects, showInfo, closeInfo}) => {
  return (
    <div className='teacher-info' style={{display: showInfo, border: `10px solid ${color}`}}>
      <div className='teacher-info__content'>
        <div className='teacher-info__top'>
          <div className='teacher-info__teacher'>
            <img src={image} className='teacher-info__image'/>
            <h1 className='teacher-info__name'>{name}</h1>
          </div>
          <div className='teacher-info__day'>
            {
              days.map((day) =>{
                return(
                  <div>
                    <p>{day.Dia}</p>
                    <p>{day.Bloco}</p>
                  </div>     
                )
              })
            }
          </div>
        </div>
        <div className='teacher-info__bottom'>
          <div className='teacher-info__observation'>
            <h1>Observação:</h1>
            <h4>{observation}</h4>
          </div>
          <div className='teacher-info__subjects'>
            <h1>Matérias:</h1>
            <div className='teacher-info__wrapper-subjects'>
              {
                subjects.map((subject) =>{
                  return(
                    <p>{subject.Nome}</p>
                  )
                })
              }
            </div>   
          </div>
        </div>  
      </div>
      <div className='teacher-info__wrapper-button'>
        <button className='teacher-info__close-button' type='button' onClick={() => closeInfo()}>Fechar</button>
        <button className='teacher-info__edit-button'>Editar</button>
      </div>
    </div>
  )
}

export default TeacherInfo;