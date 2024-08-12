import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from "axios"
import Cookies from 'universal-cookie'

export default function Commentaire({element}) {
    const [data, setData] = useState()
    const { id } = useParams();
    const cookies = new Cookies();
    useEffect(() => {
        const dataLocalStorage = localStorage.getItem('storage-userData');
        if(dataLocalStorage){
            setData(JSON.parse(dataLocalStorage))
        }        
        
    }, [])

    const handleDeleteComment = async () => {
        
        const id_post_to_delete = element._id;
        let token = cookies.get('jwt')

        await axios.post(`${process.env.REACT_APP_API_URL}chantiers/remove_commentaire/${id}`, { id: id_post_to_delete }, {
            headers: {
                'Content-Type': 'application/json',
                'token': `Bearer ${token}`
            }
        })
        .then(function(response){
            console.log(response.data)
        })
        .catch(function(error){
            console.log(error.response.data)
        })

    }

    return (
        <>
        <p className='commentaire_pseudo'>Commentaire de: <span>{element.pseudo}</span></p>
        <div className='commentaire_user'>            
            <p className='commentaire_single_commentaire'>{element.single_commentaire}</p>
        </div>
        <div className='commentaire_bouton'>
                  { data && (data._id === element.user_id) ? (<button className='bouton_supprimer' onClick={handleDeleteComment}>Supprimer</button>) : ("")} 
        </div>
        </>
    )
}
