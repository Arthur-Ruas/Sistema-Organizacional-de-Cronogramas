import React, { useState } from 'react'
import API from '../../API';

const TeacherSchedule = ({ day }) => {

    const [teste1, setTeste1] = useState("block");

    const [teacherName, setTeacherName] = useState('')

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


    const [selectedSchedule, setSelectedSchedule] = useState();
    const [selectedClassRoom, setSelectedClassRoom] = useState();

    async function handleCreate(){

        const dataSchedule = { teacherName, selectedSchedule, selectedClassRoom }
        console.log(dataSchedule)

        try{
            await API.post('/teacherSchedule', dataSchedule);
        }
        catch{

        }
    }

  return (
    <div className='dia'>
        <div className='card-dias' onClick={() =>{getDayID(day)}}>
            <h4>{teacherName}</h4>
            <select onClick={(e)=>{setSelectedSchedule(e.target.value)}}>
                <option>Selecione...</option>
                {
                    subjectArray.map((subject) =>{
                        return(
                            <option onSelect={()=>{console.log(subject.Nome)}} value={subject.Nome}>{subject.Nome}</option>
                        )
                    })
                }
            </select>
            <select onClick={(e)=>{setSelectedClassRoom(e.target.value)}}>
                <option>Selecione...</option>
                {
                    classRoomArray.map((classRoom) =>{
                        return(
                            <option onSelect={()=>{console.log(classRoom.Sala)}} value={classRoom.Sala}>{classRoom.Sala}</option>
                        )
                    })
                }
            </select>
        </div>
        <div className='prof' style={{display: teste1}}>
            {
                teacherArray.map((teacher) =>{
                    return(
                        <p onClick={() =>{setTeacherName(teacher.Nome); getScheduleID(teacher.ID); getClassRoom()}}>{teacher.Nome}</p>
                    )
                })
            }               
        </div>
    </div>
  )
}

export default TeacherSchedule;