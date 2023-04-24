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
          <a href="/" aria-label="Go to facebook page">
            <Fb />
          </a>
          <a href="/" aria-label="Go to instagram page">
            <Instagram />
          </a>
        </div>
      </div>
      <ul className={classes.menu}>
        <li>
          <Link to="/offer">Offer</Link>
        </li>
        <li>
          <Link to="/services">Services</Link>
        </li>
        <li>
          <Link to="/realization">Realization</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <Link to="/team">Team</Link>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
