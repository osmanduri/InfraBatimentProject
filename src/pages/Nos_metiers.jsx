import React from 'react'
import nos_metiers_data from '../data/nos_metiers'
import NosMetiers from '../components/NosMetiers'
export default function Nos_metiers() {
    return (
        <div className='nos_metier_main'>
        {
            nos_metiers_data.map((element, index) => {
                return (
                    <NosMetiers element={element} key={index}/>
                )
            })
        }
    </div>
    )
}
