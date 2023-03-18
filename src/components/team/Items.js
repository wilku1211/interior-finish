import React, { useEffect, useState } from "react";
import { getAllTeamMembers } from "../../lib/api";
import useHttp from "../../hooks/use-http";
import NoTeamFound from "../UI/NoTeamFound";
import LoadingSpinner from "../UI/LoadingSpinner/LoadingSpinner";
import classes from "./Items.module.scss";

import ItemsList from "./ItemsList";
const Items = () => {
  const { sendRequest, status, data, error } = useHttp(getAllTeamMembers, true);

  useEffect(() => {
    sendRequest();
  }, [sendRequest]);

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
  }
  return (
    <section className={classes.wrapper}>
      <ItemsList members={data} />
    </section>
  );
};

export default Items;
