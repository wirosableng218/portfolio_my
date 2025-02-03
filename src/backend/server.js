const express = require("express")
const nodemailer = require("nodemailer")
require("dotenv").config()

const app = express()
app.use(express.json())

const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST,
  port: process.env.EMAIL_PORT,
  secure: false, // Set ke false untuk port 587
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
})

app.post("/api/email/send", (req, res) => {
  const { name, email, message } = req.body

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: process.env.EMAIL_RECIPIENT,
    subject: "Contact Form Submission",
    text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
  }

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error("Kesalahan saat mengirim email:", error)
      return res.status(500).send("Kesalahan saat mengirim email")
    }
    res.status(200).send("Email terkirim: " + info.response)
  })
})

const testMailOptions = {
  from: process.env.EMAIL_USER,
  to: process.env.EMAIL_RECIPIENT,
  subject: "Test Email",
  text: "Ini adalah email uji.",
}

transporter.sendMail(testMailOptions, (error, info) => {
  if (error) {
    return console.error("Kesalahan saat mengirim email uji:", error)
  }
  console.log("Email uji terkirim: " + info.response)
})

const PORT = process.env.PORT || 5002
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
