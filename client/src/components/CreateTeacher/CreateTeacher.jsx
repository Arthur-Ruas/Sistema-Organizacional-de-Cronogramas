import React, { useEffect, useState } from 'react'

import Image from '../../assets/profile.png'

const CreateTeacher = ({show}) => {

    {/*Carregar imagem no card*/ }
    const [file, setFile] = useState(Image)

    function getFile(event) {
    setFile(URL.createObjectURL(event.target.files[0]))
    }


    {/*Seleção de Cor*/ }
    const cores =
    [
        "#f44336", "#e91e63", "#9c27b0", "#673ab7",
        "#3f51b5", "#2196f3", "#00bcd4", "#009688",
        "#4caf50", "#ffeb3b", "#ff9800", "#ff5722"
    ]

    const [colorCard, setColorCard] = useState(null);

  return (
    <div className="form-teacher" style={{ border: `5px solid ${colorCard}`, display: `${show}` }}>
        <form>
          <div className='form-teacher__esquerdo'>
            <div className='form-teacher__input-foto'>
              <input type="file" id='foto' onChange={getFile} />
              <img src={file} id='teacherile-pic' alt='default-pic' />
              <label for='foto' id='input-file' accept="image/jpeg, image/png, image/jpg">Colocar Imagem</label>
            </div>
            <div className="form-teacher__input">
              <input type='text' required
                />
              <p className='form-teacher__placeholder'>Nome</p>
            </div>
            <div className='form-teacher__select-cores'>
              <h4 className='select-text'>Selecione a cor do card</h4>
              <div className='form-teacher__select-cores__wrapper'>
                {
                  cores.map((cor) => {
                    return (
                      <div className='form-teacher__select-cores__items' style={{ backgroundColor: `${cor}` }} onClick={() => setColorCard(cor)}>

                      </div>
                    )
                  })
                }
              </div>
            </div>
            <div className='form-teacher__btns'>
              <button className='form-teacher__btns__cancelar' type='button'>Cancelar</button>
              <button className='form-teacher__btns__submit' type='submit'>Salvar</button>
            </div>
          </div>
          <div className='form-teacher__direito'>
            <div className='form-teacher__select-dias'>
              <h4 className='select-text'>Selecione os dias</h4>
              <div className='form-teacher__div-dias'>
                
              </div>
            </div>
            <div className='form-teacher__select-materias'>
              <h4 className='select-text'>Selecione as matérias</h4>
              <div className='form-teacher__div-materias'>
                
              </div>
            </div>
            <div className='form-teacher__observacao'>
                <h4 className='select-text'>Observações</h4>
                <input type="text" maxlength="150"
                />
            </div>
          </div>
        </form>
      </div>
  )
}

export default CreateTeacher