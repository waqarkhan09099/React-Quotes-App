import classes from "./MainNavigation.module.css";
import { NavLink } from "react-router-dom";

const MainNavigation = (props) => {
  return (
    <header className={`${classes.header} ${props.class} `}>
      <div className={classes.logo}>Quotes App</div>
      <nav className={classes.nav}>
        <ul>
          <li>
            <NavLink to="/quotes" activeClassName={classes.active}>
              Quotes
            </NavLink>
          </li>
          <li>
            <NavLink to="/newquotes" activeClassName={classes.active}>
              Add Quotes
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
