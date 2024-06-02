import React, { useEffect, useState } from 'react';
import API from '../../API';

import Sidebar from '../../components/Sidebar/Sidebar';
import ItemSchedule from '../../components/ItemSchedule/ItemSchedule';

const ListSchedule = () => {

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
    <>
        <div className='listSchedule'>
          <Sidebar/>
          <div className='listSchedule__content'>
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
    </>
  )
}

export default ListSchedule;