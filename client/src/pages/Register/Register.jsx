import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import API from '../../API';

import Logo from '../../assets/LogoSoloSocBranca.png';
import { MdEmail } from 'react-icons/md';
import { PiBarcodeBold } from 'react-icons/pi';
import { BiSolidUser } from 'react-icons/bi';
import { RiLockPasswordLine } from 'react-icons/ri';
import { RiLockPasswordFill } from 'react-icons/ri';
import { GrFormView } from 'react-icons/gr';
import { GrFormViewHide } from 'react-icons/gr';
import { IoNewspaperOutline } from "react-icons/io5";

import Button from '../../components/Button/Button';

const Register = () => {

  const navigation = useNavigate()

  const [course, setCourse] = useState([])

  async function getCourse(){
    const res = await API.get("/user/course")
    setCourse(res.data.message)
  }

  useEffect(() =>{
    getCourse()
  }, [setCourse])

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

  const [userEmail, setUserEmail] = useState(null);
  const [userCourse, setUserCourse] = useState(null);
  const [idEtec, setIdEtec] = useState(null);
  const [userLogin, setUserLogin] = useState(null);
  const [userPassword, setUserPassword] = useState(null);
  const [confirmUserPassword, setConfirmUserPassword] = useState(null);
  
  async function handleRegister(e) {
    e.preventDefault();

    /*Verificação da Senha*/
    if (userPassword !== confirmUserPassword) {
      return alert("Senhas não coincidem!")
    }

    else if (userPassword < 8) {
      return alert("Insira uma senha com mais de 8 digitos!")
    }

    /*Verificação do Email*/
    var verificarEmail = /\S+@\S+\.\S+/;
    if(verificarEmail.test(userEmail) == false){
      return alert("Email Inválido")
    }
      
    const dataUser = {
      userEmail:userEmail,
      idEtec:idEtec,
      userLogin:userLogin,
      userPassword:userPassword,
      confirmPassword:confirmUserPassword,    
      course:userCourse    
    }

    try {
      const response = await API.post('/register', dataUser);
      const token = response.data.token;
      sessionStorage.setItem('token', token);
      
      alert("Usuário Cadastrado com sucesso!")
      setUserEmail("");
      setIdEtec("");
      setUserLogin("");
      setUserPassword("");
      setConfirmUserPassword("");
      setCourse("")

      navigation('/home')
      
    } catch(err) {
      alert(`Erro ao cadastrar.`)
      // alert(`Erro ao cadastrar. ${err.response.data.msg}`)
    }
  }

  console.log(userCourse)

  return (
    <div className='register'>
      <div className="register__card">
        <div className='register__left'>
          <h1 className='register__title'>Cadastro</h1>
          <form className='login__form' onSubmit={handleRegister}>
            <div className='register__item'>
              <MdEmail className='register__icon'/>
              <div className="register__input">
                  <input type="text" name="" id="" required
                  value={userEmail} onChange={(event)=> setUserEmail(event.target.value)}/>
                  <p className='register__placeholder'>Email</p>
              </div>
            </div>
            <div className='register__item'>
              <IoNewspaperOutline className='register__icon'/>
              <select name="course" id="course" onChange={(e) => (setUserCourse(e.target.value))}>
                {
                  course.map((course) =>{
                    return(
                      <option value={course.id}>{course.descricao}</option>
                    )
                  })
                }
              </select>
            </div>
            <div className='register__wrapper-input'>
              <div className='register__item'>
                <PiBarcodeBold className='register__icon'/>
                <div className="register__input">
                  <input type="text" name="" id="" required
                  value={idEtec} onChange={(event)=> setIdEtec(event.target.value)}/>
                  <p className='register__placeholder'>Cód. ETEC</p>
                </div>
              </div>
              <div className='register__item'>
                <BiSolidUser className='register__icon'/>
                <div className="register__input">
                  <input type="text" name="" id="" required
                  value={userLogin} onChange={(event)=> setUserLogin(event.target.value)}/>
                  <p className='register__placeholder'>Nome Usuário</p>
                </div>             
              </div>
            </div>
            <div className="register__item">
              <RiLockPasswordLine className='register__icon'/>
              <div className="register__input">
                <input type={inputType} name="" id="" required
                value={userPassword} onChange={(event)=> setUserPassword(event.target.value)}/>
                <p className='register__placeholder'>Senha min. 8 caracteres</p>
              </div>
            </div>
            <div className="register__item">
              <RiLockPasswordFill className='register__icon'/>
              <div className="register__input">
                <input type={inputType} name="" id="" required
                value={confirmUserPassword} onChange={(event)=> setConfirmUserPassword(event.target.value)}/>
                <p className='register__placeholder'>Repetir Senha</p>
              </div>
              <button className='bg-transparent login__icon' onClick={showHiddenPassword} type="button">{inputPasswordIcon}</button>
            </div>
            <Link className="register__link" to="/"><p>Já tem uma conta? Entre agora mesmo</p></Link>
            <Button type="submit" btnText="Criar conta"/>
          </form>
        </div>
        <div className="register__right">
          <img className='register__logo' src={Logo}/>
          <h1 className='login__gretings'>Seja Bem Vindo <br />
          ao SOH</h1>
      </div>
      </div>
    </div>
  )
}

export default Register;