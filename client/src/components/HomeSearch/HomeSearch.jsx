import React, { useEffect, useState } from 'react';
import API from '../../API';

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
    <div className='home__content'>
        <div className='home__search'>
          <div className='home__search__esquerdo'>
            <h4 className='home__search__title'>Horários</h4>
          </div>
          <div className='home__search__direito'>
            <button className='button-criar' onClick={() => openModal()}
              >+ Criar Horário</button>
          </div>
        </div>
        <div className='schedule__wrapper'>
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
  )
}

export default HomeSearch;