import React from "react";
import { Link } from "react-router-dom";
import Heading from "../UI/Heading/Heading";
import classes from "./Team.module.scss";
import TeamImage from "../../assets/image/index/team.png";
import Arrow from "../../assets/image/svg/Arrow";
const Team = () => {
  return (
    <section className={classes.wrapper}>
      <Heading title={"Poznaj nasz zespół"} />

      <Link>
        <span>Sprawdź, kim jesteśmy</span> <Arrow />
      </Link>
      <p>
        Dzięki doskonałej współpracy i przyjacielskiej atmosferze udało nam się
        stworzyć zespół dokosnały.
      </p>

      <div className={classes["image-wrapper"]}>
        <img src={TeamImage} alt="TeamImage" />
      </div>
    </section>
  );
};

export default Team;
