import style from "./Link.module.scss";

const Link = ({ link, navName }) => {
  return (
    <a className={style.link} href={link}>
      {navName}
    </a>
  );
};

export default Link;
