import style from "./Navbar.module.scss";
import Link from "./components/Link/Link";
import { Medium } from "react-bootstrap-icons";
import Logo from "./components/Logo/Logo";

const Navbar = () => {
  return (
    <div className={style.navbar}>
      <Logo />
      <div className={style.navlinks}>
        <Link navName={"Home"} link={"/"} />
        <Link navName={"Drugs Price"} link={"drug-prices"} />
      </div>
      <a href="https://medium.com/code-tricks">
        <Medium className={style.icon} />
      </a>
    </div>
  );
};

export default Navbar;
