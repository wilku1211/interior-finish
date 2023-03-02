import React from "react";
import Heading from "../UI/Heading/Heading";
import classes from "./AboutAs.module.scss";

const AboutUs = () => {
  return (
    <section className={classes.wrapper}>
      <div className={classes.header}>
        <Heading title={"Co mówiąo nas nasi klienci?"} isDecorated />
        <p>
          Bezkompromisowo wspieramy naszych klientów a ich satysfakcja jest dla
          nas najważniejszym celem.
        </p>
      </div>
      <div className={classes.comments}>
        <div className={classes.item}>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia
            qui iste doloribus similique odit ipsum vero est rerum placeat
            voluptas veritatis explicabo perferendis iure animi beatae, laborum,
            eaque fugiat consectetur
          </p>
          <span className={classes.caption}>adipisicing</span>
        </div>
        <div className={classes.item}>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia
            qui iste doloribus similique odit ipsum vero est rerum placeat
            voluptas veritatis explicabo perferendis iure animi beatae, laborum,
            eaque fugiat consectetur.
          </p>
          <span className={classes.caption}>consectetur</span>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
