import React, { useEffect, useState } from 'react';

const FilterSchedule = ({ applyFilter, closeModal, showModal }) => {
  const [filterName, setFilterName] = useState('');
  const [filterDivision, setFilterDivision] = useState([]);
  const [filterModule, setFilterModule] = useState([]);
  const [filterStatus, setFilterStatus] = useState([]);

  useEffect(() => {
    console.log(filterName, filterDivision, filterModule, filterStatus);
  }, [filterName, filterDivision, filterModule, filterStatus]);

  const handleFilter = (event) => {
    event.preventDefault();
    applyFilter({
      name: filterName,
      division: filterDivision,
      module: filterModule,
      status: filterStatus
    });
    closeModal();
  };

  const handleCheckboxChange = (event, setState) => {
    const value = event.target.value;
    setState(prev => 
      prev.includes(value) ? prev.filter(item => item !== value) : [...prev, value]
    );
  };

  return (
    <div className='form-schedule' style={{ display: showModal }}>
      <h1 className='form-schedule__title'>Filtrar Horários</h1>
      <form className='form-schedule__form' onSubmit={handleFilter}>
        <div className="form-schedule__input-name">
          <label>Nome do Horário</label>
          <input type='text' value={filterName} onChange={(event) => setFilterName(event.target.value)} />
        </div>
        <div className='form-schedule__division'>
          <h4>Divisão de Turma</h4>
          <div>
            <input type='checkbox' value='Sim' onChange={(e) => handleCheckboxChange(e, setFilterDivision)} /> Sim
            <input type='checkbox' value='Não' onChange={(e) => handleCheckboxChange(e, setFilterDivision)} /> Não
          </div>
        </div>
        <div className='form-schedule__module'>
          <h4>Módulo</h4>
          <div>
            <input type='checkbox' value='Módulo 1' onChange={(e) => handleCheckboxChange(e, setFilterModule)} /> 1º Módulo
            <input type='checkbox' value='Módulo 2' onChange={(e) => handleCheckboxChange(e, setFilterModule)} /> 2º Módulo
            <input type='checkbox' value='Módulo 3' onChange={(e) => handleCheckboxChange(e, setFilterModule)} /> 3º Módulo
          </div>
        </div>
        <div>
          <h4>Status</h4>
          <div>
            <input type='checkbox' value='Finalizado' onChange={(e) => handleCheckboxChange(e, setFilterStatus)} /> Finalizado
            <input type='checkbox' value='Andamento' onChange={(e) => handleCheckboxChange(e, setFilterStatus)} /> Andamento
          </div>
        </div>
        <div className='form-schedule__wrapper-button'>
          <button className='button-cancel' type='button' onClick={closeModal}>Cancelar</button>
          <button className='button-submit' type='submit'>Filtrar</button>
        </div>
      </form>
    </div>
  );
};

export default FilterSchedule;
