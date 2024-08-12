import React, { useState, useContext } from 'react';
import axios from 'axios';
import Cookies from 'universal-cookie';
import { UserContext} from '../../userContext';

export default function SignIn() {
    const [pseudo, setPseudo] = useState('');
    const [password, setPassword] = useState('');
    const [token, setToken] = useState()
    const [user, setUser] = useState()
    const [errorPseudo, setErrorPseudo] = useState('')
    const [errorPassword, setErrorPassword] = useState('')
    const [errorCredentials, setErrorCredentials] = useState('')
    const cookies = new Cookies();
    const { userData, setUserData } = useContext(UserContext);
    
   

    //let error_login = null; const heroku = https://infrabackend95.herokuapp.com/auth/google;

    const handleLogin = async (e) => {
        e.preventDefault();      
        setErrorPassword('');
        setErrorPseudo('');
        setErrorCredentials('');

        
        if(password && pseudo){
            await axios.post(`${process.env.REACT_APP_API_URL}users/login`, {pseudo, password})
            .then(function (response) {
              setUser(response.data)
              let accessToken = response.data.accessToken
              setToken(accessToken)
  
              cookies.set('jwt', response.data.accessToken, { path: '/' });
  
              setUserData(response.data)
  
              localStorage.setItem('storage-userData', JSON.stringify(response.data))
  
              window.location.href = "/";
  
            })
            .catch(function (error) {
              setErrorCredentials(error.response.data)
            });
        }if(!password){
            setErrorPassword('Veuillez saisir un mot de passe');
        }
        if(!pseudo){
            setErrorPseudo('Veuillez saisir un pseudo');
        }
    }
    return (
        <>
        
        <section className="signup">
            
                <div className="signup-content">
                    <div className="signin-form">
                        
                        <form type="submit" onSubmit={handleLogin}>
                            <div className="form-group">
                                <input  type="text"
                                        placeholder="Pseudo"
                                        onChange={(e) => setPseudo(e.target.value)}
                                        value={pseudo}
                                        />
                                <div className='error_email'>{errorPseudo}</div>
                            </div>
                            <div className="form-group">
                                <input  type="password"
                                        placeholder="Mot de passe"
                                        onChange={(e) => setPassword(e.target.value)}
                                        value={password}
                                        />
                                <div className='error_email'>{errorPassword}</div>
                                <div className='error_email'>{errorCredentials}</div>
                            </div>
                            <div className="form-group form-button">
                            <input type="submit" value="Connexion" />
                            </div>
                        </form>
                    </div>
                </div>
                
        </section>
        </>
    )
}
