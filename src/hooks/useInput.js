import { useState } from "react";

const useInput = (validFunction) => {
  const [valueState, setValueState] = useState("");
  const [isInputTouchedState, setIsInputTouchedState] = useState(false);

  const inputIsValid = validFunction(valueState);
  const hasInputError = !inputIsValid && isInputTouchedState;
  const inputChangeHandler = (e) => {
    setValueState(e.target.value);
  };

  const inputBlurHandler = (e) => {
    setIsInputTouchedState(true);
  };

  const reset = () => {
    setValueState("");
    setIsInputTouchedState(false);
  };

  return {
    valueState,
    setIsInputTouchedState,
    isInputTouchedState,
    inputIsValid,
    hasInputError,
    inputChangeHandler,
    inputBlurHandler,
    reset,
  };
};

export default useInput;
