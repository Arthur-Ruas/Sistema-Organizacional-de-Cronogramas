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
  const [schedules, setSchedules] = useState([]);
  const [scheduleInfo, setScheduleInfo] = useState([]);
  const [checkSubject, setCheckSubject] = useState([]);
  const [selectedSubjects, setSelectedSubjects] = useState({});

  async function getSchedules(){
    const res = await API.get("/schedule");
    setSchedules(res.data.message)     
  }

  async function getScheduleInfo (){
    const res = await API.get("/teacherSchedule")
    setScheduleInfo(res.data.message)
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
    const [data11, setData11] = useState(['11'])
    const [data12, setData12] = useState(['12'])
    const [data13, setData13] = useState(['13'])
    const [data14, setData14] = useState(['14'])
    const [data15, setData15] = useState(['15'])
    const [data16, setData16] = useState(['16'])
    const [data17, setData17] = useState(['17'])
    const [data18, setData18] = useState(['18'])
    const [data19, setData19] = useState(['19'])
    const [data20, setData20] = useState(['20'])

    function handlerChangeCategory1(event){
      setData1({...data1, [event.target.name] : event.target.value}
      );
    }
    function handlerChangeCategory2(event){
      setData2({...data2, [event.target.name] : event.target.value}
      );
    }
    function handlerChangeCategory3(event){
      setData3({...data3, [event.target.name] : event.target.value}
      );
    }
    function handlerChangeCategory4(event){
      setData4({...data4, [event.target.name] : event.target.value}
      );
    }
    function handlerChangeCategory5(event){
      setData5({...data5, [event.target.name] : event.target.value}
      );
    }
    function handlerChangeCategory6(event){
      setData6({...data6, [event.target.name] : event.target.value}
      );
    }
    function handlerChangeCategory7(event){
      setData7({...data7, [event.target.name] : event.target.value}
      );
    }
    function handlerChangeCategory8(event){
      setData8({...data8, [event.target.name] : event.target.value}
      );
    }
    function handlerChangeCategory9(event){
      setData9({...data9, [event.target.name] : event.target.value}
      );
    }
    function handlerChangeCategory10(event){
      setData10({...data10, [event.target.name] : event.target.value}
      );
    }


    function handlerChangeCategory11(event){
      setData11({...data11, [event.target.name] : event.target.value}
      );
    }
    function handlerChangeCategory12(event){
      setData12({...data12, [event.target.name] : event.target.value}
      );
    }
    function handlerChangeCategory13(event){
      setData13({...data13, [event.target.name] : event.target.value}
      );
    }
    function handlerChangeCategory14(event){
      setData14({...data14, [event.target.name] : event.target.value}
      );
    }
    function handlerChangeCategory15(event){
      setData15({...data15, [event.target.name] : event.target.value}
      );
    }
    function handlerChangeCategory16(event){
      setData16({...data16, [event.target.name] : event.target.value}
      );
    }
    function handlerChangeCategory17(event){
      setData17({...data17, [event.target.name] : event.target.value}
      );
    }
    function handlerChangeCategory18(event){
      setData18({...data18, [event.target.name] : event.target.value}
      );
    }
    function handlerChangeCategory19(event){
      setData19({...data19, [event.target.name] : event.target.value}
      );
    }
    function handlerChangeCategory20(event){
      setData20({...data20, [event.target.name] : event.target.value}
      );
    }
    
    if(classDivison == 1){
      var teacherData1 = ['1', data1.teacher1, data1.subject1, data1.classRoom1, '1']
      var teacherData2 = ['2', data2.teacher2, data2.subject2, data2.classRoom2, '1']
      var teacherData3 = ['3', data3.teacher3, data3.subject3, data3.classRoom3, '1']
      var teacherData4 = ['4', data4.teacher4, data4.subject4, data4.classRoom4, '1']
      var teacherData5 = ['5', data5.teacher5, data5.subject5, data5.classRoom5, '1']
      var teacherData6 = ['6', data6.teacher6, data6.subject6, data6.classRoom6, '1']
      var teacherData7 = ['7', data7.teacher7, data7.subject7, data7.classRoom7, '1']
      var teacherData8 = ['8', data8.teacher8, data8.subject8, data8.classRoom8, '1']
      var teacherData9 = ['9', data9.teacher9, data9.subject9, data9.classRoom9, '1']
      var teacherData10 = ['10', data10.teacher10, data10.subject10, data10.classRoom10, '1']

      var teacherData11 = ['11', data11.teacher11, data11.subject11, data11.classRoom11, '2']
      var teacherData12 = ['12', data11.teacher12, data11.subject12, data12.classRoom12, '2']
      var teacherData13 = ['13', data13.teacher13, data13.subject13, data13.classRoom13, '2']
      var teacherData14 = ['14', data14.teacher14, data14.subject14, data14.classRoom14, '2']
      var teacherData15 = ['15', data15.teacher15, data15.subject15, data15.classRoom15, '2']
      var teacherData16 = ['16', data16.teacher16, data16.subject16, data16.classRoom16, '2']
      var teacherData17 = ['17', data17.teacher17, data17.subject17, data17.classRoom17, '2']
      var teacherData18 = ['18', data18.teacher18, data18.subject18, data18.classRoom18, '2']
      var teacherData19 = ['19', data19.teacher19, data19.subject19, data19.classRoom19, '2']
      var teacherData20 = ['20', data20.teacher20, data20.subject20, data20.classRoom20, '2']
    }

    if(classDivison == 2){
      var teacherData1 = ['1', data1.teacher1, data1.subject1, data1.classRoom1, '3']
      var teacherData2 = ['2', data2.teacher2, data2.subject2, data2.classRoom2, '3']
      var teacherData3 = ['3', data3.teacher3, data3.subject3, data3.classRoom3, '3']
      var teacherData4 = ['4', data4.teacher4, data4.subject4, data4.classRoom4, '3']
      var teacherData5 = ['5', data5.teacher5, data5.subject5, data5.classRoom5, '3']
      var teacherData6 = ['6', data6.teacher6, data6.subject6, data6.classRoom6, '3']
      var teacherData7 = ['7', data7.teacher7, data7.subject7, data7.classRoom7, '3']
      var teacherData8 = ['8', data8.teacher8, data8.subject8, data8.classRoom8, '3']
      var teacherData9 = ['9', data9.teacher9, data9.subject9, data9.classRoom9, '3']
      var teacherData10 = ['9', data9.teacher10, data9.subject10, data9.classRoom10, '3']
    }
    
    const [subjectList, setSubjectList] = useState([])

    async function getSubjectsList(){
      const res = await API.get("/subjects/subjectList/" + classModule);
      setSubjectList(res.data.message)     
    }
   
    var number_subject = 0;

    const handleSubjectChange = (day, subjectID) => {
      setSelectedSubjects(prev => {
          const newSelectedSubjects = { ...prev };
          newSelectedSubjects[day] = subjectID;
          return newSelectedSubjects;
      });
  };

    useEffect(() => {
      getSchedules()
      getScheduleInfo()
      getSubjectsList()
      
    }, [setSchedules, setSubjectList, checkSubject])

    useEffect(() => {
      setCheckSubject(Object.values(selectedSubjects));
  }, [selectedSubjects]);

    var arrayData = []

    if(classDivison == 1){
      var arrayData = [teacherData1, teacherData2, teacherData3, teacherData4, teacherData5, teacherData6, teacherData7, teacherData8, teacherData9, teacherData10,
        teacherData11, teacherData12, teacherData13, teacherData14, teacherData15, teacherData16, teacherData17, teacherData18, teacherData19, teacherData20
      ]
    }

    if(classDivison == 2){
      var arrayData = [teacherData1, teacherData2, teacherData3, teacherData4, teacherData5, teacherData6, teacherData7, teacherData8, teacherData9, teacherData10]
    }

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

    console.log(arrayData)

    async function handleCreateNoDivision(){

      const dataSchedule = {scheduleID, arrayData}
      try {
        API.put('/teacherSchedule', dataSchedule);
        navigate('/home')
      }catch (err) {
        alert(`Erro ao cadastrar. ${err}`)
      }
    }

    async function handleCreateDivision(){

      const dataSchedule = {scheduleID, arrayData}
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
          <button className="schedule__button-save" onClick={() => {inProgress(); if(classDivison == 1){handleCreateDivision()}else if(classDivison == 2){handleCreateNoDivision()}}}>Salvar</button>
          <button className="schedule__button-save" onClick={() => {finished(); if(classDivison == 1){handleCreateDivision()}else if(classDivison == 2){handleCreateNoDivision()}}}>Finalizar</button>
        </div>
      </header>
      {
        classDivison == 1 &&(
          <div className='schedule__wrapper-days'>
            <div className='schedule__wrapper-days__first-block'>
              <div className='schedule__wrapper-days__label'>
                <h4>18:50</h4>
                <h4>20:42</h4>
              </div>
              <div className='schedule__wrapper-days__day'>
                <h4>Segunda-Feira</h4>
                <TeacherSchedule day='1' module={classModule} handlerOnChange={handlerChangeCategory1} handleSubjectChange={(value) => handleSubjectChange('1', value)} />
                <TeacherSchedule day='1' module={classModule} handlerOnChange={handlerChangeCategory11} handleSubjectChange={(value) => handleSubjectChange('1', value)} />
              </div>
              <div className='schedule__wrapper-days__day'>
                <h4>Terça-Feira</h4>
                <TeacherSchedule day='3' module={classModule} handlerOnChange={handlerChangeCategory3} handleSubjectChange={(value) => handleSubjectChange('3', value)} />
                <TeacherSchedule day='3' module={classModule} handlerOnChange={handlerChangeCategory13} handleSubjectChange={(value) => handleSubjectChange('3', value)} />
              </div>
              <div className='schedule__wrapper-days__day'>
                <h4>Quarta-Feira</h4>
                <TeacherSchedule day='5' module={classModule} handlerOnChange={handlerChangeCategory5} handleSubjectChange={(value) => handleSubjectChange('5', value)} />
                <TeacherSchedule day='5' module={classModule} handlerOnChange={handlerChangeCategory15} handleSubjectChange={(value) => handleSubjectChange('5', value)} />
              </div>
              <div className='schedule__wrapper-days__day'>
                <h4>Quinta-Feira</h4>
                <TeacherSchedule day='7' module={classModule} handlerOnChange={handlerChangeCategory7} handleSubjectChange={(value) => handleSubjectChange('7', value)} />
                <TeacherSchedule day='7' module={classModule} handlerOnChange={handlerChangeCategory17} handleSubjectChange={(value) => handleSubjectChange('7', value)} />
              </div>
              <div className='schedule__wrapper-days__day'>
                <h4>Sexta-Feira</h4>
                <TeacherSchedule day='9' module={classModule} handlerOnChange={handlerChangeCategory9} handleSubjectChange={(value) => handleSubjectChange('9', value)} />
                <TeacherSchedule day='9' module={classModule} handlerOnChange={handlerChangeCategory19} handleSubjectChange={(value) => handleSubjectChange('9', value)} />
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
                <TeacherSchedule day='2' module={classModule} handlerOnChange={handlerChangeCategory2} handleSubjectChange={(value) => handleSubjectChange('2', value)} />
                <TeacherSchedule day='2' module={classModule} handlerOnChange={handlerChangeCategory12} handleSubjectChange={(value) => handleSubjectChange('2', value)} />
              </div>
              <div className='schedule__wrapper-days__day'>
                <TeacherSchedule day='4' module={classModule} handlerOnChange={handlerChangeCategory4} handleSubjectChange={(value) => handleSubjectChange('4', value)} />
                <TeacherSchedule day='4' module={classModule} handlerOnChange={handlerChangeCategory14} handleSubjectChange={(value) => handleSubjectChange('4', value)} />
              </div>
              <div className='schedule__wrapper-days__day'>
                <TeacherSchedule day='6' module={classModule} handlerOnChange={handlerChangeCategory6} handleSubjectChange={(value) => handleSubjectChange('6', value)} />
                <TeacherSchedule day='6' module={classModule} handlerOnChange={handlerChangeCategory16} handleSubjectChange={(value) => handleSubjectChange('6', value)} />
              </div>
              <div className='schedule__wrapper-days__day'>
                <TeacherSchedule day='8' module={classModule} handlerOnChange={handlerChangeCategory8} handleSubjectChange={(value) => handleSubjectChange('8', value)} />
                <TeacherSchedule day='8' module={classModule} handlerOnChange={handlerChangeCategory18} handleSubjectChange={(value) => handleSubjectChange('8', value)} />
              </div>
              <div className='schedule__wrapper-days__day'>
                <TeacherSchedule day='10' module={classModule} handlerOnChange={handlerChangeCategory10} handleSubjectChange={(value) => handleSubjectChange('10', value)} />
                <TeacherSchedule day='10' module={classModule} handlerOnChange={handlerChangeCategory20} handleSubjectChange={(value) => handleSubjectChange('10', value)} />
              </div>
            </div>
          </div>
        )
      }
      {
        classDivison == 2 &&(
          <div className='schedule__wrapper-days'>
            <div className='schedule__wrapper-days__first-block'>
              <div className='schedule__wrapper-days__label'>
                <h4>18:50</h4>
                <h4>20:42</h4>
              </div>
              <div className='schedule__wrapper-days__day'>
                <h4>Segunda-Feira</h4>
                <TeacherSchedule day='1' module={classModule} handlerOnChange={handlerChangeCategory1} handleSubjectChange={(value) => handleSubjectChange('1', value)} />
              </div>
              <div className='schedule__wrapper-days__day'>
                <h4>Terça-Feira</h4>
                <TeacherSchedule day='3' module={classModule} handlerOnChange={handlerChangeCategory3} handleSubjectChange={(value) => handleSubjectChange('3', value)} />
              </div>
              <div className='schedule__wrapper-days__day'>
                <h4>Quarta-Feira</h4>
                <TeacherSchedule day='5' module={classModule} handlerOnChange={handlerChangeCategory5} handleSubjectChange={(value) => handleSubjectChange('5', value)} />
              </div>
              <div className='schedule__wrapper-days__day'>
                <h4>Quinta-Feira</h4>
                <TeacherSchedule day='7' module={classModule} handlerOnChange={handlerChangeCategory7} handleSubjectChange={(value) => handleSubjectChange('7', value)} />
              </div>
              <div className='schedule__wrapper-days__day'>
                <h4>Sexta-Feira</h4>
                <TeacherSchedule day='9' module={classModule} handlerOnChange={handlerChangeCategory9} handleSubjectChange={(value) => handleSubjectChange('9', value)} />
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
                <TeacherSchedule day='2' module={classModule} handlerOnChange={handlerChangeCategory2} handleSubjectChange={(value) => handleSubjectChange('2', value)} />
              </div>
              <div className='schedule__wrapper-days__day'>
                <TeacherSchedule day='4' module={classModule} handlerOnChange={handlerChangeCategory4} handleSubjectChange={(value) => handleSubjectChange('4', value)} />
              </div>
              <div className='schedule__wrapper-days__day'>
                <TeacherSchedule day='6' module={classModule} handlerOnChange={handlerChangeCategory6} handleSubjectChange={(value) => handleSubjectChange('6', value)} />
              </div>
              <div className='schedule__wrapper-days__day'>
                <TeacherSchedule day='8' module={classModule} handlerOnChange={handlerChangeCategory8} handleSubjectChange={(value) => handleSubjectChange('8', value)} />
              </div>
              <div className='schedule__wrapper-days__day'>
                <TeacherSchedule day='10' module={classModule} handlerOnChange={handlerChangeCategory10} handleSubjectChange={(value) => handleSubjectChange('10', value)} />
              </div>
            </div>
          </div>
        ) 
      }
      <div className='schedule__help'>  
        {
          subjectList.map((subject) =>{
            number_subject +=1;
            if (!checkSubject.includes(subject.id.toString())) {
              return (
                <div className='schedule__help__wrapper-item' key={subject.id}>
                  <h4 className='schedule__help__item'>{subject.sigla}</h4>
                  <h4 className='schedule__help__info'>{subject.nome}</h4>
                </div>
              );
            }
            return null;
          })}
      </div>
    </div>
  )
}

export default Schedule