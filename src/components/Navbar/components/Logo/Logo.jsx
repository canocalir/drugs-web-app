import logo from "../../../../assets/images/cat-logo.jpg";
import style from './Logo.module.scss'

const Logo = () => {
  return (
    <a href="/">
      <img className={style.logo} src={logo} alt="" />
    </a>
  );
};

export default Logo;
