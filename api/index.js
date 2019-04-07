const sgMail = require('@sendgrid/mail');

module.exports = (req, res) => {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);
  const msg = {
    to: 'mail@gmail.com',
    from: 'mail1@gmail.com',
    subject: 'Sending with SendGrid is Fun',
    text: 'and easy to do anywhere, even with Node.js',
    html: '<strong>and easy to do anywhere, even with Node.js</strong>',
  };
  sgMail.send(msg, false, (err, result) => {
    if (err) {
      console.log('mail sending failed', err);
      throw err;
    }
    console.log('mail successfully sent', result);
    res.end('mail sent successfully');
  });
};