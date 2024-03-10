import React from 'react';
import TeacherCard from '../TeacherCard/TeacherCard';
import CreateTeacher from '../CreateTeacher/CreateTeacher';

const TeacherSearch = () => {
  return (
    <div className='teacher__content'>
        <div className='teacher__search'>
            <div className='teacher__search__esquerdo'>
                <h4 className='teacher__search__title'>Professores</h4>
            </div>
            <div className='teacher__search__direito'>
                <button className='teacher__search__button-filtro'>Filtrar</button>
                <button className='teacher__search__button-criar'
                >+ Criar Professor</button>
            </div>
        </div>
        <div className='teacher__wrapper'>
            <TeacherCard teacherCardColor="#00beef" teacherName={"ai"}/>
        </div>
        <CreateTeacher/>
    </div>
          
  )
}

export default TeacherSearch;