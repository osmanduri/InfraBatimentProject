import React, { useState } from 'react'
import axios from 'axios'

export default function Login_cook() {
    const [userLogin, setUserLogin] = useState('')
    const [userPassword, setUserPassword] = useState('')
  
    const login = async (e) => {
      e.preventDefault()
      const payload = {
        email: userLogin,
        password: userPassword
      }
      await axios.post('http://95.170.8.114:5002/api/users/login/', payload, {
        withCredentials: true
      })
      .then((res) => {
        console.log(res.data)
      })
      .catch((err) => console.log(err))
    }
    
    return (
        <div className="App">
          <form type="submit" onSubmit={login}>
            <input type="text" placeholder='email' onChange={e => setUserLogin(e.target.value)}/>
            <input type="text" placeholder='password' onChange={e => setUserPassword(e.target.value)}/>
            <button type="submit">Envoyer</button>
          </form>
    
        </div>
      );
}
