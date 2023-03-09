import * as emailjs from "emailjs-com";

export const sendEmail = (obj) => {
  return emailjs
    .send(
      process.env.REACT_APP_EMAIL_JS_SERVICE_ID,
      process.env.REACT_APP_EMAIL_JS_TEMPLATE_ID,
      obj,
      process.env.REACT_APP_EMAIL_JS_USER_ID
    )
    .then((response) => response)
    .catch((er) => er);
};
