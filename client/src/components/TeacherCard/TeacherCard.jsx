import React from 'react';
import teacherPicture from '../../assets/profile.png';

const TeacherCard = ({teacherCardColor, teacherName}) => {
  return (
      <div className='card-prof' style={{backgroundColor: `${teacherCardColor}`}}>
          <div className='card-prof__esquerdo'>
              <img className="card-prof__esquerdo__foto" src={teacherPicture} alt={`Foto do(a) professor(a) ${teacherName}`}/>
              <h4 className='card-prof__esquerdo__nome'>{teacherName}</h4>
          </div>    
      </div>
  )
}

export default TeacherCard;