import React, { useState } from 'react'
import axios from 'axios'
require('dotenv').config()


export default function SignUp() {
    const [email, setEmail] = useState('')
    const [pseudo, setPseudo] = useState('')
    const [password, setPassword] = useState('')
    const [passwordRepetition, setMot_de_passwordRepetition] = useState('')

    const [errorPseudo, setErrorPseudo] = useState('')
    const [errorMail, setErrorMail] = useState('')
    const [errorPassword, setErrorPassword] = useState('')
    const [registrationSuccess, setRegistrationSuccess] = useState('')


    const handleRegister = async (e) => {
        e.preventDefault();
        setErrorPseudo('');
        setErrorMail('');
        setErrorPassword('');
        setRegistrationSuccess('');

            if(password && (password === passwordRepetition)){
                const payload = {
                    email:email,
                    pseudo:pseudo,
                    password:password
                }
                await axios.post(`${process.env.REACT_APP_API_URL}users/register`, payload)
                .then(function (response) {
                    console.log(response.data)
                    setRegistrationSuccess('Inscription Reussi !');
                    setEmail('');
                    setPseudo('');
                    setPassword('');       
                  
      
                })
                .catch(function (error) {
                        setErrorPseudo(error.response.data.pseudo)
                        setErrorMail(error.response.data.email)                       
                });
    
            }else if(!password || !passwordRepetition){
                setErrorPassword('Veuillez saisir un mot de passe')
            }
            else{
                setErrorPassword('Les mots de passe ne correspondent pas')
            }
        
    }
    return (
        <>
        
        <section className="signup">
        
                <div className="signup-content">
                    <div className="signup-form">
                        
                        <form method="" className="register-form" id="register-form" onSubmit={handleRegister}>
                        <div className="form-group">
                                <input type="pseudo" name="pseudo" id="pseudo" placeholder="Pseudo" onChange={(e) => setPseudo(e.target.value)} value={pseudo}/>
                                <div className='error_msg_signup'>{errorPseudo}</div>
                            </div>
                            <div className="form-group">
                                <input type="email" name="email" id="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} value={email}/>
                                <div className='error_msg_signup'>{errorMail}</div>
                            </div>
                            <div className="form-group">
                                <input type="password" name="pass" id="pass" placeholder="Mot de passe" onChange={(e) => setPassword(e.target.value)} value={password}/>
                                <div className='error_msg_signup'>{errorPassword}</div>
                            </div>
                            <div className="form-group">
                                <input type="password" name="re_pass" id="re_pass" placeholder="Repetez mot de passe" onChange={(e) => setMot_de_passwordRepetition(e.target.value)} value={passwordRepetition}/>
                            </div>
                            
                            <div className="form-group form-button">
                            <input type="submit" value="Valider" />
                            <div className='registration_success'>{registrationSuccess}</div>
                            </div>
                        </form>
                    </div>
                </div>
        </section>
        </>
    )
}
