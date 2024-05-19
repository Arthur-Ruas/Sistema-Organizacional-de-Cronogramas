import React, { useEffect, useState } from 'react'
import API from '../../API';
import TeacherSchedule from '../../components/TeacherSchedule/TeacherSchedule';
import { useLocation } from 'react-router-dom';

const Schedule = () => {

  const [submit, setSubmit] = useState(false);

  function handleSubmit(){
    setSubmit(true)
  }
  
  const location = useLocation();
  const classDivison = location.state[0]
  const classModule = location.state[1]

  const [schedules, setSchedules] = useState([])

    async function getSchedules(){
        const res = await API.get("/schedule");
        setSchedules(res.data.message)
        console.log(res.data)
    }

    useEffect(() => {
      getSchedules()
    }, [setSchedules])

    var data = []
    function handlerChangeCategory(event){
      
    }

  return (
    <div className='schedule'>
      <header className='schedule__header'>
        <div className='schedule__info'>
          <h1>Nome do horário</h1>
          <h4>Módulo</h4>
          <h4>E se tem divisão</h4>
        </div> 
        <button onClick={handleSubmit}>Salvar</button>   
      </header>
      <div className='schedule__top'>
        <TeacherSchedule day='1' submit={submit} handlerOnChange={handlerChangeCategory}/>
        <TeacherSchedule day='2' submit={submit}/>
        <TeacherSchedule day='3' submit={submit}/>
        <TeacherSchedule day='4' submit={submit}/>
        <TeacherSchedule day='5' submit={submit}/>
      </div>
      <div className='schedule__bottom'>
        <TeacherSchedule day='6' submit={submit}/>
        <TeacherSchedule day='7' submit={submit}/>
        <TeacherSchedule day='8' submit={submit}/>
        <TeacherSchedule day='9' submit={submit}/>
        <TeacherSchedule day='10' submit={submit}/>
      </div>
    </div>
  )
}

export default Schedule