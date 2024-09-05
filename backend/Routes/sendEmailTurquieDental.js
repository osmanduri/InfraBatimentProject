const router = require('express').Router()
const nodemailer = require('nodemailer')
const path  = require('path');
const hbs = require('nodemailer-express-handlebars')

router.post('/send_mail_to_portfolio_osman', (req, res) => {
    const { name, phone, email, subject, message } = req.body;
    
    // Configurer le transporteur pour l'envoi d'email
    let transporter = nodemailer.createTransport({
        host:'smtp.ionos.fr',
        port:'465',
        auth: {
            user: process.env.USER_MAIL,
            pass: process.env.PASSWORD
        }
    });

            // Options de l'email
    let mailOptions = {
        from: process.env.USER_MAIL,
        to: 'osman.duri@hotmail.fr', // Remplacez par l'email du destinataire
        subject: `${subject}`,
        text: `
        Nom: ${name}
        Téléphone: ${phone},
        Email: ${email},
        Sujet: ${subject},
        Message: ${message}
        `
    };
        // Envoyer l'email
        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                return res.status(500).json({ error: error.toString() });
            }
            res.status(200).json({ message: 'Email envoyé avec succès!' });
        });
    
})

router.post('/send', (req, res) => {
    try{
        let transporter = nodemailer.createTransport({
            host:'smtp.ionos.fr',
            port:'465',
            auth: {
                user: process.env.USER_MAIL,
                pass: process.env.PASSWORD
            }
        });

        const handlebarOptions = {
            viewEngine: {
                extName: ".handlebars",
                partialsDir: path.resolve(__dirname, "../Views/templates"),
                defaultLayout: false,
            },
            viewPath: path.resolve(__dirname, "../Views/templates"),
            extName: ".handlebars",
        };

        transporter.use('compile', hbs(handlebarOptions));
        let mailOptions = {
            from: process.env.USER_MAIL,
            to: req.body.destinataire,
            cc: process.env.USER_MAIL,
            subject: `Demande effectué par  ${req.body.prenom} ${req.body.nom}` ,
            text: '',
            template: 'reception',
            context: {
                nom: req.body.nom,
                prenom: req.body.prenom,
                email: "osman.duri@hotmail.fr",
                phone: "0101010101",
                country: "UK",
                subject: "Implant dentaire",
                message: "This is a msg"
            }
        };

        transporter.sendMail(mailOptions, (err, data) => {
            if(!err){
                res.status(200).send('Email envoyé')
            }else{
                res.status(400).send(err)
            }
        })
    }catch(err){
        res.send(err)
    }   
})


module.exports = router