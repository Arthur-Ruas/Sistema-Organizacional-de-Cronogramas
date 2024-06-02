import React, { useState } from 'react';

import Sidebar from '../../components/Sidebar/Sidebar';
import ScheduleSearch from '../../components/ScheduleSearch/ScheduleSearch';
import CreateSchedule from '../../components/CreateSchedule/CreateSchedule';

const ListSchedule = () => {

  const [modalState,setModalState] = useState("brightness(100%)");
  const [modalOpen, setModalOpen] = useState("none")

  function handleState() {
      setModalState("brightness(50%)");
      setModalOpen("block")

      if(modalState == "brightness(50%)"){
        setModalState("brightness(100%)")
        setModalOpen("none")
      }
  }

  return (
    <>
        <div className='listSchedule' style={{filter: modalState}}>
          <Sidebar/>
          <ScheduleSearch openModal = {handleState}/>
        </div>
        <CreateSchedule showModal={modalOpen} closeModal={handleState}/>
    </>
  )
}

export default ListSchedule;