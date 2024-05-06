import React, { useState } from 'react'
import API from '../../API';

const TeacherSchedule = ({ day, submit }) => {

    const [teste1, setTeste1] = useState("block");

    const [teacherName, setTeacherName] = useState('');
    const [teacherID, setTeacherID] = useState('');

    const [teacherArray, setTeacherArray] = useState([]);
    const [subjectArray, setSubjectArray] = useState([]);
    const [classRoomArray, setClassRoomArray] = useState([]);

    async function getDayID(id){

        const resTeacher = await API.get("/createSchedule/" + id);

        setTeacherArray(resTeacher.data.message)
        console.log(resTeacher)
    }
 
    async function getScheduleID(id){
        const resSchedule = await API.get("createSchedule/schedule/" + id)

        setSubjectArray(resSchedule.data.message)
        console.log(subjectArray)
    }

    async function getClassRoom(){
        const resClassRoom = await API.get("createSchedule/soc/classRoom")

        setClassRoomArray(resClassRoom.data.message)
        console.log(classRoomArray)
    }

    const [scheduleID, setSelectedSchedule] = useState('1');
    const [subjectID, setSelectedSubject] = useState('');
    const [classRoomID, setSelectedClassRoom] = useState('');
    const [classID, setSelectedClass] = useState('3')

    const blockID = day
    const placeID = day

    async function handleCreate(){

        const dataSchedule = { scheduleID, teacherID, subjectID, classRoomID, blockID, classID, placeID }

        try {
            API.put('/teacherSchedule', dataSchedule);
            console.log(dataSchedule)
      
          } catch (err) {
            alert(`Erro ao cadastrar. ${err}`)
          }
    }

    if(submit == true){
        handleCreate()
    }

  return (
    <div className='dia'>
        <div className='card-dias' onClick={() =>{getDayID(day)}}>
            <h4>{teacherName}</h4>
            <select onClick={(e)=>{setSelectedSubject(e.target.value)}}>
                <option>Selecione...</option>
                {
                    subjectArray.map((subject) =>{
                        return(
                            <option onSelect={()=>{console.log(subject.Id)}} value={subject.ID}>{subject.Nome}</option>
                        )
                    })
                }
            </select>
            <select onClick={(e)=>{setSelectedClassRoom(e.target.value)}}>
                <option>Selecione...</option>
                {
                    classRoomArray.map((classRoom) =>{
                        return(
                            <option onSelect={()=>{console.log(classRoom.Id)}} value={classRoom.ID}>{classRoom.Sala}</option>
                        )
                    })
                }
            </select>
        </div>
        <div className='prof' style={{display: teste1}}>
            {
                teacherArray.map((teacher) =>{
                    return(
                        <p onClick={() =>{setTeacherName(teacher.Nome); setTeacherID(teacher.ID); getScheduleID(teacher.ID); getClassRoom()}}>{teacher.Nome}</p>
                    )
                })
            }               
        </div>
    </div>
  )
}

export default TeacherSchedule;