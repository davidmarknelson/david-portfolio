const router = require('express').Router();
const nodemailer = require("nodemailer");
const middleware = require('./middleware');

// GET API root
router.get('/api', (req, res) => {
  res.send('API works');
});

router.post('/api/contact', middleware.message, middleware.mailOptions, (req, res) => {
  let transporter = nodemailer.createTransport({
    host: `${process.env.SMTP}`,
    port: 465,
    secure: true,
    auth: {
      user: `${process.env.SG_USER}`,
      pass: `${process.env.SG_PW}`
    }
  });

  transporter.sendMail(res.locals.mailOptions)
    .then(info => {
      res.status(200).json({ message: 'Your message was successfully sent!' });
    })
    .catch(error => {
      console.error(error);
      res.status(500).json({ message: 'There was an error sending your message. Please try again later or use the options below.'});
    });
});

module.exports = router;