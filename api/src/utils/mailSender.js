require('dotenv').config();
const nodemailer = require('nodemailer');
const { MAIL_USER, MAIL_PASS, MAIL_HOST, LINK_RECOVER_PASS  } = process.env;

const transport = nodemailer.createTransport({
    port: 465,
    host: MAIL_HOST,
    auth: {
        pass: MAIL_PASS,
        user: MAIL_USER
    },
    tls: { rejectUnauthorized: false },
});

module.exports = function mailSender(to, name, subject, token){
    const mailOptions = {
        from: 'Darwoft Petshop <no-reply@darwoft-petshop.com>',
        to,
        subject,
        html: `
        <div>
            <h2>Hi ${name}</h2>
            <h3>Please click the following link to reset your password.</h3>
            <h4><a href='${LINK_RECOVER_PASS}${token}'>Reset Your Password</a></h4>
        </div>`
    };

    transport.sendMail(mailOptions, () => console.log('Email sent'));
};