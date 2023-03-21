import React, { useContext, useEffect } from "react";
import classes from "./lauout.module.scss";
import { Outlet } from "react-router-dom";
import { getAllTeamMembers } from "../../lib/api";
import { useLoaderData, defer } from "react-router-dom";
import TeamMemberContext from "../../store/teamMembers-context";
import Footer from "./Footer";
import Header from "./Header";
const Layout = () => {
  const { teamMembers } = useLoaderData();
  const ctx = useContext(TeamMemberContext);
  useEffect(() => {
    ctx.setTeamMembers(teamMembers);
    console.log("eee");
  }, []);

  return (
    <>
      <Header />
      <main className={classes["main-wrapper"]}>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Layout;

export async function loader() {
  return defer({
    teamMembers: await getAllTeamMembers(),
  });
}
