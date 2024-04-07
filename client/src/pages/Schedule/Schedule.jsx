import React, { useState } from 'react'
import API from '../../API';

const Schedule = () => {

    const [teste1, setTeste1] = useState("none");
    const [teste2, setTeste2] = useState("none");

    const [nome, setNome] = useState('')

    const [testeArray, setTesteArray] = useState([]);
    const [matArray, setMatArray] = useState([]);

    async function pegarID(id, bloco){

        const resTeste = await API.get("/teste/" + id + "/" + bloco);

        setTesteArray(resTeste.data.message)
        console.log(testeArray)
    }
 

  return (
    <div className='schedule'>
        <div className='dia'>
            <div className='card-dias' onClick={() =>{setTeste1("block"); if((teste1) == "block"){setTeste1("none")}; pegarID(15, 1)}}>
                <h4>{nome}</h4>
                <select>
                    
                </select>
            </div>
            <div className='prof' style={{display: teste1}}>
                {
                    testeArray.map((array) =>{
                        return(
                            <p onClick={() =>{setNome(array.Nome)}}>{array.Nome}{array.ID}</p>
                        )
                    })
                }               
            </div>
        </div>
        <div className='dia'>
            <div className='card-dias' onClick={() =>{setTeste2("block"); if((teste2) == "block"){setTeste2("none")}; pegarID(15, 2)}}>
                <h4>{nome}</h4>
            </div>
            <div className='prof' style={{display: teste2}}>
                {
                    testeArray.map((array) =>{
                        return(
                            <p onClick={() =>{setNome(array.Nome)}}>{array.Nome}{array.ID}</p>
                        )
                    })
                }
            </div>
        </div>
    </div>
  )
}

export default Schedule