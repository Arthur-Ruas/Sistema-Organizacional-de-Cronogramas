import React, { useEffect, useState } from 'react'
import image from '../../assets/profile.png'

const TeacherInfo = ({name, color, observation, days, subjects, showInfo, closeInfo, teacherData, scheduleQtd}) => {
  
  var horas = 0
  var min = 0
  horas = Math.floor((teacherData * 112) / 60);          
  min = (teacherData * 112) % 60;

  var primeiroModulo = [];
  var segundoModulo = [];
  var terceiroModulo = [];
  
  console.log(subjects)
  subjects.forEach(subject => {
    if(subject.Modulo == 1){
      primeiroModulo = [...primeiroModulo, [subject.Nome, subject.Modulo]]
    }
    if(subject.Modulo == 2){
      segundoModulo = [...segundoModulo, [subject.Nome, subject.Modulo]]
    }
    if(subject.Modulo == 3){
      terceiroModulo = [...terceiroModulo, [subject.Nome, subject.Modulo]]
    }
  });


  const [tab1State, setTab1State] = useState("flex")
  const [tab2State, setTab2State] = useState("none")
  const [tab3State, setTab3State] = useState("none")

  function tab1Open(){
    setTab1State("flex")
    setTab2State("none")
    setTab3State("none")
  }

  function tab2Open(){
    setTab1State("none")
    setTab2State("flex")
    setTab3State("none")
  }

  function tab3Open(){
    setTab1State("none")
    setTab2State("none")
    setTab3State("flex")
  }
  
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
              <div className='teacher-info__wrapper-selectors'>
                <input type='radio' name='aa' id='a11' onClick={tab1Open}/>
                <label for='a11'>Módulo 1</label>

                <input type='radio' name='aa' id='a22' onClick={tab2Open}/>
                <label for='a22'>Módulo 2</label>

                <input type='radio' name='aa' id='a33' onClick={tab3Open}/>
                <label for='a33'>Módulo 3</label>
              </div>
              <div>
                <div className='teacher-info__subject' style={{display: tab1State}}>
                  {
                    primeiroModulo.map((info) =>{
                      return(
                        <h4>{info[0]}</h4>
                      )
                    })
                  }
                </div>
                <div className='teacher-info__subject' style={{display: tab2State}}>
                  {
                    segundoModulo.map((info) =>{
                      return(
                        <h4>{info[0]}</h4>
                      )
                    })
                  }
                </div>
                <div className='teacher-info__subject' style={{display: tab3State}}>
                  {
                    terceiroModulo.map((info) =>{
                      return(
                        <h4>{info[0]}</h4>
                      )
                    })
                  }
                </div>
              </div>
            </div>   
          </div>
        </div>
        <div className='teacher-info__bottom'>
          <div className='teacher-info__observation'>
            <h4 className='select-text'>Observação:</h4>
            <h4>{observation}</h4>
          </div>
          <div className='teacher-info__bottom-right'>
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
            </div>
            <div className='teacher-info__analitycs'>
              <h4>Quantidade de aulas: {teacherData}</h4>
              <h4>Horas: {horas}:{min}</h4>
              <h4>Minutos totais: {teacherData * 112}</h4>
            </div>
          </div>
        </div>  
      </div>
      <div className='teacher-info__wrapper-button'>
        <button className='teacher-info__close-button' type='button' onClick={() => closeInfo()}>Fechar</button>
      </div>
    </div>
  )
}

export default TeacherInfo;