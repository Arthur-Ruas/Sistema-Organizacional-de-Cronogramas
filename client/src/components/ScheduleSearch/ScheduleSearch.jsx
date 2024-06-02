import React, { useEffect, useState } from 'react';
import API from '../../API';

import ItemSchedule from '../../components/ItemSchedule/ItemSchedule';

const ScheduleSearch = () => {
    const [listSchedule, setListSchedule] = useState([])

  async function getSchedules(){
    const res = await API.get('/listSchedule');
    setListSchedule(res.data.message)
  }

  useEffect(() =>{
    getSchedules()
  }, [setListSchedule])

  console.log(listSchedule)

  return (
    <div className='schedule-search'>
        <div className='schedule-search__content'>
            {
                listSchedule.map((item) =>{
                    return(
                        <ItemSchedule 
                        id={item.id}
                        nome={item.nome}
                        divisao={item.divisao_turma}
                        modulo={item.modulo}
                        estado={item.estado}/>
                    )
                })
            }
        </div>      
    </div>
  )
}

export default ScheduleSearch;