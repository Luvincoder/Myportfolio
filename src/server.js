const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.post('/hire', async (req, res) => {
  const { firstName, lastName, email, phone, message } = req.body;

  const transporter = nodemailer.createTransport({
    service: 'gmail', // Or use your preferred email service
    auth: {
      user: 'roup1718@gmail.com',  // Your email
      pass: 'Bee1234@@',  // Your email password
    },
  });

  const mailOptions = {
    from: email,
    to: 'roup1718@gmail.com', // Where you want to receive the form data
    subject: `Hire Me Request from ${firstName} ${lastName}`,
    text: `Message from ${firstName} ${lastName}:
           Email: ${email}
           Phone: ${phone}
           Message: ${message}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ code: 200, message: 'Email sent successfully' });
  } catch (error) {
    res.status(500).json({ code: 500, message: 'Failed to send email' });
  }
});

app.listen(5000, () => {
  console.log('Server is running on port 5000');
});
