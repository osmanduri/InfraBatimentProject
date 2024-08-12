import React, { useEffect, useState, useContext } from 'react'
import { useParams } from 'react-router-dom'
import Commentaire from './Commentaire';
import { UserContext } from '../userContext';
import {
    FacebookShareButton,
    TwitterShareButton,
    WhatsappShareButton,
    LinkedinShareButton,
    FacebookIcon,
    TwitterIcon,
    WhatsappIcon,
    LinkedinIcon
  } from "react-share";
  import axios from 'axios';
  import Cookies from 'universal-cookie'
  require('dotenv').config()


export default function DetailsPostsComponent({element}) {
    const shareUrl = `https://www.infra-batiment.fr/posts/${element._id}`
    const [commentaire, setCommentaire] = useState([])
    const [commentaireValue, setCommentaireValue] = useState('')
    const [errorCommentaire, setErrorCommentaire] = useState('')
    const { id } = useParams();
    const cookies = new Cookies();
    const { userData, setUserData } = useContext(UserContext);

    useEffect(() => {
        const data = localStorage.getItem('storage-userData');
        if(data){
            setUserData(JSON.parse(data))
        }
    }, [])



    const handleClick = () => {
        setErrorCommentaire('');
        if(commentaireValue){

            let token = cookies.get('jwt')
            
            
            if(token && userData){
                const data = {
                    single_commentaire: commentaireValue,
                    user_id: userData._id,
                    pseudo: userData.pseudo
                }
            axios.post(`${process.env.REACT_APP_API_URL}chantiers/add_commentaire/${id}`, data, {
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
            }else{
                setErrorCommentaire('Vous devez vous connecter pour poster un commentaire')
            }
        }
    }

    const handleClearState = () => {
        setCommentaireValue('');
        setErrorCommentaire('');
    }

    useEffect(() => {
        const getChantierById = async (id) => {
            await axios.get(`${process.env.REACT_APP_API_URL}chantiers/${id}`)
            .then(function (response) {
                setCommentaire(response.data.commentaire_array)
                console.log('test')
                
    
            })
            .catch(function (error) {
            console.log(error);
        })
        }
        getChantierById(id);
    },[commentaire])

    if(!commentaire){
        return null;
    }
    return (
        <div className='detail_single_post'>
            <div className='detail_single_post_contenu'>
                <p>{element.date}</p>
                <h2>{element.description}</h2>
                {
                    element.image.map((e, index) => {
                        return(
                            <img src={require(`../images/${e}.${element.format}`).default} alt="logo" key={index}/>
                        )
                    })
                }
                
                <div className='details_single_post_contenu_reseaux_sociaux'>
                <div className='trait_reseaux'/>
                    <div className='details_reseaux_sociaux'>
                        <FacebookShareButton url={shareUrl} quote="Post Chantier" hashtag='#batiment'>
                            <FacebookIcon size={30} round={true}/>
                        </FacebookShareButton>
                        <WhatsappShareButton url={shareUrl} quote="Post batiment" hashtag='#batiment'>
                            <WhatsappIcon size={30} round={true}/>
                        </WhatsappShareButton>
                        <TwitterShareButton url={shareUrl} quote="Post batiment" hashtag='#batiment'>
                            <TwitterIcon size={30} round={true}/>
                        </TwitterShareButton>
                        <LinkedinShareButton url={shareUrl} quote="Post batiment" hashtag='#batiment'>
                            <LinkedinIcon size={30} round={true}/>
                        </LinkedinShareButton>
                    </div>

                    <div className='trait_reseaux'/>

                    {
                commentaire.map((element, index) => {
                    return(
                        <Commentaire element={element} key={index}/>
                    )
                })
                
            }
                </div>
            </div>

            <div className='commentaire'>
                <h2>Commentaire</h2>
                <div className='trait_commentaire'/>
                <div className='my_input'>
                    {userData ? <div className='my_input_pseudo'>{userData.pseudo}</div> : "" } 
                    <textarea type="text" placeholder='Ecrire un commentaire...' style={!userData ? {width:"80%"} : {width:"73%"}}onChange={(e) => setCommentaireValue(e.target.value)} value={commentaireValue}/>
                    
                </div>
                <p className='errorCommentaire'>{errorCommentaire}</p>
                <div className='publier'>
                    <button type="submit" style={{background:commentaireValue ? "#384AD3" : "rgb(136, 132, 136)"}} onClick={handleClick}>Publier</button>
                    <button type="submit" onClick={handleClearState}>Annuler</button>
                </div>

            </div>


        </div>
    )
}
