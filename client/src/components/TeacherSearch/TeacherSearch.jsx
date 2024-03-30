import React, { useEffect, useState } from 'react';
import API from '../../API';

import TeacherCard from '../TeacherCard/TeacherCard';

const TeacherSearch = ({openModal, getID}) => {

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
                <button className='teacher-search__button-filter'>Filtrar</button>
                <button className='button-criar' onClick={() => openModal()}
                >+ Criar Professor</button>
            </div>
        </header>
        <div className='teacher-search__content'>
          <div className='teacher-search__tag'>
            <p>Nome</p>
            <p>Dias</p>
            <p>Matérias</p>
          </div>
          <div className='teacher-search__wrapper-teacher-search'>
              {
                  teachers.map((teacher) => {
                    return (
                      <div onClick={() => getID(teacher.Id)}>
                        <TeacherCard
                          teacherId={teacher.Id}
                          teacherName={teacher.Nome}
                          teacherCardColor={teacher.corCard} />
                      </div>
                    )
                  })
                }
          </div>       
        </div>
    </div>         
  )
}

export default TeacherSearch;