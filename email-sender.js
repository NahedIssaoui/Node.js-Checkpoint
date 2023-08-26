const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'nahed@gmail.com',
    pass: '***************',
  },
});

// Email details
const mailOptions = {
  from: 'nahed@gmail.com',
  to: 'nahedReceive@gmail.com',
  subject: 'Test Email',
  html: '<p>This is a test email sent from Node.js using Nodemailer.</p>',
};

// Send the email
transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    console.error('Error sending email:', error);
  } else {
    console.log('Email sent:', info.response);
  }
});
