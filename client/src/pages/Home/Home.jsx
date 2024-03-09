import React from 'react';
import '../../css/styles.css';

import Aside from '../../components/Aside/Aside';
import Header from '../../components/Header/Header';

const Home = () => {
  return (
    <div className='home'>
        <Aside />
        <div className="container">
            <Header />

            <div className='home__content'>
                <button className='button-criar'>+ Criar Horario</button>    
            </div>
        </div>
    </div>
  )
}

export default Home;