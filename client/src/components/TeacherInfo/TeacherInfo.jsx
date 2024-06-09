import React from 'react';
import image from '../../assets/profile.png'

const TeacherInfo = ({name, color, observation, days, subjects, showInfo, closeInfo, teacherData, scheduleQtd}) => {
  
  const horas = Math.floor((teacherData * 112) / 60);          
  const min = (teacherData * 112) % 60;

  return (
    <div className='teacher-info' style={{display: showInfo}}>
      <div className='teacher-info__content'>
      <div className='teacher-info__color' style={{backgroundColor: color}}></div>
        <div className='teacher-info__top'>
          <div className='teacher-info__teacher'>
            <img src={image} className='teacher-info__image'/>
            <h4 className='teacher-info__name'>{name}</h4>
          </div>
          <div className='teacher-info__subjects'>
            <h4 className='select-text'>Matérias:</h4>
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
        <div className='teacher-info__bottom'>
          <div className='teacher-info__observation'>
            <h4 className='select-text'>Observação:</h4>
            <h4>{observation}</h4>
          </div>
          <div>
            <h4>Quantidade de aulas: {teacherData}</h4>
            <h4>Minutos totais{teacherData * 112}</h4>
            <h4>Horas:{horas}:{min}</h4>
            <h4>Quantos horários participa: {scheduleQtd}</h4>
          </div>
          <div className='teacher-info__wrapper-day'>
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
            {

            }
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