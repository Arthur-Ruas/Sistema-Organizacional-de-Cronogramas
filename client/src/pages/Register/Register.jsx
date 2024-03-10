import React, { useState } from 'react';
import logo from '../../assets/logo branca.png';

import API from '../../API';

import { MdEmail } from 'react-icons/md';
import { PiBarcodeBold } from 'react-icons/pi';
import { BiSolidUser } from 'react-icons/bi';
import { RiLockPasswordLine } from 'react-icons/ri';
import { RiLockPasswordFill } from 'react-icons/ri';
import { GrFormView } from 'react-icons/gr';
import { GrFormViewHide } from 'react-icons/gr';
import { Link } from 'react-router-dom';
import Button from '../../components/Button/Button';

const Register = () => {

  const [userEmail, setUserEmail] = useState(null);
  const [idEtec, setIdEtec] = useState(null);
  const [userLogin, setUserLogin] = useState(null);
  const [userPassword, setUserPassword] = useState(null);
  const [confirmUserPassword, setConfirmUserPassword] = useState(null);
  
  async function handleRegister(e) {
    e.preventDefault();

    if (userPassword !== confirmUserPassword) {
      return alert("Senhas não coincidem!")
    }

    else if (userPassword < 8) {
      return alert("Insira uma senha com mais de 8 digitos!")
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
                      onChange={(event)=> setUserEmail(event.target.value)}/>
                      <p className='form__items__placeholder'>Email</p>
                  </div>
                </div>
                <div className='form__div'>
                  <div className='form__items codInput'>
                    <PiBarcodeBold className='form__items__icones'/>
                    <div className="form__items__input">
                      <input type="text" name="" id="" required
                      onChange={(event)=> setIdEtec(event.target.value)}/>
                      <p className='form__items__placeholder'>Cód. ETEC</p>
                    </div>
                  </div>
                  <div className='form__items rmInput'>
                    <BiSolidUser className='form__items__icones'/>
                    <div className="form__items__input">
                      <input type="text" name="" id="" required
                      onChange={(event)=> setUserLogin(event.target.value)}/>
                      <p className='form__items__placeholder'>Nome Usuário</p>
                    </div>             
                  </div>
                </div>
                <div className="form__items senhaInput">
                  <RiLockPasswordLine className='form__items__icones'/>
                  <div className="form__items__input">
                    <input name="" id="" required
                    onChange={(event)=> setUserPassword(event.target.value)}/>
                    <p className='form__items__placeholder'>Senha min. 8 caracteres</p>
                  </div>
                </div>
                <div className="form__items repetirSenhaInput">
                  <RiLockPasswordFill className='form__items__icones'/>
                  <div className="form__items__input">
                    <input name="" id="" required
                    onChange={(event)=> setConfirmUserPassword(event.target.value)}/>
                    <p className='form__items__placeholder'>Repetir Senha</p>
                  </div>
                  <button className='btnTransparente' type="button"></button>
                </div>
                <Link className="form__link" to="/"><p>Já tem uma conta? Entre agora mesmo</p></Link>
                <Button btnText='Criar Conta' btnType='submit'/>
              </form>
            </div>
          </div>
          <div className="form__direito">
            <header className='form__direito__header'>
              <img src={logo}/>
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