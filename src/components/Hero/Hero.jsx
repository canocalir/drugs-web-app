import CardArea from "../CardArea/CardArea";
import Search from "./components/Search/Search";
import style from "./Hero.module.scss";

const Hero = () => {
  return (
    <div className={style.hero}>
      <div className={style.heroContainer}>
        <div className={style.searchBackground}>
          <Search />
        </div>
        <CardArea />
      </div>
    </div>
  );
};

export default Hero;
