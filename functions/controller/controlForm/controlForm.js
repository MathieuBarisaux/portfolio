import checkMail from "../checkMail/checkMail";

const controlForm = (
  firstName,
  lastName,
  email,
  message,
  isUserConditionsChecked
) => {
  if ((firstName, lastName, email, message)) {
    if (isUserConditionsChecked === true) {
      if (firstName.trim().length >= 2 && lastName.trim().length >= 2) {
        if (checkMail(email)) {
          if (message.trim().length >= 5) {
            return true;
          } else {
            return "Votre message doit contenir au moins 5 caractères pour être valide.";
          }
        } else {
          return "Veuillez entrer une adresse email valide, afin que je puisse vous recontacter.";
        }
      } else {
        return "Votre prénom et votre nom doivent contenir au moins deux caratères pour être valide.";
      }
    } else {
      return "Veuillez cocher les conditions afin que je puisse répondre à votre message.";
    }
  } else {
    return "Veuillez remplir tous les champs pour pouvoir envoyer un message.";
  }
};

export default controlForm;
