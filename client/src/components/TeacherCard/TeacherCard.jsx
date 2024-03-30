import React from 'react';
import teacherPicture from '../../assets/profile.png';

const TeacherCard = ({teacherCardColor, teacherName, teacherId}) => {
  return (
      <div className='card-teacher' style={{backgroundColor: `${teacherCardColor}`}}>
          <div className='card-teacher__esquerdo'>
              <img className="card-teacher__esquerdo__foto" src={teacherPicture} alt={`Foto do(a) professor(a) ${teacherName}`}/>
              <h4 className='card-teacher__esquerdo__nome'>{teacherName}</h4>
          </div>    
      </div>
  )
}

export default TeacherCard;