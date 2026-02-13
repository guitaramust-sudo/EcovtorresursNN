const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const transporter = nodemailer.createTransport({
  host: "smtp.yandex.ru",
  port: 587,
  secure: false, // false для 587
  requireTLS: true,
  auth: {
    user: "zamskykonstantin@yandex.ru",
    pass: "ohgpgmvqkimfrkcn",
  },
});

app.get("/", (req, res) => {
  res.send("Сервер работает");
});

app.post("/send-request", async (req, res) => {
  try {
    const { name, phone, comment, email } = req.body;

    const mailOptions = {
      from: "zamskykonstantin@yandex.ru",
      to: "guitaramust@gmail.com",
      subject: "Новая заявка с сайта",
      html: `
        <h2>Новая заявка</h2>
        <p><strong>Имя:</strong> ${name}</p>
        <p><strong>Телефон:</strong> ${phone}</p>
        ${email ? `<p><strong>Email:</strong> ${email}</p>` : ""}
        <p><strong>Комментарий:</strong> ${comment}</p>
        <p><em>Отправлено с формы на сайте</em></p>
      `,
    };

    const info = await transporter.sendMail(mailOptions);
    console.log("Письмо отправлено:", info.messageId);

    res.status(200).json({
      success: true,
      message: "Форма успешно отправлена!",
    });
  } catch (error) {
    console.error("Ошибка:", error);
    res.status(500).json({
      success: false,
      message: "Ошибка сервера",
    });
  }
});

app.listen(5000, () => {
  console.log("Сервер запущен на порту 5000");
});
