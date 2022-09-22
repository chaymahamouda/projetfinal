import React from 'react'
import "./contact.css"


function Contact() {
  return (
    <div className="contact">
      <form action="https://accounts.google.com/ServiceLogin/signinchooser?passive=1209600&continue=https%3A%2F%2Faccounts.google.com%2F&followup=https%3A%2F%2Faccounts.google.com%2F&flowName=GlifWebSignIn&flowEntry=ServiceLogin">
       <div className= "partie1">
       <h1> Nous Contacter </h1>
       <img src="contact.svg" />
        </div>

      <div className='partie2'>
   <div className='partie2-boxleft'>
   <h2>Vous souhaitez nous contacter par écrit ?</h2>
      <div className='email'>
      <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-envelope-check-fill" viewBox="0 0 16 16">
  <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 4.697v7.104l5.803-3.558L0 4.697ZM6.761 8.83l-6.57 4.026A2 2 0 0 0 2 14h6.256A4.493 4.493 0 0 1 8 12.5a4.49 4.49 0 0 1 1.606-3.446l-.367-.225L8 9.586l-1.239-.757ZM16 4.697v4.974A4.491 4.491 0 0 0 12.5 8a4.49 4.49 0 0 0-1.965.45l-.338-.207L16 4.697Z"/>
  <path d="M16 12.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Zm-1.993-1.679a.5.5 0 0 0-.686.172l-1.17 1.95-.547-.547a.5.5 0 0 0-.708.708l.774.773a.75.75 0 0 0 1.174-.144l1.335-2.226a.5.5 0 0 0-.172-.686Z"/>
</svg> 
<p className='emaill'> Par Email:</p>
      </div>
      <div className='email'>
   
<p>Envoyer un mail à nos consiellers, nous vous répondrons dans les meilleurs délais. <br/>
Notre Email: Almasvoyage@gmail.com.</p>
      </div>
      <div className='email'>
   <button className='butt' ><p className='appel'>Envoyer un Email</p></button>
      </div>
      </div>
      <div className='partie2-boxright'>
   <h2>Vous souhaitez nous contacter par téléphone ?</h2>
      <div className='email'>
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-telephone-inbound-fill" viewBox="0 0 16 16" >
  <path fill-rule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511zM15.854.146a.5.5 0 0 1 0 .708L11.707 5H14.5a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5v-4a.5.5 0 0 1 1 0v2.793L15.146.146a.5.5 0 0 1 .708 0z"/>
</svg>
<p className='telephone'> Par Téléphone :</p>
      </div>
      <div className='email'>
   
<p>Echanger en direct avec un conseiller de notre agence sans vous déplacer du Lundi à Samedi de 9h à 16h30.</p>
      </div>
      <div className='email'>
   <button className='butt'><p className='appel'>(+216).21 720 849 </p></button>
      </div>
      </div>
   
      </div>
</form>
    </div>
  )
}

export default Contact