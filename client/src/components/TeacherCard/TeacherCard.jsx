import React, { useEffect, useState } from 'react';
import API from '../../API';
import teacherPicture from '../../assets/profile.png';

const TeacherCard = ({teacherCardColor, teacherName, teacherId}) => {

    const [teacherData, setTeacherData] = useState()

    async function getTeacherData(id){
        const resTeacherData = await API.get("/teacherInfo/data/" + id);
        setTeacherData(resTeacherData.data.message[0].num_aulas)
    }

    useEffect(() =>{
        getTeacherData(teacherId)
    }, [])

  return (
      <div className='card-teacher' style={{backgroundColor: `${teacherCardColor}`}}>
          <div className='card-teacher__esquerdo'>
              <img className="card-teacher__esquerdo__foto" src={teacherPicture} alt={`Foto do(a) professor(a) ${teacherName}`}/>
              <h4 className='card-teacher__esquerdo__nome'>{teacherName}</h4>
              <h4>{teacherData}</h4>
          </div>    
      </div>
  )
}

export default TeacherCard;