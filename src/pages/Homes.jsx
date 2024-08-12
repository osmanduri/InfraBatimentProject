import React from 'react'
import video_chantier from '../video/video2_coupe.mp4'
import NosMetiers from '../components/NosMetiers'
import nos_metiers_data from '../data/nos_metiers'
import nos_projets_data from '../data/derniers_projets'
import Presentation from '../components/Presentation'
import Project from '../components/Projets'
import { Link } from 'react-router-dom'


export default function Homes() {
    return (
        <div className='video_chantier'>
            <video src={video_chantier} autoPlay loop muted />
            <div className='mon_titre'>
                <h1>Groupe INFRA BATIMENT</h1>
                <div className="trait_h1"/>
                <p>Votre satisfaction est notre priorité !</p>
            </div>
            <h1 className='h1_nos_metier'>Nos Metiers</h1>
            <div className='trait_home'/>
            <div className='nos_metier_main'>
                {
                    nos_metiers_data.map((element, index) => {
                        return (
                            <NosMetiers element={element} key={index}/>
                        )
                    })
                }
            </div>

            <Presentation/>
            <h1 className='title_derniers_projets'>Derniers Projets</h1>
            <div className='trait_home'/>
            <div className='project container_projets'>
                
                {
                    nos_projets_data.map((element, index) => {
                        return (
                            <Project element={element} key={index}/>
                        )
                    })
                }
                <div className='home_lien_posts'>
                <Link to="/posts">
                        <li>Voir tout les chantiers</li>
                </Link>
                </div>
            </div>
        </div>
    )
}
