// src/components/FilterTeacher/FilterTeacher.js
import React, { useState } from 'react';

const FilterTeacher = ({ applyFilter, closeModal, showModal, subjects, daysOfWeek }) => {
  const [filterName, setFilterName] = useState('');
  const [filterSubjects, setFilterSubjects] = useState([]);
  const [filterDays, setFilterDays] = useState([]);
  const [filterHours, setFilterHours] = useState('');

  const handleFilter = (event) => {
    event.preventDefault();
    applyFilter({
      name: filterName,
      subjects: filterSubjects,
      days: filterDays,
      hours: filterHours
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
    <div className='form-teacher' style={{ display: showModal }}>
      <h1 className='form-teacher__title'>Filtrar Professores</h1>
      <form className='form-teacher__form' onSubmit={handleFilter}>
        <div className="form-teacher__input-name">
          <label>Nome do Professor</label>
          <input type='text' value={filterName} onChange={(event) => setFilterName(event.target.value)} />
        </div>
        <div className='form-teacher__subjects'>
          <h4>Matérias</h4>
          <div>
            {subjects.map((subject, index) => (
              <div key={index}>
                <input type='checkbox' value={subject} onChange={(e) => handleCheckboxChange(e, setFilterSubjects)} /> {subject}
              </div>
            ))}
          </div>
        </div>
        <div className='form-teacher__days'>
          <h4>Dias da Semana</h4>
          <div>
            {daysOfWeek.map((day, index) => (
              <div key={index}>
                <input type='checkbox' value={day} onChange={(e) => handleCheckboxChange(e, setFilterDays)} /> {day}
              </div>
            ))}
          </div>
        </div>
        <div className='form-teacher__wrapper-button'>
          <button className='button-cancel' type='button' onClick={closeModal}>Cancelar</button>
          <button className='button-submit' type='submit'>Filtrar</button>
        </div>
      </form>
    </div>
  );
};

export default FilterTeacher;
