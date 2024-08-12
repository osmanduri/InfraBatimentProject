import React, { useState } from 'react'
import SignUp from '../components/Log/SignUp';
import SignIn from '../components/Log/SignIn';
import image from '../images/infra3.jpg';

export default function Auth() {
    const [signUpModal, setSignUpModal] = useState(true);
    const [signInModal, setSignInModal] = useState(false);

    const handleModals = (e) => {
        if(e.target.id === "register"){
            setSignUpModal(true)
            setSignInModal(false)
        }
        else if(e.target.id === 'login'){
            setSignUpModal(false)
            setSignInModal(true)
        }
    }
    return (
        <div className='auth container_projets'>
            <div className='form-container'>
                <ul>
                    <li onClick={handleModals} id="register" className={signUpModal ? "active-btn" :"nul"}>Inscription</li>
                    <li onClick={handleModals} id="login" className={signInModal ? "active-btn" :"nul"}>Se connecter</li>
                </ul>
                { signUpModal && <SignUp/> }
                { signInModal && <SignIn/> }
                <div className='auth_image'>
                    <img src={image} alt="auth_image"/>
                </div>
                
            </div>
        </div>
    )
}
