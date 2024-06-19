import express from 'express';
import nodemailer from 'nodemailer';
const app = express();
const port = 3001; // or any other available port

app.use(express.json());

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});




// Configure mail transport
const transporter = nodemailer.createTransport({
  service: 'gmail', // or your email provider
  auth: {
    user: 'abdullahtahad30@gmail.com',
    pass: 'your-password'
  }
});

app.post('/send-email', (req, res) => {
  const { name, email, message } = req.body;
  const mailOptions = {
    from: 'your-email@gmail.com',
    to: 'your-email@gmail.com',
    subject: `New message from ${name}`,
    text: `You have received a new message from ${email}: ${message}`
  };

  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
      res.send('error'); // or your error handling
    } else {
      console.log('Email sent: ' + info.response);
      res.send('sent');
    }
  });
});
