import React, { useEffect, useState } from 'react';
import API from '../../API';
import { useNavigate } from 'react-router-dom';
import Image from '../../assets/scheduleImage.png';

import ScheduleCard from '../ScheduleCard/ScheduleCard';

const HomeSearch = ({openModal}) => {

  const navigate = useNavigate();

  const [schedules, setSchedules] = useState([]);
  const [schedulesData, setSchedulesData] = useState([]);
  const [progressSchedules, setProgressSchedules] = useState([]);

    async function getSchedules(){
        const res = await API.get("/schedule");
        setSchedules(res.data.message)
    }

    async function getSchedulesData(){
      const res = await API.get("/schedule/data");
      setSchedulesData(res.data.message)
    }

    async function getProgressSchedules(){
      const res = await API.get("/schedule/progress");
      setProgressSchedules(res.data.message)
    }

    useEffect(() => {
      getSchedules();
      getSchedulesData();
      getProgressSchedules();
    }, [setSchedules, setSchedulesData, setProgressSchedules])

  return (
    <div className='home-search'>
      <header className='home-search__header'>
        <div className='home-search__left'>
            <h4 className='home-search__title'>Olá, seja bem-vindo!</h4>
        </div>
        <div className='home-search__right'>
            <button className='button-criar' onClick={() => openModal()}
            >+ Criar Horário</button>
        </div>
      </header>
      <div className='home-search__content'>
        <div className='home-search__wrapper'>
          <div className='home-search__progress'>
            <div className='home-search__progress__info'>
              <h1>Horário em andamento</h1>
              <div>
                {
                  progressSchedules && (            
                    progressSchedules.map((schedule) =>{
                      return(
                        <div>
                          <h1>{schedule.Nome}</h1>
                          <h4>{schedule.Divisao}</h4>
                          <h4>{schedule.Modulo}</h4>
                        </div>
                      )
                    })
                  )
                }
                {
                   progressSchedules == undefined &&(
                    <div>
                      <h4>Opa! kk</h4>
                      <h6>Parece que você ainda não criou um horário</h6>
                    </div>
                  )
                }
              </div>
            </div>
            <img className='home-search__image' src={Image}/>
          </div>
          <div className='home-search__data'>
            <h1>Informações gerais</h1>
            <div>
              {
                schedulesData.map((data) =>{
                  return(
                    <div>
                      <h4>Novos:</h4>
                      <h4>{data.Novo}</h4>
                    </div>
                  )
                })
              }
              {
                schedulesData.map((data) =>{
                  return(
                    <div>
                      <h4>Em andamento:</h4>
                      <h4>{data.Andamento}</h4>
                    </div>
                  )
                })
              }
              {
                schedulesData.map((data) =>{
                  return(
                    <div>
                      <h4>Finalizado:</h4>
                      <h4>{data.Finalizado}</h4>
                    </div>
                  )
                })
              }
            </div>
          </div>
        </div>  
        <div className='home-search__wrapper-home-search'>
          {
            schedules &&(
              schedules.map((schedule) => {
                return(
                  <ScheduleCard 
                    scheduleName={schedule.nome}
                    classDivision={schedule.divisao_turma}
                    classModule={schedule.modulo}
                    scheduleID={schedule.ID}/>
                )
              })
            )
          }
          {
            schedules == undefined &&(
              <div className='home-search__no-content'>
                <h1>Seus horários aparecerão aqui</h1>
              </div>
            )
          }
        </div>
      </div>
    </div>
  )
}

export default HomeSearch;