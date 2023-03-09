import Heading from "../components/UI/Heading/Heading";
import classes from "./Contact.module.scss";
import Tel from "../assets/image/svg/Tel";
import ContactForm from "../components/ContactForm";
import ContactImage from "../assets/image/contact/contact.jpg";
import { sendEmail } from "../utils/email";

const Contact = () => {
  const submitHandler = (obj) => sendEmail(obj);

  return (
    <section className={classes.wrapper}>
      <div className={classes.content}>
        <Heading title="Kontakt" isDecorated isFullHeight />

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. In nemo dicta
          harum pariatur dignissimos nobis! Praesentium, veritatis..
        </p>

        <div className={classes.call}>
          <Tel />
          <span>Telefon: 777 888 999</span>
        </div>

        <ContactForm onSubmit={submitHandler} />
      </div>
      <div className={classes["image-wrapper"]}>
        <img src={ContactImage} alt="ContactImage" />
      </div>
    </section>
  );
};

export default Contact;
