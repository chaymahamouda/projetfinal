import React, { useState } from 'react'
import { Button, Modal } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { deletevoyage } from '../../JS/Almasslice/Almasslice';
import AddVoyage from './Addvoyage';
import EditVoyage from './EditVoyage';



function Voyages({voyage, ping ,setping}) {
    const voyages=useSelector((state)=>state.voyage.voyages)
    const dispatch= useDispatch();
   

  return (
<div style={{width:"100%", height:"auto"}}>
<AddVoyage ping={ping} setping={setping}/>



    <div style={{marginTop: "30px",marginLeft: "473px"}}>
        <table border="2px"  style={{border:"2px solid grey", width:"100%",
        marginLeft:"-100px",backgroundColor:"#67bbe4c7"}}>
            <tr>
                <th>Image</th>
                <th>Name</th>
                <th>Period</th>
              
                <th>Category</th>
                <th>Price</th>
                <th></th>
                <th></th>

            </tr>
            {voyages? (
        voyages.map((el)=> <tr><td ><img style={{width:"25px", height:"25px"}} src={el.url}/></td>
        <td>{el.name}</td>
        <td>{el.duree}</td>
        <td>{el.categorie}</td>
        <td> {el.prix}</td>
        <td><EditVoyage el={el} ping={ping} setping={setping}/></td>
        <td> <button onClick={()=>{
          setTimeout(() => {
            dispatch(deletevoyage(el._id));
            setping(!ping)

        }, 2000);
        }} style={{backgroundColor:"#dc3545",width:"30px",height:"30px"}}>x</button></td></tr>)):
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXWo6TRfI5lrw1cD6PNztCeEQx_dwBtp7sbK2USAF7H7y0D8_LkNNp_I9dion8KHIb11s&usqp=CAU"/>
        }
 
    

        </table>
    </div>
    </div>
  )
}

export default Voyages