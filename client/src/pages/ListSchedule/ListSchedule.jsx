import React from 'react';

import Sidebar from '../../components/Sidebar/Sidebar';
import ScheduleSearch from '../../components/ScheduleSearch/ScheduleSearch';

const ListSchedule = () => {
  
  return (
    <>
        <div className='listSchedule'>
          <Sidebar/>
          <ScheduleSearch/>
        </div>
    </>
  )
}

export default ListSchedule;