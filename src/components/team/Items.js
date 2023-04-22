import React from "react";
import { useRouteLoaderData } from "react-router-dom";
import classes from "./Items.module.scss";

import ItemsList from "./ItemsList";
const Items = () => {
  const { teamMembers } = useRouteLoaderData("team");

  return (
    <section className={classes.wrapper}>
      <ItemsList members={teamMembers} />
    </section>
  );
};

export default Items;
