import React, { useEffect, useState } from 'react'
import API from '../../API';

const TeacherSchedule = ({ day, submit, handlerOnChange }) => {

    const [teacherName, setTeacherName] = useState('');
    const [teacherID, setTeacherID] = useState('');
    const [teacherColor, setTeacherColor] = useState('#aaa')
    const [teacherArray, setTeacherArray] = useState([]);
    const [subjectArray, setSubjectArray] = useState([]);
    const [classRoomArray, setClassRoomArray] = useState([]);

    async function getDayID(id){

        const resTeacher = await API.get("/createSchedule/" + id);

        setTeacherArray(resTeacher.data.message)
    }

    async function getColor(id){

        const resTeacher = await API.get("/createSchedule/color/" + id);

        setTeacherColor(resTeacher.data.message[0].cor_card)
       
    }
 
    async function getScheduleID(id){
        const resSchedule = await API.get("createSchedule/schedule/" + id)

        setSubjectArray(resSchedule.data.message)
    }

    async function getClassRoom(){
        const resClassRoom = await API.get("createSchedule/soc/classRoom")

        setClassRoomArray(resClassRoom.data.message)
    }

    useEffect(() =>{
        getDayID(day);
        getClassRoom();
    }, [setTeacherArray, setClassRoomArray])

    const [scheduleID, setSelectedSchedule] = useState('1');
    const [subjectID, setSelectedSubject] = useState('');
    const [classRoomID, setSelectedClassRoom] = useState('');
    const [classID, setSelectedClass] = useState('3')

    var dataTeacher = [teacherID, subjectID, classRoomID]

    const blockID = day
    const placeID = day

  return (
    <div className='card-day'>   
        <div className='card-day__color' style={{backgroundColor: teacherColor}}></div> 
        <div className='card-day__wrapper-select' >
            <select className='card-day__select' name={`teacher${day}`} onChange={handlerOnChange} onClick={(e)=>{setTeacherID(e.target.value); if(e.target.value != '0'){getScheduleID(e.target.value); getColor(e.target.value)}}}>
                <option value='0'>Selecione...</option>
                {
                    teacherArray.map((teacher) =>{
                        return(
                            <option value={teacher.ID}>{teacher.Nome}</option>               
                        )          
                    })
                }   
            </select>
            <select className='card-day__select' name={`subject${day}`} onChange={handlerOnChange} onClick={(e)=>{setSelectedSubject(e.target.value)}}>
                <option value='0'>Selecione...</option>
                {
                    subjectArray.map((subject) =>{
                        return(
                            <option value={subject.ID}>{subject.Nome}</option>
                        )
                    })
                }
            </select>
            <select className='card-day__select' name={`classRoom${day}`} onChange={handlerOnChange} onClick={(e)=>{setSelectedClassRoom(e.target.value)}}>
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