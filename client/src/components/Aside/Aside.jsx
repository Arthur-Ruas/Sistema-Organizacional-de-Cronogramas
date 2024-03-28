import React from 'react';
import Logo from '../../assets/Logo SOC ROSA2.png';

import { FaChalkboardTeacher } from 'react-icons/fa';
import { FaCircleUser } from "react-icons/fa6";
import { LuSettings } from 'react-icons/lu';
import { CgLogOut } from 'react-icons/cg';
import { IoHome } from "react-icons/io5";
import { Link } from 'react-router-dom';

const Aside = () => {
  return (
    <aside className='aside'>
        <h1 className='aside__logo'>
            <img src={Logo} alt="" />
            OC
        </h1>
        <ul className='aside__list'>
            <li className='aside__item'>
                <Link to="/home" className='aside__link'>
                    <IoHome className='aside__icon'/> 
                    <p className='aside__text'>Inicio</p>
                </Link>                  
            </li>
            <li className='aside__item'>
                <Link to="/teachers" className='aside__link'>
                    <FaChalkboardTeacher className='aside__icon'/> 
                    <p className='aside__text'>Professores</p>
                </Link>                  
            </li>
            <li className='aside__item'>
                <Link className='aside__link'>
                    <FaCircleUser className='aside__icon'/>
                    <p className='aside__text'>Conta</p>
                </Link>
            </li>
            <li className='aside__link'>
                <CgLogOut className='aside__icon'/> 
                <p className='aside__text'>Sair</p>
            </li>
        </ul>
    </aside>
  )
}

export default Aside;