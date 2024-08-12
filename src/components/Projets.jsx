import React from 'react'

export default function Projets({element}) {

    return (
            
            <div className='project_cards'>
                <div className='project_cards_front'>
                    <img src={require(`../images/${element.title}.${element.format}`).default} alt="img"/>
                </div>
                <div className='project_cards_hover'>
                    <div className='project_cards_hover_content'>
                        <h2>{element.projet}<br/>{element.emplacement}</h2>
                        <p>{element.p}</p>
                        <a href={`posts/${element.id}`}>En savoir plus</a>
                    </div>
                </div>
            </div>

    )
}
