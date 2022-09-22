import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import "./service.css"

function Service() {


  return (
    <div style={{marginTop:"200px"}}>
        <div className='partie-haut'>
            <h1>Trouvez l'inspiration pour votre prochain voyage</h1>
        </div>
<div className='principale'>
	<section>
		<div class="container">
			<div class="card">
				<div class="content">
					<div class="imgBx">
						<img src="https://scontent-cdt1-1.xx.fbcdn.net/v/t1.18169-9/22221992_122639268443613_3959450894808864313_n.png?_nc_cat=106&ccb=1-7&_nc_sid=973b4a&_nc_ohc=YWq21dt6KpoAX8JTxLr&_nc_ht=scontent-cdt1-1.xx&oh=00_AT9dg3W0nRE3Pdci8TTRJecCHQvo3cdo4q5Au3yJ-rAv6w&oe=633A73C1"/>
					</div>
					<div class="contentBx">
						<h3>Voyage Organisés</h3>
					</div>
				</div>
				<ul class="sci">
					<li>
                    <Link to="/voyageO">Découvrir</Link>
					</li>
				</ul>
			</div>
			<div class="card">
				<div class="content">
					<div class="imgBx" >
						<img src="https://previews.123rf.com/images/giniatulina/giniatulina1801/giniatulina180100044/93483578-honeymoon-travel-concept-wedding-couple-travel-abroad-with-suitcase-vector-illustration-in-flat-styl.jpg" />
					</div>
					<div class="contentBx">
						<h3>Voyage de Noces</h3>
					</div>
				</div>
				<ul class="sci">
					<li>
                    <Link to="/voyageN">Découvrir</Link>
					</li>
				</ul>
			</div>
			<div class="card">
				<div class="content">
					<div class="imgBx">
						<img src="https://c8.alamy.com/compfr/p51t11/promo-voyage-promotion-bannieres-vecteur-conception-avec-elements-destinations-touristiques-et-d-actualisation-du-texte-dans-le-fond-bleu-agence-de-voyage-modele-vector-p51t11.jpg"/>
					</div>
					<div class="contentBx">
						<h3>Voyage en Promos</h3>
					</div>
				</div>
				<ul class="sci">
					<li>
                    <Link to="/voyageP">Découvrir</Link>
					</li>

				</ul>
			</div>
		</div>
	</section>
</div>




       
    </div>
  )
}

export default Service