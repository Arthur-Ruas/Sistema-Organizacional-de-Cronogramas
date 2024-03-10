import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import API from '../../API';

import Logo from '../../assets/logo branca.png';
import { MdEmail } from 'react-icons/md';
import { PiBarcodeBold } from 'react-icons/pi';
import { BiSolidUser } from 'react-icons/bi';
import { RiLockPasswordLine } from 'react-icons/ri';
import { RiLockPasswordFill } from 'react-icons/ri';
import { GrFormView } from 'react-icons/gr';
import { GrFormViewHide } from 'react-icons/gr';

import Button from '../../components/Button/Button';

const Register = () => {

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

  const [userEmail, setUserEmail] = useState(null);
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
      
    const dataUser = {userEmail, idEtec, userLogin, userPassword}

    try {
      await API.post('/register', dataUser);

      alert("Usuário Cadastrado com sucesso!")
      setUserEmail("");
      setIdEtec("");
      setUserLogin("");
      setUserPassword("");
      setConfirmUserPassword("");

      navigation('/home')
      
    } catch(err) {
      alert(`Erro ao cadastrar. ${err}`)
    }
  }

  return (
    <div className='register'>
        <div className='form'>
          <div className="form__esquerdo">
            <div className='form__form'>
              <h1 className='form__title'>Cadastro</h1>
              <form onSubmit={handleRegister}>
              <div className='form__items emailInput'>
                  <MdEmail className='form__items__icones'/>
                  <div className="form__items__input">
                      <input type="text" name="" id="" required
                      value={userEmail} onChange={(event)=> setUserEmail(event.target.value)}/>
                      <p className='form__items__placeholder'>Email</p>
                  </div>
                </div>
                <div className='form__div'>
                  <div className='form__items codInput'>
                    <PiBarcodeBold className='form__items__icones'/>
                    <div className="form__items__input">
                      <input type="text" name="" id="" required
                      value={idEtec} onChange={(event)=> setIdEtec(event.target.value)}/>
                      <p className='form__items__placeholder'>Cód. ETEC</p>
                    </div>
                  </div>
                  <div className='form__items rmInput'>
                    <BiSolidUser className='form__items__icones'/>
                    <div className="form__items__input">
                      <input type="text" name="" id="" required
                      value={userLogin} onChange={(event)=> setUserLogin(event.target.value)}/>
                      <p className='form__items__placeholder'>Nome Usuário</p>
                    </div>             
                  </div>
                </div>
                <div className="form__items senhaInput">
                  <RiLockPasswordLine className='form__items__icones'/>
                  <div className="form__items__input">
                    <input type={inputType} name="" id="" required
                    value={userPassword} onChange={(event)=> setUserPassword(event.target.value)}/>
                    <p className='form__items__placeholder'>Senha min. 8 caracteres</p>
                  </div>
                </div>
                <div className="form__items repetirSenhaInput">
                  <RiLockPasswordFill className='form__items__icones'/>
                  <div className="form__items__input">
                    <input type={inputType} name="" id="" required
                    value={confirmUserPassword} onChange={(event)=> setConfirmUserPassword(event.target.value)}/>
                    <p className='form__items__placeholder'>Repetir Senha</p>
                  </div>
                  <button className='bg-transparent' onClick={showHiddenPassword} type="button">{inputPasswordIcon}</button>
                </div>
                <Link className="form__link" to="/"><p>Já tem uma conta? Entre agora mesmo</p></Link>
                <Button type="submit" btnText="Criar conta"/>
              </form>
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

export default Register;