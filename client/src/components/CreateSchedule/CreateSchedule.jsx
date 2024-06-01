import React, { useState } from 'react';
import API from '../../API';
import { useNavigate } from 'react-router-dom';

const CreateSchedule = ({showModal, closeModal}) => {

  const navigate = useNavigate()

  const [scheduleName, setScheduleName] = useState(null);
  const [classDivision, setClassDivision] = useState('1');
  const [classModule, setClassModule] = useState('1')

  async function handleScheduleCreation(event){
    event.preventDefault()

    if (scheduleName < 1) {
      return alert("Insira um nome!")
    }

    const dataSchedule = {scheduleName, classDivision, classModule}

    try {
      API.post('/schedule', dataSchedule);

      navigate('/createSchedule', {state: [classDivision, classModule]})
      window.location.reload(false);

    } catch (err) {
      alert(`Erro ao cadastrar. ${err}`)
    }
  }

  return (
    <div className='form-schedule' style={{display: showModal}}>
      <h1 className='form-schedule__title'>Criar Horário</h1>
      <form className='form-schedule__form' onSubmit={handleScheduleCreation}>
        <div className="form-schedule__input-name">
          <label>Nome do Horário</label>
          <input type='text' required
          value={scheduleName} onChange={(event) => setScheduleName(event.target.value)}/>
        </div>
        <div className='form-schedule__division'>
          <h4>Divisão de Turma</h4>
          <div className='form-schedule__wrapper-division'>
            <div className='form-schedule__input-division'>
              <input type='radio' name='classDivision' id='sim' value='1' onChange={(event) => setClassDivision(event.target.value)}/>
              <label for='sim'>Sim</label>
            </div>
            <div className='form-schedule__input-division'>
              <input type='radio' name='classDivision' id='nao' value='2' onChange={(event) => setClassDivision(event.target.value)}/>
              <label for='nao'>Não</label>
            </div>
          </div>     
        </div>
        <div className='form-schedule__module'>
          <h4>Módulo</h4>
          <div className='form-schedule__wrapper-module'>
            <div className='form-schedule__input-module'>
              <input type='radio' name='classModule' id='modulo1' value='1' onChange={(event) => setClassModule(event.target.value)}/>
              <label for='modulo1'>1º Módulo</label>
            </div>
            <div className='form-schedule__input-module'>
              <input type='radio' name='classModule' id='modulo2' value='2' onChange={(event) => setClassModule(event.target.value)}/>
              <label for='modulo2'>2º Módulo</label>
            </div>
            <div className='form-schedule__input-module'>
              <input type='radio' name='classModule' id='modulo3' value='3' onChange={(event) => setClassModule(event.target.value)}/>
              <label for='modulo3'>3º Módulo</label>
            </div>
          </div>
        </div>    
        <div className='form-schedule__wrapper-button'>
          <button className='button-cancel' type='button' onClick={() => {closeModal(); setScheduleName('')}}>Cancelar</button>
          <button className='button-submit' type='submit'>Criar</button>
        </div>
      </form>
    </div>
  )
}

export default CreateSchedule;