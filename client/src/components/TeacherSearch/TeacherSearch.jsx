import React, { useEffect, useState } from 'react';
import API from '../../API';
import TeacherCard from '../TeacherCard/TeacherCard';
import FilterTeacher from '../FilterTeacher/FilterTeacher';

const TeacherSearch = ({ openForm, getID, openInfo }) => {
  const [teachers, setTeachers] = useState([]);
  const [filteredTeachers, setFilteredTeachers] = useState([]);
  const [filterModalOpen, setFilterModalOpen] = useState(false);
  const [filters, setFilters] = useState({
    name: '',
    days: [],
    subjects: []
  });

  async function getTeachers() {
    const res = await API.get('/teacher');
    setTeachers(res.data.message);
    setFilteredTeachers(res.data.message);
  }

  useEffect(() => {
    getTeachers();
  }, [setTeachers]);

  const handleFilterModal = () => {
    setFilterModalOpen(true);
  };

  const closeFilterModal = () => {
    setFilterModalOpen(false);
  };

  const applyFilter = (newFilters) => {
    setFilters(newFilters);
    const { name, days, subjects } = newFilters;

    const filtered = teachers.filter((teacher) => {
      const matchesName = !name || teacher.Nome.toLowerCase().includes(name.toLowerCase());
      const matchesDays = !days.length || days.some(day => teacher.Dias.includes(day));
      const matchesSubjects = !subjects.length || subjects.some(subject => teacher.Materias.includes(subject));
      return matchesName && matchesDays && matchesSubjects;
    });

    setFilteredTeachers(filtered);
  };

  return (
    <div className='teacher-search'>
      <header className='teacher-search__header'>
        <div className='teacher-search__left'>
          <h4 className='teacher-search__title'>Professores</h4>
        </div>
        <div className='teacher-search__right'>
          <button className='teacher-search__button-filter' onClick={handleFilterModal}>Filtrar</button>
          <button className='button-criar' onClick={() => openForm()}>+ Criar Professor</button>
        </div>
      </header>
      <div className='teacher-search__content'>
        <div className='teacher-search__tag'>
          <p>Nome</p>
          <p>Dias</p>
          <p>Matérias</p>
        </div>
        <div className='teacher-search__wrapper-teacher-search'>
          {filteredTeachers && filteredTeachers.map((teacher) => (
            <div key={teacher.Id} onClick={() => { getID(teacher.Id); openInfo(); }}>
              <TeacherCard
                teacherId={teacher.Id}
                teacherName={teacher.Nome}
                teacherCardColor={teacher.corCard}
              />
            </div>
          ))}
          {filteredTeachers.length === 0 && (
            <div>
              <h1>Ops! Parece que nenhum professor foi encontrado</h1>
            </div>
          )}
        </div>
      </div>
      <FilterTeacher 
        applyFilter={applyFilter} 
        closeModal={closeFilterModal} 
        showModal={filterModalOpen ? 'block' : 'none'} 
        subjects={['Programação e Algoritimos']}
        daysOfWeek={['teste2']}
      />
    </div>
  );
};

export default TeacherSearch;
