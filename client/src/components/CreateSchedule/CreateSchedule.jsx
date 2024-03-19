import React, { useState } from 'react';
import API from '../../API';

const CreateSchedule = ({showModal, closeModal}) => {

  const [scheduleName, setScheduleName] = useState(null);
  const [classDivision, setClassDivision] = useState("Sim");
  const [classModule, setClassModule] = useState("Módulo 1")

  console.log(scheduleName, classDivision, classModule)

  async function handleScheduleCreation(event){
    event.preventDefault()

    if (scheduleName < 1) {
      return alert("Insira um nome!")
    }

    const dataSchedule = {scheduleName, classDivision, classModule}

    try {
      API.post('/schedule', dataSchedule);
      alert("Horário Cadastrado com sucesso!")

      window.location.reload(false);

    } catch (err) {
      alert(`Erro ao cadastrar. ${err}`)
    }
  }

  return (
    <div className='form-schedule' style={{display: showModal}}>
      <h1>Criar Horário</h1>
      <form onSubmit={handleScheduleCreation}>
        <div>
          <div className="form-teacher__input">
            <input type='text' required
            value={scheduleName} onChange={(event) => setScheduleName(event.target.value)}/>
            <p className='form-teacher__placeholder'>Nome do Horário</p>
          </div>
          <div>
            <h4>Divisão de Turma</h4>
            <div style={{display: "flex"}}>
              <input type='radio' name='classDivision' value='Sim' onChange={(event) => setClassDivision(event.target.value)}/>
              <p>Sim</p>
            </div>
            <div style={{display: "flex"}}>
              <input type='radio' name='classDivision' value='Não' onChange={(event) => setClassDivision(event.target.value)}/>
              <p>Não</p>
            </div>
          </div>
          <div>
            <h4>Módulo</h4>
            <div>
              <div style={{display: "flex"}}>
                <input type='radio' name='classModule' value='Módulo 1' onChange={(event) => setClassModule(event.target.value)}/>
                <p>Módulo 1</p>
              </div>
              <div style={{display: "flex"}}>
                <input type='radio' name='classModule' value='Módulo 2' onChange={(event) => setClassModule(event.target.value)}/>
                <p>Módulo 2</p>
              </div>
              <div style={{display: "flex"}}>
                <input type='radio' name='classModule' value='Módulo 3' onChange={(event) => setClassModule(event.target.value)}/>
                <p>Módulo 3</p>
              </div>
            </div>
          </div>
        </div>       
        <div>
          <button onClick={() => closeModal()}>Cancelar</button>
          <button type='submit'>Criar</button>
        </div>
      </form>
    </div>
  )
}

export default CreateSchedule;