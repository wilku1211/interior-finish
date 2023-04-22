import React from "react";
import throttle from "lodash.throttle";
import { useEffect, useRef, useState } from "react";

import classes from "./cornerEffect.module.scss";
const CornerEffect = ({ className, children }) => {
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
    <div
      className={`${className} ${playState ? classes.playstate : ""}`}
      ref={itemRef}
    >
      {children}
    </div>
  );
};

export default CornerEffect;
