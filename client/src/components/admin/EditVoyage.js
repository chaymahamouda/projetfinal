import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {  getvoyages, updatevoyage } from '../../JS/Almasslice/Almasslice';
function EditVoyage({ping , setping, el}) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const dispatch= useDispatch();
  const navigate= useNavigate();
  const [edited, setedited] = useState({
    

  })
  return (
    <div style={{marginTop:"20px"}}>
 
  {/* <Link to="/add voyage"> <button style={{background:"#67bbe4c7",color: "white", padding: "5px 10px",textAlign: "center",marginTop:"140px" }}></button></Link>  */}



<Button variant="primary" onClick={handleShow} style={{width:"50px", height:"50px",}} >
Edit
</Button>

<Modal show={show} onHide={handleClose}  size="xl">
<Modal.Header closeButton>
        <Modal.Title> <p>Edit Trip</p></Modal.Title> 
      </Modal.Header>
  <Modal.Body >
  <div style={{width:"100%"}}>
    <p>Image:</p>
        <input type="text" placeholder={el.url} onChange={(e)=>setedited({...edited, url:e.target.value})}/>
        <p>Name:</p>
        <input type="text" placeholder={el.name} onChange={(e)=>setedited({...edited, name:e.target.value})}/>
        <p>Duration:</p>
        <input type="text" placeholder={el.duree} onChange={(e)=>setedited({...edited, duree:e.target.value})}/>
        <p>Description:</p>
        <input type="text" placeholder={el.description} onChange={(e)=>setedited({...edited, description:e.target.value})}/>
        <p>Category:</p>
        <select onChange={(e)=>setedited({...edited, categorie:e.target.value})}>
        <option >Voyage organisée</option>
        <option >Voyage promo</option>
        <option >Voyage de Noce</option>
        </select>
        <p>Price:</p>
        <input type="text" placeholder={el.prix} onChange={(e)=>setedited({...edited, prix:e.target.value})}/>
  </div>
  </Modal.Body>
  <Modal.Footer >
    
    <Button variant="primary" onClick={()=>{
      dispatch(updatevoyage({id:el._id, edited})); setping(!ping);
      setTimeout(() => {
        handleClose();

    }, 2000);
      /* setTimeout(() => {
        
        dispatch(getvoyages())
       
       
      }, 1000);
       */
      }}>
      Submit
    </Button> 
    
   
</Modal.Footer>


</Modal>  
 </div>

  )
}

export default EditVoyage