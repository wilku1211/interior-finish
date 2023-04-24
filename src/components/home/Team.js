import React from "react";
import { Link } from "react-router-dom";
import Heading from "../UI/Heading/Heading";
import classes from "./Team.module.scss";
//import TeamImage from "../../assets/image/index/team.png";
import TeamImage2 from "../../assets/image/index/team-2.jpg";
import Arrow from "../../assets/image/svg/Arrow";
import CornerEffect from "../UI/CornerEffect";
const Team = () => {
  return (
    <section className={classes.wrapper}>
      <div className={classes.header}>
        <div className={classes.content}>
          <Heading
            title={"Poznaj nasz zespół"}
            isDecorated
            isFullHeight
            isAnimation
          />

          <p>
            Dzięki doskonałej współpracy i przyjacielskiej atmosferze udało nam
            się stworzyć zespół dokosnały.
          </p>
          <Link to="team">
            <span>Sprawdź, kim jesteśmy</span> <Arrow />
          </Link>
        </div>
        <CornerEffect
          className={`${classes["image-wrapper"]} ${classes["image2"]}`}
        >
          <img src={TeamImage2} alt="TeamImage2" />
        </CornerEffect>
      </div>
      <CornerEffect
        className={`${classes["image-wrapper"]} ${classes["image1"]} ${classes["imgCont"]}`}
      >
        {/*      <img src={TeamImage} alt="TeamImage" /> */}
        <div className={classes.image}></div>
      </CornerEffect>
    </section>
  );
};

export default Team;
