import { Medium, Twitter, Linkedin } from "react-bootstrap-icons";
import style from "./SocialMedia.module.scss";

const SocialMedia = () => {
  return (
    <div className={style.socialContainer}>
      <a href="https://medium.com/code-tricks">
        <Medium className={style.icon} />
      </a>
      <a href="https://medium.com/code-tricks">
        <Twitter className={style.icon} />
      </a>
      <a href="https://medium.com/code-tricks">
        <Linkedin className={style.icon} />
      </a>
    </div>
  );
};

export default SocialMedia;
