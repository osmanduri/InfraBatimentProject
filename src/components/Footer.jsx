import React from 'react'

export default function Footer() {
    
    return (

        <div className='footer_main'>
            <div className='footer container_projets'>
            <div className='footer_reseaux_sociaux'>
                <img src={require("../images/infra_footer2.jpg").default} alt="logo"/>
                <div className='footer_reseaux_sociaux_logo'>
                    <i className="fab fa-facebook-f"></i>
                    <i className="fab fa-instagram"></i>
                    <i className="fab fa-google-plus-g"></i>
                    <i className="fab fa-snapchat-ghost"></i>
                </div>
            </div>
            <div className='footer_contact'>
                    <h2>Contact</h2>
                    <div className='footer_contact_details'>
                        <p className='footer_adresse'><i className="fas fa-home"></i>21 boulevard Haussmann 75009 paris</p>
                        <p className='footer_numero'><i className="fas fa-phone"></i>01 56 03 66 45</p>
                        <p className='footer_email'><i className="far fa-envelope"></i>contact@infrabatiment.com</p>
                    </div>

            </div>
            <div className='liens_utiles'>
                <h2>Liens utiles</h2>
                <div className='liens'>
                    <li style={{marginRight:"28px"}}><a href="/nos_metiers">Nos metiers</a></li>
                    <li><a href="/nos_realisations">Nos Realisations</a></li>
                    <li><a href="/contact">Contactez-nous</a></li>
                </div>


            </div>
            <div className="footer_horaires">
                        <h2>horaires</h2>
                        <div className="footer_horaires_second">
                            <div className="footer_semaine">
                                <p>Lundi:</p>
                                <p>08:00 - 19:00</p>
                            </div>
                            <div className="footer_semaine">
                                <p>Mardi:</p>
                                <p>08:00 - 19:00</p>
                            </div>
                            <div className="footer_semaine">
                                <p>Mercredi:</p>
                                <p>08:00 - 19:00</p>
                            </div>
                            <div className="footer_semaine">
                                <p>Jeudi:</p>
                                <p>08:00 - 19:00</p>
                            </div>
                            <div className="footer_semaine">
                                <p>Vendredi:</p>
                                <p>08:00 - 19:00</p>
                            </div>
                            <div className="footer_semaine">
                                <p>Samedi:</p>
                                <p>Fermé</p>
                            </div>
                            <div className="footer_semaine">
                                <p>Dimanche:</p>
                                <p>Fermé</p>
                            </div>
                        </div>
            </div>
                    
            </div>
            <div className='footer_trait'/>
            <div className='copyright'>
                <p className='container_projets'>Infra Batiment - All Rights Reserved.</p>
            </div>
        </div>
    )
}
