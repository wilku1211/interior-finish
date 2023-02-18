import React, { useEffect, useState } from "react";

import Logo from "../../assets/image/svg/Logo";
import Hambuger from "../../assets/image/svg/Hambuger";
import classes from "./Header.module.scss";
import Navigation from "./Navigation";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";

const Header = () => {
  const [athState, setPathState] = useState("/");
  const [isMobileOpenState, setisMobileOpenState] = useState(false);
  const { pathname } = useLocation();
  const openMenuHandler = () => setisMobileOpenState(true);
  const closeMenuHandler = () => setisMobileOpenState(false);

  useEffect(() => {
    closeMenuHandler();
  }, [pathname]);

  return (
    <header className={classes.header}>
      {isMobileOpenState && <Navigation onCloseMenu={closeMenuHandler} />}
      {console.log(pathname)}
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
