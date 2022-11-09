import style from "./Copyright.module.scss";

const Copyright = () => {
  return (
    <p className={style.copyright}>
      Designed By <a href="https://medium.com/code-tricks">CodeTricks</a> © {new Date().getFullYear()}
    </p>
  );
};

export default Copyright;
