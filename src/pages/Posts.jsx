import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
//import posts from '../data/posts'
import Realisations from '../components/Realisations'

const axios = require('axios')
export default function Posts() {
    const [postsDb, setPostsDb] = useState([])
    
    useEffect(() => {
        const requete_liste_chantiers = async () => {
            await axios.get(`${process.env.REACT_APP_API_URL}chantiers`)
            .then(function (response) {
            setPostsDb(response.data)
            console.log(response.data)         
            
            })
            .catch(function (error) {      
                
                    console.log("erreur d'envoi")
                
                    
        })
        }
    requete_liste_chantiers();
    },[])

    if(!postsDb){
        return null;
    }

    return (
        <>
        <div className='arrow_back'>
            <Link to="/">
                <i className="fas fa-long-arrow-alt-left"></i>
            </Link>
        </div>
        
        <div className='posts container'>
            {
                
                postsDb.map((element, index) => {
                    return (
                            <Realisations element={element} key={element.id} />
                    )
                })
                

            }
        </div>
        </>

    )
}
