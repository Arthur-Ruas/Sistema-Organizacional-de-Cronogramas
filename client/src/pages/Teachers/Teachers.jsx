import React, { useState } from 'react';
import API from '../../API';

import Aside from '../../components/Aside/Aside';
import TeacherSearch from '../../components/TeacherSearch/TeacherSearch';
import CreateTeacher from '../../components/CreateTeacher/CreateTeacher';
import TeacherInfo from '../../components/TeacherInfo/TeacherInfo';
import { CgVoicemailR } from 'react-icons/cg';

const Teachers = () => {

  const [modalState,setModalState] = useState("brightness(100%)");
  const [modalOpen, setModalOpen] = useState("none")

  function handleState() {
      setModalState("brightness(50%)");
      setModalOpen("block")

      if(modalState == "brightness(50%)"){
        setModalState("brightness(100%)")
        setModalOpen("none")
      }
  }

  var [teacherName, setTeacherName] = useState('');
  var [colorCard, setColorCard] = useState('');
  var [teacherObservation, setTeacherObservation] = useState('');
  var [teacherSubjectsArray, setTeacherSubjects] = useState([]);

  async function getTeacherInfo(id){

    const resTeacherInfo = await API.get("/teacherInfo/" + id);
    const resTeacherSubjects = await API.get("/teacherInfo/subjects/" + id);

    var teacherDataInfo = (resTeacherInfo.data.message);
    var teacherSubjectsData = (resTeacherSubjects.data.message);

    teacherDataInfo.map((teacherData) =>{  
      setTeacherName(teacherData.NomeProf);
      setColorCard(teacherData.CorCard);
      setTeacherObservation(teacherData.Observacao);     
    });

    setTeacherSubjects(teacherSubjectsData)
  }

  return (
    <>
      <div className='teachers' style={{filter: modalState}}>
          <Aside />
          <TeacherSearch openModal = {handleState} getID={getTeacherInfo}/>
      </div>
      <CreateTeacher showModal={modalOpen} closeModal = {handleState}/>
      <TeacherInfo 
      name={teacherName} 
      color={colorCard} 
      observation={teacherObservation} 
      subjects={teacherSubjectsArray}/>
    </>
  )
}

export default Teachers;