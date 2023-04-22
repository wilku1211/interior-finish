import React, { useContext } from "react";
import TeamMemberContext from "../../store/teamMembers-context";

import classes from "./guardian.module.scss";

const Guardian = ({ teamMemberId }) => {
  const { teamMembers } = useContext(TeamMemberContext);

  const teamMember = teamMembers.find((member) => member.id === teamMemberId);
  return (
    <section className={classes.wrapper}>
      <div className={classes["image-wrapper"]}>
        <img src={teamMember?.image} alt="team" />
      </div>
      <div className={classes.content}>
        <h4>Kontakt:</h4>
        <span>{`${teamMember?.firstName} ${teamMember?.lastName}`}</span>
        <span>{teamMember?.email}</span>
        <span>{teamMember?.telephone}</span>
      </div>
    </section>
  );
};

export default Guardian;
