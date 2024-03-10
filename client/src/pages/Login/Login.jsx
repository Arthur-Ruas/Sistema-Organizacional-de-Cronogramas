import React, { useState } from 'react'
import Logo from '../../assets/logo branca.png';

import API from '../../API';

import { PiBarcodeBold } from 'react-icons/pi';
import { BiSolidUser } from 'react-icons/bi';
import { RiLockPasswordLine } from 'react-icons/ri';
import { GrFormView } from 'react-icons/gr';
import { GrFormViewHide } from 'react-icons/gr';
import { Link, useNavigate } from 'react-router-dom';

import { FaGithub } from "react-icons/fa";
import Button from '../../components/Button/Button';

const Login = () => {

  const [userName, setUserName] = useState('')
  const [userPassword, setUserPassword] = useState('')
  const [idEtec, setIdEtec] = useState('')

  const navigation = useNavigate()

  async function handleLogin(event) {
    event.preventDefault()

    const dataUser = { userName, userPassword, idEtec }
    try {
      await API.post('/login', dataUser)
      navigation('/home')

    } catch (error) {
      alert(`Login invalido!`)
    }
  }

  return (
    <div className='login'>
        <div className='form'>
          <div className="form__esquerdo">
            <div className='form__form'>
              <h1 className='form__title'>Login</h1>
              <form onSubmit={handleLogin}>
                <div className='form__div'>
                  <div className='form__items input-cod'>
                    <PiBarcodeBold className='form__items__icones'/>
                    <div className='form__items__input'>
                      <input type="text" name="" id="" required 
                      onChange={(event)=> setIdEtec(event.target.value)}/>
                      <p className='form__items__placeholder'>Cód. ETEC</p>
                    </div>             
                  </div>
                  <div className='form__items input-login'>
                    <BiSolidUser className='form__items__icones'/>
                    <div className='form__items__input'>
                      <input type="text" name="" id="" required
                      onChange={(event)=> setUserName(event.target.value)}/>
                      <p className='form__items__placeholder'>Nome Usuário</p>
                    </div>
                  </div>
                </div>
                <div className="form__items input-senha">
                  <RiLockPasswordLine className='form__items__icones'/>
                  <div className='form__items__input'>
                    <input type='' name="" id="" required 
                    onChange={(event)=> setUserPassword(event.target.value)}/>
                    <p className='form__items__placeholder'>Senha</p>
                  </div>
                  <button className='btnTransparente' type="button"></button>
                </div>
                <Link className="form__link" to="/register">
                  <p>Não tem uma conta? Crie agora mesmo</p>
                </Link>
                <Button btnText="Entrar" btnType='submit'/>
              </form>
              <div className="form__extra">
                <div className="form__extra__hr">
                  <hr className='form__hr'/>
                  <p>Conheça mais</p>
                </div>
                <div className="form__redes-sociais">
                  <a target="_blank" href="https://github.com/Arthur-Ruas/Sistema-Organizacional-de-Cronogramas.git">
                    <FaGithub className='form__redes-sociais__icon'/>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="form__direito">
            <header className='form__direito__header'>
              <img src={Logo}/>
            </header>
            <div className='form__direito__conteudo'>
              <h1 className='form__direito__texto'>Seja Bem Vindo <br />
              ao SOC</h1>
            </div>
          </div>
     </div>
    </div>
  )
}

export default Login;