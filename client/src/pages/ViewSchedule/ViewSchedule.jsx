import React, { useEffect, useState } from 'react';
import API from '../../API';
import { useLocation, useNavigate } from 'react-router-dom';
import { useRef } from 'react';
import * as htmlToImage from 'html-to-image';

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


    //codigo Exportando Imagem
    const containerRef = useRef(null);

    const downloadImage = async () => {
      if (containerRef.current) {
        try {
          const dataUrl = await htmlToImage.toPng(containerRef.current);
          const link = document.createElement('a');
          link.download = `teste.png`;
          link.href = dataUrl;
          link.click();
        } catch (error) {
          console.error("Failed to convert to image", error);
        }
      }
    };

  return (
    <div ref={containerRef} style={{backgroundColor: 'white'}}>
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
      <button onClick={downloadImage}>download imagem</button>
    </div>
  )
}

export default ViewSchedule;