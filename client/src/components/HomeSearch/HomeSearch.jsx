import React from 'react';

const HomeSearch = ({openModal}) => {
  return (
    <div className='home__content'>
        <div className='home__search'>
          <div className='home__search__esquerdo'>
            <h4 className='home__search__title'>Horários</h4>
          </div>
          <div className='home__search__direito'>
            <button className='button-criar' onClick={() => openModal()}
              >+ Criar Horário</button>
          </div>
        </div>
    </div>
  )
}

export default HomeSearch;