import React from "react";
import team from "../../assets/image/team/team-1.jpg";
import classes from "./guardian.module.scss";

const Guardian = ({ teamMemberId }) => {
  return (
    <section className={classes.wrapper}>
      <div className={classes["image-wrapper"]}>
        <img src={team} alt="team" />
      </div>
      <div className={classes.content}>
        <h4>Kontakt:</h4>
        <span>lorem ipsum</span>
        <span>lorem@nieruchomości.pl</span>
        <span>555 666 999</span>
      </div>
    </section>
  );
};

export default Guardian;
