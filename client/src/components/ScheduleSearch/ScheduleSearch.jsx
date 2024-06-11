import React, { useEffect, useState } from 'react';
import API from '../../API';

import ItemSchedule from '../../components/ItemSchedule/ItemSchedule';

const ScheduleSearch = ({ openModal, openFilterModal, filters }) => {
  const [listSchedule, setListSchedule] = useState([]);

  async function getSchedules() {
    const res = await API.get('/listSchedule');
    setListSchedule(res.data.message);
  }

  useEffect(() => {
    getSchedules();
  }, [setListSchedule]);

  const filteredSchedules = listSchedule.filter((item) => {
    return (
      (!filters.name || item.nome.includes(filters.name)) &&
      (!filters.division.length || filters.division.includes(item.divisao_turma)) &&
      (!filters.module.length || filters.module.includes(item.modulo)) &&
      (!filters.status.length || filters.status.includes(item.estado))
    );
  });

  return (
    <div className='schedule-search'>
      <header className='schedule-search__header'>
        <div className='schedule-search__left'>
          <h4 className='schedule-search__title'>Horários</h4>
        </div>
        <div className='teacher-search__right'>
          <button className='button-criar' onClick={openFilterModal}>Filtrar</button>
          <button className='button-criar' onClick={openModal}>+ Criar Horário</button>
        </div>
      </header>
      <div className='schedule-search__content'>
        <div className='schedule-search__content__label'>
          <h1>Nome</h1>
          <h2>Divisão</h2>
          <h3>Modulo</h3>
          <h4>Status</h4>
        </div>
        {filteredSchedules.map((item) => {
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
        })}
      </div>
    </div>
  );
}

export default ScheduleSearch;
