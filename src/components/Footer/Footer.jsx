import Copyright from "./components/Copyright/Copyright";
import SocialMedia from "./components/SocialMedia/SocialMedia";
import style from "./Footer.module.scss";

const Footer = () => {
  return (
    <div className={style.footer}>
      <Copyright />
      <SocialMedia />
    </div>
  );
};

export default Footer;
