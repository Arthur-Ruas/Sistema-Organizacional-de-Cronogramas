import React from 'react';

import Aside from '../../components/Aside/Aside';
import Header from '../../components/Header/Header';

const Home = () => {
  return (
    <div className='home'>
        <Aside />
        <div className="container">
            <Header />
        </div>
    </div>
  )
}

export default Home;