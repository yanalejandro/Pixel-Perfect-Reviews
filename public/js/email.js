const nodemailer = require('nodemailer');
const transporter = nodemailer.createTransport({
    host: 'localhost',
    port: 1025,
    auth: {
      user: 'DB_USER',
      pass: 'DB_PASSWORD'
    }
});

let message = {
  from: '<example@nodemailer.com>',
  to: '<example@nodemailer.com>',
  subject: 'message',
  text: 'input your message',
  html: '<p>For clients that do not support AMP4EMAIL or amp content is not valid</p>',
  amp: `<!doctype html>
  <html ⚡4email>
    <head>
      <meta charset="utf-8">
      <style amp4email-boilerplate>body{visibility:hidden}</style>
      <script async src="https://cdn.ampproject.org/v0.js"></script>
      <script async custom-element="amp-anim" src="https://cdn.ampproject.org/v0/amp-anim-0.1.js"></script>
    </head>
    <body>
      <p>Image: <amp-img src="https://cldup.com/P0b1bUmEet.png" width="16" height="16"/></p>
      <p>GIF (requires "amp-anim" script in header):<br/>
        <amp-anim src="https://cldup.com/D72zpdwI-i.gif" width="500" height="350"/></p>
    </body>
  </html>`
}

transporter.sendMail(message, (err, info) => {
  console.log(err || info);
});

