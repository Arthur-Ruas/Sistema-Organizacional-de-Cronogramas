import React from 'react';

import Logo from '../../assets/LogoSocBranca.png';
import { FaChalkboardTeacher } from 'react-icons/fa';
import { FaCircleUser } from "react-icons/fa6";
import { LuSettings } from 'react-icons/lu';
import { CgLogOut } from 'react-icons/cg';
import { IoHome } from "react-icons/io5";
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className='sidebar'>
        <img className='sidebar__logo' src={Logo} alt="" />
        <ul className='sidebar__list'>
            <li className='sidebar__item'>
                <Link to="/home" className='sidebar__link'>
                    <IoHome className='sidebar__icon'/> 
                    <p className='sidebar__text'>Inicio</p>
                </Link>                  
            </li>
            <li className='sidebar__item'>
                <Link to="/teachers" className='sidebar__link'>
                    <FaChalkboardTeacher className='sidebar__icon'/> 
                    <p className='sidebar__text'>Professores</p>
                </Link>                  
            </li>
            <li className='sidebar__item'>
                <Link className='sidebar__link'>
                    <FaCircleUser className='sidebar__icon'/>
                    <p className='sidebar__text'>Conta</p>
                </Link>
            </li>
            <li className='sidebar__link'>
                <CgLogOut className='sidebar__icon'/> 
                <p className='sidebar__text'>Sair</p>
            </li>
        </ul>
    </div>
  )
}

export default Sidebar;