import React, { useEffect, useState, useContext } from "react";
import { useRouteLoaderData } from "react-router-dom";
import { getAllTeamMembers } from "../../lib/api";
import useHttp from "../../hooks/use-http";
import NoTeamFound from "../UI/NoTeamFound";
import LoadingSpinner from "../UI/LoadingSpinner/LoadingSpinner";
import classes from "./Items.module.scss";
import TeamMemberContext from "../../store/teamMembers-context";

import ItemsList from "./ItemsList";
const Items = () => {
  const { teamMembers } = useRouteLoaderData("team");
  /*   const { sendRequest, status, data, error } = useHttp(getAllTeamMembers, true);
  const ctx = useContext(TeamMemberContext);

  useEffect(() => {
    sendRequest();
  }, [sendRequest]);

  useEffect(() => {
    ctx.getTeamMembers(data);
  }, [data]);

  if (status === "pending") {
    return (
      <section className={classes.loading}>
        <LoadingSpinner />
      </section>
    );
  }
  if (error) {
    return <div>{error}</div>;
  }
  if (status === "completed" && (!data || data.length === 0)) {
    return <NoTeamFound />;
  } */
  return (
    <section className={classes.wrapper}>
      <ItemsList members={teamMembers} />
    </section>
  );
};

export default Items;
