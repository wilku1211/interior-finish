import React from "react";
import Heading from "./../UI/Heading/Heading";
import classes from "./Items.module.scss";
import Tel from "../../assets/image/svg/Tel";
import Mail from "../../assets/image/svg/Mail";
import Team1 from "../../assets/image/team/team-1.jpg";
const Items = () => {
  return (
    <section>
      <ul className={classes.items}>
        <li className={classes.item}>
          <Heading title="Marta Adipisicing" isDecorated isFullHeight />
          <p>
            loremEiusmod velit in et esse id duis veniam deserunt culpa minim
            irure consectetur adipisicing. Amet magna ex nisi et ad dolore
            consequat aliquip proident magna pariatur mollit. Culpa eiusmod do
            dolore ad aliquip aute consectetur nulla eu labore incididunt.
          </p>
          <div className={classes.contact}>
            <div>
              <Mail /> <span>smt@gmail.com</span>
            </div>
            <div>
              <Tel /> <span>510 666 444</span>
            </div>
          </div>
          <div className={classes["img-wrapper"]}>
            <img src={Team1} alt="Team1" />
          </div>
        </li>
        <li className={classes.item}>
          <Heading title="Marta Adipisicing" isDecorated isFullHeight />
          <p>
            loremEiusmod velit in et esse id duis veniam deserunt culpa minim
            irure consectetur adipisicing. Amet magna ex nisi et ad dolore
            consequat aliquip proident magna pariatur mollit. Culpa eiusmod do
            dolore ad aliquip aute consectetur nulla eu labore incididunt.
          </p>
          <div className={classes.contact}>
            <div>
              <Mail /> <span>smt@gmail.com</span>
            </div>
            <div>
              <Tel /> <span>510 666 444</span>
            </div>
          </div>
          <div className={classes["img-wrapper"]}>
            <img src={Team1} alt="Team1" />
          </div>
        </li>
        <li className={classes.item}>
          <Heading title="Marta Adipisicing" isDecorated isFullHeight />
          <p>
            loremEiusmod velit in et esse id duis veniam deserunt culpa minim
            irure consectetur adipisicing. Amet magna ex nisi et ad dolore
            consequat aliquip proident magna pariatur mollit. Culpa eiusmod do
            dolore ad aliquip aute consectetur nulla eu labore incididunt.
          </p>
          <div className={classes.contact}>
            <div>
              <Mail /> <span>smt@gmail.com</span>
            </div>
            <div>
              <Tel /> <span>510 666 444</span>
            </div>
          </div>
          <div className={classes["img-wrapper"]}>
            <img src={Team1} alt="Team1" />
          </div>
        </li>
        <li className={classes.item}>
          <Heading title="Marta Adipisicing" isDecorated isFullHeight />
          <p>
            loremEiusmod velit in et esse id duis veniam deserunt culpa minim
            irure consectetur adipisicing. Amet magna ex nisi et ad dolore
            consequat aliquip proident magna pariatur mollit. Culpa eiusmod do
            dolore ad aliquip aute consectetur nulla eu labore incididunt.
          </p>
          <div className={classes.contact}>
            <div>
              <Mail /> <span>smt@gmail.com</span>
            </div>
            <div>
              <Tel /> <span>510 666 444</span>
            </div>
          </div>
          <div className={classes["img-wrapper"]}>
            <img src={Team1} alt="Team1" />
          </div>
        </li>
        <li className={classes.item}>
          <Heading title="Marta Adipisicing" isDecorated isFullHeight />
          <p>
            loremEiusmod velit in et esse id duis veniam deserunt culpa minim
            irure consectetur adipisicing. Amet magna ex nisi et ad dolore
            consequat aliquip proident magna pariatur mollit. Culpa eiusmod do
            dolore ad aliquip aute consectetur nulla eu labore incididunt.
          </p>
          <div className={classes.contact}>
            <div>
              <Mail /> <span>smt@gmail.com</span>
            </div>
            <div>
              <Tel /> <span>510 666 444</span>
            </div>
          </div>
          <div className={classes["img-wrapper"]}>
            <img src={Team1} alt="Team1" />
          </div>
        </li>
        <li className={classes.item}>
          <Heading title="Marta Adipisicing" isDecorated isFullHeight />
          <p>
            loremEiusmod velit in et esse id duis veniam deserunt culpa minim
            irure consectetur adipisicing. Amet magna ex nisi et ad dolore
            consequat aliquip proident magna pariatur mollit. Culpa eiusmod do
            dolore ad aliquip aute consectetur nulla eu labore incididunt.
          </p>
          <div className={classes.contact}>
            <div>
              <Mail /> <span>smt@gmail.com</span>
            </div>
            <div>
              <Tel /> <span>510 666 444</span>
            </div>
          </div>
          <div className={classes["img-wrapper"]}>
            <img src={Team1} alt="Team1" />
          </div>
        </li>
      </ul>
      ;
    </section>
  );
};

export default Items;
