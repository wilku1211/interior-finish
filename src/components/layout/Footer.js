import React from "react";
import classes from "./Footer.module.scss";
import Fb from "../../assets/image/svg/Fb";
import Instagram from "../../assets/image/svg/Instagram";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer>
      <div className={classes.header}>
        <h3 className={classes.h3}>Interior finishes</h3>
        <div className={classes.action}>
          <a href="/">
            <Fb />
          </a>
          <a href="/">
            <Instagram />
          </a>
        </div>
      </div>
      <ul className={classes.menu}>
        <li>
          <Link to="/offer">Oferty</Link>
        </li>
        <li>
          <Link to="/services">Usługi</Link>
        </li>
        <li>
          <Link to="/realization">Realizacje</Link>
        </li>
        <li>
          <Link to="/contact">Kontakt</Link>
        </li>
        <li>
          <Link to="/team">Zespół</Link>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
