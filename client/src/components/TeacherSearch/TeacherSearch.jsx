import React, { useEffect, useState } from 'react';
import API from '../../API';

import TeacherCard from '../TeacherCard/TeacherCard';

const TeacherSearch = ({openForm, getID, openInfo}) => {

    const [teachers, setTeachers] = useState([])

    async function getTeachers(){
        const res = await API.get("/teacher");
        setTeachers(res.data.message)
        console.log(res.data)
    }

    useEffect(() => {
      getTeachers()
    }, [setTeachers])

  return (
    <div className='teacher-search'>
        <header className='teacher-search__header'>
            <div className='teacher-search__left'>
                <h4 className='teacher-search__title'>Professores</h4>
            </div>
            <div className='teacher-search__right'>
                <button className='button-criar' onClick={() => openForm()}
                >+ Criar Professor</button>
            </div>
        </header>
        <div className='teacher-search__content'>
          <div className='teacher-search__tag'>
            <p>Nome</p>
          </div>
          <div className='teacher-search__wrapper-teacher-search'>
              {
                teachers && (
                  teachers.map((teacher) => {
                    return (
                      <div onClick={() => {getID(teacher.Id); openInfo()}}>
                        <TeacherCard
                          teacherId={teacher.Id}
                          teacherName={teacher.Nome}
                          teacherCardColor={teacher.corCard} />
                      </div>
                    )
                  })
                )
              }
              {
                teachers == undefined &&(
                  <div>
                    <h1>Ops! Parece que nenhum professor foi criado</h1>
                  </div>
                )
              }
          </div>       
        </div>
    </div>         
  )
}

export default TeacherSearch;