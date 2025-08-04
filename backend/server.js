const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");
require("dotenv").config();
const path = require('path');

const app = express();
app.use(cors());
app.use(express.json());

// Your email sending endpoint
app.post("/send", async (req, res) => {
  const { name, email, message } = req.body;

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,    
      pass: process.env.APP_PASS   
    }
  });

  const mailOptions = {
    from: email,
    to: process.env.EMAIL_USER,         // Receiver (your email)
    subject: `Message from ${name}`,
    text: message,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).send("Message sent successfully!");
  } catch (err) {
    console.error(err);
    res.status(500).send("Failed to send message.");
  }
});

app.use(express.static(path.join(__dirname, '../my-portifolio/dist')));

// All other routes serve the index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../my-portifolio/dist/index.html'));
});


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
