import React, { useEffect, useState } from 'react'
import API from '../../API';
import TeacherSchedule from '../../components/TeacherSchedule/TeacherSchedule';
import { useLocation } from 'react-router-dom';

const Schedule = () => {

  const [submit, setSubmit] = useState(false);

  function handleSubmit(){
    setSubmit(true)
  }
  
  const location = useLocation();
  const classDivison = location.state[0]
  const classModule = location.state[1]

  const [schedules, setSchedules] = useState([])

    async function getSchedules(){
        const res = await API.get("/schedule");
        setSchedules(res.data.message)
    }

    useEffect(() => {
      getSchedules()
    }, [setSchedules])

    const [data1, setData1] = useState(['1'])
    const [data2, setData2] = useState(['2'])
    const [data3, setData3] = useState(['3'])
    const [data4, setData4] = useState(['4'])
    const [data5, setData5] = useState(['5'])
    const [data6, setData6] = useState(['6'])
    const [data7, setData7] = useState(['7'])
    const [data8, setData8] = useState(['8'])
    const [data9, setData9] = useState(['9'])
    const [data10, setData10] = useState(['10'])

    function handlerChangeCategory1(event){
      setData1({...data1, [event.target.name] : event.target.value});
    }
    function handlerChangeCategory2(event){
      setData2({...data2, [event.target.name] : event.target.value});
    }
    function handlerChangeCategory3(event){
      setData3({...data3, [event.target.name] : event.target.value});
    }
    function handlerChangeCategory4(event){
      setData4({...data4, [event.target.name] : event.target.value});
    }
    function handlerChangeCategory5(event){
      setData5({...data5, [event.target.name] : event.target.value});
    }
    function handlerChangeCategory6(event){
      setData6({...data6, [event.target.name] : event.target.value});
    }
    function handlerChangeCategory7(event){
      setData7({...data7, [event.target.name] : event.target.value});
    }
    function handlerChangeCategory8(event){
      setData8({...data8, [event.target.name] : event.target.value});
    }
    function handlerChangeCategory9(event){
      setData9({...data9, [event.target.name] : event.target.value});
    }
    function handlerChangeCategory10(event){
      setData10({...data10, [event.target.name] : event.target.value});
    }

    var arrayData = [data1, data2, data3, data4, data5, data6, data7, data8, data9, data10]

    const [scheduleID, setSelectedSchedule] = useState('1');
    const [classID, setSelectedClass] = useState('3')

    async function handleCreate(){

      const dataSchedule = {scheduleID, arrayData, classID}
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

  console.log(arrayData)

  return (
    <div className='schedule'>
      <header className='schedule__header'>
        <div className='schedule__info'>
          <h1>Nome do horário</h1>
          <h4>Módulo</h4>
          <h4>E se tem divisão</h4>
        </div> 
        <button onClick={handleCreate}>Salvar</button>   
      </header>
      <div className='schedule__top'>
        <TeacherSchedule day='1' submit={submit} handlerOnChange={handlerChangeCategory1}/>
        <TeacherSchedule day='2' submit={submit} handlerOnChange={handlerChangeCategory2}/>
        <TeacherSchedule day='3' submit={submit} handlerOnChange={handlerChangeCategory3}/>
        <TeacherSchedule day='4' submit={submit} handlerOnChange={handlerChangeCategory4}/>
        <TeacherSchedule day='5' submit={submit} handlerOnChange={handlerChangeCategory5}/>
      </div>
      <div className='schedule__bottom'>
        <TeacherSchedule day='6' submit={submit} handlerOnChange={handlerChangeCategory6}/>
        <TeacherSchedule day='7' submit={submit} handlerOnChange={handlerChangeCategory7}/>
        <TeacherSchedule day='8' submit={submit} handlerOnChange={handlerChangeCategory8}/>
        <TeacherSchedule day='9' submit={submit} handlerOnChange={handlerChangeCategory9}/>
        <TeacherSchedule day='10' submit={submit} handlerOnChange={handlerChangeCategory10}/>
      </div>
    </div>
  )
}

export default Schedule