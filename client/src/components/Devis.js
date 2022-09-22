import React from 'react'
import "./devis.css"
import { Button, Col, Form, Row } from 'react-bootstrap'
function Devis() {
  return (
    <div>
        <div className='devis'>
        <div className='titre' style={{marginTop:'120px',width:'100%'}}>
          <div className='deviss'>
            <h1>Demande d'un devis de voyage</h1>
            <p>ALMAS TRAVEL vous accompagne pour préparer votre voyage selon vos préférences et vos budgets.

Veuillez remplir ce formulaire avec le maximum d’informations pour mieux vous servir et profiter des conseils de nos conseillers.</p>

<Form className='forms'>
      <Form.Group  as={Row} className="mb-3" controlId="formHorizontalEmail">
        <Form.Label column sm={2}>
         
        </Form.Label>
        <Col sm={10}>
          <Form.Control style={{width:"450px"}} type="text" placeholder="nom & prenom" />
        </Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-3" controlId="formHorizontalPassword">
        <Form.Label column sm={2}>
          
        </Form.Label>
        <Col sm={10}>
          <Form.Control style={{width:"450px"}} type="email" placeholder="email" />
        </Col>
      </Form.Group>
      <Form.Group   as={Row} className="mb-3" controlId="formHorizontalEmail">
        <Form.Label column sm={2}>
         
        </Form.Label>
        <Col sm={10}>
          <Form.Control style={{width:"450px"}}  type="text" placeholder=" Téléphone" />
        </Col>
      </Form.Group>
      <Form.Group   as={Row} className="mb-3" controlId="formHorizontalEmail">
        <Form.Label  column sm={2}>
         
        </Form.Label>
        <Col sm={10}>
          <Form.Control style={{width:"450px"}} type="text" placeholder=" Ville de résidence" />
        </Col>
      </Form.Group>
      <fieldset style={{border:"none"}}>
        <Form.Group  as={Row} className="mb-3"style={{width:"450px"}}>
        
          <Form.Select aria-label="Default select example" style={{width:"450px",marginLeft:"220px"}}>
      <option>Type de Voyage</option>
      <option value="1">Noces</option>
      <option value="2">Organisée</option>
      <option value="3">Familial</option>
    </Form.Select> 
        </Form.Group>
      </fieldset>
      <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
        <Form.Label column sm={2}>
         
        </Form.Label>
        <Col sm={10}>
          <Form.Control style={{width:"450px"}} type="date" placeholder="Date de départ" />
        </Col>
      </Form.Group>
      <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
        <Form.Label column sm={2}>
       
        </Form.Label>
    
      </Form.Group>
      <fieldset>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1" >
        <Form.Label style={{border:"none",borderRadius:"0.375rem",width:"450px",backgroundColor:"#fff",border:"1px solid #ced4da", color:"black",marginRight:"350px",marginTop:"-30px"}}>Votre budget approximatif par personne entre vols, hôtels et transferts ? *
</Form.Label>
</Form.Group>
</fieldset>
      {['checkbox'].map((type) => (
        <div key={`inline-${type}`} className="mb-3" style={{marginTop:"-10px",marginRight:'300px'}}>
          <Form.Check 
            inline
            label="<5000"
            name="group1"
            type={type}
            id={`inline-${type}-1`}
          />
          <Form.Check 
            inline
            label="5000-7000"
            name="group1"
            type={type}
            id={`inline-${type}-2`}
          />
           <Form.Check 
            inline
            label="Non défini"
            name="group1"
            type={type}
            id={`inline-${type}-2`}
          />
            <fieldset>
 
</fieldset>
        </div>
        
      ))}
      <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
        <Form.Label column sm={2}>
      
        </Form.Label>
        <Col sm={10}>
          <Form.Control style={{width:"450px"}}type="text" placeholder="  Décrivez nous votre projet de voyage ou si vous avez des remarques." />
        </Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-3">
        <Col sm={{ span: 10, offset: 2 }}>
          <Button type="submit" style={{marginRight:"540px"}}>Soumettre</Button>
        </Col>
      </Form.Group>
    </Form>

    
   </div>
        </div>
    </div>
    </div>
  )
}

export default Devis