import React, { useEffect, useState } from 'react';
import API from '../../API';

import TeacherCard from '../TeacherCard/TeacherCard';


const TeacherSearch = ({openModal}) => {

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
    <div className='teacher__content'>
        <div className='teacher__search'>
            <div className='teacher__search__esquerdo'>
                <h4 className='teacher__search__title'>Professores</h4>
            </div>
            <div className='teacher__search__direito'>
                <button className='teacher__search__button-filtro'>Filtrar</button>
                <button className='button-criar' onClick={() => openModal()}
                >+ Criar Professor</button>
            </div>
        </div>
        <div className='teacher__wrapper'>
            {
                teachers.map((teacher) => {
                  return (
                    <div>
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
  )
}

export default TeacherSearch;