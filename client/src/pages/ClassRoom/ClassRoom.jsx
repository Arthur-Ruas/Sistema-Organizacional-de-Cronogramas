import React from 'react';

import Sidebar from '../../components/Sidebar/Sidebar';
import ClassRoomSearch from '../../components/ClassRoomSearch/ClassRoomSearch';

const ClassRoom = () => {
  return (
    <div className='classRoom'>
        <Sidebar/>
        <ClassRoomSearch/>
    </div>
  )
}

export default ClassRoom;