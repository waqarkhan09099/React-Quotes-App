import classes from "./Layout.module.css";
import NavMenu from "./MainNavigation";

const Layout = (props) => {
  return (
    <>
      <NavMenu class={classes.navmenu} />
      <main className={classes.main}>{props.children}</main>
    </>
  );
};

export default Layout;
