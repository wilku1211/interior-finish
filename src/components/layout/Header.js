import React, { useEffect, useState } from "react";

import Logo from "../../assets/image/svg/Logo";
import Hambuger from "../../assets/image/svg/Hambuger";
import classes from "./Header.module.scss";
import Navigation from "./Navigation";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const [isMobileOpenState, setisMobileOpenState] = useState(false);
  const { pathname } = useLocation();
  const openMenuHandler = () => setisMobileOpenState(true);
  const closeMenuHandler = () => setisMobileOpenState(false);

  useEffect(() => {
    closeMenuHandler();
  }, [pathname]);

  return (
    <header
      className={`${classes.header} ${
        isMobileOpenState && classes["mobile-open"]
      }`}
    >
      {isMobileOpenState && <Navigation onCloseMenu={closeMenuHandler} />}
      {!isMobileOpenState && (
        <div className={classes["close--menu"]}>
          <div>
            <Link to="/">
              <Logo />
            </Link>
          </div>
          <div onClick={openMenuHandler}>
            <Hambuger />
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
