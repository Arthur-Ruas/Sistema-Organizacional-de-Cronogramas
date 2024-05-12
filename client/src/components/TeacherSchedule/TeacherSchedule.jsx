import React, { useEffect, useState } from 'react'
import API from '../../API';

const TeacherSchedule = ({ day, submit }) => {

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

    useEffect(() =>{
        getDayID(day);
        getClassRoom();
    }, [setTeacherArray, setClassRoomArray])

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
        <div className='card-dias'>
            <h4>{teacherName}</h4>
            <select onClick={(e)=>{setTeacherID(e.target.value); if(e.target.value != '0'){getScheduleID(e.target.value)}}}>
                <option value='0'>Selecione...</option>
                {
                    teacherArray.map((teacher) =>{
                        return(
                            <option value={teacher.ID} onSelect={() =>{console.log('ai'); setTeacherName(teacher.Nome); getClassRoom()}}>{teacher.Nome}</option>
                        )
                    })
                }   
            </select>
            <select onClick={(e)=>{setSelectedSubject(e.target.value)}}>
                <option value='0'>Selecione...</option>
                {
                    subjectArray.map((subject) =>{
                        return(
                            <option value={subject.ID}>{subject.Nome}</option>
                        )
                    })
                }
            </select>
            <select onClick={(e)=>{setSelectedClassRoom(e.target.value)}}>
                <option value='0'>Selecione...</option>
                {
                    classRoomArray.map((classRoom) =>{
                        return(
                            <option value={classRoom.ID}>{classRoom.Sala}</option>
                        )
                    })
                }
            </select>
        </div>
    </div>
  )
}

export default TeacherSchedule;