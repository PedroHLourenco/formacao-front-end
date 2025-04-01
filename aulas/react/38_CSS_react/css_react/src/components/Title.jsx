// aula 531 - css modules
import classes from "./Title.module.css";

const Title = () => {
  return <h1 className={classes.title}>My Title</h1>;
};

export default Title;
