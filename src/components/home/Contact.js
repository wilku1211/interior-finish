import React from "react";
import ContactForm from "../ContactForm";
import Heading from "../UI/Heading/Heading";
import classes from "./Contact.module.scss";

const Contact = () => {
  return (
    <section>
      <Heading title={"Napisz do nas"} />
      <ContactForm />
    </section>
  );
};

export default Contact;
