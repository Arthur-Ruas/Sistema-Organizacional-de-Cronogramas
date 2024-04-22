import React, { useState } from 'react'
import API from '../../API';
import TeacherSchedule from '../../components/TeacherSchedule/TeacherSchedule';

const Schedule = () => {

   

  return (
    <div className='schedule'>
        <TeacherSchedule day='1'/>
        <TeacherSchedule day='2'/>
        <TeacherSchedule day='3'/>
        <TeacherSchedule day='4'/>
        <TeacherSchedule day='5'/>
        <TeacherSchedule day='6'/>
        <TeacherSchedule day='7'/>
        <TeacherSchedule day='8'/>
        <TeacherSchedule day='9'/>
        <TeacherSchedule day='10'/>
    </div>
  )
}

export default Schedule