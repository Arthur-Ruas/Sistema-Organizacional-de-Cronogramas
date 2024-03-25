import React, { useEffect, useState } from 'react'
import API from '../../API';

import Image from '../../assets/profile.png'


const CreateTeacher = ({showModal, closeModal}) => {

    {/*Carregar imagem no card*/ }
    const [file, setFile] = useState(Image)

    function getFile(event) {
    setFile(URL.createObjectURL(event.target.files[0]))
    }


    {/*Seleção de Cor*/ }
    const colors =
    [
        "#f44336", "#e91e63", "#9c27b0", "#673ab7",
        "#3f51b5", "#2196f3", "#00bcd4", "#009688",
        "#4caf50", "#ffeb3b", "#ff9800", "#ff5722"
    ];


    {/*Select das matérias*/}
    const [subjects, setSubjects] = useState([])

    async function getSubjects() {
      const res = await API.get("/subjects");
      setSubjects(res.data.message)
    }

    useEffect(() => {
      getSubjects();
    }, [setSubjects])

    

    const [teacherName, setTeacherName] = useState(null);
    const [teacherColorCard, setTeacherColorCard] = useState(null);
    const [teacherArraySubjects, setArraySubjects] = useState([]);
    // const [arrayDias, setArrayDias] = useState([]);
    const [teacherNote, setTeacherNote] = useState(null);

    console.log(teacherArraySubjects)

    async function handleTeacherCreation(event) {
      event.preventDefault();
      if (teacherName < 1) {
        return alert("Insira um nome!")
      }
  
      else if (teacherColorCard == undefined || teacherColorCard == "#fff") {
        return alert("Selecione uma cor")
      }
  
      const dataTeacher = {teacherName, teacherColorCard, teacherArraySubjects, teacherNote}
  
      try {
        API.post('/teacher', dataTeacher);
        alert("Professor Cadastrado com sucesso!")
  
        window.location.reload(false);
  
      } catch (err) {
        alert(`Erro ao cadastrar. ${err}`)
      }
    }

  return (
    <div className="form-teacher" style={{ border: `5px solid ${teacherColorCard}`, display: showModal}}> 
        <form onSubmit={handleTeacherCreation}>
          <div className='form-teacher__wrapper'>
            <div className='form-teacher__left'>
              <div className='form-teacher__left__top'>
                <div className='form-teacher__input-foto'>
                  <input type="file" id='foto' onChange={getFile} />
                  <img src={file} id='teacherile-pic' alt='default-pic' />
                  <label for='foto' id='input-file' accept="image/jpeg, image/png, image/jpg">Colocar Imagem</label>
                </div>
                <div className="form-teacher__input">
                  <input type='text' required
                  value={teacherName} onChange={(event) => setTeacherName(event.target.value)}/>
                  <p className='form-teacher__placeholder'>Nome</p>
                </div>
              </div>

              <div className='form-teacher__left__bottom'>
                <div className='form-teacher__select-cores'>
                  <h4 className='select-text'>Selecione a cor do card</h4>
                  <div className='form-teacher__select-cores__wrapper'>
                    {
                      colors.map((color) => {
                        return (
                          <div className='form-teacher__select-cores__items' style={{ backgroundColor: `${color}` }} onClick={() => setTeacherColorCard(color)}>

                          </div>
                        )
                      })
                    }
                  </div>
                </div>

              </div>
              <div className='form-teacher__observation'>
                  <h4 className='select-text'>Observações</h4>
                  <input type="text" maxlength="150"
                  value={teacherNote} onChange={(event) => setTeacherNote(event.target.value)}/>
              </div>
            </div>
            
            <div className='form-teacher__right'>
              <div className='form-teacher__select-dias'>
                <h4 className='select-text'>Selecione os dias</h4>
                <div className='form-teacher__div-dias'>
                  
                </div>
              </div>
              <div className='form-teacher__select-schedules'>
                <h4 className='select-text'>Selecione as matérias</h4>
                <div className='form-teacher__div-schedules'>
                {
                    subjects.map((subject) => {
                      return (
                        <div className='form-teacher__input-schedules'>
                          <input type="checkbox" name={subject.nome} id={subject.id} onClick={(() => {
                            setArraySubjects(arr => [...arr, subject.id])
                          })} />
                          <label for={subject.id}>{subject.nome}</label>
                        </div>
                      )
                    })
                  }
                </div>
              </div>
            </div>
          </div>
          <div className='form-teacher__btns'>
            <button className='form-teacher__btns-cancelar' type='button' onClick={() => closeModal()}>Cancelar</button>
            <button className='form-teacher__btns__submit' type='submit'>Salvar</button>
          </div>
        </form>
      </div>
  )
}

export default CreateTeacher