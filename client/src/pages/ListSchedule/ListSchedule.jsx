import React, { useState } from 'react';

import Sidebar from '../../components/Sidebar/Sidebar';
import ScheduleSearch from '../../components/ScheduleSearch/ScheduleSearch';
import CreateSchedule from '../../components/CreateSchedule/CreateSchedule';
import FilterSchedule from '../../components/FilterSchedule/FilterSchedule';

const ListSchedule = () => {
  const [modalState, setModalState] = useState("brightness(100%)");
  const [modalOpen, setModalOpen] = useState("none");
  const [filterModalOpen, setFilterModalOpen] = useState("none");
  const [filters, setFilters] = useState({
    name: '',
    division: [],
    module: [],
    status: []
  });

  function handleState() {
    setModalState("brightness(50%)");
    setModalOpen("block");

    if (modalState === "brightness(50%)") {
      setModalState("brightness(100%)");
      setModalOpen("none");
    }
  }

  function handleFilterModal() {
    setFilterModalOpen("block");
  }

  function closeFilterModal() {
    setFilterModalOpen("none");
  }

  function applyFilter(newFilters) {
    setFilters(newFilters);
  }

  return (
    <>
      <div className='listSchedule' style={{ filter: modalState }}>
        <Sidebar />
        <ScheduleSearch openModal={handleState} openFilterModal={handleFilterModal} filters={filters} />
      </div>
      <CreateSchedule showModal={modalOpen} closeModal={handleState} />
      <FilterSchedule showModal={filterModalOpen} closeModal={closeFilterModal} applyFilter={applyFilter} />
    </>
  );
}

export default ListSchedule;
