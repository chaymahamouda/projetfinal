import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Reservation from './Reservation';


function Description({el}) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  return (
    <div className='ppp' style={{width:"100%"}}>
      <div className='aaa' style={{display:"flex", justifyContent:'space-around'}}>
    <Button variant="primary" onClick={handleShow} >
     see more
    </Button>

    <Modal show={show} onHide={handleClose}  size="xl" style={{backgroundColor:"rgba(103, 186, 228, 0.731)"}}>
      <Modal.Header  style={{backgroundColor:"rgba(106, 186, 228, 0.731)"}} closeButton>
        <Modal.Title style={{marginLeft:"500px", color:"white"}}>{el.name}: </Modal.Title> 
        <Modal.Title style={{marginLeft:"10px",color:"white"}}> {el.prix}</Modal.Title>
      </Modal.Header>
      <Modal.Body >
        <div style={{display:"flex", marginTop:"20px",height:"auto"}}>
        <img src={el.url} style={{marginTop:"10px", width:"40%",marginBottom:"10px",marginLeft:"30px"}}/>
        <p style={{marginLeft:"20px"}}>{el.description}</p>
        </div>
      </Modal.Body>
      <Modal.Footer >
        <div style={{width:"100%"}}>
      <Reservation/>
      </div>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button> 
        
       
    </Modal.Footer>

  
    </Modal>  
     </div>
     
     </div>
  )
}

export default Description