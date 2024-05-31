import React, { useEffect, useState } from 'react';
import API from '../../API';
import { useLocation, useNavigate } from 'react-router-dom';

const ViewSchedule = () => {

    const location = useLocation();
    const id = location.state;

    const [scheduleInfo, setScheduleInfo] = useState({})

    async function getSchedule(){
        const res = await API.get("/schedule/viewSchedule/" + id);
        setScheduleInfo(res.data.message)
    }

    useEffect(() => {
        getSchedule();
    }, [])
    
  return (
    <div>
       

    </div>
  )
}

export default ViewSchedule;