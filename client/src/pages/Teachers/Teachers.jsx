import React from 'react';

import Aside from '../../components/Aside/Aside';
import Header from '../../components/Header/Header';
import TeacherSearch from '../../components/TeacherSearch/TeacherSearch';

const Teachers = () => {
  return (
    <div className='teachers'>
        <Aside />
        <div className="container">
          <Header />
          <TeacherSearch/>
        </div>
    </div>
  )
}

export default Teachers;