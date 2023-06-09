import React from "react";
import classes from "./wideNavigation.module.scss";

import { NavLink } from "react-router-dom";
import Fb from "../../assets/image/svg/Fb";
import Instagram from "../../assets/image/svg/Instagram";

const WideNavigation = () => {
  return (
    <div className={classes.wrapper}>
      <ul className={classes.list}>
        <li>
          <NavLink
            to="offers"
            className={({ isActive }) =>
              isActive ? classes.active : undefined
            }
            end
          >
            Offers
          </NavLink>
        </li>
        <li>
          <NavLink
            to="realization"
            className={({ isActive }) =>
              isActive ? classes.active : undefined
            }
            end
          >
            Realization
          </NavLink>
        </li>
        <li>
          <NavLink
            to="team"
            className={({ isActive }) =>
              isActive ? classes.active : undefined
            }
            end
          >
            Team
          </NavLink>
        </li>
        <li>
          <NavLink
            to="services"
            className={({ isActive }) =>
              isActive ? classes.active : undefined
            }
            end
          >
            Services
          </NavLink>
        </li>
        <li>
          <NavLink
            to="contact"
            className={({ isActive }) =>
              isActive ? classes.active : undefined
            }
            end
          >
            Contact
          </NavLink>
        </li>
      </ul>
      <div className={classes.action}>
        <Fb />
        <Instagram />
      </div>
    </div>
  );
};

export default WideNavigation;
