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
          <div className='card-teacher__teacher'>
              <img className="card-teacher__teacher__foto" src={teacherPicture} alt={`Foto do(a) professor(a) ${teacherName}`}/>
              <h4 className='card-teacher__teacher__nome'>{teacherName}</h4>
          </div>    
          <div className='card-teacher__day'>
           
          </div>
      </div>
  )
}

export default TeacherCard;