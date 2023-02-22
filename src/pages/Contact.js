import React from "react";
import Heading from "../components/UI/Heading/Heading";
import classes from "./Contact.module.scss";
import Tel from "../assets/image/svg/Tel";
import ContactForm from "../components/ContactForm";

const Contact = () => {
  return (
    <section className={classes.wrapper}>
      <Heading title="Kontakt" isDecorated isFullHeight />

      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. In nemo dicta
        harum pariatur dignissimos nobis! Praesentium, veritatis..
      </p>

      <div className={classes.call}>
        <Tel />
        <span>Telefon: 777 888 999</span>
      </div>

      <ContactForm />
    </section>
  );
};

export default Contact;
