import controlForm from "../../controller/controlForm/controlForm";

// ** Dependencies **
import axios from "axios";

const submitContactForm = async (
  firstName,
  setFirstName,
  lastName,
  setLastName,
  email,
  setEmail,
  message,
  setMessage,
  isUserConditionsChecked,
  setIsUserConditionsChecked,
  setGlobalError,
  setIsLoading,
  setIsSendValidate
) => {
  setGlobalError("");
  setIsLoading(true);

  const checkSubmitForm = controlForm(
    firstName,
    lastName,
    email,
    message,
    isUserConditionsChecked
  );

  if (checkSubmitForm === true) {
    const data = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      message: message,
      isUserChecked: isUserConditionsChecked,
    };

    try {
      const callServer = await axios.post("/api/contact", {
        data,
      });

      if (callServer.status === 200) {
        setIsSendValidate(true);
        setFirstName("");
        setLastName("");
        setEmail("");
        setMessage("");
        setIsUserConditionsChecked(false);
      }
    } catch (error) {
      console.log(error);
      setGlobalError(error.response?.data?.message);
    }
  } else {
    setGlobalError(checkSubmitForm);
  }

  setIsLoading(false);
};

export default submitContactForm;
