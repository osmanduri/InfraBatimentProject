import React, { useState, useEffect, useContext } from 'react'
import { UserContext } from '../userContext';
import Cookies from 'universal-cookie';

export default function Header() {
    const [displayMenu, setDisplayMenu] = useState(true);
    const [click, setClick] = useState(false);
    const { userData, setUserData } = useContext(UserContext);
    const cookies = new Cookies();

    useEffect(() => {
        const data = localStorage.getItem('storage-userData');
        if(data){
            setUserData(JSON.parse(data))
        }
    }, [])

    const handleRemoveData = () => {
        localStorage.removeItem("storage-userData");
        cookies.remove("jwt");
    }

    const handleClick = () => {
        setClick(!click)
    }

    const showBurgerMenu = () => {
        if(window.innerWidth <= 1024){
            setDisplayMenu(false);
        }
        else if(window.innerWidth > 1024){
            setDisplayMenu(true);
        }
    }

    window.addEventListener('resize', showBurgerMenu);

    useEffect(() => {
        showBurgerMenu();
    }, [])

    return (
        <>
        {
            displayMenu ? (
            <div className='header'>
                <div className='header_info'>
                    {
                        userData ? (
                            <div className='connexion'>
                                <a href="/" onClick={handleRemoveData}>Deconnexion</a>
                                <p>Bienvenue <span className='userDataPseudo'>{userData.pseudo}</span> ! </p>                      
                            </div>
                        ) : (
                            <div className='connexion'>
                            <a href="/auth">Inscription / Connexion</a>
                            </div>
                        )
                    }

                    <div className='header_email'>
                        <i className="fas fa-envelope" style={{marginRight:"17px"}}></i>
                        <p>contact@infrabatiment.com</p>
                    </div>
                    <div className='header_phone'>
                        <i className="fas fa-phone"/>
                        <p>01 56 03 66 45</p>
                    </div>
                </div>
                            <div className="header_trait"/>
            </div>

            ) : (
                <div className="burger_menu">
                    { userData && <p className='header_user_bienvenue'>Bienvenue {userData.pseudo}</p>}
                <i onClick={handleClick} className={click ? 'fas fa-times' : 'fas fa-bars'}></i>
                {
                <div className={click ? 'navbar_mobile active' : 'navbar_mobile'}>
                    <ul>
                        <li><a href="/">Accueil</a></li>
                        <li><a href="/nos_metiers">Nos Metiers</a></li>
                        <li><a href="/nos_realisations">Nos Realisations</a></li>
                        <li><a href="/contact">Contact</a></li>
                        { userData ? <li><a href="/" onClick={handleRemoveData}>Deconnexion</a></li> : <li><a href="/auth">Connexion/Inscription</a></li>}
                        
                    </ul>
                </div>

                }
                </div>
            )
        }

        </>
    )
}
