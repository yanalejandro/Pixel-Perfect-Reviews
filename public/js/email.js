const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const exphbs = require('express-handlebars');

const app = express();

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

// Handlebars setup
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

// Create a transporter
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'your_email@gmail.com',
    pass: 'your_email_password'
  }
});

// Routes
app.get('/', (req, res) => {
  res.render('contact');
});

app.post('/send-email', (req, res) => {
  const formData = req.body;

  const mailOptions = {
    from: formData.email,
    to: 'recipient@example.com',
    subject: formData.subject,
    text: `Name: ${formData.name}\nEmail: ${formData.email}\nMessage: ${formData.message}`
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log('Error:', error);
      res.render('contact', { message: 'Error sending email.' });
    } else {
      console.log('Email sent:', info.response);
      res.render('contact', { message: 'Email sent successfully.' });
    }
  });
});

