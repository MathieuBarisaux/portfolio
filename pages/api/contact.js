import controlForm from "../../functions/controller/controlForm/controlForm";

const formData = require("form-data");
const Mailgun = require("mailgun.js");

// ** Configuration MailGun **
const mailgun = new Mailgun(formData);
const client = mailgun.client({
  username: "Pauline",
  key: process.env.MAILGUN_API_KEY,
});

export default async function sendMailWithMailGun(req, res) {
  const { firstName, lastName, email, message, isUserChecked } = req.body.data;

  const checkForm = controlForm(firstName, lastName, email, message, isUserChecked);

  if (checkForm === true) {
    const messageData = {
      from: `${firstName} ${lastName} <${email}>`,
      to: "contact@mathieu-barisaux.fr",
      subject: "Nouveau message depuis ton site",
      html: `<h2>Mathieu, tu as reçu un nouveau message de la part de ${firstName} ${lastName}</h2>
      <p>Nom: ${lastName}, Prénom: ${firstName}</p>
      <p>Adresse email : ${email}</p>
      <p>Message : ${message}</p>
      `,
    };

    try {
      await client.messages
        .create(process.env.MAILGUN_DOMAIN, messageData)
        .then(() => {
          res.status(200).json({ message: "Message envoyé avec succès !" });
          return;
        })
        .catch((err) => {
          res.status(400).json(err);
          return;
        });
    } catch (error) {
      res.status(400).json(error.message);
    }
  } else {
    res.status(401).json({ error: checkForm });
  }
}
