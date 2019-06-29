const router = require('express').Router();
const nodemailer = require("nodemailer");

// GET API root
router.get('/api', (req, res) => {
  res.send('API works');
});

router.post('/api/contact', (req, res) => {
  console.log(req.body);
  // setTimeout(() => {
    res.status(200).json({ message: 'Your message has successfully been sent!' });
    // res.status(500).json({ message: 'There was an error sending your message. Please try again later.'});
  // }, 3000);
});

module.exports = router;