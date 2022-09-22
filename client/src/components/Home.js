import React from 'react'
import { Link } from 'react-router-dom'
import "./Almas.css"
function Home() {
  return (
    <div className='Home'>
       <div className='video'>
        <video src='Vid.mp4' autoPlay="1" loop controls muted></video>
        
        </div>
        <div className='description'>
          <h2>ALMAS TRAVEL LE SPÉCIALISTE DU VOYAGE ORGANISÉ EXOTIQUE</h2>
          <p>Almas est une agence de voyages spécialisée dans les destinations tropicales et exotiques. Notre création de valeur est apportée par notre connaissance de ces destinations. Nous partageons avec nos voyageurs des conseils pour une expérience de voyage unique et authentique.</p>
        <h4>Notre sélection de voyages au départ de la Tunisie en 2022</h4>
        <p className='p'>Découvrez notre sélection de destinations exotiques et escapades soigneusement conçues par nos experts</p>
        </div>
        <div className='populaire'>
<div className='cardpop'>
  <div className='namepop'>
  
  <Link to="/voyageO" style={{color:"white",textDecoration:"none"}}>Zanzibar</Link>
  </div>
  <div className='img'><img src="https://www.cherifaistesvalises.com/wp-content/uploads/2022/02/shutterstock_1662677074.jpg"/></div>
</div>
<div className='cardpop'>
<div className='namepop'>
<Link to="/voyageN"style={{color:"white",textDecoration:"none"}} >
La Malaisie
</Link>
</div>
<div className='img'><img src="https://highlevelcom.be/fr/wp-content/uploads/2019/10/shutterstock_330445028-625x460.jpg"/></div>
</div>
<div className='cardpop'>
<div className='namepop'>
<Link to="/voyageO"style={{color:"white",textDecoration:"none"}} >
Le Mexique
</Link></div>
<div className='img'><img src="https://media.vogue.fr/photos/5d307dc3466b9d0008d797eb/3:2/w_1686,h_1124,c_limit/habitas-tulum-pool.jpg"/></div>
</div>
<div className='cardpop'>
<div className='namepop'>
<Link to="/voyageP"style={{color:"white",textDecoration:"none"}} >
La Turquie
</Link></div>

<div className='img'><img src="https://images4.bovpg.net/r/back/fr/sale/452d378b7ecd29.jpg"/></div>
</div>

        </div>

        <div className='description' style={{marginTop:'120px'}}>
        <h4 style={{ borderTop: '1px rgba(128, 128, 128, 0.25) solid'}}></h4>      
        <h4 style={{ marginTop:"30px"}}>Faites de votre voyage de noces un moment inoubliable</h4>
        <p className='p' >Votre voyage de noces doit être un moment magique et mémorable quelque soit la destination que vous allez choisir. ALMAS vous propose une sélection de destinations paradisiaques pour une lune de miel de rêve.</p>
        <div className='img3'>
        <Link to="/VoyageN"><img src="https://www.roukatravel.tn/images/voyages-noces-tunisie-rouka.webp"/></Link>
        
        </div>
        </div>
        <h4 className='ligne'></h4>
        {/* /*part4 */ }
        
        <div className='part4'>
           <h4>EXPÉRIENCES DE VOYAGES AVEC ALMAS TRAVEL</h4> 
           <div className='les-images'>
          <div className='div1'>
            <div className='istanbul'>
           <img src="https://admin.tahavoyages.com/uploads/VoyageOrganise/174bb1a29588bdecd21a03c3e8244d9bc63be4ee.jpeg"/> 
          </div>
          </div>
          <div className='div2'>
          <div className='zanzibar'>
            <div className='img2' >
            <img src="https://q-xx.bstatic.com/xdata/images/hotel/840x460/159456417.jpg?k=642ea9616d2590a402065cc4dd1deeef0fff1116c3d4b6e89dcb231b63367ec4&o="/>
            <div className='img2'>
            <img src="https://img.freepik.com/photos-gratuite/restaurant-the-rocks-plage-maree-basse-pingwe-zanzibar-tanzanie_1217-4779.jpg?t=st=1657393658~exp=1657394258~hmac=5bc97e6fc8594cec3c2fe773f21560ba14943c7d25deb580ba99e4f56067e085&w=1060"/>
            </div>
            </div>


          </div>
          <div className='div3'>
          <div className='mexique'>
            <div className='img3'>
            <img  src="https://www.maya-authentique.com/app/uploads/sites/5/2019/12/cenote.jpeg"/>
            <img  src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/El_Castillo_Stitch_2008_Edit_2.jpg/1200px-El_Castillo_Stitch_2008_Edit_2.jpg"/>  
            <img  src="https://www.lenouvelliste.ch/media/image/90/nf_normal_4_3/389295648_highres.jpg?nohash"/>    
            </div>
            </div>
          </div>
          <div className='div4'>
          <div className='malta'>
            <div className='img4'>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/St_Sebastian_Curtain_%28cropped%29.jpg/402px-St_Sebastian_Curtain_%28cropped%29.jpg"/>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/dc/Triton_Fountain.jpg/1280px-Triton_Fountain.jpg"/>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Castille_at_night.jpg/1280px-Castille_at_night.jpg"/>
            <img src="https://www.maltainfoguide.com/images/blue-lagoon-malta-boat-trip.jpg"/>
            </div>
            </div>
          </div>
          </div>
        </div>
      </div>  
    </div>
  )
}

export default Home