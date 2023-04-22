import React from "react";
import throttle from "lodash.throttle";
import { useEffect, useRef, useState } from "react";

import classes from "./TitleEffect.module.scss";
const TitleEffect = ({ className, children, isAnimation, isReverse }) => {
  const itemRef = useRef(null);
  const [playState, setPlayState] = useState(false);
  const handlePlayStateChange = throttle(() => {
    const { top } = itemRef.current.getBoundingClientRect();
    if (top < parseInt("400", 10)) {
      setPlayState(true);
    }
  }, 150);
  useEffect(() => {
    handlePlayStateChange();
    document.addEventListener("scroll", handlePlayStateChange);

    return () => {
      document.removeEventListener("scroll", handlePlayStateChange);
    };
  }, []);

  return (
    <h2
      className={`${className} ${
        isAnimation && playState
          ? isReverse
            ? classes[`playState-reverse`]
            : classes.playstate
          : ""
      }`}
      ref={itemRef}
    >
      {children}
    </h2>
  );
};

export default TitleEffect;
