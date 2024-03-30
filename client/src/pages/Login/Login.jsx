import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import API from '../../API';

import Logo from '../../assets/LogoSoloSocBranca.png';
import { PiBarcodeBold } from 'react-icons/pi';
import { BiSolidUser } from 'react-icons/bi';
import { RiLockPasswordLine } from 'react-icons/ri';
import { GrFormView } from 'react-icons/gr';
import { GrFormViewHide } from 'react-icons/gr';
import { FaGithub } from "react-icons/fa";

import Button from '../../components/Button/Button';

const Login = () => {

  const navigation = useNavigate()

  const [inputType, setInputType] = useState("password")
  const [inputPasswordIcon, setInputPasswordIcon] = useState(<GrFormViewHide className='form__items__icones'/>)

  function showHiddenPassword(){
    setInputType("text")
    setInputPasswordIcon(<GrFormView className='form__items__icones'/>)

    if(inputType == "text"){
      setInputType("password")
      setInputPasswordIcon(<GrFormViewHide className='form__items__icones'/>)
    }
  }

  const [idEtec, setIdEtec] = useState('')
  const [userLogin, setUserLogin] = useState('')
  const [userPassword, setUserPassword] = useState('')

  async function handleLogin(event) {
    event.preventDefault()

    const dataLogin = { idEtec, userLogin, userPassword }
    try {
      await API.post('/login', dataLogin)
      navigation('/home')

    } catch (error) {
      alert(`Login invalido!`)
    }
  }

  return (
    <div className='login'>
        <div className='login__card'>
          <div className="login__left">
            <h1 className='login__title'>Login</h1>
            <form class='login__form' onSubmit={handleLogin}>
              <div className='login__wrapper-input'>
                <div className='login__item'>
                  <PiBarcodeBold className='login__icon'/>
                  <div className='login__input'>
                    <input type="text" name="" id="" required 
                    onChange={(event)=> setIdEtec(event.target.value)}/>
                    <p className='login__placeholder'>Cód. ETEC</p>
                  </div>             
                </div>
              <div className='login__item'>
                <BiSolidUser className='login__icon'/>
                <div className='login__input'>
                  <input type="text" name="" id="" required
                  onChange={(event)=> setUserLogin(event.target.value)}/>
                  <p className='login__placeholder'>Nome Usuário</p>
                </div>
              </div>
            </div>
            <div className="login__item">
              <RiLockPasswordLine className='login__icon'/>
              <div className='login__input'>
                <input type={inputType} name="" id="" required 
                onChange={(event)=> setUserPassword(event.target.value)}/>
                <p className='login__placeholder'>Senha</p>
              </div>
              <button className='bg-transparent login__icon' onClick={showHiddenPassword} type="button">{inputPasswordIcon}</button>
            </div>
            <Link className="login__link" to="/register">
              <p>Não tem uma conta? Crie agora mesmo</p>
            </Link>
            <Button type="submit" btnText="Entrar"/>
          </form>
          <div className="login__extra">
            <div className="login__hr">
              <hr/>
              <p>Conheça mais</p>
            </div>
            <div className="login__social-midia">
              <a target="_blank" href="https://github.com/Arthur-Ruas/Sistema-Organizacional-de-Cronogramas.git">
                <FaGithub className='login__icon--social-midia'/>
              </a>
            </div>
          </div>
        </div>
        <div className="login__right">
            <img class='login__logo' src={Logo}/>
            <h1 className='login__gretings'>Seja Bem Vindo <br />
            ao SOC</h1>
        </div>
      </div>
    </div>
  )
}

export default Login;