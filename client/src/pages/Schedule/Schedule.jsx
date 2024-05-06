import React, { useState } from 'react'
import API from '../../API';
import TeacherSchedule from '../../components/TeacherSchedule/TeacherSchedule';

const Schedule = () => {

  const [submit, setSubmit] = useState(false)
  function handleSubmit(){
    setSubmit(true)
  }
  
  return (
    <div className='schedule'>
      <div className='schedule__top'>
        <TeacherSchedule day='1' submit={submit}/>
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
      <button onClick={handleSubmit}>Salvar</button>     
    </div>
  )
}

export default Schedule