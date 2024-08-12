import React from 'react'

export default function Nos_metiers({element}) {
    
    return (
        
            <div className='nos_metier_single'>
                <div className='cards'>
                    <div className='thefront'>
                        <img src={require(`../images/home/${element.img}.${element.format}`).default} alt="img"/>
                    </div>
                    <div className='theback'>
                        <p></p>
                    </div>
                </div>
                <h1>{element.title} </h1>
                <a href="/">En savoir plus</a>
                
            </div>
    )
}
