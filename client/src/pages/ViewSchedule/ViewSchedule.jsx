import React, { useEffect, useState } from 'react';
import API from '../../API';
import { useLocation, useNavigate } from 'react-router-dom';

import ScheduleItem from '../../components/ScheduleItem/ScheduleItem';

const ViewSchedule = () => {

    const location = useLocation();
    const id = location.state;

    const [scheduleInfo, setScheduleInfo] = useState([])
    const [scheduleItems, setScheduleItems] = useState([])

    async function getSchedule(){
      const info = await API.get("/schedule/schedulInfo/" + id);
      const res = await API.get("/schedule/viewSchedule/" + id);
      setScheduleInfo(info.data.message)
      setScheduleItems(res.data.message)
    }

    useEffect(() => {
        getSchedule();
    }, [setScheduleInfo, setScheduleInfo])
    
    console.log(scheduleInfo)
  return (
    <div>
      {
        scheduleInfo.map((info) =>{
          return(
            <div>
              <h1>{info.Nome}</h1>
              <h4>{info.Divisao}</h4>
              <h4>{info.Modulo}</h4>
            </div>
          )
        })
      }
      {
        scheduleItems.map((schedule) =>{
          return(
            <ScheduleItem
            teacherName={schedule.Nome}
            color={schedule.Cor}
            subjectName={schedule.Materia}
            classRoomsName={schedule.Sala}/>
          )
        })
      }
      
    </div>
  )
}

export default ViewSchedule;