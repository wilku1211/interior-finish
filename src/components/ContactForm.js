import useInput from "../hooks/useInput";
import classes from "./ContactForm.module.scss";
import Button from "./UI/Button/Button";

const isNotEmpty = (value) => value.trim() !== "";
const isEmail = (value) => value.includes("@");

const ContactForm = ({ onSubmit }) => {
  const {
    valueState,
    inputIsValid,
    hasInputError,
    inputChangeHandler,
    inputBlurHandler,
    reset,
  } = useInput((value) => isNotEmpty(value));
  const {
    valueState: emailvalue,
    inputIsValid: emailIsValid,
    hasInputError: hasEmailError,
    inputChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: emailReset,
  } = useInput((value) => isEmail(value));

  let isFormValid = false;

  if (inputIsValid && emailIsValid) {
    isFormValid = true;
  }

  const submitFormHandler = (e) => {
    e.preventDefault();
    //funkcje wysłania na serwer dostajesz w propszach nigny w form
    if (!isFormValid) {
      return;
    }
    const newObj = {
      name: "name",
    };
    //onSubmit(newObj)
    reset();
    emailReset();
  };

  return (
    <form onSubmit={submitFormHandler}>
      <div className="control-group">
        <div className={classes["form-control"]}>
          <input
            type="email"
            id="email"
            onChange={emailChangeHandler}
            onBlur={emailBlurHandler}
            value={emailvalue}
            placeholder="Adres e-mail"
          />
          {hasEmailError && <p>enter valid email</p>}
        </div>
        <div className={classes["form-control"]}>
          <textarea
            type="text"
            id="name"
            onChange={inputChangeHandler}
            onBlur={inputBlurHandler}
            value={valueState}
            placeholder={"Wiadomość"}
          />
          {hasInputError && <p>enter valid name</p>}
        </div>
      </div>
      <div className={classes["form-actions"]}>
        <Button disabled={!isFormValid}>WYŚLIJ</Button>
      </div>
    </form>
  );
};

export default ContactForm;
