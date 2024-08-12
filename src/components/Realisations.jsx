import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import Cookies from 'universal-cookie'
require('dotenv').config()
export default function Realisations({element}) {
    const [dataLocalStorage, setDataLocalStorage] = useState()
    const [boolLike, setBoolLike] = useState(false)
    const [authLike, setAuthLike] = useState("")

    const [tailleLike, setTailleLike] = useState(element.like.length)
    const cookies = new Cookies();

    useEffect(() => {
        const data = localStorage.getItem('storage-userData');
        if(data){
            setDataLocalStorage(JSON.parse(data))
            const test = JSON.parse(data)

            element.like.forEach(e => {
                if(e === test._id){
                    setBoolLike(true)
                }
            })
        }
    }, [element.like])

    const handleLike = async () => {
    setAuthLike('')
    if(dataLocalStorage){
        let token = cookies.get('jwt')
        const payload = {
            user_id: dataLocalStorage._id
        }

        const post_id = element._id
        await axios.post(`${process.env.REACT_APP_API_URL}chantiers/add_like/${post_id}`, payload, {
            headers: {
                'Content-Type': 'application/json',
                'token': `Bearer ${token}`
            }
        })
        .then(function(response){

            response.data.like.forEach(user => {
                if(user === dataLocalStorage._id){
                    setTailleLike(tailleLike + 1 )
                    setBoolLike(true)
                }
                else{
                    setTailleLike(tailleLike -1 )
                    setBoolLike(false)           
                }
            })
        })
        .catch(function(error){
            console.log(error.data)
        })        

    }
    else{
        setAuthLike('Connectez vous pour liker un post')
    }     
        
    }

    return (
        <>
        <div className="title_chantiers_realisation"><a href={`posts/${element._id}`}>{element.title_post}</a></div>
    <div className='posts_post'>
        <div className='posts_post_img'>            
            <Link to={`posts/${element._id}`}>
                <img style={{cursor:"pointer"}} src={require(`../images/${element.title}.${element.format}`).default} alt="logo"/>
            </Link>

        </div>
        <div className='posts_details'>
            <p><span>{element.date}</span></p>
            <i className="fa-thin fa-arrow-left-long"></i>
            <div className="realisation_ville">{element.ville}</div>
            <div className="realisation_details">
                <p><i className="fa-solid fa-check"></i>Realisation de: {element.logement}</p>
                <p><i className="fa-solid fa-check"></i>Maitre d'ouvrage: {element.maitre_ouvrage}</p>
                <p><i className="fa-solid fa-check"></i>Architecte: {element.architecte}</p>
            </div>
            <p className='posts_details_p'>{element.description}</p>
            <div className='posts_trait'/>
            <div className='posts_vue_like_comment'>
                <div className='post_vue_like'>
                    <p>{element.vue} vue</p>
                    <p>{element.commentaire_array.length} commentaire</p>
                </div>
                <div className='like'>
                    <p>{tailleLike}</p>
                    <i onClick={handleLike} className={boolLike ? "fas fa-heart" : "far fa-heart"}  ></i>
                    
                </div>
            </div>
        </div>        
    </div>
    <p className='authLike'>{authLike}</p>
    </>
    )
}
