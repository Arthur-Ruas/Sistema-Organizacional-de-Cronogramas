import React, { useEffect, useState } from 'react';
import API from '../../API';

import Image from '../../assets/scheduleImage.png';

import ScheduleCard from '../ScheduleCard/ScheduleCard';

const HomeSearch = ({openModal}) => {

  const [schedules, setSchedules] = useState([])

    async function getSchedules(){
        const res = await API.get("/schedule");
        setSchedules(res.data.message)
        console.log(res.data)
    }

    useEffect(() => {
      getSchedules()
    }, [setSchedules])

  return (
    <div className='home-search'>
      <header className='home-search__header'>
        <div className='home-search__left'>
            <h4 className='home-search__title'>Olá, seja bem-vindo!</h4>
        </div>
        <div className='home-search__right'>
            <button className='button-criar' onClick={() => openModal()}
            >+ Criar Horário</button>
        </div>
      </header>
      <div className='home-search__content'>
        <div className='home-search__wrapper'>
          <div className='home-search__progress'>
            <div className='home-search__progress__info'>
              <h1>Horário em andamento</h1>
            </div>
            <img className='home-search__image' src={Image}/>
          </div>
          <div className='home-search__data'>
            <h1></h1>
          </div>
        </div>  
        <div className='home-search__wrapper-home-search'>
          {
            schedules.map((schedule) => {
              return(
                <ScheduleCard 
                  scheduleName={schedule.nome}
                  classDivision={schedule.divisao_turma}
                  classModule={schedule.modulo}/>
              )
            })
          }
        </div>
      </div>
    </div>
  )
}

export default HomeSearch;