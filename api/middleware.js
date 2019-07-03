const middleware = {
  message: (req, res, next) => {
    res.locals.message = `
      <p>You have a new message</p>
      <h3>Message Details</h3>
        <p><strong>Name</strong>: ${req.body.name}</p>
        <p><strong>Email</strong>: ${req.body.email}</p>
      <h3>Message</h3>
      <p>${req.body.message}</p>
    `;
    next();
  },
  mailOptions: (req, res, next) => {
    res.locals.mailOptions = {
      from: `${req.body.email}`,
      to: `${process.env.EMAIL}`,
      subject: 'Message From Personal Portfolio',
      text: 'Hello, World!',
      html: res.locals.message
    };
    next();
  }
}

module.exports = middleware;