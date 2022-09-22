import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { addvoyage, getvoyages } from '../../JS/Almasslice/Almasslice';
function AddVoyage({ping , setping}) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const dispatch= useDispatch();
  const navigate= useNavigate();
  const [voyage, setvoyage] = useState({
    url:"",
    name: "",
   duree:"",
   description:"",
    categorie: "",
    prix: "",

  })
  return (
    <div style={{marginTop:"150px"}}>
 
  {/* <Link to="/add voyage"> <button style={{background:"#67bbe4c7",color: "white", padding: "5px 10px",textAlign: "center",marginTop:"140px" }}></button></Link>  */}



<Button variant="primary" onClick={handleShow}  >
Add New Trip
</Button>
<Link to = "/dashboard"><Button variant="danger" onClick={handleClose} style={{marginLeft:"5px"}} >
Close
</Button></Link>

<Modal show={show} onHide={handleClose}  size="ml" style={{backgroundColor:"rgba(103, 186, 228, 0.731)"}}>
<Modal.Header style={{backgroundColor:"rgba(106, 186, 228, 0.731)"}} closeButton>
        <Modal.Title style={{marginLeft:"150px"}}> <p>Add Trip</p></Modal.Title> 
      </Modal.Header>
  <Modal.Body >
  <div style={{width:"50%", marginLeft:"150px"}}>
    <p>Image:</p>
        <input type="text" onChange={(e)=>setvoyage({...voyage, url:e.target.value})}/>
        <p>Name:</p>
        <input type="text" onChange={(e)=>setvoyage({...voyage, name:e.target.value})}/>
        <p>Duration:</p>
        <input type="text" onChange={(e)=>setvoyage({...voyage, duree:e.target.value})}/>
        <p>Description:</p>
        <input type="text" onChange={(e)=>setvoyage({...voyage, description:e.target.value})}/>
        <p>Category:</p>
        <select onChange={(e)=>setvoyage({...voyage, categorie:e.target.value})}>
        <option ></option>
        <option >Voyage organisée</option>
        <option >Voyage promo</option>
        <option >Voyage de Noce</option>
        </select>
        <p>Price:</p>
        <input type="text"onChange={(e)=>setvoyage({...voyage, prix:e.target.value})}/>
  </div>
  </Modal.Body>
  <Modal.Footer >
    
    <Button variant="primary" onClick={()=>{
      dispatch(addvoyage(voyage));  setping(!ping);
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

export default AddVoyage