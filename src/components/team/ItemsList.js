import React from "react";
import classes from "./Items.module.scss";
import Heading from "./../UI/Heading/Heading";
import Tel from "../../assets/image/svg/Tel";
import Mail from "../../assets/image/svg/Mail";
const ItemsList = ({ members }) => {
  return (
    <ul className={classes.items}>
      {members?.map((member) => (
        <li key={member.id} className={classes.item}>
          <div className={classes.content}>
            <div className={classes.header}>
              <Heading
                title={`${member.firstName} ${member.lastName}`}
                isDecorated
                isFullHeight
              />
              <span>{member.role}</span>
            </div>
            <p>{member.description}</p>
            <div className={classes.contact}>
              <div>
                <Mail /> <span>{member.email}</span>
              </div>
              <div>
                <Tel /> <span>{member.telephone}</span>
              </div>
            </div>
          </div>
          <div className={classes["img-wrapper"]}>
            <img src={member.image} alt="Team1" />
          </div>
        </li>
      ))}
    </ul>
  );
};

export default ItemsList;
