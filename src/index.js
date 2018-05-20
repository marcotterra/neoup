import express from 'express';
//import mailer from './mailer.router';
import sgMail from '@sendgrid/mail'

import * as bodyParser from 'body-parser'

import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(bodyParser.json());

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

app.use('/', express.static('public'));

app.post('/email', function(req, res){
    const msg = {
        to: 'pedroaugusto@jera.com.br',
        from: 'no-reply@neoup.com.br',
        subject: 'Alguem se interessou!',
        text: 'Alguem se interessou pela sua ideia!',
        html: `<strong>${req.body.name}</strong> do email ${req.body.email} se interessou pela sua ideia, e disse ${req.body.comment}`,
      };
      sgMail.send(msg);
})

//app.use('/mailer', mailer)

app.listen(8000, () => {console.log('Rodando na porta 8000')})