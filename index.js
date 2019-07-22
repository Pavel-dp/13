


// Sending an email


const nodemailer = require('nodemailer');
let receiver = 'rucelf@email.ua';
let emailBody = 'Hello! please do your homework';

let transporter = nodemailer.createTransport({
  service: 'gmail.com',
  auth: {
    user: 'pavel.dnipro2@gmail.com',
    pass: 'password_dnipro2'
  }
});

let mailOptions = {
    from: 'pavel.dnipro2@gmail.com',
    to: receiver,
    subject: 'Sending Email using Node.js',
    text: emailBody
  };
  
  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
