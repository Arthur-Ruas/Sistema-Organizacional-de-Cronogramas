import React, { useState } from 'react';
import API from '../../API';

import Sidebar from '../../components/Sidebar/Sidebar';
import TeacherSearch from '../../components/TeacherSearch/TeacherSearch';
import CreateTeacher from '../../components/CreateTeacher/CreateTeacher';
import TeacherInfo from '../../components/TeacherInfo/TeacherInfo';
import { CgVoicemailR } from 'react-icons/cg';

const Teachers = () => {

  const [modalState,setModalState] = useState("brightness(100%)");
  const [modalOpen, setModalOpen] = useState("none")

  function handleStateForm() {
      setModalState("brightness(50%)");
      setModalOpen("block")

      if(modalState == "brightness(50%)"){
        setModalState("brightness(100%)")
        setModalOpen("none")
      }
  }

  const [infoOpen, setInfoOpen] = useState("none")

  function handleStateInfo(){
    setModalState("brightness(50%)");
    setInfoOpen("block")

    if(modalState == "brightness(50%)"){
      setModalState("brightness(100%)")
      setInfoOpen("none")

      setTeacherName("")
      setColorCard("")
      setTeacherObservation("")
      setTeacherSubjects([])
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
          <Sidebar/>
          <TeacherSearch openForm={handleStateForm} getID={getTeacherInfo} openInfo={handleStateInfo}/>
      </div>
      <CreateTeacher showModal={modalOpen} closeModal={handleStateForm}/>
      <TeacherInfo 
      showInfo={infoOpen} closeInfo={handleStateInfo}
      name={teacherName} 
      color={colorCard} 
      observation={teacherObservation} 
      subjects={teacherSubjectsArray}/>
    </>
  )
}

export default Teachers;