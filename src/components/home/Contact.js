import React from "react";
import ContactForm from "../ContactForm";
import Heading from "../UI/Heading/Heading";
import classes from "./Contact.module.scss";
import { sendEmail } from "../../utils/email";

const Contact = () => {
  const submitHandler = (obj) => sendEmail(obj);
  return (
    <section className={classes.wrapper}>
      <Heading title={"Napisz do nas"} />
      <ContactForm onSubmit={submitHandler} />
    </section>
  );
};

export default Contact;
