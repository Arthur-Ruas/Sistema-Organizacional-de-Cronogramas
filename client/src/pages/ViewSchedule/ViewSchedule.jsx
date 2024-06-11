import React, { useEffect, useState } from 'react';
import API from '../../API';
import { useLocation, useNavigate } from 'react-router-dom';
import { useRef } from 'react';
import * as htmlToImage from 'html-to-image';

import ScheduleField from '../../components/ScheduleField/ScheduleField';

const ViewSchedule = () => {

    const location = useLocation();
    const id = location.state;

    const [scheduleInfo, setScheduleInfo] = useState([]);
    const [scheduleItems, setScheduleItems] = useState([]);
    const [scheduleName, setScheduleName] = useState({});

    async function getSchedule(){
      const info = await API.get("/schedule/schedulInfo/" + id);
      const res = await API.get("/schedule/viewSchedule/" + id);
      setScheduleInfo(info.data.message)
      setScheduleItems(res.data.message)
      setScheduleName(info.data.message[0].Nome)
    }

    useEffect(() => {
        getSchedule();
    }, [setScheduleInfo, setScheduleInfo, setScheduleName])
    
    console.log(scheduleName)

    //codigo Exportando Imagem
    const containerRef = useRef(null);

    const downloadImage = async () => {
      if (containerRef.current) {
        try {
          const dataUrl = await htmlToImage.toPng(containerRef.current);
          const link = document.createElement('a');
          link.download = `${scheduleName}.png`;
          link.href = dataUrl;
          link.click();
        } catch (error) {
          console.error("Failed to convert to image", error);
        }
      }
    };

    const firstBlock = scheduleItems.filter(schedule => (schedule.Aula % 2) === 1).sort((a, b) => a.Aula - b.Aula);
    const secondBlock = scheduleItems.filter(schedule => (schedule.Aula % 2) === 0).sort((a, b) => a.Aula - b.Aula);

    console.log(firstBlock, secondBlock)

    const days = ['Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira']

  return (
    <div ref={containerRef} className='view-schedule'>
      <header className='view-schedule__header'>
          {
            scheduleInfo.map((info) =>{
              return(
                <div className='view-schedule__info'>
                  <h1>{info.Nome}</h1>
                  <h4>{info.Divisao}</h4>
                  <h4>{info.Modulo}</h4>
                </div>
              )
            })
          }
        <button className='view-schedule__button-download' onClick={downloadImage}>Download imagem</button>
      </header>
      <div className='view-schedule__schedule'>
        <div className='view-schedule__first-block'>
          <div className='view-schedule__first-block__info'>
            <h4>18:50</h4>
            <h4>20:42</h4>
          </div>
          <div className='view-schedule__first-block__content'>
            <div className='view-schedule__label-day'>
              {
                days.map((day) =>{
                  return(
                    <div className='view-schedule__label-day__day'>
                      {day}
                    </div>
                  )
                })
              }
            </div>
            <div className='view-schedule__wrapper-info'>
              {
                firstBlock.map((schedule) =>{
                  return(
                    <ScheduleField
                      block={schedule.Aula}
                      teacherName={schedule.Nome}
                      color={schedule.Cor}
                      subjectName={schedule.Materia}
                      classRoomsName={schedule.Sala}/>
                  )
                })
              }
            </div>
          </div>
        </div>
        <div className='view-schedule__interval'>
          <h4>Intervalo de 10 minutos</h4>
        </div>
        <div className='view-schedule__second-block'>
          <div className='view-schedule__second-block__info'>
            <h4>20:52</h4>
            <h4>22:45</h4>
          </div>
          <div className='view-schedule__second-block__content'>
            <div className='view-schedule__wrapper-info'>
              {
                secondBlock.map((schedule) =>{
                  return(
                    <ScheduleField
                    block={schedule.Aula}
                    teacherName={schedule.Nome}
                    color={schedule.Cor}
                    subjectName={schedule.Materia}
                    classRoomsName={schedule.Sala}/>
                  )
                })
              }
            </div>
          </div>
        </div> 
      </div>
    </div>
  )
}

export default ViewSchedule;