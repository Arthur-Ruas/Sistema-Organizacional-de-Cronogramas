import React, { useState } from 'react'
import API from '../../API';

const Schedule = () => {

    const [teste1, setTeste1] = useState("block");

    const [nome, setNome] = useState('')

    const [teacherArray, setTeacherArray] = useState([]);
    const [scheduleArray, setScheduleArray] = useState([]);
    const [classRoomArray, setClassRoomArray] = useState([]);

    async function getDayID(id){

        const resTeacher = await API.get("/createSchedule/" + id);

        setTeacherArray(resTeacher.data.message)
        console.log(resTeacher)
    }
 
    async function getScheduleID(id){
        const resSchedule = await API.get("createSchedule/schedule/" + id)

        setScheduleArray(resSchedule.data.message)
        console.log(scheduleArray)
    }

    async function getClassRoom(){
        const resClassRoom = await API.get("createSchedule/soc/classRoom")

        setClassRoomArray(resClassRoom.data.message)
        console.log(classRoomArray)
    }

  return (
    <div className='schedule'>
        <div className='dia'>
            <div className='card-dias' onClick={() =>{getDayID(1)}}>
                <h4>{nome}</h4>
                <select>
                    <option>Selecione...</option>
                   {
                        scheduleArray.map((schedule) =>{
                            return(
                                <option>{schedule.Nome}</option>
                            )
                        })
                   }
                </select>
                <select>
                    <option>Selecione...</option>
                    {
                        classRoomArray.map((classRoom) =>{
                            return(
                                <option>{classRoom.Sala}</option>
                            )
                        })
                    }
                </select>
            </div>
            <div className='prof' style={{display: teste1}}>
                {
                    teacherArray.map((teacher) =>{
                        return(
                            <p onClick={() =>{setNome(teacher.Nome); getScheduleID(teacher.ID); getClassRoom()}}>{teacher.Nome}</p>
                        )
                    })
                }               
            </div>
        </div>
    </div>
  )
}

export default Schedule