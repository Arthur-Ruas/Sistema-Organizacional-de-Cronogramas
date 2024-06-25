import React, { useEffect, useState } from 'react';
import API from '../../API';

import ItemSchedule from '../../components/ItemSchedule/ItemSchedule';

const ScheduleSearch = ({ openModal, openFilterModal, filters }) => {
  const [listSchedule, setListSchedule] = useState([]);

  var filteredSchedules

  async function getSchedules() {
    const res = await API.get('/listSchedule');
    setListSchedule(res.data.message);
  }

  useEffect(() => {
    getSchedules();
  }, [setListSchedule]);

  if (listSchedule == undefined)(
    console.log()
  )
  
  else{
    filteredSchedules = listSchedule.filter((item) => {
      return (
        (!filters.name || item.nome.includes(filters.name)) &&
        (!filters.division.length || filters.division.includes(item.divisao_turma)) &&
        (!filters.module.length || filters.module.includes(item.modulo)) &&
        (!filters.status.length || filters.status.includes(item.estado))
      );
    });
  }

  return (
    <div className='schedule-search'>
      <header className='schedule-search__header'>
        <div className='schedule-search__left'>
          <h4 className='schedule-search__title'>Horários</h4>
        </div>
        <div className='schedule-search__right'>
          <button className='schedule-search__button-filter' onClick={openFilterModal}>Filtrar</button>
          <button className='button-criar' onClick={openModal}>+ Criar Horário</button>
        </div>
      </header>
      <div className='schedule-search__content'>
        <div className='schedule-search__tag'>
          <p>Nome</p>
          <p>Divisão</p>
          <p>Modulo</p>
          <p>Status</p>
        </div>
        {
          filteredSchedules &&(
            filteredSchedules.map((item) => {
              return (
                <ItemSchedule
                  key={item.id}
                  id={item.id}
                  nome={item.nome}
                  divisao={item.divisao_turma}
                  modulo={item.modulo}
                  estado={item.estado}
                />
              );
            })
          )
        }
        {
          filteredSchedules == undefined &&(
            <div>
              <h1>Ops! Parece que nenhum horário foi criado</h1>
            </div>
          )
        }
      </div>
    </div>
  );
}

export default ScheduleSearch;
