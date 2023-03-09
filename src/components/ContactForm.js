import { useState } from "react";
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
    isInputTouchedState,
    reset,
  } = useInput((value) => isNotEmpty(value));
  const {
    valueState: emailvalue,
    inputIsValid: emailIsValid,
    hasInputError: hasEmailError,
    inputChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    isInputTouchedState: emailIsInputTouchedState,
    reset: emailReset,
  } = useInput((value) => isEmail(value));
  const [isSendEmailState, setIsSendEmailState] = useState(false);

  let isFormValid = false;
  let isTouched = false;

  let submitGreenInfo = false;

  if (isInputTouchedState || emailIsInputTouchedState) {
    isTouched = true;
  }
  if (inputIsValid && emailIsValid) {
    isFormValid = true;
  }

  if (isSendEmailState && !isTouched && !emailvalue && !valueState) {
    submitGreenInfo = "Dziekujemy wysłano pomyslnie";
  }

  const submitFormHandler = (e) => {
    e.preventDefault();
    setIsSendEmailState(false);
    //funkcje wysłania na serwer dostajesz w propszach nigny w form
    if (!isFormValid) {
      return;
    }
    const newObj = {
      email: emailvalue,
      message: valueState,
    };
    onSubmit(newObj).then((res) =>
      setIsSendEmailState(res.status === 200 ? true : false)
    );
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
        </div>
      </div>
      <div className={classes["form-actions"]}>
        <Button disabled={!isFormValid}>WYŚLIJ</Button>
      </div>
      <div className={classes.info}>
        <p className={classes.sucess}>{!!submitGreenInfo && submitGreenInfo}</p>
        <p className={classes.error}>
          {hasEmailError && (
            <>
              {" "}
              enter valid<span> email,</span>
            </>
          )}
          {hasInputError && (
            <>
              {" "}
              enter valid<span> name</span>
            </>
          )}
        </p>
      </div>
    </form>
  );
};

export default ContactForm;
