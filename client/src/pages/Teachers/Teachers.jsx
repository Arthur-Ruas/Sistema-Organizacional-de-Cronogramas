import React, { useState } from 'react';

import Aside from '../../components/Aside/Aside';
import TeacherSearch from '../../components/TeacherSearch/TeacherSearch';
import CreateTeacher from '../../components/CreateTeacher/CreateTeacher';
import TeacherInfo from '../../components/TeacherInfo/TeacherInfo';

const Teachers = ({}) => {

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
      <div className='teachers' style={{filter: modalState}}>
          <Aside />
          <TeacherSearch openModal = {handleState}/>
      </div>
      <CreateTeacher showModal={modalOpen} closeModal = {handleState}/>
      <TeacherInfo />
    </>
  )
}

export default Teachers;