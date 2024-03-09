import React, { useState } from 'react';
import '../../css/styles.css';
import logo from '../../assets/logo branca.png';

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

  return (
    <div className='register'>
        <div className='form'>
          <div className="form__esquerdo">
            <div className='form__form'>
              <h1 className='form__title'>Cadastro</h1>
              <form>
                <div className='form__items emailInput'>
                  <MdEmail className='form__items__icones'/>
                  <div className="form__items__input">
                      <input type="text" name="" id="" required
                      />
                      <p className='form__items__placeholder'>Email</p>
                  </div>
                </div>
                <div className='form__div'>
                  <div className='form__items codInput'>
                    <PiBarcodeBold className='form__items__icones'/>
                    <div className="form__items__input">
                      <input type="text" name="" id="" required
                      />
                      <p className='form__items__placeholder'>Cód. ETEC</p>
                    </div>
                  </div>
                  <div className='form__items rmInput'>
                    <BiSolidUser className='form__items__icones'/>
                    <div className="form__items__input">
                      <input type="text" name="" id="" required
                      />
                      <p className='form__items__placeholder'>Nome Usuário</p>
                    </div>             
                  </div>
                </div>
                <div className="form__items senhaInput">
                  <RiLockPasswordLine className='form__items__icones'/>
                  <div className="form__items__input">
                    <input name="" id="" required
                    />
                    <p className='form__items__placeholder'>Senha min. 8 caracteres</p>
                  </div>
                </div>
                <div className="form__items repetirSenhaInput">
                  <RiLockPasswordFill className='form__items__icones'/>
                  <div className="form__items__input">
                    <input name="" id="" required
                    />
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