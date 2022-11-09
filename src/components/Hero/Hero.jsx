import CardArea from "../CardArea/CardArea";
import Search from "./components/Search/Search";
import style from "./Hero.module.scss";

const Hero = () => {
  return (
    <div className={style.hero}>
      <div className={style.heroBackground}>
      <div className={style.heroContainer}>
      <h2>Please Enter a Drug Name</h2>
        <div className={style.searchBackground}>          
          <Search />
        </div>
        <CardArea />
      </div>
      </div>
    </div>
  );
};

export default Hero;
