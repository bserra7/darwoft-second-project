const nodemailer = require('nodemailer');

const transport = nodemailer.createTransport({
    port: 465,
    host: "smtp.gmail.com",
    auth: {
        pass: 'Qwerty1234+',
        user: 'noreply.ecommerce.g7@gmail.com'
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
            <h4><a href='http://localhost:3000/account/recovery?token=${token}'>Reset Your Password</a></h4>
        </div>`
    };

    transport.sendMail(mailOptions, () => console.log('Email sent'));
};