import React, {useState} from 'react'
import{ init } from 'emailjs-com';
import emailjs from 'emailjs-com';
init("user_cGuGo4S5TCDcJjO91m1Qe");

export default function Contact() {
    const [nom, setNom] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')
    const [sujet, setSujet] = useState('')
    const [message, setMessage] = useState('')

    const [emailOk, setEmailOk] = useState('')
    const [errorEmail, setErrorMail] = useState('')

    const templateId = 'template_vuzyhna';
    const serviceId = 'service_dd6wlea';
    const userId = 'user_cGuGo4S5TCDcJjO91m1Qe';

    const handleSubmit = (e) => {
        e.preventDefault();
        setErrorMail('');
        setEmailOk('');
        const isEmail = () => {
            let regex = /^[a-zA-Z0-9+._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
            if(regex.test(email)){

                return true;
            }else if(!regex.test(email)){
                setErrorMail('Le format du mail est invalide');
                return false;
            }
            else{
                
                setEmailOk('');
                return false;
            }
        }
          if(isEmail()){
            console.log('Le message a ete envoye')
            emailjs.sendForm(serviceId, templateId, e.target, userId)
            .then((result) => {
                if(result){
                    setEmailOk('Message envoyé !');
                    setNom('');
                    setEmail('');
                    setPhone('');
                    setMessage('');
                    setSujet('');
                }
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
                setEmailOk('');
            });

          }
          else{

          }
    }
    return (
        <>
        <div className='contact container'>
            <form onSubmit={handleSubmit}>
                    <input onChange={(e) => setNom(e.target.value)} value={nom} type="text" placeholder='Nom* Prénom:' name='lastName' id="lastName" required/>
                    <input onChange={(e) => setPhone(e.target.value)} value={phone} type="text" placeholder='Telephone :' name="phone" id="phone"/>
                    <div>
                    <input onChange={(e) => setEmail(e.target.value)} value={email} type="text" placeholder='Email* :' name="email" id="email" required/>
                    <p className="error_contact">{errorEmail}</p>
                    </div>
                    <div>
                    <input onChange={(e) => setSujet(e.target.value)} value={sujet} type="text" placeholder='Sujet :' name='sujet' id="sujet"/>
                    <p className="error_contact"></p>
                    </div>                  
                    <div className='form_button'>
                        <textarea onChange={(e) => setMessage(e.target.value)} value={message} type="text"  placeholder='Message: ' id="message" name="message"></textarea>
                        <button type="submit">Envoyer</button>
                        <div className='message_envoye'>{emailOk}</div>
                    </div>
            </form>

        </div>
            <div className='map'>
                   
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2618.6045967963505!2d2.5152313159140833!3d48.98005077929966!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e615a93e501a33%3A0x4e712b156e35d695!2s17%20Rue%20de%20l&#39;%C3%89tang%2C%2093290%20Tremblay-en-France!5e0!3m2!1sfr!2sfr!4v1635967454499!5m2!1sfr!2sfr" width="100%" height="650"  allowFullScreen="null" loading="lazy" title="test"></iframe>
            </div>
        </>
    )
}
