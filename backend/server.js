import express from "express";
import nodemailer from "nodemailer";
import cors from "cors";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";

dotenv.config();

const app = express();

app.use(cors({
  origin: 'https://niyomugaboetiene.onrender.com/', 
  methods: ['POST', 'GET'],
}));

app.use(express.json());

// Email endpoint
app.post("/send", async (req, res) => {
  const { name, email, message } = req.body;

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.APP_PASS,
    },
  });

  const mailOptions = {
    from: email,
    to: process.env.EMAIL_USER,
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

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.static(path.join(__dirname, "my-portifolio/dist")));
import { SitemapStream, streamToPromise } from "sitemap";
import { Readable } from "stream";

// Generate sitemap dynamically
app.get("/sitemap.xml", async (req, res) => {
  try {
    const links = [
      { url: "/", changefreq: "daily", priority: 1.0 },
      { url: "/about", changefreq: "monthly", priority: 0.8 },
      { url: "/contact", changefreq: "monthly", priority: 0.8 },
      // Add other React routes here
    ];

    const stream = new SitemapStream({ hostname: "https://niyomugaboetiene.onrender.com" });
    const xml = await streamToPromise(Readable.from(links).pipe(stream));

    res.header("Content-Type", "application/xml");
    res.send(xml.toString());
  } catch (err) {
    console.error(err);
    res.status(500).end();
  }
});


app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "my-portifolio/dist", "index.html"));
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});