import React, { useEffect, useState } from 'react'
import API from '../../API';
import TeacherSchedule from '../../components/TeacherSchedule/TeacherSchedule';
import { useLocation, useNavigate } from 'react-router-dom';

const Schedule = () => {

  const navigate = useNavigate()

  const location = useLocation();
  const classDivison = location.state[0]
  const classModule = location.state[1]

  const [scheduleID, setScheduleID] = useState();
  const [module, setModule] = useState();
  const [classID, setSelectedClass] = useState('3')
  const [schedules, setSchedules] = useState([]);
  const [scheduleInfo, setScheduleInfo] = useState([])

  async function getSchedules(){
    const res = await API.get("/schedule");
    setSchedules(res.data.message)     
  }

  async function getScheduleInfo (){
    const res = await API.get("/teacherSchedule")
    setScheduleInfo(res.data.message)
    setModule(res.data.message[0].modulo)
    setScheduleID((res.data.message[0].id).toString())
  }

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
    var teacherData1 = ['1', data1.teacher1, data1.subject1, data1.classRoom1]
    var teacherData2 = ['2', data2.teacher2, data2.subject2, data2.classRoom2]
    var teacherData3 = ['3', data3.teacher3, data3.subject3, data3.classRoom3]
    var teacherData4 = ['4', data4.teacher4, data4.subject4, data4.classRoom4]
    var teacherData5 = ['5', data5.teacher5, data5.subject5, data5.classRoom5]
    var teacherData6 = ['6', data6.teacher6, data6.subject6, data6.classRoom6]
    var teacherData7 = ['7', data7.teacher7, data7.subject7, data7.classRoom7]
    var teacherData8 = ['8', data8.teacher8, data8.subject8, data8.classRoom8]
    var teacherData9 = ['9', data9.teacher9, data9.subject9, data9.classRoom9]
    var teacherData10 = ['10', data10.teacher10, data10.subject10, data10.classRoom10]

     var subjects = [data1.subject1, data2.subject2, data3.subject3, data4.subject4, data5.subject5, data6.subject6, data7.subject7, data8.subject8, data9.subject9, data10.subject10]

    const [subjectList, setSubjectList] = useState([])

    var subjectListCheck = []

    var moduleValor = 0

    if(module == "Módulo 1"){
      moduleValor = 1
    }
    if(module == "Módulo 2"){
      moduleValor = 2
    }

    if(module == "Módulo 3"){
      moduleValor = 3
    }

    async function getSubjectsList(){
      const res = await API.get("/subjects/subjectList/" + moduleValor);
      setSubjectList(res.data.message)     
    }
  
    subjectList.forEach(subject => {
      subjectListCheck = [...subjectListCheck, subject.id]
    });
  
    console.log(subjectListCheck)
    console.log(subjects)

    useEffect(() => {
      getSchedules()
      getScheduleInfo()
      getSubjectsList()
    }, [setSchedules, setSubjectList])

    

    var arrayData = [teacherData1, teacherData2, teacherData3, teacherData4, teacherData5, teacherData6, teacherData7, teacherData8, teacherData9, teacherData10]

    async function inProgress(){
      const data = {scheduleID}

      try{
        API.put('/teacherSchedule/progress', data)
      }catch (err) {
        alert(`Erro ao cadastrar. ${err}`)
      }
    }

    async function finished(){
      const data = {scheduleID}

      try {
        API.put('/teacherSchedule/finished', data)
      }catch (err) {
        alert(`Erro ao cadastrar. ${err}`)
      }
    }

    async function handleCreate(){

      const dataSchedule = {scheduleID, arrayData, classID}
      try {
        API.put('/teacherSchedule', dataSchedule);
        navigate('/home')
      }catch (err) {
        alert(`Erro ao cadastrar. ${err}`)
      }
    }
    
  return (
    <div className='schedule'>
      <header className='schedule__header'> 
          {
            scheduleInfo.map((info) => {
              return(
                <div className='schedule__info'>
                  <h1>{info.nome}</h1>
                  <div>
                    <h4>Módulo: {info.modulo}</h4>
                    <h4>Possuí divisão: {info.divisao_turma}</h4>
                  </div>
                </div> 
              )
            })
          }    
          
      <div className="schedule__wrapper-button">
        <button className="schedule__button-cancel">Cancelar</button>
        <button className="schedule__button-save" onClick={() => {inProgress(); handleCreate()}}>Salvar</button>
        <button className="schedule__button-save" onClick={() => {finished(); handleCreate()}}>Finalizar</button>
      </div>

      </header>
      <div className='schedule__wrapper-days'>
        <div className='schedule__wrapper-days__first-block'>
          <div className='schedule__wrapper-days__label'>
            <h4>18:50</h4>
            <h4>20:42</h4>
          </div>
          <div className='schedule__wrapper-days__day'>
            <h4>Segunda-Feira</h4>
            <TeacherSchedule day='1' module={classModule} handlerOnChange={handlerChangeCategory1}/>
          </div>
          <div className='schedule__wrapper-days__day'>
            <h4>Terça-Feira</h4>
            <TeacherSchedule day='3' module={classModule} handlerOnChange={handlerChangeCategory3}/>
          </div>
          <div className='schedule__wrapper-days__day'>
            <h4>Quarta-Feira</h4>
            <TeacherSchedule day='5' module={classModule} handlerOnChange={handlerChangeCategory5}/>
          </div>
          <div className='schedule__wrapper-days__day'>
            <h4>Quinta-Feira</h4>
            <TeacherSchedule day='7' module={classModule} handlerOnChange={handlerChangeCategory7}/>
          </div>
          <div className='schedule__wrapper-days__day'>
            <h4>Sexta-Feira</h4>
            <TeacherSchedule day='9' module={classModule} handlerOnChange={handlerChangeCategory9}/>
          </div>
        </div>
        <div className='schedule__interval'>
          <h4>Intervalo de 10 minutos</h4>
        </div>
        <div className='schedule__wrapper-days__second-block'>
          <div className='schedule__wrapper-days__label'>
            <h4>20:52</h4>
            <h4>22:45</h4>
          </div>
          <div className='schedule__wrapper-days__day'>
            <TeacherSchedule day='2' module={classModule} handlerOnChange={handlerChangeCategory2}/>
          </div>
          <div className='schedule__wrapper-days__day'>
            <TeacherSchedule day='4' module={classModule} handlerOnChange={handlerChangeCategory4}/>
          </div>
          <div className='schedule__wrapper-days__day'>
            <TeacherSchedule day='6' module={classModule} handlerOnChange={handlerChangeCategory6}/>
          </div>
          <div className='schedule__wrapper-days__day'>
            <TeacherSchedule day='8' module={classModule} handlerOnChange={handlerChangeCategory8}/>
          </div>
          <div className='schedule__wrapper-days__day'>
            <TeacherSchedule day='10' module={classModule} handlerOnChange={handlerChangeCategory10}/>
          </div>
        </div>
      </div>
      <div className='schedule__help'>  
        {
          subjectList.map((subject) =>{
            return(
              <div className='schedule__help__wrapper-item'>
                <h4 className='schedule__help__item'>{subject.sigla}</h4>
                <h4 className='schedule__help__info'>{subject.nome}</h4>
              </div>             
            )
          })
        }
      </div>
    </div>
  )
}

export default Schedule