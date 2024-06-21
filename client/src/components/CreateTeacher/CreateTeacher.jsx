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
    const [subjectsFirstModule, setSubjectsFirstModule] = useState([]);
    const [subjectsSecondModule, setSubjectsSecondModule] = useState([]);
    const [subjectsThirdModule, setSubjectsThirdModule] = useState([]);

    async function getSubjects() {
      const subjectsFirstModule = await API.get("/subjects/firstModule");
      const subjectsSecondModule = await API.get("/subjects/secondModule");
      const subjectsThirdModule = await API.get("/subjects/thirdModule");

      setSubjectsFirstModule(subjectsFirstModule.data.message)
      setSubjectsSecondModule(subjectsSecondModule.data.message)
      setSubjectsThirdModule(subjectsThirdModule.data.message)
    }

    useEffect(() => {
      getSubjects();
    }, [setSubjectsFirstModule, setSubjectsSecondModule, setSubjectsThirdModule])

    const [teacherName, setTeacherName] = useState(null);
    const [teacherColorCard, setTeacherColorCard] = useState('#fff');
    const [teacherArraySubjects, setArraySubjects] = useState([]);
    const [teacherArrayDays, setArrayDays] = useState([]);
    const [teacherNote, setTeacherNote] = useState(null);

    console.log(teacherArraySubjects)
    console.log(teacherArrayDays)

    function addOrRemove(array, value){
      var index = array.indexOf(value);

      if(index===-1){
        array.push(value);
      }
      else{
        array.splice(index, 1);
      }
    }

    async function handleTeacherCreation(event) {
      event.preventDefault();
      if (teacherName < 1) {
        return alert("Insira um nome!")
      }
  
      else if (teacherColorCard == undefined || teacherColorCard == "#fff") {
        return alert("Selecione uma cor")
      }
  
      const dataTeacher = {teacherName, teacherColorCard, teacherNote, teacherArrayDays, teacherArraySubjects}
  
      try {
        API.post('/teacher', dataTeacher);
  
        window.location.reload(false);
  
      } catch (err) {
        alert(`Erro ao cadastrar. ${err}`)
      }
    }

    const [tab1State, setTab1State] = useState("flex")
    const [tab2State, setTab2State] = useState("none")
    const [tab3State, setTab3State] = useState("none")

    function tab1Open(){
      setTab1State("flex")
      setTab2State("none")
      setTab3State("none")
    }

    function tab2Open(){
      setTab1State("none")
      setTab2State("flex")
      setTab3State("none")
    }

    function tab3Open(){
      setTab1State("none")
      setTab2State("none")
      setTab3State("flex")
    }

  return (
    <div className="form-teacher" style={{display: showModal}}> 
        <form onSubmit={handleTeacherCreation}>
          <div className='form-teacher__color' style={{backgroundColor: teacherColorCard}}></div>
          <div className='form-teacher__wrapper-form-teacher'>
            <div className='form-teacher__left'>
              <div className='form-teacher__left__top'>
                <div className='form-teacher__input-foto'>
                  <input type="file" id='foto' onChange={getFile} />
                  <img src={file} id='teacherile-pic' alt='default-pic' />
                  <label for='foto' id='input-file' accept="image/jpeg, image/png, image/jpg">+ Imagem</label>
                </div>
                <div className="form-teacher__input-name">
                  <h4 className='select-text'>Nome</h4>
                  <input type='text' required
                  value={teacherName} onChange={(event) => setTeacherName(event.target.value)}/>
                </div>
              </div>

              <div className='form-teacher__left__bottom'>
                <div className='form-teacher__select-color'>
                  <h4 className='select-text'>Selecione a cor do card</h4>
                  <div className='form-teacher__wrapper-select-color'>
                    {
                      colors.map((color) => {
                        return (
                          <div className='form-teacher__input-select-color' style={{ backgroundColor: `${color}` }} onClick={() => setTeacherColorCard(color)}></div>
                        )
                      })
                    }
                  </div>
                </div>
                <div className='form-teacher__observation'>
                  <h4 className='select-text'>Observações</h4>
                  <textarea type="text" cols='15'
                  value={teacherNote} onChange={(event) => setTeacherNote(event.target.value)}/>
              </div>
              </div>
            </div>
            <div className='form-teacher__right'>
              <div className='form-teacher__right__top'>
                <div className='form-teacher__select-days'>
                  <h4 className='select-text'>Selecione os dias</h4>
                  <div className='form-teacher__wrapper-days'>
                      <div className='form-teacher__days'>
                        <h4>S</h4>
                        <div className='form-teacher__input-day'>
                          <input type='checkbox' value='1' onClick={((event) => addOrRemove(teacherArrayDays, event.target.value))}/>
                          <label>Bloco 1</label>
                        </div>  
                        <div className='form-teacher__input-day'>
                          <input type='checkbox' value='2' onClick={((event) => addOrRemove(teacherArrayDays, event.target.value))}/>
                          <label>Bloco 2</label>
                        </div>
                      </div>

                      <div className='form-teacher__days'>
                      <h4>T</h4>
                        <div className='form-teacher__input-day'>
                          <input type='checkbox' value='3' onClick={((event) => addOrRemove(teacherArrayDays, event.target.value))}/>
                          <label>Bloco 1</label>
                        </div>
                        <div className='form-teacher__input-day'>
                          <input type='checkbox' value='4' onClick={((event) => addOrRemove(teacherArrayDays, event.target.value))}/>
                          <label>Bloco 2</label>
                        </div>
                      </div>

                      <div className='form-teacher__days'>
                      <h4>Q</h4>
                        <div className='form-teacher__input-day'>
                          <input type='checkbox' value='5' onClick={((event) => addOrRemove(teacherArrayDays, event.target.value))}/>
                          <label>Bloco 1</label>
                        </div>
                        <div className='form-teacher__input-day'>
                          <input type='checkbox' value='6' onClick={((event) => addOrRemove(teacherArrayDays, event.target.value))}/>
                          <label>Bloco 2</label>
                        </div>
                      </div>

                      <div className='form-teacher__days'>
                      <h4>Q</h4>
                        <div className='form-teacher__input-day'>
                          <input type='checkbox' value='7' onClick={((event) => addOrRemove(teacherArrayDays, event.target.value))}/>
                          <label>Bloco 1</label>
                        </div>
                        <div className='form-teacher__input-day'>
                          <input type='checkbox' value='8' onClick={((event) => addOrRemove(teacherArrayDays, event.target.value))}/>
                          <label>Bloco 2</label>
                        </div>
                      </div>

                      <div className='form-teacher__days'>
                      <h4>S</h4>
                        <div className='form-teacher__input-day'>
                          <input type='checkbox' value='9' onClick={((event) => addOrRemove(teacherArrayDays, event.target.value))}/>
                          <label>Bloco 1</label>
                        </div>
                        <div className='form-teacher__input-day'>
                          <input type='checkbox' value='10' onClick={((event) => addOrRemove(teacherArrayDays, event.target.value))}/>
                          <label>Bloco 2</label>
                        </div>
                      </div>
                
                  </div>
                </div>
              </div>
             <div className='form-teacher__right__bottom'>
                <div className='form-teacher__select-schedules'>
                  <h4 className='select-text'>Selecione as matérias</h4>
                  <div className='form-teacher__wrapper-schedules'>
                    <div className='form-teacher__wrapper-selectors'>
                      <input type='radio' name='a' id='a1' onClick={tab1Open}/>
                      <label for='a1'>Módulo 1</label>

                      <input type='radio' name='a' id='a2' onClick={tab2Open}/>
                      <label for='a2'>Módulo 2</label>

                      <input type='radio' name='a' id='a3' onClick={tab3Open}/>
                      <label for='a3'>Módulo 3</label>
                    </div>
                    <div> 
                      <div>
                        {
                          subjectsFirstModule.map((subject) => {
                            return (
                              <div className='form-teacher__input-schedules' style={{display: tab1State}}>
                                <input type="checkbox" name={subject.nome} id={subject.id} onClick={(() => {
                                  addOrRemove(teacherArraySubjects, subject.id)
                                })} />
                                <label for={subject.id}>{subject.nome}</label>
                              </div>
                            )
                          })
                        }
                      </div>
                      <div>
                        {
                          subjectsSecondModule.map((subject) => {
                            return (
                              <div className='form-teacher__input-schedules' style={{display: tab2State}}>
                                <input type="checkbox" name={subject.nome} id={subject.id} onClick={(() => {
                                  addOrRemove(teacherArraySubjects, subject.id)
                                })} />
                                <label for={subject.id}>{subject.nome}</label>
                              </div>
                            )
                          })
                        }
                      </div>
                      <div>
                        {
                          subjectsThirdModule.map((subject) => {
                            return (
                              <div className='form-teacher__input-schedules' style={{display: tab3State}}>
                                <input type="checkbox" name={subject.nome} id={subject.id} onClick={(() => {
                                  addOrRemove(teacherArraySubjects, subject.id)
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
              </div>
            </div>
          </div>
          <div className='form-teacher__wrapper-buttons'>
            <button className='form-teacher__button-cancel' type='button' onClick={() => closeModal()}>Cancelar</button>
            <button className='form-teacher__button-submit' type='submit'>Salvar</button>
          </div>
        </form>
      </div>
  )
}

export default CreateTeacher