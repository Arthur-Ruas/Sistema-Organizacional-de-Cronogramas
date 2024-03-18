import React, { useState } from 'react';

import Aside from '../../components/Aside/Aside';
import Header from '../../components/Header/Header';
import HomeSearch from '../../components/HomeSearch/HomeSearch';
import CreateSchedule from '../../components/CreateSchedule/CreateSchedule';

const Home = () => {

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
      <div className='home' style={{filter: modalState}}>
          <Aside />
          <div className="container">
              <Header />
              <HomeSearch openModal = {handleState}/>
          </div>
      </div>
      <CreateSchedule showModal={modalOpen} closeModal = {handleState}/>
    </>
  )
}

export default Home;